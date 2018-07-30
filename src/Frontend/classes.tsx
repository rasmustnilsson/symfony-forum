export class Comment {
    owner: string = ''
    body: string = ''
    date: any = ''
}

export class Category {
    name: string
    description: string
    postCount?: number
}

export class Post {
    id: number = 0
    title: string = ''
    body: string = ''
    owner: string = ''
    date: any = ''
    categories: Category[] = []
    comments: Comment[] = []
}