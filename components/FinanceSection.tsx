import React from 'react';
import { Section } from '../types';
import { Wallet, Landmark, LineChart, PieChart, Users, ArrowRight } from 'lucide-react';

const FinanceSection: React.FC = () => {
    return (
        <section id={Section.FINANCEIRA} className="py-24 md:py-40 bg-black relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20 items-end mb-24 reveal">
                    <div className="lg:w-2/3">
                        <span className="accent-text text-sm font-bold uppercase tracking-[0.4em] mb-6 block">Mentoria Exclusiva</span>
                        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-none mb-8">
                            Inteligência <br />
                            <span className="opacity-50 italic font-serif lowercase">Financeira</span>
                        </h2>
                        <p className="font-sans text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed italic">
                            "Não é sobre quanto você ganha, é sobre como você gerencia o que tem e a mentalidade que constrói para transbordar."
                        </p>
                    </div>
                    <div className="lg:w-1/3 flex flex-col items-end">
                        <div className="flex items-center gap-4 text-3xl font-display font-black accent-text">
                            <span>5</span>
                            <span className="text-xs uppercase tracking-[0.3em] font-bold text-gray-500 text-right">Encontros <br />Estratégicos</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 reveal">
                    {[
                        { icon: <Wallet size={32} />, title: 'Cura da Escassez', desc: 'Identificação e quebra de crenças limitantes sobre dinheiro.' },
                        { icon: <Landmark size={32} />, title: 'Pilar da Riqueza', desc: 'Construção de uma base sólida para multiplicação de recursos.' },
                        { icon: <LineChart size={32} />, title: 'Gestão Inteligente', desc: 'Plano de ação focado em clareza, honestidade e propósitos.' },
                        { icon: <PieChart size={32} />, title: 'Fluxo de Abundância', desc: 'Alinhamento de prioridades para os próximos 6 meses.' },
                        { icon: <Users size={32} />, title: 'Dinâmica de Casal', desc: 'Especial para alinhar metas e sonhos em comum.' },
                        { icon: <PieChart size={32} />, title: 'Transbordo', desc: 'Ocupar seu lugar no mundo através da prosperidade integral.' },
                    ].map((item, i) => (
                        <div key={i} className="glass-card p-10 hover:accent-border transition-all border-b-2">
                            <div className="accent-text mb-8">{item.icon}</div>
                            <h3 className="font-sans font-bold text-xl uppercase tracking-widest mb-4">{item.title}</h3>
                            <p className="font-sans text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center reveal">
                    <button className="btn-premium group py-6 px-16">
                        QUERO MARCAR MINHA MENTORIA <ArrowRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FinanceSection;
