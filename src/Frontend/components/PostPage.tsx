import * as React from 'react'

import { Post } from '../classes'

interface State {
    post: Post
    postExists: boolean
    postLoaded: boolean
}

export default class PostPage extends React.Component<ParamsProps, State, {}> {
    
    constructor(props: ParamsProps) {
        super(props);

        this.state = {
            postExists: true,
            postLoaded: false,
            post: new Post()
        }

        fetch(`/getPost/${this.props.match.params.id}`, { method: 'post' })
            .then(response => response.json())
            .then(data => {
                if(data.err) return this.setState({ ...this.state, postExists: false })
                this.setState({ ...this.state, post: data, postLoaded: true })
            }) 
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