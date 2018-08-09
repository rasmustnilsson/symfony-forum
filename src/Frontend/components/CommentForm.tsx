import * as React from 'react'

interface Props {
    postId: string
    onchange(comment: string, user: string, date: object): void;
}

export default class CommentForm extends React.Component<Props> {

    constructor(props: Props) {
        super(props);
        
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e: any) {
        e.preventDefault()
        fetch('/submitComment', {
            method: 'post',
            body: new FormData(e.target)
        })
        .then(response => response.json())
        .then(data => {
            this.props.onchange(data.comment, data.user, data.date)
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
