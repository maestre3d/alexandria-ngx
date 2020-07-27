export interface IAd {
    id: string;
    title: string;
    description ?: string;
    image ?: string;
    authorID: string;
    // Use category's ID
    categories: Array < string > ;
    // Use ISO 2-digit country code
    country: string;
    // Use ISO 2-digit lang code
    lang: string;
    createTime: Date;
    updateTime: Date;
}
