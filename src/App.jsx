import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CallModal from './components/CallModal';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CordycepsPage from './pages/CordycepsPage';
import TrainingPage from './pages/TrainingPage';
import ProductionSetupPage from './pages/ProductionSetupPage';
import BuybackPage from './pages/BuybackPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const openWhatsApp = () => {
    const text = encodeURIComponent("Hello Sumoriya Organic! I want details on Cordyceps Production Unit training, setup & buyback guarantee.");
    window.open(`https://wa.me/919358463311?text=${text}`, '_blank');
  };

  return (
    <div className="app-root">
      <ScrollToTop />
      <Navbar onOpenWhatsApp={openWhatsApp} />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              onOpenWhatsApp={openWhatsApp}
              onOpenContact={() => setModalOpen(true)}
            />
          }
        />
        <Route
          path="/about"
          element={
            <AboutPage
              onOpenWhatsApp={openWhatsApp}
              onOpenContact={() => setModalOpen(true)}
            />
          }
        />
        <Route
          path="/cordyceps"
          element={
            <CordycepsPage
              onOpenWhatsApp={openWhatsApp}
              onOpenContact={() => setModalOpen(true)}
            />
          }
        />
        <Route
          path="/training"
          element={
            <TrainingPage
              onOpenWhatsApp={openWhatsApp}
              onOpenContact={() => setModalOpen(true)}
            />
          }
        />
        <Route
          path="/production-setup"
          element={
            <ProductionSetupPage
              onOpenWhatsApp={openWhatsApp}
              onOpenContact={() => setModalOpen(true)}
            />
          }
        />
        <Route
          path="/buyback"
          element={
            <BuybackPage
              onOpenWhatsApp={openWhatsApp}
              onOpenContact={() => setModalOpen(true)}
            />
          }
        />
        <Route
          path="/contact"
          element={
            <ContactPage
              onOpenWhatsApp={openWhatsApp}
              onOpenContact={() => setModalOpen(true)}
            />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
      <CallModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

export default App;
