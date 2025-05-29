'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

export default function NavLinks({ onClick }: { onClick?: () => void }) {
  const { t } = useTranslation('common');
  const pathname = usePathname();

  const links = [
    { href: '/about', label: t('about') },
    { href: '/articles', label: t('articles') },
    { href: '/portfolio', label: t('portfolio') },
    { href: '/contact', label: t('contact') },
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
            className={`nav-neon text-2xl relative px-2 ${
              isActive
                ? 'after:absolute after:inset-x-0 after:-bottom-1 after:h-[2px] after:bg-cyan-400 after:rounded-full after:shadow-[0_0_6px_#00fff7,0_0_12px_#00fff7]'
                : ''
            }`}
          >
            {t(label)}
          </Link>
        );
      })}
    </>
  );
}
