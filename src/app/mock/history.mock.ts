import { HistoryKind } from '../common/enum/history-kind.enum';
import { IHistory } from '../domain/entity/history.entity';

export const Histories: Array < IHistory > = [{
  userID: 'ca0770b6-7650-4a0e-b924-aa0396d953ac',
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
      image: 'https://images.unsplash.com/photo-1502085026219-54ac00e06fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1407&q=80'
    },
    {
      id: 'Kctqcecm2ZoIEsUf9ehrp',
      name: 'Treatise on thermodynamics',
      kind: HistoryKind.Media,
      image: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=620&q=80'
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
