import React from 'react';
import { ArrowRight, Brain, Lightbulb, Heart, TrendingUp, Users, Compass, Sparkles } from 'lucide-react';
import { ShinyButton } from './shiny-button';

const modules = [
  { icon: <Brain size={17} strokeWidth={1.3} />, label: 'Mente e Corpo equilibrados' },
  { icon: <Lightbulb size={17} strokeWidth={1.3} />, label: 'Mentalidade de Possibilidades' },
  { icon: <Heart size={17} strokeWidth={1.3} />, label: 'Poder da Gratidão real' },
  { icon: <TrendingUp size={17} strokeWidth={1.3} />, label: 'Administração de Recursos' },
  { icon: <Users size={17} strokeWidth={1.3} />, label: 'Relacionamentos Saudáveis' },
  { icon: <Compass size={17} strokeWidth={1.3} />, label: 'Propósito e Legado' },
  { icon: <Sparkles size={17} strokeWidth={1.3} />, label: 'Abundância e Transbordo' },
];

export function MMPPricingCard() {
  return (
    <div className="rounded-3xl border border-gold/15 bg-white/[0.02] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] overflow-hidden">
      <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/[0.05]">

        {/* ── Left: Price + CTA ───────────────────────────────── */}
        <div className="p-10 lg:p-14 flex flex-col items-center justify-center text-center gap-8">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold/60 mb-2">
              Acesso Imediato
            </p>
            <h3 className="font-serif text-2xl font-medium text-white/80">
              Método Mentalidade Próspera
            </h3>
            <p className="text-[12px] text-white/30 font-light mt-1 tracking-wide">
              Treinamento gravado · 20 aulas
            </p>
          </div>

          <div className="flex items-start gap-1.5">
            <span className="font-serif text-lg text-white/30 mt-2 leading-none">R$</span>
            <span
              className="font-serif font-semibold leading-none tabular-nums"
              style={{
                fontSize: 'clamp(4.5rem, 12vw, 6.5rem)',
                background: 'linear-gradient(135deg, #C5A059 0%, #E8D5A3 40%, #C5A059 60%, #937841 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              47
            </span>
          </div>

          <ShinyButton
            className="uppercase tracking-[0.1em]"
            style={{ '--padding-x': '2rem', '--padding-y': '0.9rem' } as React.CSSProperties}
          >
            Iniciar Minha Mudança <ArrowRight size={15} />
          </ShinyButton>

          <div className="space-y-1.5 text-center">
            <p className="text-[11px] text-white/20 font-light tracking-wide">
              20 aulas gravadas · Acesso vitalício
            </p>
            <p className="text-[10px] text-white/15 font-light uppercase tracking-widest">
              Disponível na Kiwify
            </p>
          </div>
        </div>

        {/* ── Right: Module list ──────────────────────────────── */}
        <div className="p-10 lg:p-14 flex flex-col justify-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/25 mb-7">
            O que você aprende
          </p>
          <ul className="space-y-3">
            {modules.map((m, i) => (
              <li
                key={i}
                className="flex items-center gap-4 p-4 bg-white/[0.02] border border-white/[0.04] rounded-xl group hover:border-gold/15 hover:bg-white/[0.04] transition-all duration-500"
              >
                <span className="text-gold/40 group-hover:text-gold/70 transition-colors flex-shrink-0">
                  {m.icon}
                </span>
                <span className="text-[13px] font-medium text-white/55">{m.label}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
