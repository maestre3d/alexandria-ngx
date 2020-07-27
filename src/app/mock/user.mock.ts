import { UserRole } from '../common/enum/role.enum';
import { IUser } from '../domain/entity/user.entity';

const now = new Date();

export const Users: Array < IUser > = [{
    id: '16d28d48-5ba0-41ac-8201-c43483807b7c',
    username: 'arevilla',
    displayName: 'Ángel David Revilla',
    password: '12345678',
    email: 'arevilla@yahoo.com',
    image: 'https://laletrade.com/images/biografia/Dross.jpg',
    locale: 'es',
    country: 'ar',
    createTime: now,
    updateTime: now,
    role: UserRole.User
  },
  {
    id: 'dadf8e01-13c3-4a6b-b18d-8841a46c77a4',
    username: 'jrobertson',
    displayName: 'Joel Robertson',
    password: '12345678',
    email: 'jrobertson@outlook.com',
    image: 'https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    locale: 'en',
    country: 'uk',
    createTime: now,
    updateTime: now,
    role: UserRole.User
  },
  {
    id: 'f7dd213f-c5fb-4eb8-bd9c-8079ef7a35cf',
    username: 'jsantaolla',
    displayName: 'Jorge Santaolla',
    password: '12345678',
    email: 'jsantaolla96@hotmail.com',
    image: 'https://images.unsplash.com/photo-1586796676774-c93004ae009f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80',
    locale: 'es',
    country: 'ar',
    createTime: now,
    updateTime: now,
    role: UserRole.Support
  },
  {
    id: '43623e7e-b4f3-4682-8b61-de8c2f768f28',
    username: 'karenronan86',
    displayName: 'Karen Ronan',
    password: '12345678',
    email: 'karenronan_86@gmail.com',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    locale: 'en',
    country: 'ir',
    createTime: now,
    updateTime: now,
    role: UserRole.Marketing
  },
  {
    id: 'c89f051f-41b7-4bfa-a440-c82394a5ab4c',
    username: 'fernandoha98',
    displayName: 'Fernando Herrera',
    password: '12345678',
    email: 'elprogramadoor@gmail.com',
    image: 'https://images.unsplash.com/photo-1590895178913-3d3472310a47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80',
    locale: 'es',
    country: 'mx',
    createTime: now,
    updateTime: now,
    role: UserRole.Developer
  },
  {
    id: 'ca0770b6-7650-4a0e-b924-aa0396d953ac',
    username: 'aruiz',
    displayName: 'Alonso Ruiz',
    password: 'root1234',
    email: 'aruiz@damascus-engineering.com',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    locale: 'es',
    country: 'mx',
    createTime: now,
    updateTime: now,
    role: UserRole.Admin
  }
];
