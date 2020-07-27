interface IDenormalizedAggregate {
    id: string;
    name: string;
    followTime: Date;
}

export interface IFollow {
    aggregateID: string;
    followers: Array<IDenormalizedAggregate>;
}
