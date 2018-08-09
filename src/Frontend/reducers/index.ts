import { combineReducers } from 'redux'

import * as fromPostPage from './PostPageReducer'

export interface State {
    postPage: fromPostPage.State
}

export const initialState: State = {
    postPage: fromPostPage.initialState
}

export const reducer = combineReducers<State>({
    postPage: fromPostPage.reducer
})