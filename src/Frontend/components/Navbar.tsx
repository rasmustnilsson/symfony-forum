import * as React from 'react'
import { Link } from 'react-router-dom'


export default (props: AuthProps) => {

    function getLinks() {

        const links:JSX.Element[] = [<Link className="nav-item nav-link active" key="0" to="/">Home <span className="sr-only">(current)</span></Link>]
        if(props.auth.isAuthenticated) {
            links.push(<Link className="nav-item nav-link" key={links.length} to="/dashboard">Dashboard</Link>)
            links.push(<a className="nav-item nav-link" key={links.length} href="/logout">Logout</a>)
        } else {
            links.push(<Link className="nav-item nav-link" key={links.length} to="/login">Login</Link>)
            links.push(<Link className="nav-item nav-link" key={links.length} to="/signup">Signup</Link>)
        }

        return links
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    { getLinks() }
                </div>
            </div>
        </nav>
    )
}
