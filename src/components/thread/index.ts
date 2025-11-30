import ThreadView from "./ThreadView";

export type Post = {
  id: string;
  content: string;
};

export type Thread = {
  id: string;
  title: string;
  url_slug: string;
  count: number;
  posts: Post[];
};

export { ThreadView };
