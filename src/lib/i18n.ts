// src/lib/i18n.ts
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../../next-i18next.config';

export const getI18nProps = async (locale: string, ns: string[] = []) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', ...ns], nextI18NextConfig)),
    },
  };
};
