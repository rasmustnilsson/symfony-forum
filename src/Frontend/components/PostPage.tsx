import * as React from 'react'

import CommentForm from './CommentForm'
import { State as PostPageParams } from '../reducers/PostPageReducer'

interface Props extends ParamsProps, PostPageParams {
    setNoPost(): void
    addCommentAction(comment: Commentable): void
    loadPostInfo(post: Postable): void
}

export default class PostPage extends React.Component<Props, {}, {}> {
    
    constructor(props: Props) {
        super(props);

        this.addComment = this.addComment.bind(this)

        fetch(`/getPost/${this.props.match.params.id}`, { method: 'post' })
            .then(response => response.json())
            .then((data) => {
                if(data.err) return this.props.setNoPost()
                this.props.loadPostInfo(data)
            })
    }

    addComment(comment: Commentable) {
        this.props.addCommentAction(comment)
    }

    render() {
        if(!this.props.postExists) return <pre>post doesn't exist</pre>;
        else if(!this.props.postLoaded) return null
        else return (
            <div>
                <h1>{ this.props.title }</h1>
                <p>Owner: { this.props.owner }</p>
                <p>Date: { this.props.date.date }</p>
                <p>{ this.props.body }</p>
                <CommentForm addComment={ this.addComment } postId={ this.props.match.params.id } />
                <h3>Comments: </h3>
                <ul>
                    { this.props.comments.map((comment) => {
                            return <li key={ comment.id }><p>{ comment.owner }, { comment.date.date }</p><p> { comment.body }</p></li>
                        }).reverse() }
                </ul>
            </div>
        )
    }
}