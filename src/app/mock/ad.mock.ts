import { IAd } from '@alexandria/domain/entity/ad.entity';
import { AdKind } from '@alexandria/enum/ad-kind.enum';

const now = new Date();

export const Ads: Array < IAd > = [{
    id: 'CvI3g7chm3M6mOovo3gYZ',
    title: 'The Cold War',
    description: 'Dive into the space race.',
    image: 'https://images.unsplash.com/photo-1457979406492-d1e6b97f3f55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    // Bruno Chiellini
    aggregateID: 'X08Pf3vSk5N0yQXUOt1pB',
    kind: AdKind.Author,
    // History
    categories: ['c45f07bc-bf46-416e-88ce-2a4827393222'],
    region: 'us',
    lang: 'en',
    createTime: now,
    updateTime: now
  },
  {
    id: 'YZm8ggeY3G77J6rJXGSsL',
    title: 'Learn Astrophysics',
    description: 'Check out the top author.',
    image: 'https://images.unsplash.com/photo-1579532040113-c94c4a38a1e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=516&q=80',
    // Schrodinger
    aggregateID: 'GusZWL9VVbx1pVpepx4Cy',
    kind: AdKind.Author,
    // History, Quantum Physics
    categories: ['c45f07bc-bf46-416e-88ce-2a4827393222', '2f096cf0-6cc3-4e01-a7fc-fd8095e597f9'],
    region: 'us',
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
    aggregateID: 'iI5R8RDYduL1p31q2tlnt',
    kind: AdKind.Author,
    // Art, History
    categories: ['0b248f8f-9541-493c-ab52-bc35ec50d152', 'c45f07bc-bf46-416e-88ce-2a4827393222'],
    region: 'us',
    lang: 'en',
    createTime: now,
    updateTime: now
  },
  {
    id: 'toxk35LoyIFtS4TVs2AIY',
    title: 'General Relativity',
    description: 'How gravity influence the universe.',
    image: 'https://i.pinimg.com/originals/b7/fd/14/b7fd14ea8230eea29e957c38bb812fcd.jpg',
    // Albert Einstein
    aggregateID: 'H70Ou7X1KYOmmtquoXpTT',
    kind: AdKind.Author,
    // Quantum Physics
    categories: ['2f096cf0-6cc3-4e01-a7fc-fd8095e597f9'],
    region: 'us',
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
    aggregateID: 'XrtpNzixu8jOHK0kBkRTU',
    kind: AdKind.Author,
    // Quantum Physics
    categories: ['2f096cf0-6cc3-4e01-a7fc-fd8095e597f9'],
    region: 'us',
    lang: 'en',
    createTime: now,
    updateTime: now
  }
];
