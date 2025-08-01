import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

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
  mdx: MDXRemoteSerializeResult;
};
