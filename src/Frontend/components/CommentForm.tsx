import * as React from 'react'

interface Props {
    postId: string
    addComment(comment: Commentable): void
}

export default class CommentForm extends React.Component<Props> {

    constructor(props: Props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e: any) {
        e.preventDefault()
        const form = new FormData(e.target)
        e.target.reset()
        fetch('/submitComment', {
            method: 'post',
            body: form
        })
        .then(response => response.json())
        .then(data => {
            this.props.addComment(data)
        })
    }

    render() {
        return (
            <form className="my-4" onSubmit={ this.handleSubmit }>
                <div className="form-group">
                    <label htmlFor="comment">New Comment:</label>
                    <textarea className="form-control" id="comment" rows={3} name="comment" ></textarea>
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
                <input type="hidden" name="post" value={ this.props.postId }/>
            </form>
        )
    }
}
