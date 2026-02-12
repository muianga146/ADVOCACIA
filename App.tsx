import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';
import ContactModal from './components/ContactModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalService, setModalService] = useState<string | undefined>(undefined);

  const openContactModal = (serviceName?: string) => {
    setModalService(serviceName);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onOpenContact={() => openContactModal()} />
      <main className="flex-grow">
        <Hero onOpenContact={() => openContactModal()} />
        <Services onOpenContact={openContactModal} />
        <About />
        <Testimonials />
      </main>
      <Footer />
      <FloatingButton />
      
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        initialService={modalService}
      />
    </div>
  );
};

export default App;