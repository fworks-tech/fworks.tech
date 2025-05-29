'use client';

import { ReactNode, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';
import { Section } from '@/lib/types';

type NeonCarouselProps = {
  sections: Section[];
  renderContent?: (section: Section) => ReactNode;
};

export default function NeonCarousel({ sections, renderContent }: NeonCarouselProps) {
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

  return (
    <div {...handlers} className="relative flex flex-col flex-auto  p-6 sm:p-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={section.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
          style={{ flex: 'auto' }}
        >
          {renderContent ? (
            renderContent(section)
          ) : (
            <>
              <div>
                {section.image && (
                  <div className="flex flex-row items-center justify-start gap-4 mb-6">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-16 h-16 object-cover"
                    />
                    <h2 className="text-4xl font-medium light-neon-text">{section.title}</h2>
                  </div>
                )}
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">{(section as any).content}</p>
            </>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-between items-center mt-8">
        {currentIndex > 0 ? (
          <button onClick={goPrev} aria-label="Anterior" title="Anterior">
            <div className="flex items-center gap-2 text-cyan-400 hover:scale-105 transition">
              <ArrowLeft size={28} />
              <span className="hidden sm:inline text-sm">{sections[currentIndex - 1].title}</span>
            </div>
          </button>
        ) : (
          <span />
        )}

        {currentIndex < sections.length - 1 ? (
          <button onClick={goNext} aria-label="Próximo" title="Próximo">
            <div className="flex items-center gap-2 text-cyan-400 hover:scale-105 transition">
              <span className="hidden sm:inline text-sm">{sections[currentIndex + 1].title}</span>
              <ArrowRight size={28} />
            </div>
          </button>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}
