import { MediaKind } from '@alexandria/enum/media-kind.enum';
import { INotification } from '@alexandria/domain/entity/notification.entity';

const now = new Date();

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
        kind: MediaKind.Video,
        pubishTime: now
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
        kind: MediaKind.Podcast,
        pubishTime: now
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
        kind: MediaKind.Book,
        pubishTime: now
    },
    {
        id: '70ba0354-3682-4877-8ef8-4995a7a59513',
        title: 'Erwin Schrödinger uploaded a book',
        description: `Statistical Thermodynamics`,
        image: 'https://www.amazon.com/images/I/41twAZJ+jmL._SX322_BO1,204,203,200_.jpg',
        author: {
            id: 'GusZWL9VVbx1pVpepx4Cy',
            name: 'Erwin Schrödinger'
        },
        mediaID: 'lJDKYv1NwGuH2v4OerZdl',
        kind: MediaKind.Book,
        pubishTime: now
    }
];
