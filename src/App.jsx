import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureBar from './components/FeatureBar';
import AboutSection from './components/AboutSection';
import ProcessSection from './components/ProcessSection';
import BuybackSection from './components/BuybackSection';
import WorkInActionSection from './components/WorkInActionSection';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CallModal from './components/CallModal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const openWhatsApp = () => {
    const text = encodeURIComponent("Hello Sumoriya Organic! I want details on Cordyceps Production Unit training, setup & buyback guarantee.");
    window.open(`https://wa.me/919829000000?text=${text}`, '_blank');
  };

  return (
    <div className="app-root">
      <Navbar onOpenWhatsApp={openWhatsApp} />
      <main>
        <Hero onOpenWhatsApp={openWhatsApp} />
        <FeatureBar />
        <AboutSection />
        <ProcessSection />
        <BuybackSection onOpenWhatsApp={openWhatsApp} />
        <WorkInActionSection />
        <CtaBanner onOpenWhatsApp={openWhatsApp} onOpenContact={() => setModalOpen(true)} />
      </main>
      <Footer />
      <WhatsAppButton />
      <CallModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

export default App;
