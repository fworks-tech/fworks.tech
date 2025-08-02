'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import type { ReactElement } from 'react';

import DefaultLayout from '@/components/layout/DefaultLayout';
import Card from '@/components/ui/Card';
import { getI18nProps } from '@/lib/i18n';

export async function getStaticProps({ locale }: { locale: string }) {
  return await getI18nProps(locale, ['about']);
}

export default function AboutPage() {
  const { t } = useTranslation('about');
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselItems = t('carouselItems', { returnObjects: true }) as {
    title: string;
    content: string;
    image?: string;
  }[];

  const current = carouselItems[currentIndex];

  return (
    <Card variant="borderless">
      <section className="mx-4 mt-2 grid grid-cols-1 gap-2 md:grid-cols-[340px_1fr] md:px-12">
        {/* Imagem à esquerda */}
        {current?.image && (
          <div className="flex h-48 w-full items-center justify-center md:h-[340px] md:w-[340px]">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex w-full flex-shrink-0 justify-center md:w-[340px]"
            >
              <div className="relative h-48 w-48 md:h-[340px] md:w-[340px]">
                <Image
                  src={current.image}
                  alt={current.title || 'Image'}
                  fill
                  priority
                  sizes="(max-width: 768px) 12rem, 340px"
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        )}

        {/* Conteúdo à direita */}
        <div className="flex flex-col justify-center gap-4 text-center md:text-left">
          {current?.title && (
            <motion.h2
              className="light-neon-text text-3xl font-semibold md:text-4xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {current.title}
            </motion.h2>
          )}

          <p className="mt-2 text-justify text-base leading-relaxed text-gray-300 md:text-lg">
            {current?.content}
          </p>

          {/* Navegação com bolinhas */}
          <div className="mt-8 flex justify-center gap-4">
            {carouselItems.map((_, index) => (
              <motion.div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`neon-border h-4 w-4 cursor-pointer rounded-full ${
                  index === currentIndex ? 'neon-carrosel-nav-icon-active' : ''
                }`}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>
      </section>
    </Card>
  );
}

AboutPage.getLayout = (page: ReactElement) => <DefaultLayout>{page}</DefaultLayout>;
