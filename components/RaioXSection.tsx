import React from 'react';
import { Section } from '../types';
import { CheckCircle2, ChevronRight } from 'lucide-react';

const RaioXSection: React.FC = () => {
    return (
        <section id={Section.RAIO_X} className="py-24 md:py-40 bg-brand-gray relative">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="reveal">
                    <span className="accent-text text-sm font-bold uppercase tracking-[0.4em] mb-6 block font-sans">Análise Inicial</span>
                    <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-tight mb-8">
                        RAIO X DA <br />
                        <span className="accent-text">REALIDADE</span>
                    </h2>
                    <p className="font-sans text-gray-400 text-lg leading-relaxed mb-10">
                        Um encontro exclusivo para uma análise profunda da sua situação atual. Receba instruções e direção claras sobre metas e objetivos coerentes com as suas prioridades para esta estação da vida.
                    </p>

                    <ul className="space-y-4 mb-12">
                        {[
                            'Análise detalhada do momento atual',
                            'Instruções práticas para metas imediatas',
                            'Alinhamento com prioridades de vida',
                            'Direcionamento conforme sua disposição em agir'
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-4 text-gray-300 font-sans font-semibold">
                                <CheckCircle2 size={18} className="accent-text" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    <button className="btn-premium group">
                        APLICAR PARA ANÁLISE <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="grid grid-cols-2 gap-4 reveal">
                    <div className="mt-12 glass-card p-8 flex flex-col justify-end aspect-square border-accent-glow border-b-2">
                        <span className="text-4xl font-display font-black accent-text mb-4">01</span>
                        <h4 className="font-sans font-bold uppercase tracking-widest text-sm">Clareza Absoluta</h4>
                    </div>
                    <div className="glass-card p-8 flex flex-col justify-end aspect-square border-accent-glow border-t-2">
                        <span className="text-4xl font-display font-black accent-text mb-4">02</span>
                        <h4 className="font-sans font-bold uppercase tracking-widest text-sm">Ação Direcionada</h4>
                    </div>
                    <div className="glass-card p-8 flex flex-col justify-end aspect-square border-accent-glow border-b-2">
                        <span className="text-4xl font-display font-black accent-text mb-4">03</span>
                        <h4 className="font-sans font-bold uppercase tracking-widest text-sm">Resultados Reais</h4>
                    </div>
                    <div className="mt-12 glass-card p-8 flex flex-col justify-end aspect-square border-accent-glow border-t-2">
                        <span className="text-4xl font-display font-black accent-text mb-4">04</span>
                        <h4 className="font-sans font-bold uppercase tracking-widest text-sm">Foco no Essencial</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RaioXSection;
