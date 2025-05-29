'use client';

import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'pt', label: 'PT' },
  { code: 'es', label: 'ES' },
  { code: 'fr', label: 'FR' },
];

export default function Language() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const current = languages.find((lang) => lang.code === i18n.language) || languages[0];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left z-30 ml-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-cyan-400 flex items-center gap-1 text-sm  nav-neon text-md hover:text-white"
        aria-label="Select language"
      >
        {current.label}
        <ChevronDown size={16} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 border border-cyan-400 rounded shadow-lg backdrop-blur-md">
          <ul className="py-1 text-md text-gray-100">
            {languages.map((lang) => (
              <li key={lang.code}>
                <button
                  className={`w-full text-left px-4 py-2 hover:bg-cyan-800 ${
                    i18n.language === lang.code ? 'font-bold text-cyan-400' : ''
                  }`}
                  onClick={() => changeLanguage(lang.code)}
                >
                  {lang.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
