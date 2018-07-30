import * as React from 'react'
import * as Cookies from 'js-cookie'

export default () => {

    const lastUsername = Cookies.get('lastUsername')
    if(lastUsername) Cookies.remove('lastUsername', { path: '/login' })

    return (
        <React.Fragment>
        <h1>Login! ✅</h1>
        <form action="/login" method="post">
    
            <div className="form-group">
                <label htmlFor="form_username" className="required">Username</label>
                <input type="text" required={true} id="form_username" className="form-control" name="_username" defaultValue={ lastUsername } placeholder="username"  />
            </div>
    
            <div className="form-group">
                <label htmlFor="form_password" className="required">Password</label>
                <input type="password" required={true} id="form_password" className="form-control" name="_password" placeholder="password" />
            </div>
    
            <div className="form-group">
                <button className="btn-primary btn" type="submit">Login</button>
            </div>
    
        </form>
        </React.Fragment>
    )
}