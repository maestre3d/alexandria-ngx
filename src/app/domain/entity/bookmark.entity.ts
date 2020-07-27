// Denormalized media
interface IBookmarkItem {
    id: string;
    name: string;
    addTime: Date;
}

interface IDenormalizedCategory {
    id: string;
    name: string;
}

export interface IBookmark {
    id: string;
    userID: string;
    displayName: string;
    description?: string;
    mediaList: Array<IBookmarkItem>;
    categories?: Array<IDenormalizedCategory>;
    createTime: Date;
    updateTime: Date;
}
