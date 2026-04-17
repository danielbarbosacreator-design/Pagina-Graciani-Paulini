import React from 'react';
import { Section } from '../types';
import { ShieldCheck, ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
    return (
        <section id={Section.HERO} className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden bg-[#202126]">
            
            <div className="max-w-[1100px] mx-auto px-8 w-full grid lg:grid-cols-2 gap-20 items-center reveal relative z-10">
                {/* Left Column - Copy */}
                <div className="text-left space-y-10">
                    <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-semibold text-[#CFAE6B] block">Mentoria Exclusiva</span>
                    
                    <h1 className="leading-[0.92] tracking-[-0.03em]">
                        Mente<br />
                        <span className="italic text-[#CFAE6B]">Próspera</span>
                    </h1>
                    
                    <p className="font-serif italic text-[1.6rem] text-white/80 leading-snug max-w-sm">
                        "Como eu me vejo,<br/>Eu vejo o mundo!"
                    </p>
                    
                    <p className="font-sans max-w-md text-[15px] text-white/50 leading-[1.8] font-light">
                        Aprenda a ver infinitas possibilidades de viver uma vida próspera, mudando sua mente e colocando em prática pequenas atividades que mudarão seu destino.
                    </p>

                    <div className="flex flex-col sm:flex-row items-start gap-6 pt-4">
                        <button
                            onClick={() => document.getElementById(Section.MMP)?.scrollIntoView({ behavior: 'smooth' })}
                            className="btn-premium"
                        >
                            ME INSCREVER AGORA <ArrowRight size={16} />
                        </button>
                        <div className="flex items-center gap-2.5 text-[9px] font-semibold text-white/30 uppercase tracking-[0.15em] pt-4">
                            <ShieldCheck size={14} className="text-[#CFAE6B]" strokeWidth={1.5} /> Vagas limitadas
                        </div>
                    </div>
                </div>

                {/* Right Column - Image */}
                <div className="relative w-full flex justify-center lg:justify-end">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[110%] bg-[#CFAE6B]/8 blur-[100px] rounded-full pointer-events-none z-0" />
                    
                    <div className="relative z-10 w-full max-w-[420px] aspect-[3/4] overflow-hidden border border-white/5 bg-[#18191D] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]">
                        <img
                            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1200"
                            alt="Graciane Paulini"
                            className="w-full h-full object-cover grayscale-[0.15] contrast-[1.05] brightness-[0.85]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#202126] via-transparent to-transparent pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
