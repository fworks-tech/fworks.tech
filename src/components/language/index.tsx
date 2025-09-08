'use client';

import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useState, useEffect, useRef } from 'react';

const languages = [
  { code: 'en', label: 'English', flag: '/assets/flags/us-32.png' },
  { code: 'pt', label: 'Português', flag: '/assets/flags/br-32.png' },
  { code: 'es', label: 'Español', flag: '/assets/flags/es-32.png' },
  { code: 'fr', label: 'Français', flag: '/assets/flags/fr-32.png' },
  { code: 'de', label: 'Deutsch', flag: '/assets/flags/de-32.png' }
];

export default function Language() {
  const { i18n } = useTranslation();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const storedLang = typeof localStorage !== 'undefined' ? localStorage.getItem('lang') : null;
      const navLang =
        typeof navigator !== 'undefined' && navigator.language
          ? navigator.language.split('-')[0]
          : null;

      if (!storedLang && navLang && i18n.language !== navLang) {
        const match = languages.find((lang) => lang.code === navLang);
        if (match) {
          try {
            i18n.changeLanguage(match.code);
          } catch (e) {
            // Log but don't throw — prevent app from crashing during language change
            console.error('i18n.changeLanguage failed during init', e);
          }
          try {
            localStorage.setItem('lang', match.code);
          } catch (e) {
            console.error('localStorage.setItem failed during init', e);
          }
        }
      }
    } catch (e) {
      console.error('language init effect failed', e);
    }
  }, [i18n]);

  // 🔒 Fechar dropdown ao clicar fora e travar scroll no mobile
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const currentLang = languages.find((lang) => lang.code === i18n.language) || languages[0];

  // 🌍 Trocar idioma, persistir e forçar reload
  const changeLanguage = async (code: string) => {
    try {
      await i18n.changeLanguage(code);
    } catch (e) {
      console.error('i18n.changeLanguage failed', e);
    }

    try {
      if (typeof window !== 'undefined') localStorage.setItem('lang', code);
    } catch (e) {
      console.error('localStorage.setItem failed', e);
    }

    setIsOpen(false);
    router.replace(router.pathname, router.asPath, { locale: code });
  };

  return (
    <div ref={ref} className="relative z-50 ml-4 inline-block text-left">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="nav-neon text-md flex items-center gap-2 text-sm text-cyan-400 hover:text-white"
        aria-label="Select language"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {/* Esconde texto no mobile */}
        <span className="hidden sm:inline">{currentLang.code.toUpperCase()}</span>
        <Image
          src={currentLang.flag}
          alt={currentLang.label}
          width={24}
          height={24}
          className="h-6 w-6 rounded-full"
        />
        <ChevronDown size={16} />
      </button>

      {isOpen && (
        <div className="animate-fade-in neon-border absolute right-0 mt-4 flex w-44 origin-top-right scale-100 cursor-pointer">
          <ul className="text-md py-1 text-gray-100">
            {languages.map((lang) => (
              <li key={lang.code}>
                <button
                  className={`flex w-full items-center gap-2 px-4 py-2 text-left ${
                    i18n.language === lang.code ? 'font-bold' : ''
                  }`}
                  onClick={() => changeLanguage(lang.code)}
                >
                  <Image
                    src={lang.flag}
                    alt={lang.label}
                    width={24}
                    height={24}
                    className="h-6 w-6 rounded-full"
                  />
                  <span className="truncate">{lang.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
