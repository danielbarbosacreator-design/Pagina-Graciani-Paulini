import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, CheckCircle2, Clock, Target,
  TrendingUp, BookOpen, Award, MapPin, Calendar,
  Lock, Instagram, Mail, MessageSquare, Star, Menu
} from 'lucide-react';
import { ShinyButton } from './components/ui/shiny-button';
import { ShinyText } from './components/ui/animated-shiny-text';
import { GlowCard } from './components/ui/spotlight-card';
import { SlidingTestimonials } from './components/ui/sliding-testimonial';
import { TransformaMentePricing } from './components/ui/pricing-card';
import { MMPPricingCard } from './components/ui/mmp-pricing-card';
import { BeamsBackground } from './components/ui/beams-background';
import { ImageAutoSlider } from './components/ui/image-auto-slider';
import { TestimonialsStack } from './components/TestimonialsStack';

/* ============================================================
   GRACIANE PAULINI — LANDING PAGE PREMIUM
   ============================================================ */

const COUNTDOWN_TARGET = new Date('2026-05-30T09:00:00');

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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/5 ${scrolled ? 'py-4' : 'py-5'}`}>
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
        <button onClick={() => setOpen(!open)} className="lg:hidden text-white/50 p-1"><Menu size={18} /></button>
      </div>

      {open && (
        <>
          {/* Backdrop com desfoque */}
          <div
            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[59]"
            onClick={() => setOpen(false)}
          />

          {/* Painel direito */}
          <div className="lg:hidden fixed top-0 right-0 h-full w-72 z-[60] flex flex-col pt-20 pb-10 px-8 gap-6" style={{ backgroundColor: '#0a0a0a', borderLeft: '1px solid rgba(255,255,255,0.08)' }}>
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 text-white/35 hover:text-white transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <line x1="3" y1="3" x2="19" y2="19" /><line x1="19" y1="3" x2="3" y2="19" />
              </svg>
            </button>

            <span className="text-[9px] uppercase tracking-[0.3em] text-gold/35 mb-1">Navegação</span>

            {links.map(l => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="font-serif text-xl font-medium text-white/70 hover:text-white text-left transition-colors duration-200"
              >
                {l.label}
              </button>
            ))}

            <div className="mt-auto">
              <ShinyButton onClick={() => go('mmp')} className="uppercase tracking-wider w-full">Começar</ShinyButton>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

// ─── HERO ────────────────────────────────────────────────────

const Hero = () => {
  const time = useCountdown(COUNTDOWN_TARGET);
  const pad = (n: number) => String(n).padStart(2, '0');


  return (
    <BeamsBackground intensity="medium" className="bg-[#0A0A0A]">
      <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-20">

        {/* ── Content (blur on scroll) ── */}
        <div
          className="max-w-container mx-auto px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-16 lg:gap-20 items-center relative z-10"
        >
          {/* Texto topo: badge + título + descrição */}
          <div className="space-y-10 text-center lg:text-left order-1 lg:order-1">

            <div
              className="hero-enter inline-flex items-center gap-2 px-4 py-1.5 border border-gold/15 rounded-full text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50"
              style={{ animationDelay: '0.1s' }}
            >
              <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
              Mentoria Exclusiva
            </div>

            <div className="hero-enter" style={{ animationDelay: '0.3s' }}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-gold mb-4">Graciane Paulini</p>
              <h1 className="font-serif text-[clamp(5rem,18vw,10rem)] font-semibold leading-[1.0] tracking-[-0.03em]">
                <ShinyText>Mente</ShinyText><br />
                Próspera
              </h1>
            </div>

            <p className="hero-enter text-[15px] lg:text-base text-white/50 font-light leading-[2] max-w-lg mx-auto lg:mx-0 mt-2" style={{ animationDelay: '0.5s' }}>
              Aprenda a enxergar novas possibilidades de viver uma vida próspera, transformando sua mente através de pequenas ações práticas no dia a dia.
            </p>

            {/* Botão — apenas desktop */}
            <div className="hero-enter hidden lg:block" style={{ animationDelay: '0.7s' }}>
              <ShinyButton onClick={() => document.getElementById('raiox')?.scrollIntoView({ behavior: 'smooth' })} className="uppercase tracking-[0.1em]">
                Me Inscrever Agora <ArrowRight size={16} />
              </ShinyButton>
            </div>

            {/* Contagem — apenas desktop, abaixo do botão */}
            <div className="hero-enter hidden lg:flex items-end gap-3 justify-start" style={{ animationDelay: '0.88s' }}>
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
          </div>

          <motion.div
            className="order-2 lg:order-2 relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.88, y: 48, filter: "blur(18px)" }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-full max-w-[400px]">
              <motion.div
                className="absolute -inset-8 bg-gold/8 blur-[80px] rounded-full pointer-events-none z-0"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2.2, delay: 1.0, ease: "easeOut" }}
              />
              <GlowCard customSize glowColor="gold" className="w-full aspect-[3/4]">
                <div className="absolute inset-0">
                  <motion.img
                    src="/images/graciane.jpg"
                    alt="Graciane Paulini"
                    className="w-full h-full object-cover object-top"
                    initial={{ scale: 1.08 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    style={{ filter: "brightness(0.9) contrast(1.05)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
                </div>
              </GlowCard>
              <motion.div
                className="absolute -bottom-3 -right-3 w-24 h-[1px] bg-gradient-to-r from-gold/40 to-gold-light/20"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
              />
              <motion.div
                className="absolute -bottom-3 -right-3 w-[1px] h-16 bg-gradient-to-b from-gold/40 to-transparent"
                initial={{ scaleY: 0, originY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
              />
            </div>
          </motion.div>

          {/* Botão + contagem — apenas mobile, aparece após a foto */}
          <div className="order-3 lg:hidden flex flex-col items-center gap-10">
            <div className="hero-enter" style={{ animationDelay: '0.7s' }}>
              <ShinyButton onClick={() => document.getElementById('raiox')?.scrollIntoView({ behavior: 'smooth' })} className="uppercase tracking-[0.1em]">
                Me Inscrever Agora <ArrowRight size={16} />
              </ShinyButton>
            </div>
            <div className="hero-enter flex items-end gap-3 justify-center" style={{ animationDelay: '0.88s' }}>
              {[
                { v: pad(time.days), l: 'DIAS' },
                { v: pad(time.hours), l: 'HRS' },
                { v: pad(time.minutes), l: 'MIN' },
                { v: pad(time.seconds), l: 'SEG' },
              ].map(({ v, l }, i) => (
                <React.Fragment key={l}>
                  <div className="flex flex-col items-center">
                    <span className="font-serif text-4xl font-medium leading-none gold-text tabular-nums">{v}</span>
                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30 mt-1">{l}</span>
                  </div>
                  {i < 3 && <span className="font-serif text-2xl text-gold/40 pb-5">:</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>
      </section>
    </BeamsBackground>
  );
};

// ─── MENTE PRÓSPERA ───────────────────────────────────────────

const MenteProspera = () => (
  <section className="relative py-20 lg:py-32 mesh-cool overflow-hidden">
    <div className="glow-gold" style={{ top: '50%', right: '-200px', transform: 'translateY(-50%)' }} />

    <div className="max-w-container mx-auto px-6 lg:px-8 reveal relative z-10">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <p className="font-serif italic text-xl lg:text-2xl text-white/50 leading-relaxed mb-4">
            Talvez você não consiga explicar exatamente o que está sentindo…
          </p>
          <p className="text-white/35 text-[15px] leading-[1.85] font-light">
            mas sabe que algo não está no lugar.
          </p>
        </div>

        <p className="text-white/45 text-[15px] leading-[1.85] font-light mb-10">
          Você tenta organizar sua vida, tenta fazer o certo, tenta avançar… mas, no fundo, sente que:
        </p>

        <div className="space-y-4 mb-14">
          {[
            'Está sempre recomeçando e não consegue sustentar',
            'Se sente sobrecarregada emocionalmente',
            'Tem dificuldade em tomar decisões com segurança',
            'Sabe que pode mais, mas não consegue acessar isso',
            'Vive fases de desânimo, mesmo tentando manter tudo em ordem',
            'Sua relação com dinheiro não flui como deveria',
            'Muitas vezes sente que está vivendo no automático',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3.5">
              <span className="w-1.5 h-1.5 bg-gold/40 rounded-full mt-2 flex-shrink-0" />
              <span className="text-[15px] text-white/50 font-light leading-[1.8]">{item}</span>
            </div>
          ))}
        </div>

        <div className="border-l-[2px] border-gold/30 pl-6 mb-12 space-y-4">
          <p className="text-white/60 text-[15px] font-medium">Isso não é falta de esforço.</p>
          <p className="text-white/40 text-[15px] font-light leading-[1.8]">
            Existe um padrão interno que precisa ser entendido e ajustado. Sem isso, você continua tentando… mas não sai do lugar.
          </p>
          <p className="font-serif italic text-white/50 text-[15px]">
            O primeiro passo não é fazer mais. É entender.
          </p>
        </div>

        <ShinyButton onClick={() => document.getElementById('raiox')?.scrollIntoView({ behavior: 'smooth' })} className="uppercase tracking-[0.1em]">
          Aplicar para Análise <ArrowRight size={16} />
        </ShinyButton>
      </div>
    </div>
  </section>
);

// ─── RAIO X ──────────────────────────────────────────────────

const RaioX = () => (
  <section id="raiox" className="relative py-20 lg:py-32 bg-elevated overflow-hidden">
    <div className="glow-warm" style={{ top: '50%', right: '-200px', transform: 'translateY(-50%)' }} />

    <div className="max-w-container mx-auto px-6 lg:px-8 reveal relative z-10">
      <div className="max-w-3xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/25 mb-1">Graciane Paulini</p>
            <span className="text-gold text-[10px] font-semibold uppercase tracking-[0.3em] mb-6 block">Análise Inicial</span>
            <h2 className="font-serif text-[clamp(2.6rem,6.5vw,4.5rem)] font-medium leading-[1.05] mb-6">
              Raio X da<br /><ShinyText>Realidade</ShinyText>
            </h2>
            <p className="text-white/45 text-[15px] leading-[1.85] font-light mb-10">
              Um encontro exclusivo para uma análise profunda da sua situação atual, com direção clara e alinhada às suas prioridades nesta fase da sua vida.
            </p>
            <div className="space-y-4 mb-12">
              {[
                'Análise do momento atual',
                'Direcionamento prático para metas',
                'Alinhamento de prioridades',
                'Orientação conforme sua disposição em agir',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3.5">
                  <CheckCircle2 size={15} className="text-gold/50 mt-1 flex-shrink-0" strokeWidth={2} />
                  <span className="text-[15px] text-white/45 font-light leading-[1.75]">{item}</span>
                </div>
              ))}
            </div>
            <ShinyButton className="uppercase tracking-[0.1em]">
              Aplicar para Análise <ArrowRight size={16} />
            </ShinyButton>
          </div>

          <div className="lg:col-span-2 space-y-4">
            {[
              { n: '01', t: 'Clareza sobre sua realidade' },
              { n: '02', t: 'Direção prática' },
              { n: '03', t: 'Foco no essencial' },
              { n: '04', t: 'Segurança nas decisões' },
            ].map((c, i) => (
              <div key={i} className="card-lift bg-white/[0.02] border border-white/[0.04] rounded-xl p-7 flex items-center gap-6 group hover:border-gold/15 hover:bg-white/[0.04] transition-all duration-500">
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
  <section className="relative py-20 lg:py-32 mesh-warm overflow-hidden">
    <div className="glow-gold" style={{ top: '30%', left: '-200px' }} />

    <div className="max-w-container mx-auto px-6 lg:px-8 reveal relative z-10">
      <div className="max-w-4xl mx-auto">
        <span className="text-gold text-[10px] font-semibold uppercase tracking-[0.3em] mb-6 block">Mentoria Exclusiva</span>
        <h2 className="font-serif text-[clamp(2.6rem,6.5vw,4.8rem)] font-medium leading-[1.05] mb-6">
          Inteligência<br /><ShinyText>Financeira</ShinyText>
        </h2>
        <blockquote className="border-l-[2px] border-gold/40 pl-6 mb-10 max-w-2xl">
          <p className="font-serif italic text-lg text-white/50 leading-relaxed">
            "Não é sobre quanto você ganha, mas como gerencia e a mentalidade que constrói."
          </p>
        </blockquote>
        <div className="inline-flex items-center gap-4 mb-12">
          <span className="font-serif text-5xl font-medium leading-none gold-text">5</span>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/60">Encontros</p>
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/60">Estratégicos</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {[
            { t: 'Cura da Escassez', d: 'Identificação e quebra de crenças limitantes sobre dinheiro.' },
            { t: 'Pilar da Riqueza', d: 'Base sólida para multiplicação de recursos.' },
            { t: 'Gestão Inteligente', d: 'Organização, clareza e plano de ação prático.' },
            { t: 'Fluxo de Abundância', d: 'Alinhamento de prioridades financeiras.' },
            { t: 'Dinâmica de Casal', d: 'Alinhamento de metas e sonhos em conjunto.' },
            { t: 'Transbordo', d: 'Posicionamento e prosperidade integral.' },
          ].map((m, i) => (
            <div key={i} className="card-lift bg-white/[0.02] border border-white/[0.04] rounded-xl p-7 group hover:border-gold/20 hover:bg-white/[0.04] transition-all duration-500">
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/80 mb-3">{m.t}</h4>
              <p className="text-[13px] text-white/35 font-light leading-[1.7]">{m.d}</p>
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
  <section id="transformamente" className="relative py-20 lg:py-32 bg-deep overflow-hidden">
    <div className="glow-gold" style={{ top: '-100px', right: '-200px' }} />
    <div className="glow-warm" style={{ bottom: '-200px', left: '-100px' }} />
    <div className="light-beam" style={{ left: '80%', top: 0 }} />

    <div className="max-w-container mx-auto px-6 lg:px-8 reveal relative z-10">
      <div className="max-w-4xl mx-auto">
        <span className="text-gold text-[10px] font-semibold uppercase tracking-[0.3em] mb-6 block">Inscrições Abertas · 8 Encontros</span>
        <h2 className="font-serif text-[clamp(2.6rem,6.5vw,5.25rem)] font-medium leading-[1.05] mb-6">
          Mentoria<br /><ShinyText>TransformaMente</ShinyText>
        </h2>
        <blockquote className="border-l-[2px] border-gold/40 pl-6 mb-10 max-w-2xl">
          <p className="font-serif italic text-base text-white/50 leading-relaxed">
            "A gente só se cura quando se conhece."
          </p>
        </blockquote>
        <p className="text-white/40 text-[15px] font-light leading-[1.8] mb-10 max-w-xl">
          Um processo para sair do piloto automático e viver com consciência, identidade e direção.
        </p>
        <div className="space-y-4 mb-14">
          {[
            '8 encontros presenciais ou online',
            'Encerramento com palestra e café',
            'Inclui relatório completo de perfil com 50 páginas',
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { n: '01', t: 'Perfil Natural e Adaptado', d: 'Sua essência x o que você se tornou para agradar.' },
            { n: '02', t: 'Potencialidades e Valores', d: 'O que te move e seus motivadores reais.' },
            { n: '03', t: 'Bloqueios Emocionais', d: 'Medos e travas que impedem seu crescimento.' },
            { n: '04', t: 'Tipos Psicológicos', d: 'Sua forma de perceber e se relacionar com o mundo.' },
            { n: '05', t: 'Quadro dos Sonhos', d: 'Integridade, honra e gratidão como base.' },
            { n: '06', t: 'Raio X Financeiro', d: 'Sua relação com dinheiro espelha sua vida íntima.' },
            { n: '07', t: 'Princípios da Riqueza', d: 'Dinheiro, prosperidade e transbordo real.' },
            { n: '08', t: 'Expectativa x Disposição', d: 'Encerramento com palestra e café.' },
          ].map((p, i) => (
            <div key={i} className="card-lift bg-white/[0.02] border border-white/[0.04] rounded-xl p-6 group hover:border-gold/15 hover:bg-white/[0.04] transition-all duration-500">
              <span className="font-serif text-2xl font-light text-white/[0.05] group-hover:text-gold/20 transition-colors block mb-3 leading-none">{p.n}</span>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.08em] text-white/65 leading-snug mb-2">{p.t}</h4>
              <p className="text-[12px] text-white/30 font-light leading-[1.7]">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ─── MMP ─────────────────────────────────────────────────────

const MMP = () => (
  <section id="mmp" className="relative py-20 lg:py-32 mesh-cool overflow-hidden">
    <div className="glow-warm" style={{ bottom: '-100px', left: '-200px' }} />
    <div className="light-beam" style={{ left: '30%', top: 0 }} />

    <div className="max-w-container mx-auto px-6 lg:px-8 reveal relative z-10">
      <div className="mb-6">
        <span className="text-gold text-[10px] font-semibold uppercase tracking-[0.3em] mb-6 block">Porta de Entrada</span>
        <h2 className="font-serif text-[clamp(2.6rem,6.5vw,4.8rem)] font-medium leading-[1.05] mb-8">
          Método<br /><ShinyText>Mentalidade Próspera</ShinyText>
        </h2>
        <p className="text-white/45 text-[15px] leading-[1.85] font-light max-w-2xl">
          Treinamento com 20 aulas para iniciar sua transformação. O primeiro passo para uma mente próspera.
        </p>
      </div>

      <div className="mb-20">
        <MMPPricingCard />
      </div>

      <ImageAutoSlider />
    </div>
  </section>
);

// ─── DEPOIMENTOS ─────────────────────────────────────────────

const Testimonials = () => (
  <section id="depoimentos" className="relative py-20 lg:py-32 bg-elevated overflow-hidden">
    <div className="glow-warm" style={{ top: '-150px', left: '50%', transform: 'translateX(-50%)' }} />

    <div className="reveal relative z-10">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-gold text-[10px] font-semibold uppercase tracking-[0.3em] mb-6 block">Depoimentos Reais</span>
          <h2 className="font-serif text-[clamp(2.6rem,6.5vw,4.8rem)] font-medium leading-[1.05]">
            Histórias de<br /><ShinyText>Transformação</ShinyText>
          </h2>
        </div>
      </div>

      <TestimonialsStack />

      <div className="max-w-container mx-auto px-6 lg:px-8 pb-10">
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
  <section id="mentora" className="relative py-20 lg:py-32 mesh-warm overflow-hidden">
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

          <h2 className="font-serif text-[clamp(2.6rem,6.5vw,4.8rem)] font-medium leading-[1.05] mb-10">
            Graciane<br /><ShinyText>Paulini</ShinyText>
          </h2>

          <div className="space-y-6 mb-10">
            <p className="text-[15px] text-white/70 font-normal leading-[1.85]">
              Mentora de Inteligência Emocional e Financeira. Sua razão de viver é amar a Deus, a si mesma e ao próximo. Ensina transformação de mentalidade através de ações práticas diárias.
            </p>
            <p className="text-[15px] text-white/45 font-light leading-[1.85]">
              Mais de 22 anos de experiência no varejo e indústria, com escuta ativa e direcionamento personalizado para quem quer mais clareza, leveza e propósito na vida.
            </p>
          </div>

          <blockquote className="border-l-[2px] border-gold/40 pl-6 mb-10">
            <p className="font-serif italic text-lg text-white/50 leading-relaxed">
              "Prosperidade é consequência do autoconhecimento e do seu posicionamento na vida."
            </p>
          </blockquote>

          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: <Award size={16} strokeWidth={1.5} />, label: 'Inteligência Emocional' },
              { icon: <BookOpen size={16} strokeWidth={1.5} />, label: 'Finanças Comportamentais' },
              { icon: <Target size={16} strokeWidth={1.5} />, label: 'Análise de Perfil' },
              { icon: <TrendingUp size={16} strokeWidth={1.5} />, label: 'Propósito' },
            ].map((c, i) => (
              <div key={i} className="flex items-center gap-3 py-3 px-4 bg-white/[0.03] border border-white/[0.04] rounded-lg">
                <span className="text-gold/60">{c.icon}</span>
                <span className="text-[12px] font-medium text-white/55">{c.label}</span>
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
  <section className="relative py-20 lg:py-32 mesh-cool overflow-hidden">
    <div className="glow-gold" style={{ bottom: '-100px', left: '30%' }} />

    <div className="max-w-container mx-auto px-6 lg:px-8 reveal relative z-10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold text-[10px] font-semibold uppercase tracking-[0.3em] mb-6 block">Agenda de Eventos</span>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/25 mb-4">Próxima Imersão</p>
          <h2 className="font-serif text-[clamp(2.6rem,6.5vw,4.8rem)] font-medium leading-[1.05]">
            Imersão Especial<br /><ShinyText>30 de Maio</ShinyText>
          </h2>
        </div>

        <div className="bg-white/[0.02] backdrop-blur-sm border border-white/[0.04] rounded-2xl p-10 lg:p-16 relative overflow-hidden hover:border-gold/15 transition-all duration-500">
          <div className="absolute top-8 right-8 opacity-[0.02] pointer-events-none"><Calendar size={140} strokeWidth={0.5} /></div>

          {/* Conteúdo centralizado */}
          <div className="flex flex-col items-center text-center relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold/60">Evento Presencial · 30 de Maio de 2026</span>
            </div>
            <h3 className="font-serif text-2xl font-medium text-white/90 mb-4">Imersão Especial</h3>
            <p className="text-[15px] text-white/40 font-light leading-[1.85] mb-10 max-w-lg">
              Um dia completo de transformação de mentalidade. Para mulheres prontas para dar o próximo passo.
            </p>

            {/* Detalhes do evento */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 w-full max-w-xl">
              {[
                { icon: <Clock size={13} strokeWidth={1.5} />, label: 'Horário', value: '09h às 18h', gold: false },
                { icon: <MapPin size={13} strokeWidth={1.5} />, label: 'Local', value: 'A Revelar', gold: false },
                { icon: <Award size={13} strokeWidth={1.5} />, label: 'Vagas', value: 'Apenas 30', gold: true },
                { icon: <Target size={13} strokeWidth={1.5} />, label: 'Formato', value: 'Full Day', gold: false },
              ].map((item, i) => (
                <div key={i} className="bg-white/[0.02] border border-white/[0.04] rounded-lg p-4 flex flex-col items-center gap-1.5">
                  <span className="text-gold/50">{item.icon}</span>
                  <span className="text-[9px] uppercase tracking-[0.15em] text-white/20 font-semibold">{item.label}</span>
                  <span className={`text-[12px] font-medium ${item.gold ? 'gold-text' : 'text-white/60'}`}>{item.value}</span>
                </div>
              ))}
            </div>

            {/* O que esperar */}
            <div className="flex gap-10 mx-auto">
              {[
                ['Conteúdos inéditos', 'Dinâmicas práticas'],
                ['Conexão com outras mulheres', 'Experiência especial de encerramento'],
              ].map((col, ci) => (
                <div key={ci} className="flex flex-col gap-3">
                  {col.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-gold/50 flex-shrink-0 mt-0.5" strokeWidth={2} />
                      <span className="text-[13px] text-white/45 font-light leading-snug text-left">{item}</span>
                    </div>
                  ))}
                </div>
              ))}
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
            <a href="https://www.instagram.com/gracianepaulini/" target="_blank" rel="noopener noreferrer" className="text-white/15 hover:text-gold transition-colors duration-300"><Instagram size={17} strokeWidth={1.5} /></a>
            <a href="#" className="text-white/15 hover:text-gold transition-colors duration-300"><Mail size={17} strokeWidth={1.5} /></a>
            <a href="#" className="text-white/15 hover:text-gold transition-colors duration-300"><MessageSquare size={17} strokeWidth={1.5} /></a>
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
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.07, rootMargin: '0px 0px -30px 0px' });
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
