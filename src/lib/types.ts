export type Section = {
  id: string;
  title: string;
  image?: string;
  content: string;
  order: number;
};

export type Project = {
  id: string;
  title: string;
  image?: string;
  order: number;
  tags?: string[];
  mdx: import('next-mdx-remote').MDXRemoteSerializeResult;
};
