import * as React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import FrontPageCategories from './components/FrontPageCategories'
import Navbar from './containers/Navbar'
import CategoryPage from './components/CategoryPage'
import PostPage from './containers/PostPage'
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './containers/Dashboard'
import CreatePostPage from './components/CreatePostPage'
import ProtectedRoute from './components/ProtectedRoute'

interface Props {
  auth: AuthProps
  setAuthPropsAction(auth: AuthProps): void
}

export default class App extends React.Component<Props> {

  componentWillMount(): void {
    this.props.setAuthPropsAction(this.props.auth)
  }

  render() {
    return (
      <BrowserRouter>
      <React.Fragment>
      <Navbar />
      <div className="container pt-4 mt-4">
        <Route exact={true} path="/" component={FrontPageCategories} />
        <Route exact={true} path="/login" component={Login} />
        <Route exact={true} path="/signup" component={Signup} />
        <ProtectedRoute exact={true} auth={ this.props.auth } path="/dashboard" protectedProp={ Dashboard } />
        <ProtectedRoute exact={true} auth={ this.props.auth } path="/create" protectedProp={ CreatePostPage } />
        <Route path="/category/:id" component={CategoryPage} />
        <Route path="/post/:id" component={PostPage} />
      </div>
      </React.Fragment>
    </BrowserRouter>
    )
  }
}