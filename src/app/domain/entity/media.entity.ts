interface ICategoryDenormalized {
  id: string;
  name: string;
}

interface IAuthorDenormalized {
  id: string;
  name: string;
}

export interface IMedia {
  id: string;
  title: string;
  displayName: string;
  description: string;
  cover ?: string;
  canvas ?: string;
  contentUrl: string;
  // Use ISO 2-digit lang-code
  lang: string;
  kind: string;
  createTime: Date;
  updatedTime: Date;
  // Use category's denormalized name
  categories ?: Array < ICategoryDenormalized > ;
  // Use author id
  authors: Array < IAuthorDenormalized > ;
  totalViews: number;
  totalLikes: number;

  // SPECIFIC USE CASES
  isbn ?: string;
  totalPages ?: number;
  // Use seconds
  totalDuration ?: number;
}
