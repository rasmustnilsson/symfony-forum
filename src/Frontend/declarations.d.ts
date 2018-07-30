declare interface AuthProps {
    auth: {
        isAuthenticated: boolean
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