import { UserRole } from '../enum/role.enum';

export interface IUser {
    id: string;
    username: string;
    displayName: string;
    password: string;
    image?: string;
    // Use ISO 2-digit lang code
    locale: string;
    // Use ISO 2-digit country code
    country: string;
    createTime: Date;
    updateTime: Date;
    role: string;
}

const now = new Date();

export const Users: Array<IUser> = [
    {
        id: '16d28d48-5ba0-41ac-8201-c43483807b7c',
        username: 'arevilla',
        displayName: 'Ángel David Revilla',
        password: '12345678',
        image: '',
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
        image: '',
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
        image: '',
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
        image: '',
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
        image: '',
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
        password: 'master123',
        image: '',
        locale: 'es',
        country: 'mx',
        createTime: now,
        updateTime: now,
        role: UserRole.Admin
    }
]
