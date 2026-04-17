import React from 'react';
import { Section } from '../types';
import { Award, BookOpen, Target, TreeDeciduous } from 'lucide-react';

const MentoraSection: React.FC = () => {
    return (
        <section id={Section.ABOUT} className="section-spacing relative bg-[#202126]">
            <div className="max-w-[1100px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center reveal">
                
                {/* Image */}
                <div className="relative">
                    <div className="absolute -inset-12 bg-[#CFAE6B]/8 blur-[80px] rounded-full pointer-events-none z-0" />
                    <div className="relative z-10 overflow-hidden border border-white/5 aspect-[3/4] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]">
                        <img
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                            alt="Graciane Paulini"
                            className="w-full h-full object-cover grayscale-[0.15] brightness-[0.85] contrast-[1.05]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#202126] via-transparent to-transparent" />
                    </div>
                </div>

                {/* Bio */}
                <div className="text-left">
                    <span className="text-[#CFAE6B] text-[10px] font-semibold uppercase tracking-[0.3em] mb-8 block">Propósito & Destino</span>
                    <h2 className="mb-10 leading-[1.05]">
                        Conheça sua Mentora<br />
                        <span className="italic text-[#CFAE6B]">Graciane Paulini</span>
                    </h2>
                    
                    <div className="space-y-6 mb-14">
                        <p className="text-[15px] font-normal text-white/80 leading-[1.8] opacity-100">Mentora de Inteligência Emocional e Financeira.</p>
                        <p className="text-[15px] text-white/50 font-light leading-[1.8] opacity-100">
                            Minha razão de viver é amar a Deus sobre todas as coisas, a mim mesma e ao meu próximo. Viver o melhor da vida aqui e agora, ensinando a transformação de mentalidade com pequenas ações colocadas em prática todos os dias.
                        </p>
                        <blockquote className="border-l-[2px] border-[#CFAE6B]/40 pl-8 italic font-serif text-xl text-white/60 py-2 leading-relaxed">
                            "A verdadeira prosperidade financeira é consequência de seu autoconhecimento, da sua cura interior e da forma como se posiciona na vida."
                        </blockquote>
                        <p className="text-[15px] text-white/50 font-light leading-[1.8] opacity-100">
                            Com mais de 22 anos de experiência comercial, desenvolvi uma escuta ativa e soluções personalizadas, capacitando pessoas para melhorar seu estilo de vida e, principalmente, ser feliz no caminho.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { icon: <Award size={18} strokeWidth={1.5} />, title: '+22 Anos Varejo' },
                            { icon: <BookOpen size={18} strokeWidth={1.5} />, title: 'Coach Ikigai' },
                            { icon: <Target size={18} strokeWidth={1.5} />, title: 'Analista Perfil' },
                            { icon: <TreeDeciduous size={18} strokeWidth={1.5} />, title: 'Finanças Comp.' },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3.5 p-5 bg-white/[0.03] border border-white/5 hover:border-[#CFAE6B]/30 transition-colors duration-500">
                                <span className="text-[#CFAE6B]">{item.icon}</span>
                                <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#F6F6F6]">{item.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MentoraSection;
