interface IContrib {
    id: string;
    role: string;
}

interface ISocialItem {
    externalUrl: string;
    kind: string;
}

// Contains 2 high-cardinality fields (id and nick)
export interface IAuthor {
    id: string;
    name: string;
    displayName: string;
    nick: string;
    image ?: string;
    cover ?: string;
    // Use ISO 2-digit country code
    country: string;
    community: boolean;
    verified: boolean;
    createTime: Date;
    updateTime: Date;
    // Use user's ID
    contributors: Array < IContrib > ;
    rssFeedUrl ?: string;
    socialLinks ?: Array < ISocialItem > ;
}
