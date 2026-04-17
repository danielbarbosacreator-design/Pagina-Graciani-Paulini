import React from 'react';
import { Section } from '../types';
import { Check, MapPin, Coffee, Star } from 'lucide-react';
import { PricingSection } from './ui/pricing-section';

const TransformaMenteSection: React.FC = () => {
    const steps = [
        { num: '01', title: 'Perfil Natural e Adaptado', desc: 'Sua essência x o que você se tornou para agradar.' },
        { num: '02', title: 'Potencialidades e Valores', desc: 'O que te move e quais são seus motivadores reais.' },
        { num: '03', title: 'Bloqueios Emocionais', desc: 'Trabalhar medos e travas que impedem seu crescimento.' },
        { num: '04', title: 'Tipos Psicológicos', desc: 'Pontos a desenvolver e sua forma de perceber o mundo.' },
        { num: '05', title: 'Quadro dos Sonhos', desc: 'Integridade, honra e gratidão como base para o futuro.' },
        { num: '06', title: 'Raio X Financeiro', desc: 'Sua relação com dinheiro espelha sua vida íntima.' },
        { num: '07', title: 'Princípios da Riqueza', desc: 'Dinheiro, prosperidade e transbordo real.' },
        { num: '08', title: 'Expectativa x Disposição', desc: 'CNV, encerramento com Palestra e Café.' },
    ];

    return (
        <section id={Section.TRANSFORMAMENTE} className="section-spacing relative bg-[#F6F6F6] text-[#202126]">
            
            <div className="max-w-[1100px] mx-auto px-8 reveal">
                
                {/* Header Split */}
                <div className="grid lg:grid-cols-5 gap-16 mb-28 items-start">
                    <div className="lg:col-span-3">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#CFAE6B] mb-8 block">Inscrições Abertas · 8 Encontros</span>
                        <h2 className="mb-10 leading-[1.05]">
                            Mentoria<br />
                            <span className="italic text-[#CFAE6B]">TransformaMente</span>
                        </h2>
                        <p className="max-w-lg text-[#202126]/50 italic font-serif text-[1.4rem] leading-[1.6]">
                            "A verdade é: a gente só se cura quando se conhece. Para me tornar quem Deus me criou para ser, preciso sair do piloto automático e começar a viver a partir da essência dEle em mim!"
                        </p>
                        
                        <div className="mt-14 space-y-5">
                            {[
                                { icon: <MapPin size={16} strokeWidth={1.5} />, text: 'Presencial em Joinville ou Online via Meet' },
                                { icon: <Coffee size={16} strokeWidth={1.5} />, text: '8º Encontro: Encerramento com Palestra e Café' },
                                { icon: <Star size={16} strokeWidth={1.5} />, text: 'Inclui Relatório de Perfil com 50 páginas' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3.5">
                                    <span className="text-[#CFAE6B]">{item.icon}</span>
                                    <span className="font-sans text-[13px] font-normal text-[#202126]/60">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Feature Box */}
                    <div className="lg:col-span-2 bg-[#202126] text-[#F6F6F6] p-10 lg:p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-[#CFAE6B]/8 blur-[60px] pointer-events-none"></div>
                        <h4 className="mb-10 text-[#F6F6F6] text-[11px] tracking-[0.12em]">O que você vai conquistar:</h4>
                        <ul className="space-y-6">
                            {[
                                'Mais clareza sobre quem você é',
                                'Ferramentas para se posicionar com amor e firmeza',
                                'Liberdade emocional plena',
                                'Consciência das suas forças e do que te paralisa',
                                'Nova visão sobre si mesma real, leve e madura'
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <Check size={16} className="text-[#CFAE6B] mt-1 flex-shrink-0" strokeWidth={2} />
                                    <span className="font-sans text-[13px] font-light text-white/70 leading-[1.6]">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* 8-Step Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-32">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-white border border-[#202126]/6 p-8 lg:p-10 group hover:border-[#CFAE6B]/40 transition-all duration-500">
                            <span className="text-[2.5rem] font-serif font-light text-[#202126]/8 group-hover:text-[#CFAE6B] transition-colors duration-500 mb-6 block leading-none">{step.num}</span>
                            <h4 className="text-[#202126] text-[10px] tracking-[0.1em] mb-3">{step.title}</h4>
                            <p className="text-[12px] text-[#202126]/45 leading-[1.6] font-light">{step.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Pricing */}
                <PricingSection />
            </div>
        </section>
    );
};

export default TransformaMenteSection;
