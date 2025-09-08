'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import NeonCarousel from '@/components/shared/NeonCarousel';
import NeonScrollbarContainer from '@/components/shared/NeonScrollbarContainer';
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
    <Card variant="borderless" className="flex h-full flex-col items-center justify-center p-12">
      <section className="flex w-full flex-col items-center justify-center gap-8 md:flex-row md:px-8">
        <ImageSection image={currentContent?.image} title={currentContent?.title} />

        <div className="relative flex h-[60vh] w-full max-w-5xl flex-col items-center justify-evenly gap-6 md:h-[36vh]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.36 }}
              className="w-full"
            >
              <NeonScrollbarContainer className="w-full flex-1 overflow-hidden px-6 text-left">
                <AboutContentSection content={[currentContent]} />
              </NeonScrollbarContainer>
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
