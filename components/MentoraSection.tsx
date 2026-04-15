import React from 'react';
import { Section } from '../types';
import { Award, BookOpen, Target, Verified, Quote, TreeDeciduous } from 'lucide-react';

const MentoraSection: React.FC = () => {
    return (
        <section id={Section.ABOUT} className="py-24 md:py-40 bg-brand-gray relative overflow-hidden">
            {/* Decorative Tree Icon in background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
                <TreeDeciduous size={800} />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="reveal">
                        <div className="relative group max-w-md mx-auto lg:mx-0">
                            {/* Frame inspired by new branding */}
                            <div className="absolute -inset-4 border border-accent-glow rounded-3xl -z-10 animate-pulse" />
                            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                                    alt="Graciane Paulini"
                                    className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                            </div>

                            {/* Stats Card Overlay */}
                            <div className="absolute -bottom-10 -right-10 glass-card p-10 border-l-4 accent-border shadow-2xl animate-float">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-white/5 rounded-full accent-text">
                                        <Verified size={24} />
                                    </div>
                                    <div>
                                        <div className="text-4xl font-display font-black accent-text">+10k</div>
                                        <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Atendimentos Reais</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="reveal">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-[1px] accent-bg" />
                            <h4 className="accent-text text-sm font-bold uppercase tracking-[0.4em]">Propósito & Destino</h4>
                        </div>

                        <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none mb-10">
                            Graciane <br />
                            <span className="accent-text">Paulini</span>
                        </h2>

                        <div className="space-y-8 font-sans text-gray-400 text-base leading-relaxed mb-12">
                            <p>
                                <span className="text-white font-bold">Mentora de Inteligência Emocional e Financeira.</span> Minha razão de viver é amar a Deus sobre todas as coisas, a mim mesma e ao meu próximo. Viver o melhor da vida aqui e agora, ensinando a transformação de mentalidade com pequenas ações colocadas em prática todos os dias.
                            </p>
                            <p className="border-l-2 accent-border pl-6 italic font-serif text-xl">
                                "A verdadeira prosperidade financeira é consequência de seu autoconhecimento, da sua cura interior e da forma como se posiciona na vida."
                            </p>
                            <p>
                                Com mais de <span className="text-white font-bold">22 anos de experiência comercial</span>, desenvolvi uma escuta ativa e soluções personalizadas, capacitando pessoas para melhorar seu estilo de vida e, principalmente, ser feliz no caminho.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { icon: <Award className="accent-text" size={18} />, title: '+22 Anos Varejo & Indústria' },
                                { icon: <BookOpen className="accent-text" size={18} />, title: 'Coach Ikigai - Propósito' },
                                { icon: <Target className="accent-text" size={18} />, title: 'Analista de Perfil Comportamental' },
                                { icon: <TreeDeciduous className="accent-text" size={18} />, title: 'Finanças Comportamentais' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-5 glass-card">
                                    {item.icon}
                                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-gray-300">{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MentoraSection;
