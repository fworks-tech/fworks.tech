import matter from 'gray-matter';
import type { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import { MDArticle } from '@/components/md/article';
import type { ArticleTranslation } from '@/lib/api/articles/articles';
import {
  getArticleEntry,
  loadArticlesIndex,
  readMarkdownFile,
  resolveTranslation
} from '@/lib/index';

type Props = {
  meta: {
    title: string;
    description: string;
    date: string;
    tags: string[];
    locale: string;
    slug: string;
  };
  content: string; // markdown sem frontmatter
};

export default function FeedArticlePage({ meta, content }: Props) {
  const title = meta.title || 'Article';
  return (
    <>
      <Head>
        <title>{title} | FWORKS Tech</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="article" />
        <meta name="keywords" content={meta.tags.join(',')} />
        <meta name="article:published_time" content={meta.date} />
      </Head>

      <main className="mx-auto w-full max-w-4xl px-4 py-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h1>
          <p className="mt-2 text-sm text-zinc-400">
            {new Date(meta.date).toLocaleDateString(meta.locale, {
              year: 'numeric',
              month: 'long',
              day: '2-digit'
            })}
            {' • '}
            {meta.tags.join(' · ')}
          </p>
        </header>

        <MDArticle content={content} />
      </main>
    </>
  );
}

export const GetLocales = () => ['en', 'pt', 'es', 'fr', 'de'];

export const getStaticPaths: GetStaticPaths = async () => {
  const index = loadArticlesIndex();
  const paths = index.map((item) => ({
    params: { slug: item.slug }
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const slug = ctx.params?.slug as string;
  // locale do Next (pages router) se usar i18n no next.config
  const wantedLocale = (ctx.locale as string) || undefined;

  const entry = getArticleEntry(slug);
  if (!entry) return { notFound: true };

  const tr = resolveTranslation(entry, wantedLocale) as ArticleTranslation;
  if (!tr) return { notFound: true };

  const rawMd = readMarkdownFile(tr.path);
  const parsed = matter(rawMd); // remove o frontmatter
  const content = parsed.content.trim();

  const meta = {
    title: tr.title,
    description: tr.description,
    date: tr.date,
    tags: entry.tags,
    locale: tr.locale,
    slug: entry.slug
  };

  return {
    props: { meta, content }
  };
};
