export enum NewsType {
  BLOGS,
  NEWS,
}

export const NewTypeTitleMap = new Map<NewsType, string>([
  [NewsType.BLOGS, "blogs"],
  [NewsType.NEWS, "news"],
]);

export interface NewsItem {
  type: NewsType;
  createdTime: number;
  imgUrl: string;
  title: string;
}
