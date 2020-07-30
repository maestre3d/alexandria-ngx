interface IDenormalizedAuthor {
    id: string;
    name: string;
}

export interface INotification {
    id: string;
    title: string;
    description: string;
    image?: string;
    author: IDenormalizedAuthor;
    aggregateID: string;
    kind: string;
    pubishTime: Date;
}
