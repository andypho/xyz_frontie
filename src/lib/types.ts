export type Post = {
  id: string;
  content: string;
  timestamp: string;
};

export type Thread = {
  id: string;
  title: string;
  url_slug: string;
  count: number;
  posts?: Post[];
  timestamp: string;
};
