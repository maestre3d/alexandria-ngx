import { MediaKind } from '../common/enum/media-kind.enum';
import { IMedia } from '../domain/entity/media.entity';

const now = new Date();

export const MediaList: Array < IMedia > = [{
    id: 'Kctqcecm2ZoIEsUf9ehrp',
    title: 'Treatise on thermodynamics',
    displayName: 'Treatise on thermodynamics',
    description: 'Written by the founder of quantum theory, a Nobel Prize winner, this classic volume is still recognized as \
            among the best introductions to thermodynamics.',
    cover: 'https://www.amazon.com/images/I/41khrxV5d5L._SX310_BO1,204,203,200_.jpg',
    canvas: 'https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1237&q=80',
    contentUrl: '',
    kind: MediaKind.Book,
    lang: 'en',
    createTime: now,
    updatedTime: now,
    categories: [{
      id: '2f096cf0-6cc3-4e01-a7fc-fd8095e597f9',
      name: 'Quantum Physics'
    }],
    authors: [{
        id: 'zlCRGJLwapfsWuM2cZ9au',
        name: 'Max Planck'
      },
      {
        id: 'GusZWL9VVbx1pVpepx4Cy',
        name: 'Erwin Schrödinger'
      },
    ],
    isbn: '9780486319285',
    totalPages: 1250
  },
  {
    id: 'lJDKYv1NwGuH2v4OerZdl',
    title: 'Statistical Thermodynamics',
    displayName: 'Statistical Thermodynamics',
    description: 'In this concise volume, one of the founder of quantum mechanics and one of the greatest theoretical physicists of the century \
            (Nobel laureate, 1933) attempts to develop a simple, \
            unified standard method of dealing with all cases of statistical thermodynamics (classical, quantum, Bose-Einstein, Fermi-Dirac, etc.) \
            The level of discussion is relatively advanced.',
    cover: 'https://www.amazon.com/images/I/41twAZJ+jmL._SX322_BO1,204,203,200_.jpg',
    canvas: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=620&q=80',
    contentUrl: '',
    kind: MediaKind.Book,
    lang: 'en',
    createTime: now,
    updatedTime: now,
    categories: [{
      id: '2f096cf0-6cc3-4e01-a7fc-fd8095e597f9',
      name: 'Quantum Physics'
    }],
    authors: [{
      id: 'GusZWL9VVbx1pVpepx4Cy',
      name: 'Erwin Schrödinger'
    }],
    isbn: '9780123849571',
    totalPages: 408
  },
  {
    id: 'fwjAyDLTLTTGAojXqWEaB',
    title: 'Think and Grow Rich: The Paradox of a millionaire journey',
    displayName: 'Think and Grow Rich: The Paradox',
    description: 'Think and Grow Rich was written by Napoleon Hill in 1937 and promoted as a personal development and self-improvement book. \
            He claimed to be inspired by a suggestion from business magnate and later-philanthropist Andrew Carnegie.',
    cover: 'https://m.media-amazon.com/images/I/51ncDBWm8ZL.jpg',
    canvas: '',
    contentUrl: '',
    kind: MediaKind.Podcast,
    lang: 'en',
    createTime: now,
    updatedTime: now,
    categories: [{
      id: '56b0a32e-5ca1-4b81-b5be-c8c5420bbb68',
      name: 'Finance'
    }],
    authors: [{
      id: 'X08Pf3vSk5N0yQXUOt1pB',
      name: 'Bruno Chiellini'
    }],
    // 120 / 2 hr min
    totalDuration: 7200
  },
  {
    id: 'zqEROBNEPHSvHQElHlZ6A',
    title: 'The seven deadly sins explained for dummies',
    displayName: 'The seven deadly sins by Dross',
    description: 'The seven deadly sins, also known as the capital vices, or cardinal sins, is a grouping and classification of vices within Christian \
            teachings, although they are not explicitly listed in the Bible.',
    cover: 'https://i.pinimg.com/736x/75/28/9e/75289e0c2f80400793e8859be5e416b9.jpg',
    canvas: '',
    contentUrl: '',
    kind: MediaKind.Video,
    lang: 'en',
    createTime: now,
    updatedTime: now,
    categories: [{
      id: '0b248f8f-9541-493c-ab52-bc35ec50d152',
      name: 'Art'
    }],
    authors: [{
      id: 'iI5R8RDYduL1p31q2tlnt',
      name: 'Dross US'
    }],
    // 60 min / 1 hr
    totalDuration: 3600
  }
];
