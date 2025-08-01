import NeonCarousel from '@/components/shared/NeonCarousel';
import type { Section } from '@/lib/types';

export default function ContactFeature({ sections }: { sections: Section[] }) {
  return <NeonCarousel sections={sections} />;
}
