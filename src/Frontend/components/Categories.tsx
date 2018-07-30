import * as React from 'react';

interface Props {}
interface State {
    posts: any[]
}


export default class Categories extends React.Component<Props, State, {}> {

    constructor(props: Props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentWillMount() {
        fetch('/getPostsFromCategory/General', { method: 'POST' })
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
            <ul className="list-group">
                {
                    this.state.posts.map((post, index) => {
                        return <li key={index} className="list-group-item">{post.title}</li>
                    })
                }
            </ul>

        )
    }
}