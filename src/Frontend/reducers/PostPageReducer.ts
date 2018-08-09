import { Action, ActionTypes } from '../actions/PostPage'

export interface State extends Postable {
    comments: Commentable[]
}

export const initialState: State = {
    postExists: true,
    postLoaded: false,
    id: '',
    owner: '',
    title: '',
    categories: [],
    body: '',
    date: {},
    comments: []
}

export function reducer(state: State = initialState, action: Action) {
    switch(action.type) {

        case ActionTypes.ADD_COMMENT:
            return {
                ...state,
                comments: state.comments.concat(action.payload)
            }

        case ActionTypes.LOAD_POST_INFO:
            return {
                ...state,
                ...action.payload,
                postLoaded: true,
            }

        case ActionTypes.NO_POST:
            return {
                ...state,
                postExists: false,
            }

        default:
            return state
    }
}