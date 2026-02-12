import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
    return (
        <section id="services" className="py-24 bg-background-light dark:bg-background-dark relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        Áreas de Atuação
                    </h2>
                    <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
                    <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Especializamo-nos em questões jurídicas de alto nível que exigem estratégia sofisticada e execução rigorosa.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((service) => (
                        <div 
                            key={service.id} 
                            className="card-hover group bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 transition-all duration-300"
                        >
                            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                                <span className="material-icons text-primary group-hover:text-white text-3xl transition-colors duration-300">
                                    {service.icon}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-serif">
                                {service.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                                {service.description}
                            </p>
                            <a href="#" className="inline-flex items-center text-primary text-sm font-semibold group-hover:translate-x-1 transition-transform">
                                Saiba mais <span className="material-icons text-sm ml-1">arrow_forward</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;