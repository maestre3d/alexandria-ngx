export interface IAd {
  id: string;
  title: string;
  description ?: string;
  image ?: string;
  authorID: string;
  // Use category's ID
  categories: Array < string > ;
  // Use ISO 2-digit country code
  country: string;
  // Use ISO 2-digit lang code
  lang: string;
  createTime: Date;
  updateTime: Date;
}

const now = new Date();

export const Ads: Array < IAd > = [{
    id: 'CvI3g7chm3M6mOovo3gYZ',
    title: 'The Cold War',
    description: 'Dive into the space race.',
    image: 'https://images.unsplash.com/photo-1457979406492-d1e6b97f3f55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    // Bruno Chiellini
    authorID: 'X08Pf3vSk5N0yQXUOt1pB',
    // History
    categories: ['c45f07bc-bf46-416e-88ce-2a4827393222'],
    country: 'us',
    lang: 'en',
    createTime: now,
    updateTime: now
  },
  {
    id: 'YZm8ggeY3G77J6rJXGSsL',
    title: 'Learn Astrophysics',
    description: 'Check out the top authors.',
    image: 'https://images.unsplash.com/photo-1579532040113-c94c4a38a1e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=516&q=80',
    // Schrodinger
    authorID: 'GusZWL9VVbx1pVpepx4Cy',
    // History, Quantum Physics
    categories: ['c45f07bc-bf46-416e-88ce-2a4827393222', '2f096cf0-6cc3-4e01-a7fc-fd8095e597f9'],
    country: 'us',
    lang: 'en',
    createTime: now,
    updateTime: now
  },
  {
    id: 'OEtmQCPHvLa4GmVM7JAQZ',
    title: 'Renaissance 101',
    description: 'Da Vinci, Michelangelo and more.',
    image: 'https://images.unsplash.com/photo-1560579210-69248380602a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
    // Dross US
    authorID: 'iI5R8RDYduL1p31q2tlnt',
    // Art, History
    categories: ['0b248f8f-9541-493c-ab52-bc35ec50d152', 'c45f07bc-bf46-416e-88ce-2a4827393222'],
    country: 'us',
    lang: 'en',
    createTime: now,
    updateTime: now
  },
  {
    id: '5r6RRQYRyNGnCk328w70v',
    title: 'Quantum Physics',
    description: 'Unusual behaviors and much fun.',
    image: 'https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1237&q=80',
    // Quantum Duderino
    authorID: 'XrtpNzixu8jOHK0kBkRTU',
    // Quantum Physics
    categories: ['2f096cf0-6cc3-4e01-a7fc-fd8095e597f9'],
    country: 'us',
    lang: 'en',
    createTime: now,
    updateTime: now
  }
];
