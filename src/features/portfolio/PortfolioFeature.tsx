import dynamic from 'next/dynamic';

const PortfolioInteractive = dynamic(() => import('./components/PortfolioInteractive'), {
  ssr: false
});

export default function PortfolioFeature({
  content
}: {
  content: {
    title: string;
    content: string;
    image?: string;
  }[];
}) {
  return <PortfolioInteractive content={content} />;
}
