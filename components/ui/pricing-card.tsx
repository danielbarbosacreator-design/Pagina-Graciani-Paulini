import React from 'react';
import { ArrowRight, Check, CreditCard, Smartphone } from 'lucide-react';
import { ShinyButton } from './shiny-button';

export function TransformaMentePricing() {
  return (
    <div className="relative">
      {/* Popular badge */}
      <div className="absolute inset-x-0 -top-3.5 flex justify-center z-10">
        <span className="flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[10px] font-semibold tracking-[0.2em] uppercase"
          style={{ background: 'linear-gradient(135deg, #937841 0%, #E0C882 50%, #937841 100%)', color: '#0A0A0A' }}>
          Inscrições Abertas
        </span>
      </div>

      <div className="rounded-3xl border border-gold/20 bg-white/[0.02] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)] overflow-hidden">
        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/[0.05]">

          {/* ── Left: Price + CTA ───────────────────────────────── */}
          <div className="p-10 lg:p-14 flex flex-col items-center justify-center text-center gap-8">
            <div>
              <h3 className="font-serif text-2xl font-medium text-white/80 mb-1">
                Mentoria TransformaMente
              </h3>
              <p className="text-[12px] text-white/30 font-light tracking-widest uppercase">
                8 Encontros · Presencial ou Online
              </p>
            </div>

            <div className="flex items-start gap-1.5">
              <span className="font-serif text-lg text-white/30 mt-3 leading-none">R$</span>
              <span
                className="font-serif font-semibold leading-none tabular-nums"
                style={{
                  fontSize: 'clamp(4rem, 10vw, 5.5rem)',
                  background: 'linear-gradient(135deg, #C5A059 0%, #E8D5A3 40%, #C5A059 60%, #937841 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                3.997
              </span>
            </div>

            <ShinyButton
              className="uppercase tracking-[0.1em]"
              style={{ '--padding-x': '2rem', '--padding-y': '0.9rem' } as React.CSSProperties}
            >
              Quero Viver Essa Jornada <ArrowRight size={15} />
            </ShinyButton>

            <p className="text-[11px] text-white/20 font-light leading-[1.75] max-w-[200px]">
              Inclui Relatório Completo de Análise de Perfil — 50 páginas, impresso e colorido
            </p>
          </div>

          {/* ── Right: Benefits + Payment ───────────────────────── */}
          <div className="p-10 lg:p-14 flex flex-col justify-between gap-10">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/25 mb-6">
                O que você vai conquistar
              </p>
              <ul className="space-y-4">
                {[
                  'Mais clareza sobre quem você é',
                  'Ferramentas para se posicionar com amor e firmeza',
                  'Liberdade emocional plena',
                  'Consciência das suas forças e do que te paralisa',
                  'Nova visão sobre si mesma, real, leve e verdadeira',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check
                      size={12}
                      className="text-gold/70 mt-1 flex-shrink-0"
                      strokeWidth={2.5}
                    />
                    <span className="text-[13px] text-white/50 font-light leading-[1.65]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-8" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/20 mb-4">
                Formas de Pagamento
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-4 bg-white/[0.02] border border-white/[0.04] rounded-xl">
                  <CreditCard size={15} className="text-gold/50 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-[12px] font-semibold text-white/60">Cartão em até 12x</p>
                    <p className="text-[11px] text-white/25 font-light">
                      Link enviado direto no WhatsApp
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/[0.02] border border-white/[0.04] rounded-xl">
                  <Smartphone size={15} className="text-gold/50 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-[12px] font-semibold text-white/60">
                      Pix à Vista · Vaga Prioritária
                    </p>
                    <p className="text-[10px] text-gold/50 font-mono mt-0.5">
                      58.982.139/0001-168
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
