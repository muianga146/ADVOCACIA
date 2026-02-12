import React, { useState, useEffect } from 'react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialService?: string;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, initialService }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    useEffect(() => {
        if (initialService) {
            setFormData(prev => ({ ...prev, message: `Gostaria de saber mais sobre: ${initialService}` }));
        }
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            // Reset status after close animation would finish
            setTimeout(() => setStatus('idle'), 300);
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen, initialService]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setTimeout(() => {
                onClose();
                setFormData({ name: '', email: '', phone: '', message: '' });
            }, 2000);
        }, 1500);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative w-full max-w-lg glass-modal dark:bg-slate-900 bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all animate-fade-in-up border border-white/20">
                
                {/* Close Button */}
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500"
                >
                    <span className="material-icons">close</span>
                </button>

                <div className="p-8">
                    {status === 'success' ? (
                        <div className="flex flex-col items-center justify-center py-12 text-center">
                            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                                <span className="material-icons text-green-600 dark:text-green-400 text-3xl">check</span>
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-2">Mensagem Enviada</h3>
                            <p className="text-slate-600 dark:text-slate-400">Nossa equipe entrará em contato em breve.</p>
                        </div>
                    ) : (
                        <>
                            <div className="mb-8">
                                <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-2">Solicitar Consulta</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">
                                    Preencha o formulário abaixo para agendar uma análise confidencial do seu caso.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Nome Completo</label>
                                    <input 
                                        type="text" 
                                        id="name"
                                        required
                                        className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-primary focus:border-primary transition-shadow"
                                        value={formData.name}
                                        onChange={e => setFormData({...formData, name: e.target.value})}
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                                        <input 
                                            type="email" 
                                            id="email"
                                            required
                                            className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-primary focus:border-primary"
                                            value={formData.email}
                                            onChange={e => setFormData({...formData, email: e.target.value})}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Telefone</label>
                                        <input 
                                            type="tel" 
                                            id="phone"
                                            className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-primary focus:border-primary"
                                            value={formData.phone}
                                            onChange={e => setFormData({...formData, phone: e.target.value})}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Mensagem</label>
                                    <textarea 
                                        id="message"
                                        rows={4}
                                        required
                                        className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-primary focus:border-primary resize-none"
                                        value={formData.message}
                                        onChange={e => setFormData({...formData, message: e.target.value})}
                                    ></textarea>
                                </div>

                                <button 
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-primary/30 flex items-center justify-center gap-2"
                                >
                                    {status === 'submitting' ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Enviando...
                                        </>
                                    ) : (
                                        'Enviar Solicitação'
                                    )}
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactModal;