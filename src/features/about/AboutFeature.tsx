'use client';

import { useState } from 'react';

import NeonCarousel from '@/components/shared/NeonCarousel';
import NeonScrollbarContainer from '@/components/shared/NeonScrollbarContainer';
import Card from '@/components/ui/Card';

import AboutContentSection from './components/AboutContentSection';
import ImageSection from './components/ImageSection';

export default function AboutFeature({
  content
}: {
  content: { title: string; content: string; image?: string }[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentContent = content[currentIndex];

  return (
    <Card
      variant="borderless"
      className="flex h-full flex-col items-center p-12"
      style={{ paddingTop: 0 }}
    >
      <section className="flex w-full flex-col items-center gap-4 md:flex-row md:px-8">
        <ImageSection image={currentContent?.image} title={currentContent?.title} />

        <NeonScrollbarContainer className="flex flex-col justify-center gap-4 text-left">
          <AboutContentSection content={[currentContent]} />
        </NeonScrollbarContainer>
      </section>
      <NeonCarousel sections={content} currentIndex={currentIndex} onSelect={setCurrentIndex} />
    </Card>
  );
}
