import React from 'react';
import { Section } from '../types';
import { Instagram, Mail, MessageSquare, ShieldCheck } from 'lucide-react';

const MainFooter: React.FC = () => {
    return (
        <footer className="bg-black py-20 border-t border-white/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
                    <div className="md:col-span-2">
                        <h2 className="font-header text-3xl tracking-tighter accent-text mb-6">GRACIANE PAULINI</h2>
                        <p className="text-gray-500 text-sm max-w-sm leading-relaxed mb-8">
                            Transformação de mentalidade, inteligência emocional e finanças comportamentais para mulheres que buscam uma vida plena e abundante.
                        </p>
                        <div className="flex gap-6">
                            <a href="#" className="text-gray-500 hover:accent-text transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-500 hover:accent-text transition-colors"><Mail size={20} /></a>
                            <a href="#" className="text-gray-500 hover:accent-text transition-colors"><MessageSquare size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-display font-bold uppercase tracking-widest text-xs mb-8">Navegação</h4>
                        <ul className="space-y-4 text-xs uppercase tracking-[0.2em] text-gray-600">
                            <li><a href={`#${Section.HERO}`} className="hover:text-white transition-colors">Início</a></li>
                            <li><a href={`#${Section.RAIO_X}`} className="hover:text-white transition-colors">Raio X</a></li>
                            <li><a href={`#${Section.MMP}`} className="hover:text-white transition-colors">Mentoria MMP</a></li>
                            <li><a href={`#${Section.ABOUT}`} className="hover:text-white transition-colors">A Mentora</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display font-bold uppercase tracking-widest text-xs mb-8">Pagamento Seguro</h4>
                        <div className="bg-white/[0.03] p-6 border border-white/5">
                            <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-4 font-bold">Chave Pix CNPJ</p>
                            <code className="text-[10px] accent-text font-bold block mb-4">58.982.139/0001-168</code>
                            <div className="flex items-center gap-2 text-[8px] text-gray-600 uppercase tracking-widest border-t border-white/5 pt-4">
                                <ShieldCheck size={12} /> Nubank - Graciane Paulini
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-8 text-[10px] uppercase tracking-[0.3em] text-gray-700">
                    <p>© 2026 GRACIANE PAULINI. TODOS OS DIREITOS RESERVADOS.</p>
                    <p>DESIGN PREMIUM POR ANTIGRAVITY AI</p>
                </div>
            </div>
        </footer>
    );
};

export default MainFooter;
