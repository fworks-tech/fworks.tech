import type { FC } from 'react';
import React from 'react';
import ReactMarkdown from 'react-markdown';

type MDArticleProps = {
  content: string;
};

export const MDArticle: FC<MDArticleProps> = ({ content }) => {
  return (
    <article className="prose prose-invert prose-headings:scroll-mt-24 max-w-none">
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
};
