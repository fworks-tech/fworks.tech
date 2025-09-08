import dynamic from 'next/dynamic';

const ArticlesInteractive = dynamic(() => import('./components/ArticlesInteractive'), {
  ssr: false
});

export default function ArticlesFeature({
  content
}: {
  content: {
    title: string;
    content: string;
    image?: string;
  }[];
}) {
  return <ArticlesInteractive content={content} />;
}
