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
    img: '../../assets/images/mericaflag.png',
    post: [
      {
        id: 1,
        title: 'Stays',
        author: 'John Doe',
        description:
          'Alila Marea embodies the soul of California beach culture, just steps from six miles of sun-drenched sand and the bustling community of Encinitas. ',
      },
      {
        id: 2,
        title: 'Stays',
        author: 'John Doe',
        description:
          'THE RITZ-CARLTON SAN FRANCISCO,Located in a 1909 Nob Hill landmark, the property is within walking distance to Union Square shopping, the Ferry Building and the Financial District.',
      },
      {
        id: 3,
        title: 'Stays',
        author: 'John Doe',
        description: ' Palace Hotel, A Luxury Collection Hotel, San Francisco',
      },
      {
        id: 4,
        title: 'Stays',
        author: 'John Doe',
        description:
          'Centrally located in downtown San Francisco, the new Four Seasons Hotel San Francisco at Embarcadero is within walking distance of many of the city’s major attractions (including nearby Chinatown). You’ll also be treated to panoramic views from all refreshed guest rooms. ',
      },
    ],
  },
  {
    id: 2,
    name: 'London',
    img: '../../assets/images/londonflag.png',
    post: [
      {
        id: 1,
        title: 'Food',
        author: 'John Doe',
        description:
          'Pierre Hermé Paris Covent Garden! Is a gorgeous shops that is known for their beautiful macarons. The decor inside the macaron shop is so elegant! It is a perfect place to get fun pictures! ',
      },
      {
        id: 2,
        title: 'Stays',
        author: 'John Doe',
        description:
          'The Waldorf Hilton, London! A luxury staple in London minutes away from all the tourist attractions ',
      },
    ],
  },
  {
    id: 3,
    name: 'Zanzibar',
    img: '../../assets/images/flagzanny.png',
    post: [
      {
        id: 1,
        title: 'Food',
        author: 'John Doe',
        description: `Fisherman's Seafood & Grill.
              If you’re looking for fresh seafood this is the place to go! Every early morning before the tide comes in the fisherman catch fresh fish daily, and then severe it fresh daily.`,
      },

      {
        id: 2,
        title: 'Stays',
        author: 'John Doe',
        description: `Zawadi is one of the best private villas in Zanzibar. With beautiful scenic views, and memories of a life time. Staying at Zawadi means that you are a quick drive away from nungwi beach. Nungwi beach is where you get the opportunity to swim, and feed large sea turtles!`,
      },
      {
        id: 3,
        title: 'Things To Do',
        author: 'John Doe',
        description: `You can visit stone town! There is a lot of history in stone town. There is a beautiful historic museum that illustrates when and where the slave trade took place. In the museum they were able to keep the tunnels where they held the slaves until it was time for them to be traded.`,
      },
    ],
  },
  {
    id: 4,
    name: 'Amsterdaam',
    img: '../../assets/images/amflag.png',
    post: [
      {
        id: 1,
        title: 'Stays',
        author: 'John Doe',
        description:
          'Hotel TwentySeven. The Dam Square, overlooking the eminent monument and the Royal Palace. Not a single detail has gone unnoticed',
      },
      {
        id: 2,
        title: 'Food',
        author: 'John Doe',
        description: 'Restaurant Klein BREDA, known for their cozy feel, and comforting food',
      },
    ],
  },
];
