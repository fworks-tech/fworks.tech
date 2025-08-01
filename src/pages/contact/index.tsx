import { useState } from 'react';

import Card from '@/components/ui/Card';

const carouselItems = [
  {
    text: 'Sou um desenvolvedor com mais de 10 anos de experiência em tecnologia, especializado na criação de aplicações web escaláveis, acessíveis e performáticas. Tenho paixão por resolver problemas complexos com soluções simples e elegantes. Já atuei em projetos internacionais, liderando times e colaborando com equipes multidisciplinares.'
  },
  {
    text: 'Tenho experiência com React, Next.js, Node.js, TypeScript, e diversas outras tecnologias modernas. Gosto de aprender coisas novas e compartilhar conhecimento com a comunidade.'
  },
  {
    text: 'Além de programar, curto música, games e explorar novas tendências em design e tecnologia.'
  }
];

export default function Contact() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? carouselItems.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === carouselItems.length - 1 ? 0 : i + 1));

  return (
    <div className="flex w-full flex-col gap-4 px-6 sm:px-10 lg:px-20">
      <h1 className="mb-8 text-balance text-4xl tracking-tighter text-gray-300 sm:text-5xl lg:text-5xl">
        About
      </h1>
      <Card>
        <section className="h-50-lg mx-auto flex max-w-4xl flex-col items-center px-4 text-center">
          <p className="mb-4 text-lg text-gray-300">{carouselItems[index].text}</p>
          <div className="flex justify-center gap-4">
            <button
              onClick={prev}
              className="rounded bg-cyan-900 px-4 py-2 text-white transition hover:bg-cyan-700"
              aria-label="Anterior"
            >
              &#8592;
            </button>
            <button
              onClick={next}
              className="rounded bg-cyan-900 px-4 py-2 text-white transition hover:bg-cyan-700"
              aria-label="Próximo"
            >
              &#8594;
            </button>
          </div>
        </section>
      </Card>
    </div>
  );
}
