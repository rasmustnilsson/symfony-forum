export enum ActionTypes {
    SET_AUTH = '[AUTH] SET_AUTH'
}


export interface setAuthAction {
    type: ActionTypes.SET_AUTH,
    payload: AuthProps
}



export function setAuth(auth: AuthProps): setAuthAction {
    return {
        type: ActionTypes.SET_AUTH,
        payload: auth
    }
}

export type Action = setAuthAction