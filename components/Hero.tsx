import React from 'react';
import { IMAGES } from '../constants';

interface HeroProps {
    onOpenContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
    
    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        aboutSection?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToServices = () => {
        const servicesSection = document.getElementById('services');
        servicesSection?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
            {/* Background Image and Overlays */}
            <div className="absolute inset-0 z-0">
                <img 
                    src={IMAGES.HERO_BG}
                    alt="Interior de escritório corporativo moderno com paredes de vidro" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/70 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
                <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-widest uppercase mb-6 backdrop-blur-sm animate-fade-in select-none">
                    Fundado em 1985
                </span>
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-tight mb-8 drop-shadow-lg">
                    Defendendo seu <br/> 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Legado</span>
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-200 font-light mb-12 leading-relaxed">
                    Assessoria jurídica estratégica para litígios complexos e governança corporativa. Proporcionamos clareza diante da incerteza.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button 
                        onClick={onOpenContact}
                        className="magnetic-btn bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-lg text-base font-semibold transition-colors shadow-xl cursor-pointer"
                    >
                        Agendar Consulta
                    </button>
                    <button 
                        onClick={scrollToAbout}
                        className="group flex items-center gap-2 px-8 py-4 text-white hover:text-blue-200 transition-colors cursor-pointer"
                    >
                        <span className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                            <span className="material-icons text-sm">play_arrow</span>
                        </span>
                        <span className="text-sm font-medium tracking-wide uppercase">Nossa Filosofia</span>
                    </button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div 
                onClick={scrollToServices}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce opacity-70 cursor-pointer hover:opacity-100 transition-opacity"
            >
                <span className="text-xs text-white uppercase tracking-widest mb-2">Rolar</span>
                <span className="material-icons text-white">keyboard_arrow_down</span>
            </div>
        </section>
    );
};

export default Hero;