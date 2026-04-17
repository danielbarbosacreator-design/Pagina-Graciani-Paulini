import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  ctx: string;
  description: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Bruna Fernandes',
    ctx: 'Mentoria Financeira · Empresária',
    description:
      'Essa Mentoria foi fundamental para alinharmos muitas coisas em 2024, em casal aprendemos que não existe meu dinheiro e o dinheiro do meu marido, e sim o dinheiro da família. A partir daí surgiram conversas maduras olho no olho. Conseguimos identificar nossos ganhos, gastos, dívidas, e traçamos metas de quitar as dívidas e realizar sonhos — e o primeiro sonho já aconteceu: a compra do nosso primeiro carro.',
  },
  {
    name: 'Larissa Lunelli',
    ctx: 'TransformaMente',
    description:
      'É essa profundidade que eu busco e que precisava para este momento de vida. Quero agradecer por você não nos permitir ficar no raso. É uma bênção encontrar pessoas que te ajudam ver o que você não consegue enxergar sozinha. Pessoas que te dão destino.',
  },
  {
    name: 'Jaqueline Balland',
    ctx: 'Inteligência Financeira',
    description:
      'Consegui ver a minha capacidade de crescimento, faturamento da empresa e o controle financeiro que há muito tempo não fazia corretamente. Pude ver o meu potencial como mãe, dona de casa e profissional. Gratidão de coração porque eu pude ver o meu potencial real.',
  },
  {
    name: 'Chandrieli Monica Neres',
    ctx: 'TransformaMente · Liderança',
    description:
      'A mentoria foi muito importante, comecei a organizar áreas da minha vida que nem sabia que existiam. Foi um grande avanço pra mim aprender a dizer não e falar quando algo não me agrada. Agora tenho planos e sei o caminho e o que preciso pra chegar lá.',
  },
];

const duplicated = [...testimonials, ...testimonials];

export function SlidingTestimonials() {
  return (
    <div
      className="flex relative overflow-hidden max-w-full"
      style={{
        maskImage:
          'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
      }}
    >
      <div className="flex animate-x-slider gap-5 w-max hover:[animation-play-state:paused]">
        {duplicated.map((t, i) => (
          <div
            key={i}
            className="flex flex-col bg-white/[0.02] border border-white/[0.04] rounded-2xl shrink-0 w-[480px] hover:border-gold/20 transition-colors duration-500 overflow-hidden"
          >
            <p className="px-8 py-8 font-serif italic text-[17px] text-white/55 leading-[1.75] flex-1">
              "{t.description}"
            </p>

            <div className="border-t border-white/[0.04] flex overflow-hidden">
              <div className="flex-1 flex gap-3 items-center px-6 py-4">
                <div className="w-9 h-9 rounded-full bg-gold/10 border border-gold/15 flex items-center justify-center flex-shrink-0">
                  <span className="font-serif text-sm text-gold/70 font-medium">{t.name[0]}</span>
                </div>
                <div className="flex flex-col">
                  <h5 className="text-[12px] font-semibold text-white/70 leading-tight">{t.name}</h5>
                  <p className="text-[10px] text-white/25 uppercase tracking-wider">{t.ctx}</p>
                </div>
              </div>

              <div className="w-[1px] bg-white/[0.04]" />

              <div className="flex items-center justify-center px-6 min-w-[110px]">
                <div className="flex flex-col items-center gap-1.5">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map(s => (
                      <Star key={s} size={10} fill="#C5A059" color="#C5A059" />
                    ))}
                  </div>
                  <span className="text-[8px] uppercase tracking-[0.15em] text-white/15 font-medium">Concluída</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
