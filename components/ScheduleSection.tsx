import React from 'react';
import { Section } from '../types';
import { Calendar, Clock, MapPin, Lock, ArrowRight } from 'lucide-react';

const ScheduleSection: React.FC = () => {
    return (
        <section id={Section.AGENDA} className="section-spacing relative bg-[#F6F6F6] text-[#202126]">
            
            <div className="max-w-[1100px] mx-auto px-8 reveal">
                <div className="max-w-2xl mx-auto text-center mb-20">
                    <span className="text-[#CFAE6B] text-[10px] font-semibold uppercase tracking-[0.3em] mb-8 block">Próximos Passos</span>
                    <h2 className="mb-8 leading-[1.1]">Próxima <span className="italic text-[#CFAE6B]">Imersão</span></h2>
                    <p className="text-[#202126]/50 text-[15px] leading-[1.8] font-light">Prepare-se para o dia que mudará sua mentalidade para sempre.</p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="bg-white border border-[#202126]/6 p-12 md:p-16 relative overflow-hidden hover:border-[#CFAE6B]/30 transition-all duration-500">
                        
                        {/* Subtle Calendar watermark */}
                        <div className="absolute top-8 right-8 opacity-[0.03] pointer-events-none">
                            <Calendar size={160} strokeWidth={0.5} />
                        </div>

                        <div className="flex flex-col md:flex-row items-start gap-14 relative z-10">
                            {/* Date Block */}
                            <div className="p-8 bg-[#202126] text-[#F6F6F6] flex flex-col items-center justify-center min-w-[120px]">
                                <span className="text-5xl font-serif font-medium text-[#CFAE6B] leading-none">30</span>
                                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] mt-2 text-[#F6F6F6]">Maio</span>
                            </div>

                            {/* Details */}
                            <div className="flex-1">
                                <h3 className="mb-6 text-[#202126]">Imersão Presencial</h3>
                                <p className="mb-10 text-[#202126]/50 text-[15px] leading-[1.8] font-light opacity-100">
                                    Um dia inteiro de imersão profunda. Algo que nunca foi revelado será compartilhado. Você está pronta para suportar a verdade da sua própria transformação?
                                </p>
                                
                                <div className="flex flex-wrap gap-8">
                                    <div className="flex items-center gap-3 text-[11px] font-medium text-[#202126]/40 uppercase tracking-[0.12em]">
                                        <Clock size={15} className="text-[#CFAE6B]" strokeWidth={1.5} /> 09:00 18:00
                                    </div>
                                    <div className="flex items-center gap-3 text-[11px] font-medium text-[#202126]/40 uppercase tracking-[0.12em]">
                                        <MapPin size={15} className="text-[#CFAE6B]" strokeWidth={1.5} /> Local Secreto
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 pt-12 border-t border-[#202126]/6 flex flex-col items-center gap-6">
                            <button className="btn-premium">
                                ENTRAR NA LISTA DE ESPERA <ArrowRight size={16} />
                            </button>
                            <div className="flex items-center gap-2.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#202126]/25">
                                <Lock size={12} className="text-[#CFAE6B]" strokeWidth={1.5} /> Apenas 30 vagas disponíveis
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScheduleSection;
