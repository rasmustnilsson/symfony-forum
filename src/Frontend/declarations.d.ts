declare interface AuthProps {
    auth: {
        isAuthenticated: boolean
        user: {
            username: string,
            numberOfPosts: number
            numberOfComments: number
            roles: string[]
        }
    }
}

declare interface Categoryable {
    name: string
    description: string
    postCount?: number
}

declare interface ParamsProps {
    match: {
        params: {
            id: string
        }
    }
}

declare interface Commentable {
    owner: string
    body: string
    date: any
    id: string
}

declare interface Postable {
    postExists: boolean
    postLoaded: boolean
    id: string
    title: string
    date: any
    owner: string
    body: string
    categories: Categoryable[]
}