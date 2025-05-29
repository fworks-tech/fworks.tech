import { useState } from 'react';
import Card from '@/components/ui/Card';

const carouselItems = [
  {
    text: 'Sou um desenvolvedor com mais de 10 anos de experiência em tecnologia, especializado na criação de aplicações web escaláveis, acessíveis e performáticas. Tenho paixão por resolver problemas complexos com soluções simples e elegantes. Já atuei em projetos internacionais, liderando times e colaborando com equipes multidisciplinares.',
  },
  {
    text: 'Tenho experiência com React, Next.js, Node.js, TypeScript, e diversas outras tecnologias modernas. Gosto de aprender coisas novas e compartilhar conhecimento com a comunidade.',
  },
  {
    text: 'Além de programar, curto música, games e explorar novas tendências em design e tecnologia.',
  },
];

export default function Contact() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? carouselItems.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === carouselItems.length - 1 ? 0 : i + 1));

  return (
    <div className="flex flex-col gap-4 w-full px-6 sm:px-10 lg:px-20">
      <h1 className="text-gray-300 mb-8 text-4xl tracking-tighter text-balance sm:text-5xl lg:text-5xl">
        About
      </h1>
      <Card>
        <section className="max-w-4xl mx-auto text-center px-4 h-50-lg flex flex-col items-center">
          <p className="text-gray-300 text-lg mb-4">{carouselItems[index].text}</p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={prev}
              className="px-4 py-2 rounded bg-cyan-900 text-white hover:bg-cyan-700 transition"
              aria-label="Anterior"
            >
              &#8592;
            </button>
            <button
              onClick={next}
              className="px-4 py-2 rounded bg-cyan-900 text-white hover:bg-cyan-700 transition"
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
