import { connect } from 'react-redux'
import { State } from '../reducers'
import Navbar from '../components/Navbar'


const mapStateToProps = (state: State) => ({
    ...state.auth
})

export default connect<any, any, any>(mapStateToProps, null)(Navbar)