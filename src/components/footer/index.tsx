import { useTranslation } from 'next-i18next';

const TRANSLATION_NAMESPACE = 'common';

const linksClassNames = `underline hover:text-cyan-300`;

export default function Footer() {
  const { t } = useTranslation(TRANSLATION_NAMESPACE);
  const year = new Date().getFullYear();

  return (
    <footer
      className={`mb-4 flex flex-col items-center justify-center py-6 text-center text-sm text-cyan-400 sm:text-base md:text-lg`}
    >
      <p>
        © <span>{t('footer.copyright', { year })}</span>
        <a href="/privacy" className={`${linksClassNames} my-1 block`}>
          {t('footer.privacyPolicy')}
        </a>
      </p>
      <nav aria-label="Social links" className="mt-4 p-2">
        <ul className="mt-2 flex justify-center gap-2 text-sm">
          <li>
            <a
              href="https://github.com/fworks-tech"
              target="_blank"
              rel="noopener noreferrer"
              className={linksClassNames}
            >
              GitHub
            </a>
          </li>
          <li>
            <span>|</span>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/fabiorborges"
              target="_blank"
              rel="noopener noreferrer"
              className={linksClassNames}
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
