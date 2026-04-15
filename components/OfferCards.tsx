import React from 'react';
import { Section } from '../types';

const OfferCards: React.FC = () => {
    const offers = [
        {
            title: 'PALESTRAS',
            desc: 'Impacto e transformação para grandes audiências.',
            img: 'https://images.unsplash.com/photo-1475721027785-f74dea327912?auto=format&fit=crop&q=80&w=800',
            btnText: 'SOLICITAR AGORA',
            btnColor: 'bg-orange-500'
        },
        {
            title: 'ADVISORY E MENTORIAS',
            desc: 'Acompanhamento estratégico individual ou para casais.',
            img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
            btnText: 'VER PROGRAMAS',
            btnColor: 'bg-green-600'
        },
        {
            title: 'CURSOS DIGITAIS',
            desc: 'Metodologias práticas para estudar no seu tempo.',
            img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
            btnText: 'ACESSAR AGORA',
            btnColor: 'bg-blue-600'
        },
    ];

    return (
        <section className="py-24 md:py-40 bg-brand-black">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20 reveal">
                    <h2 className="font-bebas text-5xl md:text-7xl tracking-tighter uppercase mb-6">
                        PRODUTOS E <span className="accent-text">TREINAMENTOS</span>
                    </h2>
                    <p className="text-gray-500 font-sora text-sm uppercase tracking-widest">Escolha a melhor forma de elevar sua performance</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {offers.map((offer, i) => (
                        <div key={i} className="service-card group reveal">
                            <img src={offer.img} alt={offer.title} />
                            <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 md:p-12">
                                <h3 className="font-bebas text-4xl leading-none mb-4 group-hover:accent-text transition-colors">{offer.title}</h3>
                                <p className="text-gray-400 text-sm font-sora mb-10 max-w-[250px] leading-relaxed">{offer.desc}</p>
                                <button className={`w-fit px-8 py-4 rounded-sm text-[10px] font-bold uppercase tracking-widest text-white transition-all hover:scale-105 ${offer.btnColor}`}>
                                    {offer.btnText}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OfferCards;
