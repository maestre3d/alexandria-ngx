// Contains 3 high-cardinality fields (id, username and email)
export interface IUser {
  id: string;
  username: string;
  displayName: string;
  password: string;
  email: string;
  image ?: string;
  cover ?: string;
  // Use ISO 2-digit lang code
  locale: string;
  // Use ISO 2-digit country code
  country: string;
  createTime: Date;
  updateTime: Date;
  role: string;
}
