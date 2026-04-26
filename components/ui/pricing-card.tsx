import React, { useState } from 'react';
import { ArrowRight, Check, CreditCard, Smartphone, ShieldCheck, Zap, Lock, RefreshCcw, Copy, CheckCheck } from 'lucide-react';
import { ShinyButton } from './shiny-button';

function PixCopyButton() {
  return (
    <div className="flex items-center gap-1.5 mt-1">
      <span className="text-[10px] text-white/40 tracking-wider uppercase">Disponível via Pix e Boleto</span>
    </div>
  );
}

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
          <div className="p-10 lg:p-14 flex flex-col items-center justify-between text-center gap-7">
            <div>
              <h3 className="font-serif text-2xl font-medium text-white/80 mb-1">
                Mentoria TransformaMente
              </h3>
              <p className="text-[12px] text-white/30 font-light tracking-widest uppercase">
                8 Encontros · Presencial ou Online
              </p>
            </div>

            {/* Preço */}
            <div className="flex flex-col items-center w-full">
              {/* Valor riscado */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[13px] text-white/25 line-through tracking-wide">R$ 5.997,00</span>
                <span className="text-[10px] font-semibold text-gold/50 bg-gold/10 border border-gold/15 rounded-full px-2 py-0.5">-33%</span>
              </div>
              {/* Valor principal */}
              <div className="flex items-end gap-1.5">
                <span className="font-serif text-xl text-white/30 mb-4 leading-none">R$</span>
                <span
                  className="font-serif font-semibold leading-none tabular-nums"
                  style={{
                    fontSize: 'clamp(4rem, 10vw, 6rem)',
                    background: 'linear-gradient(135deg, #C5A059 0%, #E8D5A3 40%, #C5A059 60%, #937841 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  3.997
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/[0.02] border border-white/[0.04] rounded-full px-4 py-1.5 mt-3">
                <span className="text-[11px] text-white/30 tracking-wide">ou</span>
                <span className="text-[12px] font-medium text-white/50">12x de R$ 399,00</span>
                <span className="text-[10px] text-white/20">no cartão</span>
              </div>
            </div>

            <ShinyButton
              className="uppercase tracking-[0.1em] w-full justify-center"
              style={{ '--padding-x': '2rem', '--padding-y': '0.9rem' } as React.CSSProperties}
            >
              Quero Viver Essa Jornada <ArrowRight size={15} />
            </ShinyButton>

            {/* Selos de credibilidade */}
            <div className="grid grid-cols-2 gap-2 w-full">
              {[
                { icon: <RefreshCcw size={13} strokeWidth={1.5} />, text: '7 dias de garantia' },
                { icon: <Zap size={13} strokeWidth={1.5} />, text: 'Acesso imediato' },
                { icon: <Lock size={13} strokeWidth={1.5} />, text: 'Pagamento seguro' },
                { icon: <ShieldCheck size={13} strokeWidth={1.5} />, text: 'Vagas limitadas' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/[0.02] border border-white/[0.04] rounded-lg px-3 py-2.5">
                  <span className="text-gold/50 flex-shrink-0">{item.icon}</span>
                  <span className="text-[11px] text-white/35 font-light">{item.text}</span>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-white/20 font-light leading-[1.75] max-w-[200px]">
              Inclui Relatório Completo de Análise de Perfil · 50 páginas, impresso e colorido
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
                  'Clareza sobre quem você é',
                  'Posicionamento com firmeza',
                  'Liberdade emocional',
                  'Consciência dos seus bloqueios',
                  'Nova visão sobre si mesma',
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
                    <PixCopyButton />
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
