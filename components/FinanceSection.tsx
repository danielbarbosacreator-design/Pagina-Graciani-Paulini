import React from 'react';
import { Section } from '../types';
import { Wallet, Landmark, LineChart, PieChart, Users, ArrowRight } from 'lucide-react';

const FinanceSection: React.FC = () => {
    return (
        <section id={Section.FINANCEIRA} className="section-spacing relative bg-[#202126] text-[#F6F6F6]">
            
            <div className="max-w-[1100px] mx-auto px-8 reveal">
                <div className="max-w-2xl mx-auto text-center mb-20">
                    <span className="text-[#CFAE6B] text-[10px] font-semibold uppercase tracking-[0.3em] mb-8 block">Mentoria Exclusiva</span>
                    
                    <h2 className="mb-8 leading-[1.05]">
                        Inteligência<br />
                        <span className="italic text-white/80 font-light">financeira</span>
                    </h2>
                    
                    <p className="text-white/40 italic font-serif text-xl leading-relaxed tracking-wide">
                        "Não é sobre quanto você ganha, é sobre como você gerencia o que tem e a mentalidade que constrói para transbordar."
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
                    {[
                        { icon: <Wallet size={22} strokeWidth={1.5} />, title: 'Cura da Escassez', desc: 'Identificação e quebra de crenças limitantes sobre dinheiro.' },
                        { icon: <Landmark size={22} strokeWidth={1.5} />, title: 'Pilar da Riqueza', desc: 'Construção de uma base sólida para multiplicação de recursos.' },
                        { icon: <LineChart size={22} strokeWidth={1.5} />, title: 'Gestão Inteligente', desc: 'Plano de ação focado em clareza, honestidade e propósitos.' },
                        { icon: <PieChart size={22} strokeWidth={1.5} />, title: 'Fluxo de Abundância', desc: 'Alinhamento de prioridades para os próximos 6 meses.' },
                        { icon: <Users size={22} strokeWidth={1.5} />, title: 'Dinâmica de Casal', desc: 'Especial para alinhar metas e sonhos em comum.' },
                        { icon: <PieChart size={22} strokeWidth={1.5} />, title: 'Transbordo', desc: 'Ocupar seu lugar no mundo através da prosperidade integral.' },
                    ].map((item, i) => (
                        <div key={i} className="premium-card-dark text-left group p-10">
                            <div className="text-[#CFAE6B] mb-8 group-hover:translate-x-1 transition-transform duration-500">
                                {item.icon}
                            </div>
                            <h4 className="mb-3 text-[#F6F6F6] text-[11px] tracking-[0.12em]">{item.title}</h4>
                            <p className="font-sans text-[13px] text-white/40 font-light leading-[1.7]">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <button className="btn-premium">
                        QUERO MARCAR MINHA MENTORIA <ArrowRight size={16} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FinanceSection;
