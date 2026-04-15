import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
    const testimonials = [
        {
            name: 'Bruna Fernandes',
            text: 'Essa Mentoria foi fundamental para alinharmos muitas coisas em 2024, em casal aprendemos que não existe meu dinheiro e o dinheiro do meu marido, e sim o dinheiro da família, aprendemos que precisamos ter organização e principalmente ser sinceros um com outro. A partir daí surgiram conversas maduras olho no olho, que não tínhamos. Conseguimos identificar nossos ganhos, gastos, dívidas, e traçamos metas de quitar as dívidas e realizar sonhos, e o primeiro sonho já aconteceu: a compra do nosso primeiro carro.',
            img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
        },
        {
            name: 'Larissa Lunelli',
            text: 'É essa profundidade que eu busco e que precisava para este momento de vida. Quero agradecer por você não nos permitir ficar no raso. Seria mais fácil ser rasa né? Mais fácil para você e para nós, dar apenas um conteúdo técnico. Mas você está fazendo um papel maior, sendo autêntica e nos mostrando que podemos ser melhores dentro das nossas versões machucadas. É uma bênção encontrar pessoas que te ajudam ver o que você não consegue enxergar sozinha. Pessoas que te dão destino.',
            img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
        },
        {
            name: 'Jaqueline Balland',
            text: 'Consegui ver a minha capacidade de crescimento, faturamento da empresa e o controle financeiro que há muito tempo não fazia corretamente. Pude ver o meu potencial como mãe, dona de casa e profissional. Gratidão de coração porque eu pude ver o meu potencial real, até onde eu posso chegar e tudo que eu já conquistei.',
            img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
        },
        {
            name: 'Chandrieli Monica Neres',
            text: 'A mentoria foi muito importante, comecei a organizar áreas da minha vida que nem sabia que existiam. Foi um grande avanço pra mim aprender a dizer não e falar quando algo não me agrada. Agora tenho planos e sei o caminho e o que preciso pra chegar lá.',
            img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=200',
        }
    ];

    return (
        <section className="py-24 md:py-40 bg-brand-gray relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24 reveal">
                    <span className="accent-text text-sm font-bold uppercase tracking-[0.4em] mb-4 block">Depoimentos Reais</span>
                    <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-4">
                        HISTÓRIAS DE <span className="accent-text">TRANSFORMAÇÃO</span>
                    </h2>
                    <div className="flex justify-center gap-1 accent-text mb-8">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 reveal">
                    {testimonials.map((t, i) => (
                        <div key={i} className="glass-card p-10 md:p-12 border-l-2 accent-border group hover:bg-white/[0.04]">
                            <Quote className="accent-text mb-8 opacity-20" size={32} />
                            <p className="font-serif italic text-lg text-gray-300 leading-relaxed mb-10">"{t.text}"</p>

                            <div className="flex items-center gap-6">
                                <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all border border-white/10" />
                                <div>
                                    <div className="font-sans font-bold uppercase tracking-[0.2em] text-[10px] text-white">— {t.name}</div>
                                    <div className="text-[8px] text-gray-500 font-bold uppercase tracking-widest mt-1">Mentoria Concluída</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
