import React from 'react';
import { Section } from '../types';
import { CheckCircle2, ChevronRight } from 'lucide-react';

const RaioXSection: React.FC = () => {
    return (
        <section id={Section.RAIO_X} className="section-spacing relative bg-[#F6F6F6] text-[#202126]">
            <div className="max-w-[1100px] mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center reveal">
                
                {/* Left Side */}
                <div className="text-left">
                    <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-[#CFAE6B] mb-8 block">Análise Inicial</span>
                    <h2 className="mb-8 leading-[1.05]">
                        Raio X da <br />
                        <span className="italic text-[#CFAE6B]">Realidade</span>
                    </h2>
                    <p className="max-w-lg mb-14 text-[#202126]/60 text-[15px] leading-[1.8] font-light">
                        Um encontro exclusivo para uma análise profunda da sua situação atual. Receba instruções e direção claras sobre metas e objetivos coerentes com as suas prioridades para esta estação da vida.
                    </p>

                    <ul className="space-y-5 mb-14">
                        {[
                            'Análise detalhada do momento atual',
                            'Instruções práticas para metas imediatas',
                            'Alinhamento com prioridades de vida',
                            'Direcionamento conforme sua disposição em agir'
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-4">
                                <CheckCircle2 size={18} className="text-[#CFAE6B] flex-shrink-0 mt-0.5" strokeWidth={2} />
                                <span className="font-sans font-normal text-sm text-[#202126]/70">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <button className="btn-premium">
                        APLICAR PARA ANÁLISE <ChevronRight size={16} />
                    </button>
                </div>

                {/* Right Side - Staggered Cards */}
                <div className="grid grid-cols-2 gap-5">
                    {[
                        { num: '01', title: 'Clareza Absoluta' },
                        { num: '02', title: 'Ação Direcionada', mt: 'mt-10' },
                        { num: '03', title: 'Resultados Reais' },
                        { num: '04', title: 'Foco no Essencial', mt: 'mt-10' }
                    ].map((card, i) => (
                        <div key={i} className={`bg-white border border-[#202126]/6 p-8 flex flex-col justify-between aspect-square group hover:border-[#CFAE6B]/40 transition-all duration-500 ${card.mt || ''}`}>
                            <span className="text-5xl font-serif font-light text-[#202126]/8 group-hover:text-[#CFAE6B] transition-colors duration-500">{card.num}</span>
                            <h4 className="text-[#202126] text-[11px] tracking-[0.12em]">{card.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RaioXSection;
