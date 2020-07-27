// Uses denormalized data
interface IHistoryItem {
  id: string;
  name: string;
  kind: string;
  image ?: string;
  verified ?: boolean;
}

export interface IHistory {
  userID: string;
  items: Array < IHistoryItem > ;
}
