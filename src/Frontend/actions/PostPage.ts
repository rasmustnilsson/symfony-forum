export enum ActionTypes {
    ADD_COMMENT = '[Post] ADD_COMMENT',
    LOAD_POST_INFO = '[Post] LOAD_POST_INFO',
    NO_POST = '[Post] NO_POST',
}


export interface addCommentAction {
    type: ActionTypes.ADD_COMMENT,
    payload: Commentable
}


export interface loadPostInfoAction  {
    type: ActionTypes.LOAD_POST_INFO,
    payload: Postable
}

export interface NoPostAction  {
    type: ActionTypes.NO_POST,
}


export function AddComment(comment: Commentable): addCommentAction {
    return {
        type: ActionTypes.ADD_COMMENT,
        payload: comment
    }
}

export function loadPostInfo(post: Postable): loadPostInfoAction {
    return {
        type: ActionTypes.LOAD_POST_INFO,
        payload: { ...post }
    }
}

export function NoPost(): NoPostAction {
    return { type: ActionTypes.NO_POST }
}

export type Action = addCommentAction | loadPostInfoAction | NoPostAction