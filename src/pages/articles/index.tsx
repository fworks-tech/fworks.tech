import { useTranslation } from 'next-i18next';

import DefaultLayout from '@/components/layout/DefaultLayout';
import EmptyMessage from '@/components/shared/EmptyMessage';
import SeoHead from '@/components/shared/SeoHead';
import ArticlesFeature from '@/features/articles/ArticlesFeature';
import { getI18nProps } from '@/lib/i18n';
import type { Section } from '@/lib/types';
import type { SeoMetadata } from '@/types/seo';

export async function getStaticProps({ locale }: { locale: string }) {
  return await getI18nProps(locale, ['articles']);
}

export default function ArticlesPage({ sections }: { sections: Section[] }) {
  const { t } = useTranslation('articles');
  const seo = t('seo', { returnObjects: true }) as SeoMetadata;

  if (!sections || sections.length === 0) {
    return <EmptyMessage message={t('emptyMessage')} />;
  }

  return (
    <>
      <SeoHead {...seo} url="https://fworks.tech/articles" />
      <section className="w-full max-w-5xl p-6 sm:p-8">
        <div className="flex flex-col items-center justify-center text-center">
          <ArticlesFeature sections={sections} />
        </div>
      </section>
    </>
  );
}

// 🧩 Adiciona suporte ao layout dinâmico
ArticlesPage.getLayout = (page: React.ReactNode) => <DefaultLayout>{page}</DefaultLayout>;
