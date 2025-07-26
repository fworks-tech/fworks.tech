import { Section } from '@/lib/types';
import { getI18nProps } from '@/lib/i18n';
import { useTranslation } from 'next-i18next';
import PortfolioFeature from '@/features/portfolio/PortfolioFeature';
import EmptyMessage from '@/components/shared/EmptyMessage';
import DefaultLayout from '@/components/layout/DefaultLayout';

export async function getStaticProps({ locale }: { locale: string }) {
  return await getI18nProps(locale, ['portfolio']);
}

export default function PortfolioPage({ sections }: { sections: Section[] }) {
  const { t } = useTranslation('portfolio');

  if (!sections || sections.length === 0) {
    return <EmptyMessage message={t('emptyMessage')} />;
  }

  return (
    <section className="w-full max-w-5xl p-6 sm:p-8">
      <div className="flex flex-col items-center justify-center text-center">
        <PortfolioFeature sections={sections} />
      </div>
    </section>
  );
}

// 🧩 Adiciona suporte ao layout dinâmico
PortfolioPage.getLayout = (page: React.ReactNode) => <DefaultLayout>{page}</DefaultLayout>;
