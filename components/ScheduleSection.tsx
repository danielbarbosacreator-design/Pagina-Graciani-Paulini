import React from 'react';
import { Section } from '../types';
import { Calendar, Clock, MapPin, Lock } from 'lucide-react';

const ScheduleSection: React.FC = () => {
    return (
        <section id={Section.AGENDA} className="py-24 md:py-40 bg-black relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24 reveal">
                    <span className="accent-text text-sm font-bold uppercase tracking-[0.4em] mb-6 block">Agenda de Eventos</span>
                    <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-4">
                        PRÓXIMA <span className="accent-text">IMERSÃO</span>
                    </h2>
                    <p className="font-sans text-gray-500 text-sm uppercase tracking-widest font-bold">Prepare-se para o dia que mudará sua mentalidade</p>
                </div>

                <div className="max-w-4xl mx-auto reveal group cursor-pointer relative">
                    {/* Suspense Glow effect */}
                    <div className="absolute -inset-10 bg-accent-glow blur-[100px] opacity-0 group-hover:opacity-40 transition-opacity duration-1000" />

                    <div className="glass-card p-12 md:p-20 relative overflow-hidden border-2 accent-border">
                        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-100 transition-opacity duration-1000">
                            <Lock size={120} className="accent-text" />
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
                            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                                <div className="text-7xl font-display font-black accent-text leading-none">30</div>
                                <div className="text-xl font-bold uppercase tracking-widest text-white">MAIO</div>
                            </div>

                            <div className="flex-1">
                                <h3 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6 group-hover:accent-text transition-colors">
                                    IMERSÃO ESPECIAL
                                </h3>
                                <p className="font-sans text-gray-400 text-lg mb-8 leading-relaxed max-w-md">
                                    Um dia inteiro de imersão profunda. Algo que nunca foi revelado será compartilhado. Você está pronta para suportar a verdade da sua própria transformação?
                                </p>

                                <div className="flex flex-wrap gap-8 justify-center md:justify-start text-xs font-bold uppercase tracking-widest text-gray-500">
                                    <div className="flex items-center gap-2">
                                        <Clock size={16} className="accent-text" /> 09:00 — 18:00
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin size={16} className="accent-text" /> LOCAL SECRETO
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 pt-10 border-t border-white/5 flex flex-col items-center">
                            <button className="btn-premium py-5 px-16 w-full md:w-auto">
                                ENTRAR NA LISTA DE ESPERA
                            </button>
                            <p className="mt-6 text-[9px] text-gray-600 uppercase tracking-widest font-black animate-pulse">
                                🔒 APENAS 30 VAGAS DISPONÍVEIS • ABERTURA DAS INSCRIÇÕES EM BREVE
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScheduleSection;
