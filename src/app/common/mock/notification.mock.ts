import { MediaKind } from '../enum/media_kind.enum';

export interface Notification {
    id: string;
    title: string;
    description: string;
    image: string | 'https://cdn.damascus-engineering.com/alexandria/user/1b4cc750-c551-4767-a232-e91b52e68fa0.jpeg?d=300x300';
    authorID: string;
    mediaID: string;
    kind: string | MediaKind.Video;
}

export const Notifications: Array<Notification> = [
    {
        id: 'KH1p7K6bvjuYCjthrmtos',
        title: 'Dross US just uploaded a video',
        description: 'The seven deadly sins explained for dummies',
        image: '',
        authorID: 'iI5R8RDYduL1p31q2tlnt',
        mediaID: 'M5KnBNtg4MqSQERtaxhlt',
        kind: MediaKind.Video
    },
    {
        id: 'dAwD9Wxz5uFVhDn6TMJDD',
        title: 'Bruno Chiellini just uploaded a podcast',
        description: 'Think and Grow Rich: The Paradox',
        image: '',
        authorID: 'X08Pf3vSk5N0yQXUOt1pB',
        mediaID: 'xItsQOHuFMpld05fmRVNn',
        kind: MediaKind.Podcast
    },
    {
        id: 'JBiZjSvmWoFiZmMYMhgZv',
        title: 'Dross US just uploaded a book',
        description: `Pluto's moon: Ysaak war`,
        image: '',
        authorID: 'iI5R8RDYduL1p31q2tlnt',
        mediaID: 'EueGFl58lSJxcuJ7S2bjP',
        kind: MediaKind.Book
    },
    {
        id: 'kBVOnBrFmugS2BjJUvDyD',
        title: 'Max Planck just uploaded a document',
        description: `Treatise on thermodynamics`,
        image: '',
        authorID: 'zlCRGJLwapfsWuM2cZ9au',
        mediaID: 'wCIzuhFi3MYTBnqgQnoma',
        kind: MediaKind.Doc
    }
];
