import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
    const testimonials = [
        {
            name: 'Bruna Fernandes',
            role: 'Empresária',
            text: 'Essa Mentoria foi fundamental para alinharmos muitas coisas em 2024, em casal aprendemos que não existe meu dinheiro e o dinheiro do meu marido, e sim o dinheiro da família.',
            img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600',
        },
        {
            name: 'Larissa Lunelli',
            role: 'Desenvolvimento Pessoal',
            text: 'É essa profundidade que eu busco e que precisava para este momento de vida. Quero agradecer por você não nos permitir ficar no raso. Seria mais fácil ser rasa né?',
            img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=600',
        },
        {
            name: 'Jaqueline Balland',
            role: 'Profissional Liberal',
            text: 'Consegui ver a minha capacidade de crescimento, faturamento da empresa e o controle financeiro que há muito tempo não fazia corretamente.',
            img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600',
        },
        {
            name: 'Chandrieli Monica',
            role: 'Liderança',
            text: 'A mentoria foi muito importante, comecei a organizar áreas da minha vida que nem sabia que existiam. Foi um grande avanço pra mim aprender a dizer não.',
            img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=600',
        }
    ];

    return (
        <section className="section-spacing relative bg-[#F6F6F6] text-[#202126]">
            
            <div className="max-w-[1100px] mx-auto px-8 reveal">
                <div className="max-w-2xl mx-auto text-center mb-20">
                    <span className="text-[#CFAE6B] text-[10px] font-semibold uppercase tracking-[0.3em] mb-8 block">Depoimentos Reais</span>
                    <h2 className="leading-[1.1]">O que dizem nossas <span className="italic text-[#CFAE6B]">Mentoradas</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-white border border-[#202126]/6 p-10 group hover:border-[#CFAE6B]/30 transition-all duration-500">
                            <Quote size={20} className="text-[#CFAE6B]/40 mb-6" strokeWidth={1.5} />
                            <p className="text-[15px] text-[#202126]/60 font-light leading-[1.8] mb-10 italic font-serif">"{t.text}"</p>
                            <div className="flex items-center gap-4 pt-6 border-t border-[#202126]/6">
                                <img src={t.img} alt={t.name} className="w-11 h-11 rounded-full object-cover grayscale-[0.3] border border-[#CFAE6B]/20" />
                                <div className="flex flex-col">
                                    <span className="font-sans font-semibold text-[12px] tracking-[0.1em] uppercase text-[#202126]">{t.name}</span>
                                    <span className="font-sans text-[10px] text-[#202126]/40 uppercase tracking-[0.15em] mt-0.5">{t.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col items-center gap-4">
                    <div className="flex gap-1.5">
                         {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="#CFAE6B" color="#CFAE6B" />)}
                    </div>
                    <p className="text-[10px] uppercase font-semibold tracking-[0.2em] text-[#202126]/30">Baseado em +10.000 atendimentos</p>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
