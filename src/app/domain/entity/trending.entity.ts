export interface ITrending {
    id: string;
    incrementRate: number;
    createTime: Date;
}

export interface ITrendingList {
    aggregateID: string;
    trends: Array<ITrending>;
    createTime: Date;
    updateTime: Date;
}
