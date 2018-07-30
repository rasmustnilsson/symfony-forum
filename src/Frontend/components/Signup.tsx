import * as React from 'react'
import * as Cookies from 'js-cookie'

export default () => {

    const msg = <pre>{ Cookies.get('signup-error') }</pre>
    if(msg) Cookies.remove('signup-error', { path: '/signup' })
    const lastUsername = Cookies.get('lastUsername')
    if(lastUsername) Cookies.remove('lastUsername', { path: '/signup' })

    return (
        <React.Fragment>
        { msg }
        <h1>Sign up! ✅</h1>
        <form action="/signup" method="post">
            <div className="form-group">
                <label htmlFor="form_username" className="required">Username</label>
                <input type="text" required={true} id="form_username" className="form-control" defaultValue={ lastUsername } name="_username" placeholder="username"  />
            </div>

            <div className="form-group">
                <label htmlFor="form_password" className="required">Password</label>
                <input type="password" id="form_password" className="form-control" name="_password" placeholder="password" />
            </div>

            <div className="form-group">
                <button className="btn-primary btn" type="submit">Signup</button>
            </div>

        </form>
        </React.Fragment>
    )
}
