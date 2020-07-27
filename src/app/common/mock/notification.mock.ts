import { MediaKind } from '../enum/media-kind.enum';

interface IDenormalizedAuthor {
    id: string;
    name: string;
}

export interface INotification {
    id: string;
    title: string;
    description: string;
    image?: string;
    author: IDenormalizedAuthor;
    mediaID: string;
    kind: string;
}

export const Notifications: Array<INotification> = [
    {
        id: 'ff6d0bb4-f686-4d17-a569-9ac4b8997c17',
        title: 'Dross US uploaded a video',
        description: 'The seven deadly sins explained for dummies',
        image: 'https://i.pinimg.com/736x/75/28/9e/75289e0c2f80400793e8859be5e416b9.jpg',
        author: {
            id: 'iI5R8RDYduL1p31q2tlnt',
            name: 'Dross US'
        },
        mediaID: 'zqEROBNEPHSvHQElHlZ6A',
        kind: MediaKind.Video
    },
    {
        id: '7a98b45a-32a6-4fef-99f3-45b022418bdc',
        title: 'Bruno Chiellini uploaded a podcast',
        description: 'Think and Grow Rich: The Paradox',
        image: 'https://m.media-amazon.com/images/I/51ncDBWm8ZL.jpg',
        author: {
            id: 'X08Pf3vSk5N0yQXUOt1pB',
            name: 'Bruno Chiellini'
        },
        mediaID: 'fwjAyDLTLTTGAojXqWEaB',
        kind: MediaKind.Podcast
    },
    {
        id: 'aeef9e85-6abf-467f-8330-5daafaca7a8a',
        title: 'Max Planck uploaded a book',
        description: `Treatise on thermodynamics`,
        image: 'https://www.amazon.com/images/I/41khrxV5d5L._SX310_BO1,204,203,200_.jpg',
        author: {
            id: 'zlCRGJLwapfsWuM2cZ9au',
            name: 'Max Planck'
        },
        mediaID: 'Kctqcecm2ZoIEsUf9ehrp',
        kind: MediaKind.Book
    }
];
