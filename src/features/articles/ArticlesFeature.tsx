import { Section } from '@/lib/types';
import NeonCarousel from '@/components/shared/NeonCarousel';
import NeonContainer from '@/components/ui/NeonContainer';

export default function ArticlesFeature({ sections }: { sections: Section[] }) {
  return (
    <NeonContainer>
      <NeonCarousel sections={sections} />
    </NeonContainer>
  );
}
