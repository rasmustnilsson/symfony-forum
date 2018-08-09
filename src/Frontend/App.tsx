import * as React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import FrontPageCategories from './components/FrontPageCategories'
import Navbar from './components/Navbar'
import CategoryPage from './components/CategoryPage'
import PostPage from './containers/PostPage'
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
import CreatePostPage from './components/CreatePostPage'
import ProtectedRoute from './components/ProtectedRoute'

export default (props: AuthProps) => {
  return (
    <BrowserRouter>
      <React.Fragment>
      <Navbar auth={ props.auth } />
      <div className="container pt-4 mt-4">
        <Route exact={true} path="/" component={FrontPageCategories} />
        <Route exact={true} path="/login" component={Login} />
        <Route exact={true} path="/signup" component={Signup} />
        <ProtectedRoute auth={ props.auth } exact={true} path="/dashboard" protectedProp={ Dashboard } />
        <ProtectedRoute auth={ props.auth } exact={true} path="/create" protectedProp={ CreatePostPage } />
        <Route path="/category/:id" component={CategoryPage} />
        <Route path="/post/:id" component={PostPage} />
      </div>
      </React.Fragment>
    </BrowserRouter>
  )
}
