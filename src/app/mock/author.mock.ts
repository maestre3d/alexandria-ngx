import { AuthorRole } from '../common/enum/role.enum';
import { IAuthor } from '../domain/entity/author.entity';

const now = new Date();

export const Authors: Array < IAuthor > = [{
    id: 'iI5R8RDYduL1p31q2tlnt',
    name: 'Dross Rotzank US',
    displayName: 'Dross US',
    nick: 'drossrotzankus',
    image: 'https://cdn.damascus-engineering.com/alexandria/user/1b4cc750-c551-4767-a232-e91b52e68fa0.jpeg',
    country: 'us',
    community: false,
    verified: false,
    createTime: now,
    updateTime: now,
    contributors: [
      // Angel D Revilla
      {
        id: '16d28d48-5ba0-41ac-8201-c43483807b7c',
        role: AuthorRole.Root
      }
    ]
  },
  {
    id: 'X08Pf3vSk5N0yQXUOt1pB',
    name: 'Bruno Chiellini Merkel',
    displayName: 'Bruno Chiellini',
    nick: 'br1chiellinioff',
    image: 'https://cdn.damascus-engineering.com/alexandria/user/1b4cc750-c551-4767-a232-e91b52e68fa0.jpeg',
    country: 'it',
    community: false,
    verified: false,
    createTime: now,
    updateTime: now,
    contributors: [
      // Joel Robertson
      {
        id: 'dadf8e01-13c3-4a6b-b18d-8841a46c77a4',
        role: AuthorRole.Root
      },
      // Jorge Santaolla
      {
        id: 'f7dd213f-c5fb-4eb8-bd9c-8079ef7a35cf',
        role: AuthorRole.Contrib
      }
    ]
  },
  {
    id: 'zlCRGJLwapfsWuM2cZ9au',
    name: 'Max Karl Ernst Ludwig Planck',
    displayName: 'Max Planck',
    nick: 'maxplanck',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Max_Planck_1933.jpg',
    country: 'de',
    community: true,
    verified: true,
    createTime: now,
    updateTime: now,
    contributors: [
      // Angel D Revilla
      {
        id: '16d28d48-5ba0-41ac-8201-c43483807b7c',
        role: AuthorRole.Contrib
      },
      // Jorge Santaolla
      {
        id: 'f7dd213f-c5fb-4eb8-bd9c-8079ef7a35cf',
        role: AuthorRole.Contrib
      },
      // Alonso Ruiz
      {
        id: 'ca0770b6-7650-4a0e-b924-aa0396d953ac',
        role: AuthorRole.Contrib
      }
    ]
  },
  {
    id: 'GusZWL9VVbx1pVpepx4Cy',
    name: 'Erwin Rudolf Josef Alexander Schrödinger',
    displayName: 'Erwin Schrödinger',
    nick: 'erwinschrodinger',
    image: 'https://media.nature.com/lw800/magazine-assets/d41586-018-06034-8/d41586-018-06034-8_16060838.jpg',
    country: 'as',
    community: true,
    verified: true,
    createTime: now,
    updateTime: now,
    contributors: [
      // Karen Ronan
      {
        id: '43623e7e-b4f3-4682-8b61-de8c2f768f28',
        role: AuthorRole.Contrib
      },
      // Jorge Santaolla
      {
        id: 'f7dd213f-c5fb-4eb8-bd9c-8079ef7a35cf',
        role: AuthorRole.Contrib
      }
    ]
  },
  {
    id: 'XrtpNzixu8jOHK0kBkRTU',
    name: 'Quantum Duderino',
    displayName: 'Quantum Duderino',
    nick: 'quantumdudeness',
    image: 'https://hollywoodbowles.com/wp-content/uploads/2019/08/5D233C8C-6388-4AB9-97D8-22FC35E06716.jpeg',
    country: 'us',
    community: false,
    verified: true,
    createTime: now,
    updateTime: now,
    contributors: [
      // Fernando Herrera
      {
        id: 'c89f051f-41b7-4bfa-a440-c82394a5ab4c',
        role: AuthorRole.Root
      }
    ]
  }
];
