'use client';

import { ReactNode, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';
import { Section } from '@/lib/types';
import Image from 'next/image';

type NeonCarouselProps = {
  sections: Section[];
  renderContent?: (section: Section) => ReactNode;
};

export default function NeonCarousel({ sections = [], renderContent }: NeonCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const section = sections[currentIndex];

  const goNext = () => {
    if (currentIndex < sections.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const goPrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handlers = useSwipeable({
    onSwipedLeft: goNext,
    onSwipedRight: goPrev,
    preventScrollOnSwipe: true,
    trackTouch: true,
    trackMouse: false,
  });

  // Verifique se `sections` está vazio
  if (!sections || sections.length === 0) {
    return <p className="text-lg text-gray-300">No content available.</p>;
  }

  return (
    <>
      <div {...handlers} className="relative flex flex-auto flex-col p-6 sm:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={section.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            style={{ flex: 'auto' }}
          >
            <>
              {renderContent ? (
                renderContent(section)
              ) : (
                <div>
                  {section.image && (
                    <>
                      <Image
                        src={section.image}
                        alt={section.title}
                        width={64}
                        height={64}
                        className="h-16 w-16 object-cover"
                      />
                      <h2 className="light-neon-text text-4xl font-medium">{section.title}</h2>
                    </>
                  )}
                </div>
              )}
              <p className="text-lg leading-relaxed text-gray-300">
                {(section as Section).content}
              </p>
            </>
          </motion.div>
        </AnimatePresence>
        <div className="mt-8 flex items-center justify-between">
          {currentIndex > 0 ? (
            <button onClick={goPrev} aria-label="Anterior" title="Anterior">
              <div className="flex items-center gap-2 text-cyan-400 transition hover:scale-105">
                <ArrowLeft size={28} />
                <span className="hidden text-sm sm:inline">{sections[currentIndex - 1].title}</span>
              </div>
            </button>
          ) : (
            <span />
          )}

          {currentIndex < sections.length - 1 ? (
            <button onClick={goNext} aria-label="Próximo" title="Próximo">
              <div className="flex items-center gap-2 text-cyan-400 transition hover:scale-105">
                <span className="hidden text-sm sm:inline">{sections[currentIndex + 1].title}</span>
                <ArrowRight size={28} />
              </div>
            </button>
          ) : (
            <span />
          )}
        </div>
      </div>
    </>
  );
}
