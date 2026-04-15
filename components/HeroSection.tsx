import React from 'react';
import { Section } from '../types';
import { ShieldCheck, ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
    return (
        <section id={Section.HERO} className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-black">
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 -right-20 w-[600px] h-[600px] bg-brand-red/5 blur-[120px] rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-brand-red/5 blur-[100px] rounded-full" />

            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                    <span className="accent-text text-sm font-bold uppercase tracking-[0.4em] mb-6 block font-sans">Mentoria Exclusiva</span>
                    <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter leading-[0.9] mb-4">
                        MENTE <br />
                        <span className="accent-text">PRÓSPERA</span>
                    </h1>
                    <h2 className="font-serif italic text-3xl md:text-4xl text-gray-300 mb-8">
                        "Como eu me vejo, <br />Eu vejo o mundo!"
                    </h2>

                    <p className="font-sans text-gray-400 text-base md:text-lg max-w-xl leading-relaxed mb-12">
                        Aprenda a ver infinitas possibilidades de viver uma vida próspera, mudando sua mente e colocando em prática pequenas atividades que mudarão seu destino.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 items-center">
                        <button
                            onClick={() => document.getElementById(Section.MMP)?.scrollIntoView({ behavior: 'smooth' })}
                            className="btn-premium py-5 px-12 group"
                        >
                            ME INSCREVER AGORA <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <div className="flex items-center gap-2 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                            <ShieldCheck size={16} className="accent-text" /> VAGAS LIMITADAS PARA ESTA TURMA
                        </div>
                    </div>
                </div>

                <div className="relative flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-lg aspect-[4/5] group">
                        <div className="absolute -inset-4 border border-white/5 rounded-2xl -z-10 translate-x-4 translate-y-4" />
                        <div className="relative rounded-xl overflow-hidden h-full shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                                alt="Graciane Paulini"
                                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
