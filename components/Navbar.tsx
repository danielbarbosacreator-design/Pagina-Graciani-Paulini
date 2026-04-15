import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, TreeDeciduous } from 'lucide-react';
import { Section } from '../types';
import { useTheme } from '../contexts/ThemeContext';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const [timeLeft, setTimeLeft] = useState({ dias: 15, horas: 1, minutos: 13, segundos: 28 });

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);

        const interval = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.segundos > 0) return { ...prev, segundos: prev.segundos - 1 };
                if (prev.minutos > 0) return { ...prev, minutos: prev.minutos - 1, segundos: 59 };
                return prev;
            });
        }, 1000);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(interval);
        };
    }, []);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/95 backdrop-blur-md py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo - Tree Concept */}
                <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollTo(Section.HERO)}>
                    <div className="relative w-12 h-12 flex items-center justify-center border border-white/10 rounded-full bg-white/5 transition-transform group-hover:scale-105">
                        <TreeDeciduous size={24} className="accent-text" />
                        <div className="absolute inset-0 border border-accent-glow rounded-full animate-pulse" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-display text-lg tracking-[0.2em] font-black leading-none uppercase">PAULINI</span>
                        <span className="text-[7px] font-bold tracking-[0.4em] text-gray-500 uppercase mt-1">Inteligência Estratégica</span>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-10">
                    <button onClick={() => scrollTo(Section.RAIO_X)} className="text-[10px] font-bold uppercase tracking-[0.2em] hover:accent-text transition-all">RAIO X</button>
                    <button onClick={() => scrollTo(Section.TRANSFORMAMENTE)} className="text-[10px] font-bold uppercase tracking-[0.2em] hover:accent-text transition-all">Mentoria</button>

                    {/* Countdown */}
                    <div className="flex items-center gap-6 px-6 border-x border-white/5">
                        {['DIAS', 'HRS', 'MIN', 'SEG'].map((label, idx) => {
                            const values = [timeLeft.dias, timeLeft.horas, timeLeft.minutos, timeLeft.segundos];
                            return (
                                <div key={label} className="text-center min-w-[30px]">
                                    <div className="text-lg font-display font-black accent-text leading-none">{String(values[idx]).padStart(2, '0')}</div>
                                    <div className="text-[6px] font-bold text-gray-600 mt-1 uppercase">{label}</div>
                                </div>
                            );
                        })}
                    </div>

                    <button
                        onClick={() => scrollTo(Section.MMP)}
                        className="btn-premium py-3 px-8 text-[9px]"
                    >
                        ME INSCREVER AGORA
                    </button>

                    <button onClick={toggleTheme} className="p-2 transition-transform hover:rotate-45">
                        {theme === 'gold' ? <Moon size={16} className="text-gray-500" /> : <Sun size={16} className="text-gray-500 text-yellow-500" />}
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className="lg:hidden flex items-center gap-4">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden fixed inset-0 bg-brand-black z-[60] flex flex-col items-center justify-center space-y-8 animate-fade-in py-20 px-10">
                    <div className="flex-1 flex flex-col items-center justify-center space-y-8">
                        <button onClick={() => scrollTo(Section.RAIO_X)} className="text-4xl font-display font-bold accent-text">Raio X</button>
                        <button onClick={() => scrollTo(Section.TRANSFORMAMENTE)} className="text-4xl font-display">Mentoria</button>
                        <button onClick={() => scrollTo(Section.MMP)} className="text-4xl font-display">MMP</button>
                        <button onClick={() => scrollTo(Section.ABOUT)} className="text-4xl font-display">A Mentora</button>
                    </div>
                    <button onClick={() => setIsMenuOpen(false)} className="text-gray-500 uppercase tracking-widest text-[10px] font-bold border-t border-white/5 pt-10 w-full text-center">FECHAR MENU</button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
