import { HistoryKind } from '../common/enum/history-kind.enum';
import { IHistory } from '../domain/entity/history.entity';

export const Histories: Array < IHistory > = [{
  userID: '2c592610-2441-40d3-8350-6cca694feb9c',
  items: [{
      id: 'GusZWL9VVbx1pVpepx4Cy',
      name: 'Erwin Schrödinger',
      kind: HistoryKind.Author,
      image: 'https://media.nature.com/lw800/magazine-assets/d41586-018-06034-8/d41586-018-06034-8_16060838.jpg',
      verified: true
    },
    {
      id: 'lJDKYv1NwGuH2v4OerZdl',
      name: 'Statistical Thermodynamics',
      kind: HistoryKind.Media,
      image: 'https://www.amazon.com/images/I/41twAZJ+jmL._SX322_BO1,204,203,200_.jpg'
    },
    {
      id: 'Kctqcecm2ZoIEsUf9ehrp',
      name: 'Treatise on thermodynamics',
      kind: HistoryKind.Media,
      image: 'https://www.amazon.com/images/I/41khrxV5d5L._SX310_BO1,204,203,200_.jpg'
    },
    {
      id: 'XrtpNzixu8jOHK0kBkRTU',
      name: 'Quantum Duderino',
      kind: HistoryKind.Author,
      image: 'https://hollywoodbowles.com/wp-content/uploads/2019/08/5D233C8C-6388-4AB9-97D8-22FC35E06716.jpeg',
      verified: true
    },
    {
      id: 'H70Ou7X1KYOmmtquoXpTT',
      name: 'Albert Einstein',
      kind: HistoryKind.Author,
      image: 'https://m.dw.com/image/44213310_101.jpg',
      verified: true
    }
  ]
}];
