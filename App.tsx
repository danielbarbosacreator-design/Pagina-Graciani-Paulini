import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight, CheckCircle2, Clock, Target,
  TrendingUp, BookOpen, Award, MapPin, Calendar,
  Lock, Instagram, Mail, MessageSquare, Star, Menu
} from 'lucide-react';
import { ShinyButton } from './components/ui/shiny-button';
import { GlowCard } from './components/ui/spotlight-card';
import { SlidingTestimonials } from './components/ui/sliding-testimonial';
import { TransformaMentePricing } from './components/ui/pricing-card';
import { MMPPricingCard } from './components/ui/mmp-pricing-card';
import { BeamsBackground } from './components/ui/beams-background';

/* ============================================================
   GRACIANE PAULINI — LANDING PAGE PREMIUM
   ============================================================ */

const COUNTDOWN_TARGET = new Date('2026-05-02T20:00:00');

const useCountdown = (target: Date) => {
  const calc = () => {
    const diff = Math.max(0, target.getTime() - Date.now());
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const t = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(t);
  }, []);
  return time;
};

const G = ({ children }: { children: React.ReactNode }) => (
  <span className="gold-text">{children}</span>
);

const SectionDivider = () => <div className="section-divider" />;

// ─── NAVBAR ──────────────────────────────────────────────────

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  const links = [
    { label: 'Raio X', id: 'raiox' },
    { label: 'Mentoria', id: 'transformamente' },
    { label: 'A Mentora', id: 'mentora' },
    { label: 'Depoimentos', id: 'depoimentos' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#0A0A0A]/92 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-container mx-auto px-6 lg:px-8 flex justify-between items-center">
        <button onClick={() => go('hero')} className="font-serif text-xl tracking-[0.15em] font-semibold text-white uppercase">
          Paulini
        </button>
        <div className="hidden lg:flex items-center gap-10">
          {links.map(l => (
            <button key={l.id} onClick={() => go(l.id)} className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/40 hover:text-gold transition-colors duration-300">
              {l.label}
            </button>
          ))}
          <ShinyButton onClick={() => go('mmp')} className="uppercase tracking-[0.12em]" style={{ '--padding-x': '1.75rem', '--padding-y': '0.6rem', '--font-size': '0.6875rem' } as React.CSSProperties}>
            Começar
          </ShinyButton>
        </div>
        <button onClick={() => setOpen(!open)} className="lg:hidden text-white/60"><Menu size={22} /></button>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-0 bg-[#0A0A0A]/98 backdrop-blur-xl z-[60] flex flex-col items-center justify-center gap-10">
          {links.map(l => <button key={l.id} onClick={() => go(l.id)} className="font-serif text-2xl text-white/80">{l.label}</button>)}
          <ShinyButton onClick={() => go('mmp')} className="uppercase tracking-wider mt-4">Começar</ShinyButton>
          <button onClick={() => setOpen(false)} className="mt-6 text-[10px] uppercase tracking-widest text-white/30 border border-white/10 rounded-full px-6 py-2">Fechar</button>
        </div>
      )}
    </nav>
  );
};

// ─── HERO ────────────────────────────────────────────────────

const Hero = () => {
  const time = useCountdown(COUNTDOWN_TARGET);
  const pad = (n: number) => String(n).padStart(2, '0');
  const contentRef = useRef<HTMLDivElement>(null);

  // Scroll blur + parallax
  useEffect(() => {
    const onScroll = () => {
      if (!contentRef.current) return;
      const hero = document.getElementById('hero');
      if (!hero) return;
      const limit = hero.offsetHeight * 0.55;
      const t = Math.min(window.scrollY / limit, 1);
      const ease = t * t; // quadratic ease-in for smoother feel
      contentRef.current.style.filter    = `blur(${(ease * 7).toFixed(2)}px)`;
      contentRef.current.style.opacity   = `${1 - ease * 0.55}`;
      contentRef.current.style.transform = `translateY(${ease * -36}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <BeamsBackground intensity="medium" className="bg-[#0A0A0A]">
      <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-20">

        {/* ── Content (blur on scroll) ── */}
        <div
          ref={contentRef}
          className="max-w-container mx-auto px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-16 lg:gap-20 items-center relative z-10"
          style={{ willChange: 'filter, opacity, transform' }}
        >
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">

            <div
              className="hero-enter inline-flex items-center gap-2 px-4 py-1.5 border border-gold/15 rounded-full text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50"
              style={{ animationDelay: '0.1s' }}
            >
              <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
              Inteligência Estratégica
            </div>

            <div className="hero-enter" style={{ animationDelay: '0.3s' }}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-gold mb-3">Paulini</p>
              <h1 className="font-serif text-[clamp(2.8rem,6vw,5rem)] font-semibold leading-[0.95] tracking-[-0.02em]">
                <G>Raio X</G><br />
                Mentoria
              </h1>
            </div>

            <p className="hero-enter text-[15px] lg:text-base text-white/50 font-light leading-[1.85] max-w-lg mx-auto lg:mx-0" style={{ animationDelay: '0.5s' }}>
              Análise profunda da sua realidade. Clareza, metas e direção prática para esta estação da vida.
            </p>

            <div className="hero-enter flex items-end gap-3 justify-center lg:justify-start" style={{ animationDelay: '0.7s' }}>
              {[
                { v: pad(time.days), l: 'DIAS' },
                { v: pad(time.hours), l: 'HRS' },
                { v: pad(time.minutes), l: 'MIN' },
                { v: pad(time.seconds), l: 'SEG' },
              ].map(({ v, l }, i) => (
                <React.Fragment key={l}>
                  <div className="flex flex-col items-center">
                    <span className="font-serif text-4xl lg:text-5xl font-medium leading-none gold-text tabular-nums">{v}</span>
                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30 mt-1">{l}</span>
                  </div>
                  {i < 3 && <span className="font-serif text-2xl text-gold/40 pb-5">:</span>}
                </React.Fragment>
              ))}
            </div>

            <div className="hero-enter" style={{ animationDelay: '0.88s' }}>
              <ShinyButton onClick={() => document.getElementById('raiox')?.scrollIntoView({ behavior: 'smooth' })} className="uppercase tracking-[0.1em]">
                Me Inscrever Agora <ArrowRight size={16} />
              </ShinyButton>
            </div>
          </div>

          <div className="hero-enter order-1 lg:order-2 relative flex justify-center lg:justify-end" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full max-w-[400px]">
              <div className="absolute -inset-8 bg-gold/8 blur-[80px] rounded-full pointer-events-none z-0" />
              <GlowCard customSize glowColor="gold" className="w-full aspect-[3/4]">
                <div className="absolute inset-0">
                  <img src="/images/graciane.jpg" alt="Graciane Paulini" className="w-full h-full object-cover object-top brightness-[0.9] contrast-[1.05]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
                </div>
              </GlowCard>
              <div className="absolute -bottom-3 -right-3 w-24 h-[1px] bg-gradient-to-r from-gold/40 to-gold-light/20" />
              <div className="absolute -bottom-3 -right-3 w-[1px] h-16 bg-gradient-to-b from-gold/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </BeamsBackground>
  );
};

// ─── MENTE PRÓSPERA ───────────────────────────────────────────

const MenteProspera = () => (
  <section className="relative py-28 lg:py-36 mesh-cool overflow-hidden">
    <div className="glow-gold" style={{ top: '50%', right: '-200px', transform: 'translateY(-50%)' }} />

    <div className="max-w-container mx-auto px-6 lg:px-8 reveal relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-gold text-[10px] font-semibold uppercase tracking-[0.3em] mb-6 block">Mentoria Exclusiva</span>
        <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[0.95] mb-8">
          <G>Mente</G><br />Próspera
        </h2>
        <blockquote className="font-serif italic text-xl lg:text-2xl text-white/50 leading-relaxed mb-8">
          "Como eu me vejo, Eu vejo o mundo!"
        </blockquote>
        <p className="text-white/45 text-[15px] leading-[1.85] font-light mb-12 max-w-xl mx-auto">
          Aprenda a ver infinitas possibilidades de viver uma vida próspera, mudando sua mente e colocando em prática pequenas atividades que mudarão seu destino.
        </p>
        <ShinyButton onClick={() => document.getElementById('mmp')?.scrollIntoView({ behavior: 'smooth' })} className="uppercase tracking-[0.1em]">
          Me Inscrever Agora <ArrowRight size={16} />
        </ShinyButton>
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/20 mt-5">Vagas Limitadas Para Esta Turma</p>
      </div>
    </div>
  </section>
);

// ─── RAIO X ──────────────────────────────────────────────────

const RaioX = () => (
  <section id="raiox" className="relative py-28 lg:py-36 bg-elevated overflow-hidden">
    <div className="glow-warm" style={{ top: '50%', right: '-200px', transform: 'translateY(-50%)' }} />

    <div className="max-w-container mx-auto px-6 lg:px-8 reveal relative z-10">
      <div className="max-w-3xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/25 mb-1">Graciane Paulini</p>
            <span className="text-gold text-[10px] font-semibold uppercase tracking-[0.3em] mb-6 block">Análise Inicial</span>
            <h2 className="font-serif text-[clamp(2rem,4.5vw,3rem)] font-medium leading-[1.05] mb-8">
              Raio X da<br /><span className="italic"><G>Realidade</G></span>
            </h2>
            <p className="text-white/45 text-[15px] leading-[1.85] font-light mb-10">
              Um encontro exclusivo para uma análise profunda da sua situação atual. Receba instruções e direção claras sobre metas e objetivos coerentes com as suas prioridades para esta estação da vida.
            </p>
            <div className="space-y-4 mb-12">
              {[
                'Análise detalhada do momento atual',
                'Instruções práticas para metas imediatas',
                'Alinhamento com prioridades de vida',
                'Direcionamento conforme sua disposição em agir',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3.5">
                  <CheckCircle2 size={15} className="text-gold/50 mt-1 flex-shrink-0" strokeWidth={2} />
                  <span className="text-[13px] text-white/45 font-light leading-[1.6]">{item}</span>
                </div>
              ))}
            </div>
            <ShinyButton className="uppercase tracking-[0.1em]">
              Aplicar para Análise <ArrowRight size={16} />
            </ShinyButton>
          </div>

          <div className="lg:col-span-2 space-y-3">
            {[
              { n: '01', t: 'Clareza Absoluta' },
              { n: '02', t: 'Ação Direcionada' },
              { n: '03', t: 'Resultados Reais' },
              { n: '04', t: 'Foco no Essencial' },
            ].map((c, i) => (
              <div key={i} className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-7 flex items-center gap-6 group hover:border-gold/15 hover:bg-white/[0.04] transition-all duration-500">
                <span className="font-serif text-3xl font-light text-white/[0.06] group-hover:text-gold/25 transition-colors">{c.n}</span>
                <h4 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/60">{c.t}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ─── INTELIGÊNCIA FINANCEIRA ─────────────────────────────────

const Finance = () => (
  <section className="relative py-28 lg:py-36 mesh-warm overflow-hidden">
    <div className="glow-gold" style={{ top: '30%', left: '-200px' }} />

    <div className="max-w-container mx-auto px-6 lg:px-8 reveal relative z-10">
      <div className="max-w-4xl mx-auto">
        <span className="text-gold text-[10px] font-semibold uppercase tracking-[0.3em] mb-6 block">Mentoria Exclusiva</span>
        <h2 className="font-serif text-[clamp(2rem,4.5vw,3.2rem)] font-medium leading-[1.05] mb-8">
          Inteligência<br /><span className="italic"><G>Financeira</G></span>
        </h2>
        <blockquote className="border-l-[2px] border-gold/40 pl-6 mb-10 max-w-2xl">
          <p className="font-serif italic text-lg text-white/50 leading-relaxed">
            "Não é sobre quanto você ganha, é sobre como você gerencia o que tem e a mentalidade que constrói para transbordar."
          </p>
        </blockquote>
        <div className="inline-flex items-center gap-4 mb-14">
          <span className="font-serif text-5xl font-medium leading-none gold-text">5</span>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/60">Encontros</p>
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/60">Estratégicos</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {[
            { t: 'Cura da Escassez', d: 'Identificação e quebra de crenças limitantes sobre dinheiro.' },
            { t: 'Pilar da Riqueza', d: 'Construção de uma base sólida para multiplicação de recursos.' },
            { t: 'Gestão Inteligente', d: 'Plano de ação focado em clareza, honestidade e propósitos.' },
            { t: 'Fluxo de Abundância', d: 'Alinhamento de prioridades para os próximos 6 meses.' },
            { t: 'Dinâmica de Casal', d: 'Especial para alinhar metas e sonhos em comum.' },
            { t: 'Transbordo', d: 'Ocupar seu lugar no mundo através da prosperidade integral.' },
          ].map((m, i) => (
            <div key={i} className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-7 group hover:border-gold/20 hover:bg-white/[0.04] transition-all duration-500">
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/80 mb-3">{m.t}</h4>
              <p className="text-[12px] text-white/30 font-light leading-relaxed">{m.d}</p>
            </div>
          ))}
        </div>

        <ShinyButton className="uppercase tracking-[0.1em]">
          Quero Marcar Minha Mentoria <ArrowRight size={16} />
        </ShinyButton>
      </div>
    </div>
  </section>
);

// ─── TRANSFORMAMENTE ─────────────────────────────────────────

const TransformaMente = () => (
  <section id="transformamente" className="relative py-28 lg:py-36 bg-deep overflow-hidden">
    <div className="glow-gold" style={{ top: '-100px', right: '-200px' }} />
    <div className="glow-warm" style={{ bottom: '-200px', left: '-100px' }} />
    <div className="light-beam" style={{ left: '80%', top: 0 }} />

    <div className="max-w-container mx-auto px-6 lg:px-8 reveal relative z-10">
      <div className="max-w-4xl mx-auto">
        <span className="text-gold text-[10px] font-semibold uppercase tracking-[0.3em] mb-6 block">Inscrições Abertas · 8 Encontros</span>
        <h2 className="font-serif text-[clamp(2rem,4.5vw,3.5rem)] font-medium leading-[1.05] mb-8">
          Mentoria<br /><span className="italic"><G>TransformaMente</G></span>
        </h2>
        <blockquote className="border-l-[2px] border-gold/40 pl-6 mb-10 max-w-2xl">
          <p className="font-serif italic text-base text-white/50 leading-relaxed">
            "A verdade é: a gente só se cura quando se conhece. Para me tornar quem Deus me criou para ser, preciso sair do piloto automático e começar a viver a partir da essência dEle em mim!"
          </p>
        </blockquote>
        <div className="space-y-3 mb-14">
          {[
            'Presencial em Joinville ou Online via Meet',
            '8° Encontro: Encerramento com Palestra e Café',
            'Inclui Relatório de Perfil com 50 páginas',
          ].map((t, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle2 size={14} className="text-gold/50 flex-shrink-0" strokeWidth={2} />
              <span className="text-[13px] text-white/50 font-light">{t}</span>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <TransformaMentePricing />
        </div>

        <div className="flex items-center gap-4 mb-10">
          <div className="w-8 h-[1px] bg-gradient-to-r from-gold/40 to-transparent" />
          <span className="text-[10px] text-white/25 font-semibold uppercase tracking-[0.2em]">Os 8 Pilares</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { n: '01', t: 'Perfil Natural e Adaptado', d: 'Sua essência x o que você se tornou para agradar.' },
            { n: '02', t: 'Potencialidades e Valores', d: 'O que te move e quais são seus motivadores reais.' },
            { n: '03', t: 'Bloqueios Emocionais', d: 'Trabalhar medos e travas que impedem seu crescimento.' },
            { n: '04', t: 'Tipos Psicológicos', d: 'Pontos a desenvolver e sua forma de perceber o mundo.' },
            { n: '05', t: 'Quadro dos Sonhos', d: 'Integridade, honra e gratidão como base para o futuro.' },
            { n: '06', t: 'Raio X Financeiro', d: 'Sua relação com dinheiro espelha sua vida íntima.' },
            { n: '07', t: 'Princípios da Riqueza', d: 'Dinheiro, prosperidade e transbordo real.' },
            { n: '08', t: 'Expectativa x Disposição', d: 'CNV, encerramento com Palestra e Café.' },
          ].map((p, i) => (
            <div key={i} className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-6 group hover:border-gold/15 hover:bg-white/[0.04] transition-all duration-500">
              <span className="font-serif text-2xl font-light text-white/[0.05] group-hover:text-gold/20 transition-colors block mb-3 leading-none">{p.n}</span>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.08em] text-white/60 leading-snug mb-2">{p.t}</h4>
              <p className="text-[11px] text-white/25 font-light leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ─── MMP ─────────────────────────────────────────────────────

const MMP = () => (
  <section id="mmp" className="relative py-28 lg:py-36 mesh-cool overflow-hidden">
    <div className="glow-warm" style={{ bottom: '-100px', left: '-200px' }} />
    <div className="light-beam" style={{ left: '30%', top: 0 }} />

    <div className="max-w-container mx-auto px-6 lg:px-8 reveal relative z-10">
      <div className="mb-6">
        <span className="text-gold text-[10px] font-semibold uppercase tracking-[0.3em] mb-6 block">Porta de Entrada</span>
        <h2 className="font-serif text-[clamp(2rem,4.5vw,3.2rem)] font-medium leading-[1.1] mb-6">
          Método<br /><span className="italic"><G>Mentalidade Próspera</G></span>
        </h2>
        <p className="text-white/45 text-[15px] leading-[1.85] font-light max-w-2xl">
          A forma de pensar, sentir e agir que cria abundância em todas as áreas da vida. Um treinamento gravado completo para você dar o primeiro passo.
        </p>
      </div>

      <div className="mb-20">
        <MMPPricingCard />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { a: 'Comece', b: 'por Aqui' },
          { a: 'Um Novo', b: 'Começo' },
          { a: 'Clareza Para', b: 'Prosperar' },
          { a: 'Bônus', b: 'Especiais' },
        ].map((c, i) => (
          <div key={i} className="bg-white/[0.02] border border-white/[0.04] rounded-2xl p-8 group hover:border-gold/15 hover:bg-white/[0.04] transition-all duration-500 flex flex-col justify-between aspect-square">
            <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-gold/30">Método Mentalidade Próspera</p>
            <div>
              <h4 className="font-serif text-2xl font-medium text-white/80 leading-tight">{c.a}</h4>
              <h4 className="font-serif text-2xl font-medium leading-tight gold-text">{c.b}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── DEPOIMENTOS ─────────────────────────────────────────────

const Testimonials = () => (
  <section id="depoimentos" className="relative py-28 lg:py-36 bg-elevated overflow-hidden">
    <div className="glow-warm" style={{ top: '-150px', left: '50%', transform: 'translateX(-50%)' }} />

    <div className="reveal relative z-10">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <span className="text-gold text-[10px] font-semibold uppercase tracking-[0.3em] mb-6 block">Depoimentos Reais</span>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.2rem)] font-medium leading-[1.1]">
            Histórias de<br /><span className="italic"><G>Transformação</G></span>
          </h2>
        </div>
      </div>

      <div className="mb-16 px-0">
        <SlidingTestimonials />
      </div>

      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center gap-3">
          <div className="flex gap-1">{[1,2,3,4,5].map(i => <Star key={i} size={13} fill="#C5A059" color="#C5A059" />)}</div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-medium">+10.000 atendimentos realizados</p>
        </div>
      </div>
    </div>
  </section>
);

// ─── MENTORA ─────────────────────────────────────────────────

const Mentora = () => (
  <section id="mentora" className="relative py-28 lg:py-36 mesh-warm overflow-hidden">
    <div className="glow-gold" style={{ top: '-100px', left: '-200px' }} />
    <div className="glow-warm" style={{ bottom: '-100px', right: '-200px' }} />
    <div className="light-beam" style={{ left: '50%', top: 0 }} />

    <div className="max-w-container mx-auto px-6 lg:px-8 reveal relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="relative">
          <div className="absolute -inset-12 bg-gold/5 blur-[100px] rounded-full pointer-events-none z-0" />
          <GlowCard customSize glowColor="gold" className="relative z-10 w-full aspect-[3/4] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]">
            <div className="absolute inset-0">
              <img src="/images/graciane.jpg" alt="Graciane Paulini" className="w-full h-full object-cover object-top brightness-[0.9] contrast-[1.05]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent" />
            </div>
          </GlowCard>
          <div className="absolute -bottom-3 -left-3 w-20 h-[1px] bg-gradient-to-r from-gold/40 to-transparent" />
          <div className="absolute -bottom-3 -left-3 w-[1px] h-12 bg-gradient-to-b from-gold/40 to-transparent" />
        </div>

        <div>
          <div className="flex items-center gap-4 mb-8">
            <span className="font-serif text-4xl font-light gold-text leading-none">+10k</span>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">Atendimentos Reais</p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold/50">Propósito & Destino</p>
            </div>
          </div>

          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.2rem)] font-medium leading-[1.05] mb-10">
            Graciane<br /><span className="italic"><G>Paulini</G></span>
          </h2>

          <div className="space-y-5 mb-10">
            <p className="text-[15px] text-white/70 font-normal leading-[1.85]">
              Mentora de Inteligência Emocional e Financeira. Minha razão de viver é amar a Deus sobre todas as coisas, a mim mesma e ao meu próximo. Viver o melhor da vida aqui e agora, ensinando a transformação de mentalidade com pequenas ações colocadas em prática todos os dias.
            </p>
            <p className="text-[15px] text-white/45 font-light leading-[1.85]">
              Com mais de 22 anos de experiência comercial, desenvolvi uma escuta ativa e soluções personalizadas, capacitando pessoas para melhorar seu estilo de vida e, principalmente, ser feliz no caminho.
            </p>
          </div>

          <blockquote className="border-l-[2px] border-gold/40 pl-6 mb-10">
            <p className="font-serif italic text-lg text-white/50 leading-relaxed">
              "A verdadeira prosperidade financeira é consequência de seu autoconhecimento, da sua cura interior e da forma como se posiciona na vida."
            </p>
          </blockquote>

          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: <Award size={16} strokeWidth={1.5} />, label: '+22 Anos Varejo & Indústria' },
              { icon: <BookOpen size={16} strokeWidth={1.5} />, label: 'Coach Ikigai · Propósito' },
              { icon: <Target size={16} strokeWidth={1.5} />, label: 'Analista de Perfil Comportamental' },
              { icon: <TrendingUp size={16} strokeWidth={1.5} />, label: 'Finanças Comportamentais' },
            ].map((c, i) => (
              <div key={i} className="flex items-center gap-3 py-3 px-4 bg-white/[0.03] border border-white/[0.04] rounded-lg">
                <span className="text-gold/60">{c.icon}</span>
                <span className="text-[11px] font-medium text-white/50">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ─── IMERSÃO ─────────────────────────────────────────────────

const Immersion = () => (
  <section className="relative py-28 lg:py-36 mesh-cool overflow-hidden">
    <div className="glow-gold" style={{ bottom: '-100px', left: '30%' }} />

    <div className="max-w-container mx-auto px-6 lg:px-8 reveal relative z-10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold text-[10px] font-semibold uppercase tracking-[0.3em] mb-6 block">Agenda de Eventos</span>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/25 mb-4">Próxima Imersão</p>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.2rem)] font-medium leading-[1.1]">
            Prepare-se para o dia<br />que mudará sua <span className="italic"><G>mentalidade</G></span>
          </h2>
        </div>

        <div className="bg-white/[0.02] backdrop-blur-sm border border-white/[0.04] rounded-2xl p-10 lg:p-16 relative overflow-hidden hover:border-gold/15 transition-all duration-500">
          <div className="absolute top-8 right-8 opacity-[0.02] pointer-events-none"><Calendar size={140} strokeWidth={0.5} /></div>

          <div className="flex flex-col md:flex-row items-start gap-12 relative z-10">
            <div className="bg-[#0A0A0A] border border-gold/20 rounded-xl p-8 flex flex-col items-center justify-center min-w-[110px]">
              <span className="font-serif text-4xl font-medium leading-none gold-text">30</span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/70 mt-2">Maio</span>
            </div>
            <div className="flex-1">
              <h3 className="font-serif text-2xl font-medium text-white/90 mb-4">Imersão Especial</h3>
              <p className="text-[15px] text-white/40 font-light leading-[1.85] mb-8">
                Um dia inteiro de imersão profunda. Algo que nunca foi revelado será compartilhado. Você está pronta para suportar a verdade da sua própria transformação?
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2.5 text-[11px] text-white/30 font-medium">
                  <Clock size={14} className="text-gold/50" strokeWidth={1.5} /> 09:00 às 18:00
                </div>
                <div className="flex items-center gap-2.5 text-[11px] text-white/30 font-medium">
                  <MapPin size={14} className="text-gold/50" strokeWidth={1.5} /> Local Secreto
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-10 border-t border-white/[0.04] flex flex-col items-center gap-5">
            <ShinyButton className="uppercase tracking-[0.1em]">
              Entrar na Lista de Espera <ArrowRight size={16} />
            </ShinyButton>
            <span className="flex items-center gap-2 text-[9px] text-white/20 font-medium uppercase tracking-wider">
              <Lock size={11} className="text-gold/50" strokeWidth={1.5} /> Apenas 30 Vagas · Abertura das Inscrições em Breve
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ─── FOOTER ──────────────────────────────────────────────────

const Footer = () => (
  <footer className="pt-20 pb-12 bg-[#070707] border-t border-white/[0.03]">
    <div className="max-w-container mx-auto px-6 lg:px-8">
      <div className="grid md:grid-cols-3 gap-12 mb-16">
        <div>
          <span className="font-serif text-lg font-semibold uppercase tracking-[0.15em] text-white block mb-3">Graciane Paulini</span>
          <p className="text-[13px] text-white/30 font-light leading-[1.8] max-w-xs">
            Transformação de mentalidade, inteligência emocional e finanças comportamentais para mulheres que buscam uma vida plena e abundante.
          </p>
        </div>
        <div>
          <h4 className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/15 mb-5">Navegação</h4>
          <ul className="space-y-3 text-[12px] text-white/40 font-light">
            <li><a href="#hero" className="hover:text-gold transition-colors">Início</a></li>
            <li><a href="#raiox" className="hover:text-gold transition-colors">Raio X</a></li>
            <li><a href="#mmp" className="hover:text-gold transition-colors">Mentoria MMP</a></li>
            <li><a href="#mentora" className="hover:text-gold transition-colors">A Mentora</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/15 mb-5">Pagamento Seguro</h4>
          <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-5 mb-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-white/25 mb-1">Chave Pix CNPJ</p>
            <p className="text-[13px] font-mono text-gold/70">58.982.139/0001-168</p>
            <p className="text-[11px] text-white/25 mt-1">Nubank · Graciane Paulini</p>
          </div>
          <div className="flex gap-5">
            {[Instagram, Mail, MessageSquare].map((Icon, i) => (
              <a key={i} href="#" className="text-white/15 hover:text-gold transition-colors duration-300"><Icon size={17} strokeWidth={1.5} /></a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/[0.03] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-[9px] text-white/15 uppercase tracking-[0.15em] font-medium">© 2026 Graciane Paulini. Todos os direitos reservados.</span>
        <span className="text-[9px] text-white/10 uppercase tracking-[0.15em] font-medium">Design Premium por Antigravity AI</span>
      </div>
    </div>
  </footer>
);

// ─── APP ─────────────────────────────────────────────────────

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <MenteProspera />
        <SectionDivider />
        <RaioX />
        <SectionDivider />
        <Finance />
        <SectionDivider />
        <TransformaMente />
        <SectionDivider />
        <MMP />
        <SectionDivider />
        <Testimonials />
        <SectionDivider />
        <Mentora />
        <SectionDivider />
        <Immersion />
      </main>
      <Footer />
    </div>
  );
};

export default App;
