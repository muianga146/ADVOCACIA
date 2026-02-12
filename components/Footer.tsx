import React from 'react';
import { FOOTER_LINKS, IMAGES } from '../constants';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-primary text-white flex items-center justify-center rounded">
                                <span className="font-serif text-lg font-bold">V</span>
                            </div>
                            <span className="font-serif text-xl font-bold tracking-tight">VANCE & PARTNERS</span>
                        </div>
                        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                            Definindo o padrão de excelência jurídica. Dedicamo-nos a fornecer representação de primeira linha para nossa clientela distinta.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3 text-slate-400">
                                <span className="material-icons text-primary text-sm mt-1">location_on</span>
                                <span className="text-sm">1200 Financial District Blvd, Suite 400<br/>New York, NY 10005</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-400">
                                <span className="material-icons text-primary text-sm">phone</span>
                                <span className="text-sm">+1 (212) 555-0199</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-400">
                                <span className="material-icons text-primary text-sm">email</span>
                                <span className="text-sm">legal@vancepartners.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 font-serif">{FOOTER_LINKS.quickLinks.title}</h3>
                        <ul className="space-y-3">
                            {FOOTER_LINKS.quickLinks.links.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block text-sm">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 font-serif">{FOOTER_LINKS.services.title}</h3>
                        <ul className="space-y-3">
                            {FOOTER_LINKS.services.links.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block text-sm">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Map Column */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 font-serif">Nossa Localização</h3>
                        <div className="rounded-lg overflow-hidden h-40 relative group cursor-pointer">
                            <img 
                                src={IMAGES.FOOTER_MAP}
                                alt="Vista do mapa do distrito financeiro de Nova York" 
                                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-slate-900/20 group-hover:bg-transparent transition-colors pointer-events-none">
                                <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shadow-lg animate-bounce">
                                    <span className="material-icons text-sm">location_on</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-xs text-center md:text-left">
                        © 2023 Vance & Partners LLP. Todos os direitos reservados. Publicidade Advocatícia.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-slate-500 hover:text-white text-xs transition-colors">Política de Privacidade</a>
                        <a href="#" className="text-slate-500 hover:text-white text-xs transition-colors">Termos de Uso</a>
                        <a href="#" className="text-slate-500 hover:text-white text-xs transition-colors">Aviso Legal</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;