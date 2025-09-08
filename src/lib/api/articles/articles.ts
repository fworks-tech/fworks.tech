import fs from 'fs';
import path from 'path';

export type ArticleTranslation = {
  locale: string;
  title: string;
  description: string;
  path: string;
  date: string;
};

export type ArticleIndexItem = {
  id: string;
  slug: string;
  defaultLocale: string;
  tags: string[];
  translations: ArticleTranslation[];
};

const INDEX_PATH = path.join(process.cwd(), 'articles-index.json');

export function loadArticlesIndex(): ArticleIndexItem[] {
  const raw = fs.readFileSync(INDEX_PATH, 'utf-8');
  return JSON.parse(raw) as ArticleIndexItem[];
}

export function getArticleEntry(slug: string): ArticleIndexItem | null {
  const list = loadArticlesIndex();
  return list.find((a) => a.slug === slug) ?? null;
}

export function resolveTranslation(
  item: ArticleIndexItem,
  wantedLocale?: string
): ArticleTranslation | null {
  if (!item) return null;
  if (wantedLocale) {
    const hit = item.translations.find((t) => t.locale === wantedLocale);
    if (hit) return hit;
  }
  if (wantedLocale?.includes('-')) {
    const base = wantedLocale.split('-')[0];
    const hit = item.translations.find((t) => t.locale === base);
    if (hit) return hit;
  }
  return (
    item.translations.find((t) => t.locale === item.defaultLocale) ?? item.translations[0] ?? null
  );
}

export function readMarkdownFile(fromIndexPath: string): string {
  const diskPath = path.join(process.cwd(), fromIndexPath);
  return fs.readFileSync(diskPath, 'utf-8');
}

const articlesApi = {
  readMarkdownFile,
  resolveTranslation,
  getArticleEntry,
  loadArticlesIndex
};

export default articlesApi;
