import * as React from 'react'

import { Post, Comment } from '../classes'
import CommentForm from './CommentForm'


interface State {
    postId: string
    post: Post
    postExists: boolean
    postLoaded: boolean
}

export default class PostPage extends React.Component<ParamsProps, State, {}> {
    
    constructor(props: ParamsProps) {
        super(props);

        this.state = {
            postId: this.props.match.params.id,
            postExists: true,
            postLoaded: false,
            post: new Post()
        }

        this.addComment = this.addComment.bind(this)

        fetch(`/getPost/${this.state.postId}`, { method: 'post' })
            .then(response => response.json())
            .then(data => {
                if(data.err) return this.setState({ ...this.state, postExists: false })
                this.setState({ post: data, postLoaded: true })
            }) 
    }

    addComment(comment: string, user: string, date: object) {

        const post = this.state.post
        post.comments.push({ body: comment, owner: user, date: date })

        this.setState({ post: post })

    }

    render() {
        if(!this.state.postExists) return <pre>post doesn't exist</pre>;
        else if(!this.state.postLoaded) return null
        else return (
            <div>
                <h1>{ this.state.post.title }</h1>
                <p>Owner: { this.state.post.owner }</p>
                <p>Date: { this.state.post.date.date }</p>
                <p>{ this.state.post.body }</p>
                <CommentForm onchange={ this.addComment } postId={ this.props.match.params.id } />
                <h3>Comments: </h3>
                <ul>
                    {
                        this.state.post.comments.map((comment, index) => {
                            return <li key={ index }><p>{ comment.owner }</p><p> { comment.body }</p></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}