import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header 
            className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-gray-200/50 dark:border-gray-800/50 ${
                isScrolled ? 'glass-header shadow-sm' : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
                        <div className="w-10 h-10 bg-primary text-white flex items-center justify-center rounded-lg shadow-primary/20 shadow-lg">
                            <span className="font-serif text-2xl font-bold">V</span>
                        </div>
                        <div className="flex flex-col">
                            <span className={`font-serif text-xl font-bold tracking-tight group-hover:text-primary transition-colors ${isScrolled ? 'text-slate-900 dark:text-white' : 'text-slate-900 md:text-white dark:text-white'}`}>
                                VANCE & PARTNERS
                            </span>
                            <span className={`text-[10px] uppercase tracking-widest font-semibold ${isScrolled ? 'text-slate-500' : 'text-slate-500 md:text-blue-100'}`}>
                                Assessoria Jurídica
                            </span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {NAV_LINKS.map((link) => (
                            <a 
                                key={link.label}
                                href={link.href}
                                className={`text-sm font-medium transition-colors relative group ${
                                    isScrolled 
                                    ? 'text-slate-600 dark:text-slate-300 hover:text-primary' 
                                    : 'text-slate-200 hover:text-white'
                                }`}
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                            </a>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center">
                        <a 
                            href="#contact" 
                            className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-primary to-blue-700 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-0.5"
                        >
                            Consulta Gratuita
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button 
                            type="button" 
                            className={`hover:text-primary focus:outline-none transition-colors ${
                                isScrolled ? 'text-slate-500' : 'text-white'
                            }`}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <span className="material-icons">{isMenuOpen ? 'close' : 'menu'}</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden glass-header absolute top-20 left-0 w-full border-b border-gray-200/50 p-4 animate-fade-in-down">
                    <nav className="flex flex-col space-y-4">
                        {NAV_LINKS.map((link) => (
                            <a 
                                key={link.label}
                                href={link.href}
                                className="text-base font-medium text-slate-700 dark:text-slate-200 hover:text-primary p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a 
                            href="#contact"
                            className="text-center w-full px-6 py-3 rounded-lg text-white bg-primary font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Consulta Gratuita
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;