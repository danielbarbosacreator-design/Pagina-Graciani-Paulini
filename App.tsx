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
    { label: 'Início', id: 'hero' },
    { label: 'MMP', id: 'mmp' },
    { label: 'Raio X', id: 'raiox' },
    { label: 'Financeiro', id: 'finance' },
    { label: 'TransformaMente', id: 'transformamente' },
    { label: 'A Mentora', id: 'mentora' },
    { label: 'Imersão', id: 'immersion' },
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
          <div
            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[59]"
            onClick={() => setOpen(false)}
          />

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

const pad = (n: number) => String(n).padStart(2, '0');

const Hero = () => {
  return (
    <BeamsBackground intensity="medium" className="bg-[#0A0A0A]">
      <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-20">
        <div
          className="max-w-container mx-auto px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-16 lg:gap-20 items-center relative z-10"
        >
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

            <div className="hero-enter hidden lg:block" style={{ animationDelay: '0.7s' }}>
              <ShinyButton onClick={() => document.getElementById('mentora')?.scrollIntoView({ behavior: 'smooth' })} className="uppercase tracking-[0.1em]">
                Conhecer a Mentora <ArrowRight size={16} />
              </ShinyButton>
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
            </div>
          </motion.div>
          <div className="order-3 lg:hidden flex flex-col items-center gap-10">
            <div className="hero-enter" style={{ animationDelay: '0.7s' }}>
              <ShinyButton onClick={() => document.getElementById('mentora')?.scrollIntoView({ behavior: 'smooth' })} className="uppercase tracking-[0.1em]">
                Conhecer a Mentora <ArrowRight size={16} />
              </ShinyButton>
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
        <ShinyButton onClick={() => window.open('https://wa.me/5547996504625?text=Olá Graciane, vim do site e gostaria de agendar uma conversa inicial para o Raio X.', '_blank')} className="uppercase tracking-[0.1em]">
          Agendar Conversa Inicial <ArrowRight size={16} />
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
            <p className="text-white/45 text-[15px] leading-[1.85] font-light mb-6">
              Um encontro exclusivo para uma análise profunda da sua situação atual, com direção clara e alinhada às suas prioridades nesta fase da sua vida.
            </p>
            <div className="bg-gold/5 border border-gold/10 rounded-xl p-6 mb-10">
              <p className="text-[13px] text-gold/80 italic font-light leading-relaxed">
                "Antes de iniciarmos, teremos um encontro gratuito para alinhar expectativas e realidade. Quero te conhecer melhor e garantir que este é o momento certo para você."
              </p>
            </div>
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
            <ShinyButton 
              onClick={() => window.open('https://wa.me/5547996504625?text=Olá Graciane, gostaria de agendar meu encontro gratuito para alinhar expectativas sobre o Raio X.', '_blank')}
              className="uppercase tracking-[0.1em]"
            >
              Agendar Encontro Gratuito <ArrowRight size={16} />
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
        <blockquote className="border-l-[2px] border-gold/40 pl-6 mb-8 max-w-2xl">
          <p className="font-serif italic text-lg text-white/50 leading-relaxed">
            "Não é sobre quanto você ganha, mas como gerencia e a mentalidade que constrói."
          </p>
        </blockquote>
        <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-7 mb-10 max-w-2xl group hover:border-gold/15 transition-all">
          <p className="text-[14px] text-white/50 font-light leading-[1.8]">
            Para garantir a entrega e o resultado, realizo uma <span className="text-gold font-medium">entrevista prévia</span> com cada mentorada. Quero entender seus desafios atuais antes de alinharmos o início da mentoria.
          </p>
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
        <ShinyButton 
          onClick={() => window.open('https://wa.me/5547996504625?text=Olá Graciane, quero agilizar minha entrevista para a Mentoria de Inteligência Financeira.', '_blank')}
          className="uppercase tracking-[0.1em]"
        >
          Agendar Entrevista <MessageSquare size={16} className="ml-2" />
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
    <div className="max-w-container mx-auto px-6 lg:px-8 reveal relative z-10">
      <div className="max-w-4xl mx-auto">
        <span className="text-gold text-[10px] font-semibold uppercase tracking-[0.3em] mb-6 block">Inscrições Abertas · 8 Encontros</span>
        <h2 className="font-serif text-[clamp(2.6rem,6.5vw,5.25rem)] font-medium leading-[1.05] mb-8">
          Mentoria<br /><ShinyText>TransformaMente</ShinyText>
        </h2>
        <div className="space-y-12 mb-16">
          <div className="max-w-3xl">
            <p className="text-white/80 text-lg lg:text-xl font-serif italic leading-relaxed mb-8">
              "Se você sente que está apenas sobrevivendo, sem clareza de quem realmente é, do que quer ou de como avançar… essa mentoria é um convite para voltar para si mesma."
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: '7 Encontros Individuais', d: 'Conduzidos de forma personalizada.' },
              { t: '1 Encontro em Grupo', d: 'Experiência para conexão e troca.' },
              { t: 'Relatório Completo', d: 'Análise de Perfil Comportamental.' }
            ].map((item, i) => (
              <div key={i} className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-7 hover:border-gold/20 transition-all duration-300">
                <CheckCircle2 size={18} className="text-gold/60 mb-4" strokeWidth={1.5} />
                <h4 className="text-[13px] font-semibold text-white/80 uppercase tracking-wider mb-3">{item.t}</h4>
                <p className="text-[13px] text-white/35 font-light leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-10 border-t border-white/[0.04]">
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl text-white/80 mb-2">Pronta para o seu novo capítulo?</h3>
            <p className="text-white/20 text-[13px] uppercase tracking-widest font-light">Garanta sua vaga individual</p>
          </div>
          <TransformaMentePricing />
        </div>
      </div>
    </div>
  </section>
);

// ─── MMP ─────────────────────────────────────────────────────

const MMP = () => (
  <section id="mmp" className="relative py-20 lg:py-32 mesh-cool overflow-hidden">
    <div className="max-w-container mx-auto px-6 lg:px-8 reveal relative z-10">
      <div className="mb-6">
        <span className="text-gold text-[10px] font-semibold uppercase tracking-[0.3em] mb-6 block">Porta de Entrada</span>
        <h2 className="font-serif text-[clamp(2.6rem,6.5vw,4.8rem)] font-medium leading-[1.05] mb-8">
          Método<br /><ShinyText>Mentalidade Próspera</ShinyText>
        </h2>
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
    <div className="reveal relative z-10">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="font-serif text-[clamp(2.6rem,6.5vw,4.8rem)] font-medium leading-[1.05]">
            Histórias de<br /><ShinyText>Transformação</ShinyText>
          </h2>
        </div>
      </div>
      <TestimonialsStack />
    </div>
  </section>
);

// ─── MENTORA ─────────────────────────────────────────────────

const Mentora = () => (
  <section id="mentora" className="relative py-20 lg:py-32 mesh-warm overflow-hidden">
    <div className="max-w-container mx-auto px-6 lg:px-8 reveal relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="relative">
          <GlowCard customSize glowColor="gold" className="relative z-10 w-full aspect-[3/4]">
            <img src="/images/graciane.jpg" alt="Graciane Paulini" className="w-full h-full object-cover" />
          </GlowCard>
        </div>
        <div>
          <h2 className="font-serif text-[clamp(2.6rem,6.5vw,4.8rem)] font-medium leading-[1.05] mb-10">
            Graciane<br /><ShinyText>Paulini</ShinyText>
          </h2>
          <div className="space-y-6 mb-10">
            <p className="text-[15px] text-white/70 font-normal leading-[1.85]">Mentora de Inteligência Emocional e Financeira.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ─── IMERSÃO ─────────────────────────────────────────────────

const Immersion = () => {
  const time = useCountdown(COUNTDOWN_TARGET);
  return (
    <section id="immersion" className="relative py-20 lg:py-32 mesh-cool overflow-hidden">
      <div className="max-w-container mx-auto px-6 lg:px-8 reveal relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-[clamp(2.6rem,6.5vw,4.8rem)] font-medium leading-[1.05] mb-8">
            Imersão Especial<br /><ShinyText>30 de Maio</ShinyText>
          </h2>
        </div>
        <div className="bg-white/[0.02] border border-white/[0.04] rounded-2xl p-10 flex flex-col items-center">
          <ShinyButton onClick={() => window.open('https://chat.whatsapp.com/H4eksvyBAL4B7cW0j3OlK6', '_blank')}>Entrar na Lista de Espera</ShinyButton>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="pt-20 pb-12 bg-[#070707] border-t border-white/[0.03]">
    <div className="max-w-container mx-auto px-6 lg:px-8 text-center">
      <span className="font-serif text-lg font-semibold text-white block mb-3">Graciane Paulini</span>
      <p className="text-[9px] text-white/15 uppercase tracking-[0.15em] font-medium">© 2026 Graciane Paulini. Todos os direitos reservados.</p>
    </div>
  </footer>
);

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      <main>
        <Hero /><SectionDivider />
        <MenteProspera /><SectionDivider />
        <RaioX /><SectionDivider />
        <Finance /><SectionDivider />
        <TransformaMente /><SectionDivider />
        <MMP /><SectionDivider />
        <Testimonials /><SectionDivider />
        <Mentora /><SectionDivider />
        <Immersion />
      </main>
      <Footer />
    </div>
  );
};

export default App;
