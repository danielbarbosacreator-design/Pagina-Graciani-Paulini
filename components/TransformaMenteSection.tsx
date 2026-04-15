import React from 'react';
import { Section } from '../types';
import { useTheme } from '../contexts/ThemeContext';
import { Check, Mail, Lock, Smartphone, MapPin, Coffee, Star } from 'lucide-react';

const TransformaMenteSection: React.FC = () => {
    const { theme } = useTheme();

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
        <section id={Section.TRANSFORMAMENTE} className="py-24 md:py-40 bg-brand-gray relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 reveal">
                    <div>
                        <div className={`inline-block px-4 py-1 border-2 ${theme === 'red' ? 'border-brand-red text-brand-red' : 'border-brand-gold text-brand-gold'} text-[10px] font-bold tracking-[0.3em] uppercase mb-8`}>
                            Inscrições Abertas - 8 Encontros
                        </div>
                        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter leading-[0.85] mb-8">
                            Mentoria <br />
                            <span className={theme === 'red' ? 'accent-text' : 'gold-gradient-text'}>TransformaMente</span>
                        </h2>
                        <p className="font-serif italic text-2xl text-gray-400 mb-10 leading-relaxed">
                            "A verdade é: a gente só se cura quando se conhece. Para me tornar quem Deus me criou para ser, preciso sair do piloto automático e começar a viver a partir da essência dEle em mim!"
                        </p>
                        <div className="flex flex-col gap-4 text-gray-500 font-sans text-sm">
                            <div className="flex items-center gap-3">
                                <MapPin size={18} className="accent-text" /> <span>Presencial em JOINVILLE ou Online via Meet</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Coffee size={18} className="accent-text" /> <span>8º Encontro: Encerramento com Palestra e Café</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Star size={18} className="accent-text" /> <span>Inclui Relatório de Perfil com 50 páginas</span>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card p-12 lg:p-16 border-l-4 accent-border mt-10">
                        <h3 className="font-sans font-extrabold text-2xl uppercase tracking-tighter mb-8">O que você vai conquistar:</h3>
                        <ul className="space-y-6">
                            {[
                                'Mais clareza sobre quem você é',
                                'Ferramentas para se posicionar com amor e firmeza',
                                'Liberdade emocional plena',
                                'Consciência das suas forças e do que te paralisa',
                                'Nova visão sobre si mesma — real, leve e verdadeira'
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4 text-gray-400">
                                    <Check size={20} className="accent-text flex-shrink-0 mt-1" />
                                    <span className="font-sans text-lg font-medium tracking-tight h-[24px] overflow-hidden">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Step Grid from prototype */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-32 reveal">
                    {steps.map((step, index) => (
                        <div key={index} className="glass-card p-10 group hover:bg-white/[0.05] transition-all">
                            <span className="text-4xl font-display font-black opacity-20 group-hover:opacity-100 group-hover:accent-text transition-all duration-500 block mb-6">{step.num}</span>
                            <h4 className="font-sans font-bold text-sm uppercase tracking-widest mb-3 leading-tight">{step.title}</h4>
                            <p className="font-sans text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Investment Section */}
                <div className="max-w-4xl mx-auto glass-card p-12 md:p-20 text-center border-t-2 accent-border reveal bg-black/40">
                    <span className="text-gray-500 text-xs font-bold tracking-[0.4em] uppercase mb-4 block underline">Investimento na Jornada</span>
                    <div className="flex flex-col items-center mb-12">
                        <span className="text-4xl font-serif italic text-gray-500 mb-2 line-through">R$ 3.997,00</span>
                        <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-display font-bold accent-text mb-4">Investimento Mentoria Premium</span>
                        </div>
                        {/* Added price based on text */}
                        <div className="text-6xl md:text-8xl font-display font-black tracking-tighter accent-text">R$ 3.997</div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                            <Smartphone className="mx-auto mb-4 accent-text" />
                            <h4 className="text-sm font-bold uppercase mb-2">Cartão em até 12x</h4>
                            <p className="text-[10px] text-gray-500">Link direto enviado no seu WhatsApp</p>
                        </div>
                        <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                            <Lock className="mx-auto mb-4 accent-text" />
                            <h4 className="text-sm font-bold uppercase mb-2">Pix à Vista</h4>
                            <p className="text-[10px] text-gray-500 italic">Garante sua vaga prioritária</p>
                            <code className="block mt-4 text-[10px] accent-text font-bold">58.982.139/0001-168</code>
                        </div>
                    </div>

                    <button className="btn-premium py-6 px-16 text-lg w-full md:w-auto">
                        QUERO VIVER ESSA JORNADA
                    </button>
                    <p className="mt-8 text-[10px] text-gray-600 uppercase tracking-widest font-bold">
                        Inclui seu Relatório Completo de Análise de Perfil (50 páginas, impresso e colorido)
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TransformaMenteSection;
