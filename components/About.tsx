import React from 'react';
import { IMAGES } from '../constants';

const About: React.FC = () => {
    return (
        <section id="about" className="py-24 bg-white dark:bg-slate-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Side */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative rounded-lg overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-slate-900/10 mix-blend-color z-10"></div>
                            <img 
                                src={IMAGES.ABOUT_MEETING}
                                alt="Sócios seniores discutindo um caso jurídico em uma sala de reuniões" 
                                className="w-full h-auto object-cover grayscale brightness-110 contrast-125"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-slate-200 dark:bg-slate-700 rounded-lg -z-10"></div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
                            Sobre o Escritório
                        </span>
                        <h2 className="font-serif text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                            Compromisso Inabalável com a Justiça e a Excelência.
                        </h2>
                        <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg font-light leading-relaxed">
                            Fundado nos princípios de integridade e diligência, Vance & Partners estabeleceu-se como um farol de autoridade legal. Não apenas interpretamos a lei; nós a utilizamos para construir vantagens estratégicas para nossos clientes.
                        </p>
                        <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                            Nossa equipe multidisciplinar traz décadas de experiência, desde tribunais federais até negociações em conselhos de administração. Quando os riscos são mais altos, somos o parceiro em quem você confia.
                        </p>
                        
                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-8 border-t border-slate-200 dark:border-slate-800 pt-8">
                            <div>
                                <span className="block text-4xl font-bold text-primary mb-1">35+</span>
                                <span className="text-sm text-slate-500 uppercase tracking-wide font-medium">Anos de Experiência</span>
                            </div>
                            <div>
                                <span className="block text-4xl font-bold text-primary mb-1">2.5k</span>
                                <span className="text-sm text-slate-500 uppercase tracking-wide font-medium">Casos Solucionados</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;