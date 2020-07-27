import { MediaKind } from '../enum/media_kind.enum';

export interface Ad {
    id: string;
    title: string;
    description?: string;
    kind: string | MediaKind.Video;
    image: string | 'https://cdn.damascus-engineering.com/alexandria/default/ad.png';
}

export const Ads: Array<Ad> = [
    {
        id: 'CvI3g7chm3M6mOovo3gYZ',
        title: 'The Cold War',
        description: 'Dive into the space race.',
        kind: MediaKind.Video,
        image: 'https://images.unsplash.com/photo-1457979406492-d1e6b97f3f55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    },
    {
        id: 'YZm8ggeY3G77J6rJXGSsL',
        title: 'Learn Astrophysics',
        description: 'Check out the top authors.',
        kind: MediaKind.Book,
        image: 'https://images.unsplash.com/photo-1579532040113-c94c4a38a1e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=516&q=80'
    },
    {
        id: 'OEtmQCPHvLa4GmVM7JAQZ',
        title: 'Renaissance 101',
        description: 'Da Vinci, Michelangelo and more.',
        kind: MediaKind.Podcast,
        image: 'https://images.unsplash.com/photo-1560579210-69248380602a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80'
    },
    {
        id: '5r6RRQYRyNGnCk328w70v',
        title: 'Quantum Physics',
        description: 'Unusual behaviors and much fun.',
        kind: MediaKind.Podcast,
        image: 'https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1237&q=80'
    }
];
