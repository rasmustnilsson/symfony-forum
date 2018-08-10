import { Action, ActionTypes } from '../actions/Auth'

export interface State extends AuthProps { }

export const initialState: State = {
    isAuthenticated: false,
    user: {
        username: '',
        numberOfPosts: 0,
        numberOfComments: 0,
        roles: [],
    }
}

export function reducer(state: State = initialState, action: Action) {
    switch(action.type) {

        case ActionTypes.SET_AUTH: {
            return action.payload
        }

        default:
            return state
    }
}