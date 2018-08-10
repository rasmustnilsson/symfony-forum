import { connect } from 'react-redux'
import { State } from '../reducers'
import PostPage from '../components/PostPage'
import { AddComment, loadPostInfo, NoPost } from '../actions/PostPage'

const mapStateToProps = (state: State) => ({
    ...state.postPage
})

const mapDispatchToProps = {
    addCommentAction: AddComment,
    loadPostInfo: loadPostInfo,
    setNoPost: NoPost,
}

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(PostPage)