import { useTranslation } from 'next-i18next';

import DefaultLayout from '@/components/layout/DefaultLayout';
import SeoHead from '@/components/shared/SeoHead';
import AboutFeature from '@/features/about/AboutFeature';
import { getI18nProps } from '@/lib/i18n';
import type { SeoMetadata } from '@/types/seo';

export async function getStaticProps({ locale }: { locale: string }) {
  return await getI18nProps(locale, ['about']);
}

export default function AboutPage() {
  const { t } = useTranslation('about');
  const seo = t('seo', { returnObjects: true }) as SeoMetadata;
  const content = t('carouselItems', { returnObjects: true }) as {
    title: string;
    content: string;
    image?: string;
  }[];

  return (
    <>
      <SeoHead {...seo} url="https://fworks.tech/about" />
      <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center sm:p-2">
        <AboutFeature content={content} />
      </div>
    </>
  );
}

// 🧩 Adiciona suporte ao layout dinâmico
AboutPage.getLayout = (page: React.ReactNode) => <DefaultLayout>{page}</DefaultLayout>;
