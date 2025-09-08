import dynamic from 'next/dynamic';

const AboutInteractive = dynamic(() => import('./components/AboutInteractive'), { ssr: false });

export default function AboutFeature({
  content
}: {
  content: {
    title: string;
    content: string;
    image?: string;
  }[];
}) {
  return <AboutInteractive content={content} />;
}
