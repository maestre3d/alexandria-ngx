interface IDenormalizedAggregate {
    id: string;
    name: string;
    followTime: Date;
}

export interface IFollow {
    aggregateID: string;
    followers: Array<IDenormalizedAggregate>;
}

const now = new Date();

// User to User relation
export const UserFollowers: Array<IFollow> = [
    {
        // Dross US
        aggregateID: '16d28d48-5ba0-41ac-8201-c43483807b7c',
        followers: [
            { id: 'dadf8e01-13c3-4a6b-b18d-8841a46c77a4', name: 'Joel Robertson', followTime: now }
        ]
    }
];

// User to Author relation
export const AuthorFollowers: Array<IFollow> = [
    {
        // Schrodinger
        aggregateID: 'GusZWL9VVbx1pVpepx4Cy',
        followers: [
            { id: 'ca0770b6-7650-4a0e-b924-aa0396d953ac', name: 'Alonso Ruiz', followTime: now }
        ]
    }
];
