import React from 'react';
import { TESTIMONIAL } from '../constants';

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-20 bg-background-light dark:bg-background-dark border-y border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-widest mb-10">
                    Confiado por Líderes da Indústria
                </p>

                {/* Logos Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500 mb-20">
                    <div className="flex items-center gap-2 font-bold text-xl text-slate-700 dark:text-slate-300">
                        <span className="material-icons text-3xl">token</span> Apex Corp
                    </div>
                    <div className="flex items-center gap-2 font-bold text-xl text-slate-700 dark:text-slate-300">
                        <span className="material-icons text-3xl">diamond</span> Diamond Inc
                    </div>
                    <div className="flex items-center gap-2 font-bold text-xl text-slate-700 dark:text-slate-300">
                        <span className="material-icons text-3xl">forest</span> EcoVentures
                    </div>
                    <div className="flex items-center gap-2 font-bold text-xl text-slate-700 dark:text-slate-300">
                        <span className="material-icons text-3xl">rocket_launch</span> StarTech
                    </div>
                    <div className="flex items-center gap-2 font-bold text-xl text-slate-700 dark:text-slate-300 md:col-span-4 lg:col-span-1">
                        <span className="material-icons text-3xl">account_balance_wallet</span> Finserv
                    </div>
                </div>

                {/* Testimonial Card */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12 relative max-w-4xl mx-auto">
                    <div className="absolute top-8 left-8 text-primary/20">
                        <span className="material-icons text-8xl">format_quote</span>
                    </div>
                    <div className="relative z-10 text-center">
                        <p className="text-xl md:text-2xl font-serif text-slate-800 dark:text-slate-100 italic mb-8 leading-relaxed">
                            "{TESTIMONIAL.quote}"
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <img 
                                src={TESTIMONIAL.image}
                                alt={`Retrato de ${TESTIMONIAL.author}`}
                                className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                            />
                            <div className="text-left">
                                <h4 className="font-bold text-slate-900 dark:text-white">{TESTIMONIAL.author}</h4>
                                <p className="text-sm text-slate-500">{TESTIMONIAL.role}, {TESTIMONIAL.company}</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Carousel Indicators */}
                    <div className="flex justify-center mt-8 gap-2">
                        <button className="w-3 h-3 rounded-full bg-primary" aria-label="Testimonial 1"></button>
                        <button className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-600 hover:bg-primary/50 transition-colors" aria-label="Testimonial 2"></button>
                        <button className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-600 hover:bg-primary/50 transition-colors" aria-label="Testimonial 3"></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;