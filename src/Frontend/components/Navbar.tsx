import * as React from 'react'

export default (props: AuthProps) => {

    function getLinks() {

        const links:JSX.Element[] = [<a className="nav-item nav-link active" key="0" href="/">Home <span className="sr-only">(current)</span></a>]
        if(props.auth.isAuthenticated) {
            links.push(<a className="nav-item nav-link" key={links.length} href="/dashboard">Dashboard</a>)
            links.push(<a className="nav-item nav-link" key={links.length} href="/logout">Logout</a>)
        } else {
            links.push(<a className="nav-item nav-link" key={links.length} href="/login">Login</a>)
            links.push(<a className="nav-item nav-link" key={links.length} href="/signup">Signup</a>)
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
