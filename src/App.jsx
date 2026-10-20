import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import AboutUs from './pages/AboutUs';

const Home = ({ onOpenWhatsApp, onOpenContact }) => (
  <main>
    <Hero onOpenWhatsApp={onOpenWhatsApp} />
    <FeatureBar />
    <AboutSection />
    <ProcessSection />
    <BuybackSection onOpenWhatsApp={onOpenWhatsApp} />
    <WorkInActionSection />
    <CtaBanner onOpenWhatsApp={onOpenWhatsApp} onOpenContact={onOpenContact} />
  </main>
);

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const openWhatsApp = () => {
    const text = encodeURIComponent("Hello Sumoriya Organic! I want details on Cordyceps Production Unit training, setup & buyback guarantee.");
    window.open(`https://wa.me/919358463311?text=${text}`, '_blank');
  };

  return (
    <BrowserRouter>
      <div className="app-root">
        <Navbar onOpenWhatsApp={openWhatsApp} />
        <Routes>
          <Route path="/" element={<Home onOpenWhatsApp={openWhatsApp} onOpenContact={() => setModalOpen(true)} />} />
          <Route path="/about-us" element={<AboutUs onOpenWhatsApp={openWhatsApp} />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
        <CallModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </BrowserRouter>
  );
}

export default App;
