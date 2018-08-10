import { connect } from 'react-redux'
// import { State } from '../reducers'
import App from '../App'
import { setAuth } from '../actions/Auth'

const mapDispatchToProps = {
    setAuthPropsAction: setAuth
}

export default connect<any, any, any>(null,mapDispatchToProps)(App)