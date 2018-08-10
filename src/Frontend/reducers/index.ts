import { combineReducers } from 'redux'

import * as fromPostPage from './PostPageReducer'
import * as fromAuth from './AuthReducer'

export interface State {
    postPage: fromPostPage.State
    auth: fromAuth.State
}

export const initialState: State = {
    postPage: fromPostPage.initialState,
    auth: fromAuth.initialState
}

export const reducer = combineReducers<State>({
    postPage: fromPostPage.reducer,
    auth: fromAuth.reducer
})