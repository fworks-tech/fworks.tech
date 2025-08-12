import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'next-i18next';

export default function NavLinks({ onClick }: { onClick?: () => void }) {
  const pathname = usePathname();
  const { t } = useTranslation('common');

  const links = [
    { href: '/about', label: t('about') },
    { href: '/articles', label: t('articles') },
    { href: '/portfolio', label: t('portfolio') }
  ];

  return (
    <>
      {links.map(({ href, label }) => {
        const isActive = pathname === href;

        return (
          <Link
            key={href}
            href={href}
            onClick={onClick}
            className={`nav-neon relative px-2 text-base sm:text-lg md:text-xl ${
              isActive
                ? 'after:absolute after:inset-x-0 after:-bottom-1 after:h-[2px] after:rounded-full after:bg-cyan-400 after:shadow-[0_0_6px_#00fff7,0_0_12px_#00fff7]'
                : ''
            }`}
          >
            {label}
          </Link>
        );
      })}
    </>
  );
}
