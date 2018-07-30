import * as React from 'react';
import { Link } from 'react-router-dom'

interface State {
    posts: any[]
}


export default class CategoryPage extends React.Component<ParamsProps, State, {}> {

    constructor(props: ParamsProps) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentWillMount() {
        fetch(`/getPostsFromCategory/${this.props.match.params.id}`, { method: 'POST' })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    ...this.state,
                    posts: data
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <React.Fragment>
            <h1>{ this.props.match.params.id }</h1>

            <ul className="list-group">
                {
                    this.state.posts.map((post, index) => {
                        return <li key={index} className="list-group-item"><Link to={'/post/' + post.id}>{post.title}</Link></li>
                    })
                }
            </ul>
            </React.Fragment>
        )
    }
}