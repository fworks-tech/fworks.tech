import { Section } from '@/lib/types';
import NeonCarousel from '@/components/shared/NeonCarousel';

export default function PortfolioFeature({ sections }: { sections: Section[] }) {
  return <NeonCarousel sections={sections} />;
}
