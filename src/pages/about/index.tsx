import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

import AboutFeature from '@/features/about/AboutFeature';
import type { Section } from '@/lib/types';

const contentDir = path.join(process.cwd(), 'content/about');

function getAboutSections(): Section[] {
  const files = fs.readdirSync(contentDir);

  return files
    .map((filename) => {
      const filePath = path.join(contentDir, filename);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContent);

      return {
        id: data.id,
        title: data.title,
        image: data.image,
        order: data.order,
        content: content.trim()
      } as Section;
    })
    .sort((a, b) => a.order - b.order);
}

export async function getStaticProps() {
  const sections = getAboutSections();
  return {
    props: { sections }
  };
}

export default function About({ sections }: { sections: Section[] }) {
  return <AboutFeature sections={sections} />;
}
