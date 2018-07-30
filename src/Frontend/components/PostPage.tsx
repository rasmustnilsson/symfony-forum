import * as React from 'react'

import { Post } from '../classes'

interface State {
    post: Post
}

export default class PostPage extends React.Component<ParamsProps, State, {}> {
    
    constructor(props: ParamsProps) {
        super(props);

        this.state = {
            post: new Post()
        }

        fetch(`/getPost/${this.props.match.params.id}`, { method: 'post' })
            .then(response => response.json())
            .then(data => {
                this.setState({ post: data })
            }) 
    }

    render() {
        return (
            <div>
                <h1>{ this.state.post.title }</h1>
                <p>Owner: { this.state.post.owner }</p>
                <p>Date: { this.state.post.date.date }</p>
                <p>{ this.state.post.body }</p>
            </div>
        )
    }
}