import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const LecturesSection: React.FC = () => {
    return (
        <section className="py-24 md:py-40 bg-white text-black relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24 reveal">
                    <h2 className="font-bebas text-6xl md:text-8xl lg:text-[10rem] leading-none mb-8">
                        LEVE ESTA TRANSFORMAÇÃO <br />
                        PARA O <span className="text-gray-400">SEU EVENTO</span>
                    </h2>
                    <p className="font-sora text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                        Palestras memoráveis sobre mentalidade, finanças e propósito que impactam equipes e transformam resultados corporativos.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-y border-black/10 py-20 reveal">
                    {[
                        { title: 'Duração Flexível', desc: 'Adaptação total ao formato do seu evento, de 45 min a workshops intensivos.' },
                        { title: 'Temas Atuais', desc: 'Foco em saúde mental, inteligência emocional e gestão de recursos na vida real.' },
                        { title: 'Expertise Real', desc: 'Mais de 22 anos de bagagem comercial e estratégica aplicada ao comportamento.' },
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col">
                            <h3 className="font-bebas text-3xl mb-4 uppercase tracking-tight">{item.title}</h3>
                            <p className="text-gray-600 font-sora text-sm leading-relaxed mb-6">{item.desc}</p>
                            <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-gray-400 hover:text-black transition-colors cursor-pointer">
                                SOLICITAR ORÇAMENTO <ArrowUpRight size={14} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Logo Grid in White Section */}
                <div className="mt-24 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center opacity-40 grayscale reveal">
                    {['SBT', 'UNIMED', 'ITAU', 'GLOBO', 'VALE', 'BRADESCO'].map((logo) => (
                        <span key={logo} className="text-center font-bebas text-2xl tracking-widest">{logo}</span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LecturesSection;
