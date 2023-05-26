interface Cities {
    id: number, 
    name: string,
    img: string, 
    post: any[]

}
export const cities: Cities[] = [
    {
        id: 1,
        name: 'San Francisco',
        img: '../../assets/images/zanza.jpg',
        post: [
            {   "id":1,
                "title": "Post 1", 
                "description": "this is the description for post 1!"}, 
            {   "id":2,
                "title": "Post 2", 
            "description": "this is the description for post 2!"}, 
            {   "id":3,
                "title": "Post 3", 
            "description": "this is the description for post 3!"}, 
            {   "id":4,
                "title": "Post 4", 
            "description": "this is the description for post 1!"}, 
        ]
    },
    {
        id: 2,
        name: 'London',
        img: '../../assets/images/london.png',
        post: [
            {   "id": 1,
                "title": "Post 5", 
            "description": "this is the description for post 5!"}, 
            {   "id": 2, 
                "title": "Post 6", 
            "description": "this is the description for post 6!"}, 
            {   "id": 3,
                "title": "Post 7", 
            "description": "this is the description for post 7!"}, 
            {   "id": 4,
                "title": "Post 8", 
            "description": "this is the description for post 18"}, 
        ]
    }, 
    {
        id: 3,
        name: 'Dar es Salaam',
        img: '../../assets/images/dares.png',
        post: [
            {"title": "Post 9", 
            "description": "this is the description for post 9!"}
        ]
    }, 
    {
        id: 4,
        name: 'Amsterdaam',
        img: '../../assets/images/amdam Medium.jpeg',
        post: [
            {"title": "Post 10", 
            "description": "this is the description for post 10!"}, 
            {"title": "Post 11", 
            "description": "this is the description for post 11!"}
        ]
    }

]