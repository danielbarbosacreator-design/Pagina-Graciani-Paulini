import React from 'react';
import { Lock, ArrowRight } from 'lucide-react';

export const PricingSection: React.FC = () => {
    return (
        <div className="py-8 relative">
            <div className="max-w-3xl mx-auto">
                
                <div className="bg-[#202126] text-[#F6F6F6] p-12 lg:p-20 relative overflow-hidden">
                    
                    {/* Subtle glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#CFAE6B]/5 blur-[80px] rounded-full pointer-events-none z-0"></div>
                    
                    <div className="relative z-10 text-center">
                        <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-[#CFAE6B] mb-3 block">
                            Investimento na Jornada
                        </span>
                        <p className="font-sans text-[13px] font-light text-white/40 mb-14">
                            Investimento Mentoria Premium
                        </p>

                        {/* Price */}
                        <div className="flex flex-col items-center justify-center mb-16">
                            <span className="font-sans text-white/25 line-through text-base mb-3 block">R$ 5.997,00</span>
                            <div className="flex items-baseline gap-3">
                                <span className="font-sans text-white/40 text-base uppercase font-medium tracking-[0.15em]">R$</span>
                                <span className="font-serif text-7xl md:text-8xl text-[#CFAE6B] leading-none font-medium">3.997</span>
                            </div>
                        </div>

                        {/* Payment Options */}
                        <div className="grid grid-cols-2 gap-4 mb-16 max-w-md mx-auto">
                            <div className="bg-white/[0.03] border border-white/5 p-8 flex flex-col items-center group hover:border-[#CFAE6B]/30 transition-colors duration-500">
                                <Lock size={18} className="text-[#CFAE6B] mb-4" strokeWidth={1.5} />
                                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-[#F6F6F6] mb-1">Cartão em até 12x</span>
                                <span className="font-sans text-[9px] text-white/30 uppercase tracking-[0.1em]">Sem comprometer o limite</span>
                            </div>
                            <div className="bg-white/[0.03] border border-white/5 p-8 flex flex-col items-center group hover:border-[#CFAE6B]/30 transition-colors duration-500">
                                <Lock size={18} className="text-[#CFAE6B] mb-4" strokeWidth={1.5} />
                                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-[#F6F6F6] mb-1">Pix à vista</span>
                                <span className="font-sans text-[9px] text-[#CFAE6B] font-semibold uppercase tracking-[0.1em]">Desconto Especial</span>
                            </div>
                        </div>

                        <button className="btn-premium w-full md:w-auto md:px-20">
                            QUERO VIVER ESSA JORNADA <ArrowRight size={16} />
                        </button>
                        
                        <p className="font-sans text-[9px] text-white/20 uppercase tracking-[0.15em] mt-10 font-medium">
                            Inclui relatório completo de perfil (50 páginas, impresso e colorido)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
