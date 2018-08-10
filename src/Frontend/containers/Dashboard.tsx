import { connect } from 'react-redux'
import { State } from '../reducers'
import Dashboard from '../components/Dashboard'

const mapStateToProps = (state: State) => ({
    ...state.auth
})

export default connect<any, any, any>(mapStateToProps, null)(Dashboard)