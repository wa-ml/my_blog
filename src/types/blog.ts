export type Blog = {
  id: string;
  title: string;
  content: string;
  tags: Tag[];
  overview: string;
  is_dev: boolean;
  thumbnail: string;
  createdAt: string;
  updatedAt: string;
  revisedAt: string;
  publishedAt: string;
};

export type Tag = {
  id: string;
  tag: string;
  createdAt: string;
  updatedAt: string;
  revisedAt: string;
  publishedAt: string;
};
