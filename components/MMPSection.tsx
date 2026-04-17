import React from 'react';
import { Section } from '../types';
import { PlayCircle, CheckCircle, Star } from 'lucide-react';

const MMPSection: React.FC = () => {
    const modules = [
        { title: 'Comece por Aqui', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600', subtitle: 'MÉTODO MENTALIDADE PRÓSPERA' },
        { title: 'Um Novo Começo', img: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=600', subtitle: 'MÉTODO MENTALIDADE PRÓSPERA' },
        { title: 'Clareza Para Prosperar', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600', subtitle: 'MÉTODO MENTALIDADE PRÓSPERA' },
        { title: 'Bônus Especiais', img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=600', subtitle: 'MÉTODO MENTALIDADE PRÓSPERA' },
    ];

    return (
        <section id={Section.MMP} className="section-spacing relative bg-[#202126]">
            
            <div className="max-w-[1100px] mx-auto px-8 reveal">
                <div className="max-w-2xl mx-auto text-center mb-20">
                    <span className="text-[#CFAE6B] text-[10px] font-semibold uppercase tracking-[0.3em] mb-8 block">Treinamento Base</span>
                    <h2 className="mb-8">Método <span className="italic text-[#CFAE6B]">Mentalidade Próspera</span></h2>
                    <p className="text-white/40 text-[15px] leading-[1.8] font-light">A forma de pensar, sentir e agir que cria abundância em todas as áreas da vida. Um treinamento gravado completo para você dar o primeiro passo.</p>
                </div>

                {/* Module Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
                    {modules.map((mod, i) => (
                        <div key={i} className="relative group overflow-hidden border border-white/5 hover:border-[#CFAE6B]/30 transition-all duration-500 aspect-[4/5]">
                            <img src={mod.img} alt={mod.title} className="w-full h-full object-cover grayscale opacity-25 group-hover:grayscale-0 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#202126] via-[#202126]/30 to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 p-8 text-left">
                                <h4 className="text-[11px] tracking-[0.12em] text-[#F6F6F6] mb-2">{mod.title}</h4>
                                <div className="w-8 h-[1px] bg-[#CFAE6B] mb-3 group-hover:w-16 transition-all duration-500" />
                                <p className="text-[8px] font-medium text-white/30 tracking-[0.2em] uppercase">{mod.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Benefits */}
                <div className="premium-card-dark max-w-3xl mx-auto p-12 mb-20 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-[2px] h-full bg-[#CFAE6B]/30" />
                    <div className="flex items-center gap-4 mb-10">
                        <PlayCircle className="text-[#CFAE6B]" size={20} strokeWidth={1.5} />
                        <h4 className="text-[11px] tracking-[0.12em] text-[#F6F6F6]">O que você aprende no MMP:</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-5">
                        {[
                            'Mente e Corpo equilibrados',
                            'Mentalidade de Possibilidades',
                            'Poder da Gratidão real',
                            'Administração de Recursos',
                            'Relacionamentos Saudáveis',
                            'Propósito e Legado',
                            'Abundância e Transbordo'
                        ].map((benefit, i) => (
                            <div key={i} className="flex items-center gap-3.5 text-white/50 text-[13px] font-light">
                                <CheckCircle size={16} className="text-[#CFAE6B] flex-shrink-0" strokeWidth={1.5} />
                                <span>{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Price Block */}
                <div className="flex flex-col items-center gap-8">
                    <div className="flex items-baseline gap-3">
                        <span className="text-white/30 text-lg font-serif">R$</span>
                        <span className="text-7xl font-serif font-medium text-[#CFAE6B] leading-none">47</span>
                        <span className="text-white/30 text-[10px] font-semibold tracking-[0.15em] uppercase">Única Vez</span>
                    </div>
                    <button className="btn-premium px-16">QUERO MEU ACESSO AGORA</button>
                    <div className="flex items-center gap-2.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/25">
                        <Star size={12} fill="currentColor" className="text-[#CFAE6B]" /> 20 aulas gravadas · Acesso Vitalício
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MMPSection;
