import React from 'react';
import { Section } from '../types';
import { PlayCircle, CheckCircle, ArrowRight, Star } from 'lucide-react';

const MMPSection: React.FC = () => {
    const modules = [
        { title: 'Comece por Aqui', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600', subtitle: 'MÉTODO MENTALIDADE PRÓSPERA' },
        { title: 'Um Novo Começo', img: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=600', subtitle: 'MÉTODO MENTALIDADE PRÓSPERA' },
        { title: 'Clareza Para Prosperar', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600', subtitle: 'MÉTODO MENTALIDADE PRÓSPERA' },
        { title: 'Bônus Especiais', img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=600', subtitle: 'MÉTODO MENTALIDADE PRÓSPERA' },
    ];

    return (
        <section id={Section.MMP} className="py-24 md:py-40 bg-black relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
                    <div className="md:w-2/3">
                        <span className="accent-text text-sm font-bold uppercase tracking-[0.4em] mb-4 block font-sans">Porta de Entrada</span>
                        <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-6">
                            Método <br />
                            <span className="accent-text">Mentalidade Próspera</span>
                        </h2>
                        <p className="font-sans text-gray-400 text-lg max-w-xl leading-relaxed">
                            A forma de pensar, sentir e agir que cria abundância em todas as áreas da vida. Um treinamento gravado completo para você dar o primeiro passo.
                        </p>
                    </div>
                    <div className="md:w-1/3 flex flex-col items-end mt-10 md:mt-0">
                        <button className="btn-premium group py-4 px-10 text-[10px]">
                            QUERO ME INSCREVER <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Module Cards Grid from prototype Image 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 reveal">
                    {modules.map((mod, i) => (
                        <div key={i} className="relative aspect-[3/4] group overflow-hidden border-b-2 border-transparent hover:border-accent-glow transition-all rounded-lg">
                            <img
                                src={mod.img}
                                alt={mod.title}
                                className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 p-8">
                                <h4 className="font-display text-3xl font-black uppercase tracking-tighter leading-none mb-2 tracking-tight group-hover:accent-text transition-all">
                                    {mod.title.split(' ')[0]} <br />
                                    <span className="font-serif lowercase italic text-xl font-normal opacity-80">{mod.title.split(' ').slice(1).join(' ')}</span>
                                </h4>
                                <div className="w-12 h-[2px] accent-bg mb-4" />
                                <p className="text-[7px] font-bold text-gray-500 uppercase tracking-widest">{mod.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Benefits & Price Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center reveal">
                    <div className="space-y-12">
                        <div className="glass-card p-10 border-l-4 accent-border">
                            <h4 className="font-sans font-extrabold text-xl uppercase tracking-tighter mb-8 flex items-center gap-2">
                                <PlayCircle size={24} className="accent-text" /> O que você aprende no MMP:
                            </h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                {[
                                    '🌱 Mente e Corpo equilibrados',
                                    '💡 Mentalidade de Possibilidades',
                                    '🙏 Poder da Gratidão real',
                                    '💰 Administração de Recursos',
                                    '❤️ Relacionamentos Saudáveis',
                                    '✨ Propósito e Legado',
                                    '🙌 Abundância e Transbordo'
                                ].map((benefit, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-400 font-sans text-sm font-semibold tracking-tight h-[20px] overflow-hidden">
                                        <CheckCircle size={16} className="accent-text flex-shrink-0" />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="text-center lg:text-right flex flex-col items-center lg:items-end">
                        <span className="text-gray-500 text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Oferta de Entrada - Leads Frios</span>
                        <div className="relative mb-8">
                            <div className="absolute -top-6 -right-6 w-20 h-20 bg-accent-glow blur-[40px] rounded-full" />
                            <h3 className="font-display font-black text-9xl md:text-[11rem] leading-none accent-text tracking-tighter relative z-10">
                                R$47
                            </h3>
                            <span className="text-gray-500 font-sans text-xs uppercase tracking-widest font-bold">acesso imediato • 20 aulas gravadas</span>
                        </div>
                        <button className="btn-premium group py-6 px-20 text-lg w-full md:w-auto mt-4">
                            INICIAR MINHA MUDANÇA <ArrowRight className="ml-2 group-hover:translate-x-1" />
                        </button>
                        <div className="mt-8 flex items-center gap-2 text-gray-500 text-[10px] font-bold uppercase tracking-widest opacity-60">
                            <Star size={12} fill="currentColor" /> MENTORIA EM GRUPO OU INDIVIDUAL
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MMPSection;
