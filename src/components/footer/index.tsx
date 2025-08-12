import { useTranslation } from 'next-i18next';

export default function Footer() {
  const { t } = useTranslation('common');
  const year = new Date().getFullYear();

  return (
    <footer className="align-center mb-4 flex flex-col justify-between py-6 text-center text-sm text-cyan-400 sm:text-base md:text-lg">
      <p>
        <span
          dangerouslySetInnerHTML={{
            __html: t('footer.copyright', { year })
          }}
        />
        <br />
        <a href="/privacy" className="ml-2 underline hover:text-cyan-300">
          {t('footer.privacyPolicy')}
        </a>
      </p>
    </footer>
  );
}
