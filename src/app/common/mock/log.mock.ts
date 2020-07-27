import { LogKind } from '../enum/log_kind.enum';

export interface Log {
    id: string;
    name: string;
    kind: string | LogKind.Media;
    image: string | 'https://cdn.damascus-engineering.com/alexandria/default/media.png';
    verified?: boolean;
}

export const Logs: Array<Log> = [
    {
      id: 'GusZWL9VVbx1pVpepx4Cy',
      name: 'Erwin Schrödinger',
      kind: LogKind.Author,
      image: 'https://media.nature.com/lw800/magazine-assets/d41586-018-06034-8/d41586-018-06034-8_16060838.jpg',
      verified: true
    },
    {
      id: '0KYRKx7WWHxQHW6mbBkEZ',
      name: 'Cosmology for dummies',
      kind: LogKind.Media,
      image: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=620&q=80'
    },
    {
      id: 'SZgyE8QpzdEQM1N8HxKzH',
      name: 'Dark energy: The cosmos enigma',
      kind: LogKind.Media,
      image: 'https://images.unsplash.com/photo-1502085026219-54ac00e06fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1407&q=80'
    },
    {
      id: 'XrtpNzixu8jOHK0kBkRTU',
      name: 'Quantum Duderino',
      kind: LogKind.Author,
      image: 'https://hollywoodbowles.com/wp-content/uploads/2019/08/5D233C8C-6388-4AB9-97D8-22FC35E06716.jpeg',
      verified: true
    }
];
