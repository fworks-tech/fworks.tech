'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import NeonCarousel from '@/components/shared/NeonCarousel';
import Card from '@/components/ui/Card';

import AboutContentSection from './AboutContentSection';
import ImageSection from './ImageSection';

export default function AboutInteractive({
  content
}: {
  content: {
    title: string;
    content: string;
    image?: string;
  }[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentContent = content[currentIndex];

  return (
    <Card variant="borderless" className="flex h-full min-h-full flex-col p-12 sm:p-4 sm:py-4">
      <section className="flex h-full w-full flex-col items-center justify-start gap-10 md:flex-row md:items-stretch md:px-8">
        <div className="flex min-h-[240px] w-full items-center justify-center md:h-auto md:min-h-0 md:w-1/4">
          <ImageSection image={currentContent?.image} title={currentContent?.title} />
        </div>

        <div className="relative flex w-full flex-col gap-8 md:w-2/3">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.36 }}
            >
              <AboutContentSection content={[currentContent]} />
            </motion.div>
          </AnimatePresence>

          <div className="mt-2 flex w-full justify-center">
            <NeonCarousel
              sections={content}
              currentIndex={currentIndex}
              onSelect={setCurrentIndex}
            />
          </div>
        </div>
      </section>
    </Card>
  );
}
