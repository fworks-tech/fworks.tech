import { Section } from '@/lib/types';
import NeonCarousel from '@/components/shared/NeonCarousel';

export default function ArticlesFeature({ sections }: { sections: Section[] }) {
  return <NeonCarousel sections={sections} />;
}
