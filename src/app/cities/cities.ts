interface Cities {
    id: number, 
    name: string,
    img: string, 
    post: string[]

}
export const cities: Cities[] = [
    {
        id: 1,
        name: 'San Francisco',
        img: 'imagepath',
        post: ["post1"]
    },
    {
        id: 2,
        name: 'London',
        img: 'imagepath',
        post: ["post2", "post3"]
    }, 
    {
        id: 3,
        name: 'Dar es Salaam',
        img: 'imagepath',
        post: ["post4", "post5","post5"]
    }, 
    {
        id: 4,
        name: 'Amsterdaam',
        img: 'imagepath',
        post: ["post4", "post5"]
    }

]