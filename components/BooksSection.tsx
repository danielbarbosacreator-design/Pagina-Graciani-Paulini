import React from 'react';

const BooksSection: React.FC = () => {
    const books = [
        { title: 'O Código do Destino', img: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400' },
        { title: 'Prosperidade Integral', img: 'https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&q=80&w=400' },
        { title: 'Inteligência e Alma', img: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=400' },
    ];

    return (
        <section className="py-24 md:py-40 bg-black relative overflow-hidden">
            {/* Background Text */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 select-none">
                <span className="bg-text-outline" style={{ fontSize: '30vw' }}>LIVROS</span>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
                <div className="reveal">
                    <h2 className="font-bebas text-6xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tighter mb-10">
                        MAIS DE <span className="accent-text">7 MILHÕES</span> <br />
                        DE LIVROS VENDIDOS
                    </h2>
                    <p className="font-sora text-gray-400 text-lg mb-12 max-w-lg leading-relaxed">
                        Nossos métodos e insights que transformaram milhares de vidas agora consolidados em obras literárias best-sellers.
                    </p>

                    <button className="btn-joel">
                        QUERO COMPRAR OS LIVROS
                    </button>
                </div>

                <div className="flex justify-center gap-6 lg:gap-10 perspective-1000">
                    {books.map((book, i) => (
                        <div
                            key={i}
                            className={`w-32 md:w-48 lg:w-56 aspect-[2/3] transform transition-all duration-700 hover:-translate-y-10 hover:rotate-2 shadow-2xl reveal`}
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            <img src={book.img} alt={book.title} className="w-full h-full object-cover border border-white/10" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BooksSection;
