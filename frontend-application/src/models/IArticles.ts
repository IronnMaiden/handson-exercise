export default interface IArticles {
    id: number,
    author: string,
    
    title: string,
    abstract: string,
    body: string,
    imageUrl:{
        url: string,
        createdAt: Date

    },
    
    comments: {
        commenter: string,
        title: string,
        comment: string,
        createdAt:Date
    }
    
}