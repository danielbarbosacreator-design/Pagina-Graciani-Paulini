import React from 'react';
import { Section } from '../types';
import { Instagram, Mail, MessageSquare } from 'lucide-react';

const MainFooter: React.FC = () => {
    return (
        <footer className="pt-24 pb-16 border-t border-white/5 bg-[#18191D] text-[#F6F6F6]">
            <div className="max-w-[1100px] mx-auto px-8">
                
                {/* Top */}
                <div className="flex flex-col items-center gap-8 mb-20">
                    <span className="font-serif font-semibold uppercase tracking-[0.25em] text-xl text-[#F6F6F6]">Paulini</span>
                    <p className="max-w-md text-center text-white/35 text-[13px] leading-[1.8] font-light">
                        Transformação de mentalidade, inteligência emocional e finanças comportamentais para mulheres que buscam uma vida plena e abundante.
                    </p>
                    <div className="flex gap-8">
                        {[Instagram, Mail, MessageSquare].map((Icon, idx) => (
                            <a key={idx} href="#" className="text-white/15 hover:text-[#CFAE6B] transition-colors duration-500">
                                <Icon size={18} strokeWidth={1.5} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-left border-y border-white/5 py-14 mb-14">
                     <div>
                        <h4 className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/15 mb-6">Navegação</h4>
                        <ul className="space-y-4 text-[11px] font-normal text-white/50">
                            <li><a href={`#${Section.HERO}`} className="hover:text-[#CFAE6B] transition-colors duration-500">Início</a></li>
                            <li><a href={`#${Section.MMP}`} className="hover:text-[#CFAE6B] transition-colors duration-500">Mentoria MMP</a></li>
                            <li><a href={`#${Section.ABOUT}`} className="hover:text-[#CFAE6B] transition-colors duration-500">A Mentora</a></li>
                        </ul>
                     </div>
                     <div>
                        <h4 className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/15 mb-6">Suporte</h4>
                        <ul className="space-y-4 text-[11px] font-normal text-white/50">
                            <li><a href="#" className="hover:text-[#CFAE6B] transition-colors duration-500">WhatsApp</a></li>
                            <li><a href="#" className="hover:text-[#CFAE6B] transition-colors duration-500">Email</a></li>
                        </ul>
                     </div>
                     <div className="col-span-2 flex flex-col items-end text-right">
                        <h4 className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/15 mb-6">Atendimento</h4>
                        <span className="text-[11px] font-normal text-white/35">Graciane Paulini · Mentoria Premium</span>
                     </div>
                </div>

                {/* Bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-medium uppercase tracking-[0.15em] text-white/15">
                    <p className="opacity-100">© 2026 GRACIANE PAULINI. TODOS OS DIREITOS RESERVADOS.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white/40 transition-colors">Termos de Uso</a>
                        <a href="#" className="hover:text-white/40 transition-colors">Privacidade</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default MainFooter;
