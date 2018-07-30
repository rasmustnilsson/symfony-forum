declare class Category {
    name: string
    description: string
    postCount: number
}

declare interface AuthProps {
    auth: {
        isAuthenticated: boolean
    }
}