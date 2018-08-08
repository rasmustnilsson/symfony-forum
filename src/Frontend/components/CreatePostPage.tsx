import * as React from 'react'
import { Category } from '../classes'
import { Redirect } from 'react-router-dom'

interface State {
  categories: Category[],
  isPosted: boolean
  postId: number

}

export default class CreatePostPage extends React.Component<{}, State> {

  constructor(props: any) {
    super(props)

    this.state = {
      categories: [],
      isPosted: false,
      postId: null,
    }

    this.handleSubmit = this.handleSubmit.bind(this)

    fetch('/getCategoryNames', {
      method: 'post'
    })
    .then(res =>res.json())
    .then(data => this.setState({ categories: data }))
    .catch(err => { console.log( err )})
  }

  handleSubmit(e: any) {
    e.preventDefault();

    fetch('/createPost', {
      method: 'post',
      body: new FormData(e.target)
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        isPosted: data.id != null,
        postId: data.id
      })
    })

  }

  render() {

    if(this.state.isPosted) return <Redirect to={ `/post/${this.state.postId }`} />

    return (
      <div>
        <h1>Create Post</h1>
        <form action="/createPost" method="post" onSubmit={ this.handleSubmit }>
        
        <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" name="title" id="title" placeholder="Title..."/>
            <small className="form-text text-muted">Title of the post</small>
        </div>
        <div className="form-group">
        {
          this.state.categories.map((category, index) => {
            return (
              <div className="form-check form-check-inline" key={ index }>
                  <input className="form-check-input" type="radio" id={ category.name } name="category" value={ category.name } defaultChecked={ category.name === this.state.categories[0].name } />
                  <label className="form-check-label" htmlFor={ category.name } >{ category.name }</label>
              </div>
            )
          })
        }
        </div>
        <div className="form-group">
            <label htmlFor="body">Body:</label>
            <textarea className="form-control" id="body" rows={3} name="body" ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}
