import * as React from 'react'

export default () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="{{ path('dashboard') }}">Dashboard</a>
                        <a className="nav-item nav-link" href="{{ path('logout') }}">Logout</a>
                        <a className="nav-item nav-link" href="{{ path('login') }}">Login</a>
                        <a className="nav-item nav-link" href="{{ path('signup') }}">Signup</a>
                    </div>
                </div>
            </nav>
  )
}
