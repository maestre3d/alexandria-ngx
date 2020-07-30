export interface ITrending {
    id: string;
    aggregateID: string;
    // Denormalized media or author display_name
    displayName: string;
    // Denormalized picture
    image?: string;
    // Acronymn for Mass Fluctuation Ratio
    MassFluctuationRatio: number;
    // Use ISO 2-digit country code
    region: string;
    kind: string;
    occurTime: Date;
}
