import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Section } from '../types';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#202126]/95 backdrop-blur-xl py-5 border-b border-white/5' : 'bg-transparent py-8'}`}>
            <div className="max-w-[1100px] mx-auto px-8 flex justify-between items-center">
                <div onClick={() => scrollTo(Section.HERO)} className="cursor-pointer">
                    <span className="font-serif font-semibold uppercase tracking-[0.25em] text-xl text-[#F6F6F6]">Paulini</span>
                </div>

                <div className="hidden lg:flex items-center gap-12">
                    <button onClick={() => scrollTo(Section.RAIO_X)} className="text-[11px] font-medium uppercase tracking-[0.15em] text-white/40 hover:text-[#CFAE6B] transition-colors">Raio X</button>
                    <button onClick={() => scrollTo(Section.TRANSFORMAMENTE)} className="text-[11px] font-medium uppercase tracking-[0.15em] text-white/40 hover:text-[#CFAE6B] transition-colors">Mentoria</button>
                    <button onClick={() => scrollTo(Section.MMP)} className="text-[11px] font-medium uppercase tracking-[0.15em] text-white/40 hover:text-[#CFAE6B] transition-colors">MMP</button>
                    <button onClick={() => scrollTo(Section.ABOUT)} className="text-[11px] font-medium uppercase tracking-[0.15em] text-white/40 hover:text-[#CFAE6B] transition-colors">Sobre</button>
                    <button onClick={() => scrollTo(Section.MMP)} className="btn-premium py-3 px-8 text-[11px]">Me Inscrever</button>
                </div>

                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white/50 hover:text-white">
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden fixed inset-0 bg-[#202126]/98 backdrop-blur-xl z-[60] flex flex-col items-center justify-center gap-12">
                    <button onClick={() => scrollTo(Section.RAIO_X)} className="font-serif text-3xl font-medium text-[#F6F6F6]">Raio X</button>
                    <button onClick={() => scrollTo(Section.TRANSFORMAMENTE)} className="font-serif text-3xl font-medium text-[#F6F6F6]">Mentoria</button>
                    <button onClick={() => scrollTo(Section.MMP)} className="font-serif text-3xl font-medium text-[#F6F6F6]">MMP</button>
                    <button onClick={() => scrollTo(Section.ABOUT)} className="font-serif text-3xl font-medium text-[#F6F6F6]">Sobre</button>
                    <button onClick={() => setIsMenuOpen(false)} className="mt-8 text-[10px] font-semibold text-white/30 uppercase tracking-[0.2em] border border-white/10 px-8 py-3">Fechar</button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
