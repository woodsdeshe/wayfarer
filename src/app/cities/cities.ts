interface Cities {
    id: number;
    name: string;
    img: string;
    post: any[];
  }
  export const cities: Cities[] = [
    {
      id: 1,
      name: 'San Francisco',
      img: '../../assets/images/zanza.jpg',
      post: [
        {
          id: 1,
          title: 'Post 1',
          author: 'John Doe',
          description: 'this is the description for post 1!',
        },
        {
          id: 2,
          title: 'Post 2',
          author: 'John Doe',
          description: 'this is the description for post 2!',
        },
        {
          id: 3,
          title: 'Post 3',
          author: 'John Doe',
          description: 'this is the description for post 3!',
        },
        {
          id: 4,
          title: 'Post 4',
          author: 'John Doe',
          description: 'this is the description for post 1!',
        },
      ],
    },
    {
      id: 2,
      name: 'London',
      img: '../../assets/images/london.png',
      post: [
        {
          id: 1,
          title: 'Post 5',
          author: 'John Doe',
          description: 'this is the description for post 5!',
        },
        {
          id: 2,
          title: 'Post 6',
          author: 'John Doe',
          description: 'this is the description for post 6!',
        },
        {
          id: 3,
          title: 'Post 7',
          author: 'John Doe',
          description: 'this is the description for post 7!',
        },
        {
          id: 4,
          title: 'Post 8',
          author: 'John Doe',
          description: 'this is the description for post 18',
        },
      ],
    },
    {
      id: 3,
      name: 'Zanzibar',
      img: '../../assets/images/dares.png',
      post: [
        {
          id: 1,
          title: 'Food',
          author: 'John Doe',
          description: `Fisherman's Seafood & Grill.
              If you’re looking for fresh seafood this is the place to go! Every early morning before the tide comes in the fisherman catch fresh fish daily, and then severe it fresh daily.`
        },
  
        {
          id: 2,
          title: 'Stays',
          author: 'John Doe',
          description: `Zawadi is one of the best private villas in Zanzibar. With beautiful scenic views, and memories of a life time. Staying at Zawadi means that you are a quick drive away from nungwi beach. Nungwi beach is where you get the opportunity to swim, and feed large sea turtles!`
        },
        {
          id: 3,
          title: 'Things To Do',
          author: 'John Doe',
          description: `You can visit stone town! There is a lot of history in stone town. There is a beautiful historic museum that illustrates when and where the slave trade took place. In the museum they were able to keep the tunnels where they held the slaves until it was time for them to be traded.`
        }
      ],
    },
    {
      id: 4,
      name: 'Amsterdaam',
      img: '../../assets/images/amdam Medium.jpeg',
      post: [
        {
          title: 'Post 10',
          author: 'John Doe',
          description: 'this is the description for post 10!',
        },
        {
          title: 'Post 11',
          author: 'John Doe',
          description: 'this is the description for post 11!',
        },
      ],
    },
  ];
  