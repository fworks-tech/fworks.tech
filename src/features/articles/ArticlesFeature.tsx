'use client';

import { useState } from 'react';

import NeonCarousel from '@/components/shared/NeonCarousel';
import NeonScrollbarContainer from '@/components/shared/NeonScrollbarContainer';
import Card from '@/components/ui/Card';

import ArticlesContentSection from './components/ArticlesContentSection';

export default function ArticlesFeature({
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
    <Card
      variant="borderless"
      className="flex h-full flex-col items-center p-12"
      style={{ paddingTop: 0 }}
    >
      <NeonScrollbarContainer className="flex flex-col justify-center gap-4 text-center md:text-left">
        <ArticlesContentSection title={currentContent?.title} content={currentContent?.content} />
        <NeonCarousel sections={content} currentIndex={currentIndex} onSelect={setCurrentIndex} />
      </NeonScrollbarContainer>
    </Card>
  );
}
