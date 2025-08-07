'use client';

import { useState } from 'react';

import NeonCarousel from '@/components/shared/NeonCarousel';
import NeonScrollbarContainer from '@/components/shared/NeonScrollbarContainer';
import Card from '@/components/ui/Card';

import PortfolioContentSection from './components/PortfolioContentSection';

export default function ArticlesFeature({
  content
}: {
  content: { title: string; content: string; image?: string }[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentContent = content[currentIndex];

  return (
    <Card variant="borderless">
      <section className="mx-4 mt-2 grid grid-cols-1 gap-2 md:grid-cols-[340px_1fr] md:px-12">
        <NeonScrollbarContainer className="flex flex-col justify-center gap-4 text-center md:text-left">
          <PortfolioContentSection
            title={currentContent?.title}
            content={currentContent?.content}
          />
          <NeonCarousel sections={content} currentIndex={currentIndex} onSelect={setCurrentIndex} />
        </NeonScrollbarContainer>
      </section>
    </Card>
  );
}
