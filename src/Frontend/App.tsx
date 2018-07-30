import * as React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import FrontPageCategories from './components/FrontPageCategories'
import Navbar from './components/Navbar'
import Categories from './components/Categories'
import Login from './components/Login'
import Signup from './components/Signup'

export default (props: AuthProps) => {
  return (
    <BrowserRouter>
        <React.Fragment>
        <Navbar auth={ props.auth } />
        <div className="container pt-4 mt-4">
          <Route exact={true} path="/" component={FrontPageCategories}/>
          <Route exact={true} path="/login" component={Login}/>
          <Route exact={true} path="/signup" component={Signup}/>
          <Route path="/category" component={Categories}/>
        </div>
        </React.Fragment>
      </BrowserRouter>
  )
}
