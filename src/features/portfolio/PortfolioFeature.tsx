import NeonCarousel from '@/components/shared/NeonCarousel';
import NeonContainer from '@/components/ui/NeonContainer';
import type { Section } from '@/lib/types';

export default function PortfolioFeature({ sections }: { sections: Section[] }) {
  return (
    <NeonContainer>
      <NeonCarousel sections={sections} />
    </NeonContainer>
  );
}
