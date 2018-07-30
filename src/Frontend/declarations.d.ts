declare interface AuthProps {
    auth: {
        isAuthenticated: boolean
        user: {
            username: string,
            numberOfPosts: number
            numberOfComments: number
            roles: Array<string>
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