import React from 'react';

const SocialStats: React.FC = () => {
    const stats = [
        { label: 'HORAS DE ATENDIMENTO', value: '10k+' },
        { label: 'ANOS DE EXPERIÊNCIA', value: '22' },
        { label: 'CLIENTES IMPACTADOS', value: '500+' },
        { label: 'PÁGINAS DE RELATÓRIO', value: '50' },
    ];

    return (
        <section className="py-20 md:py-32 bg-brand-black border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20">
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center md:text-left flex flex-col items-center md:items-start reveal">
                            <span className="font-bebas text-6xl md:text-8xl lg:text-9xl tracking-tighter accent-text leading-none mb-4">
                                {stat.value}
                            </span>
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-gray-500 whitespace-nowrap">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialStats;
