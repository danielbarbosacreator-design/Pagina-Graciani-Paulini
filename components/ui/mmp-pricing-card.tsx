import React from 'react';
import { ArrowRight, Brain, Lightbulb, Heart, TrendingUp, Users, Compass, Sparkles, ShieldCheck, Zap, Lock, RefreshCcw } from 'lucide-react';
import { ShinyButton } from './shiny-button';

const modules = [
  { icon: <Brain size={17} strokeWidth={1.3} />, label: 'Equilíbrio emocional' },
  { icon: <Lightbulb size={17} strokeWidth={1.3} />, label: 'Mentalidade de crescimento' },
  { icon: <Heart size={17} strokeWidth={1.3} />, label: 'Poder da gratidão' },
  { icon: <TrendingUp size={17} strokeWidth={1.3} />, label: 'Administração de recursos' },
  { icon: <Users size={17} strokeWidth={1.3} />, label: 'Relacionamentos' },
  { icon: <Compass size={17} strokeWidth={1.3} />, label: 'Propósito' },
  { icon: <Sparkles size={17} strokeWidth={1.3} />, label: 'Abundância' },
];

export function MMPPricingCard() {
  return (
    <div className="rounded-3xl border border-gold/15 bg-white/[0.02] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] overflow-hidden">
      <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/[0.05]">

        {/* ── Left: Price + CTA ───────────────────────────────── */}
        <div className="p-10 lg:p-14 flex flex-col items-center justify-between text-center gap-7">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold/60 mb-2">
              Porta de Entrada
            </p>
            <h3 className="font-serif text-2xl font-medium text-white/80">
              Método Mentalidade Próspera
            </h3>
            <p className="text-[12px] text-white/30 font-light mt-1 tracking-wide">
              Treinamento gravado · 20 aulas
            </p>
          </div>

          {/* Preço */}
          <div className="flex flex-col items-center gap-0 w-full">
            {/* Valor principal */}
            <div className="flex items-end gap-1.5 relative">
              <div className="flex flex-col items-end mb-4 gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-white/25 line-through tracking-wide">R$ 197,00</span>
                  <span className="text-[10px] font-semibold text-gold/50 bg-gold/10 border border-gold/15 rounded-full px-2 py-0.5">-76%</span>
                </div>
                <span className="font-serif text-xl text-white/30 leading-none">R$</span>
              </div>
              <span
                className="font-serif font-semibold leading-none tabular-nums"
                style={{
                  fontSize: 'clamp(5.5rem, 14vw, 8.5rem)',
                  background: 'linear-gradient(135deg, #C5A059 0%, #E8D5A3 40%, #C5A059 60%, #937841 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                47
              </span>
              <span className="font-serif text-xl text-white/30 mb-4 leading-none">,90</span>
            </div>

            {/* Parcelamento */}
            <div className="flex items-center gap-2 bg-white/[0.02] border border-white/[0.04] rounded-full px-4 py-1.5 mt-3">
              <span className="text-[11px] text-white/30 tracking-wide">ou</span>
              <span className="text-[12px] font-medium text-white/50">2x de R$ 25,90</span>
              <span className="text-[10px] text-white/20">sem juros</span>
            </div>
          </div>

          <ShinyButton
            className="uppercase tracking-[0.1em] w-full justify-center"
            style={{ '--padding-x': '2rem', '--padding-y': '0.9rem' } as React.CSSProperties}
          >
            Iniciar Minha Mudança <ArrowRight size={15} />
          </ShinyButton>

          {/* Selos de credibilidade */}
          <div className="grid grid-cols-2 gap-2 w-full">
            {[
              { icon: <RefreshCcw size={13} strokeWidth={1.5} />, text: '7 dias de garantia' },
              { icon: <Zap size={13} strokeWidth={1.5} />, text: 'Acesso imediato' },
              { icon: <Lock size={13} strokeWidth={1.5} />, text: 'Pagamento seguro' },
              { icon: <ShieldCheck size={13} strokeWidth={1.5} />, text: 'Acesso vitalício' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/[0.02] border border-white/[0.04] rounded-lg px-3 py-2.5">
                <span className="text-gold/50 flex-shrink-0">{item.icon}</span>
                <span className="text-[11px] text-white/35 font-light">{item.text}</span>
              </div>
            ))}
          </div>

          <p className="text-[10px] text-white/20 font-light uppercase tracking-widest">
            Disponível na <span className="text-gold/50 font-medium">Kiwify</span>
          </p>
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
