import { IBookmark } from '../domain/entity/bookmark.entity';

const now = new Date();

export const Bookmarks: Array<IBookmark> = [
    {
        id: 'c3de6360-3d7f-49e3-83d5-482795a7bd1f',
        // Alonso Ruiz
        userID: 'ca0770b6-7650-4a0e-b924-aa0396d953ac',
        displayName: 'Universe',
        description: 'Contains quantum mechanics, astrophysics, particle physics, etc',
        mediaList: [
            { id: 'Kctqcecm2ZoIEsUf9ehrp', name: 'Treatise on thermodynamics', addTime: now }
        ],
        categories: [
            {id: '2f096cf0-6cc3-4e01-a7fc-fd8095e597f9', name: 'Quantum Physics'}
        ],
        createTime: now,
        updateTime: now
    }
];
