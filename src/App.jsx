import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CallModal from './components/CallModal';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import CordycepsPage from './pages/CordycepsPage';
import TrainingPage from './pages/TrainingPage';
import ProductionSetupPage from './pages/ProductionSetupPage';
import ContactUs from './pages/ContactUs';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      "Hello Sumoriya Organic! I want details on Cordyceps Production Unit training, setup & buyback guarantee."
    );
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
            <AboutUs
              onOpenWhatsApp={openWhatsApp}
              onOpenContact={() => setModalOpen(true)}
            />
          }
        />
        <Route path="/about-us" element={<Navigate to="/about" replace />} />
        <Route
          path="/cordyceps"
          element={
            <CordycepsPage
              onOpenWhatsApp={openWhatsApp}
              onOpenContact={() => setModalOpen(true)}
            />
          }
        />
        <Route path="/cordyceps-militaris" element={<Navigate to="/cordyceps" replace />} />
        <Route
          path="/cordyceps-cultivation-training"
          element={
            <TrainingPage
              onOpenWhatsApp={openWhatsApp}
              onOpenContact={() => setModalOpen(true)}
            />
          }
        />
        <Route path="/training" element={<Navigate to="/cordyceps-cultivation-training" replace />} />
        <Route path="/cordyceps-training" element={<Navigate to="/cordyceps-cultivation-training" replace />} />
        <Route path="/courses" element={<Navigate to="/cordyceps-cultivation-training" replace />} />
        <Route
          path="/production-unit-setup"
          element={
            <ProductionSetupPage
              onOpenWhatsApp={openWhatsApp}
              onOpenContact={() => setModalOpen(true)}
            />
          }
        />
        <Route path="/production-setup" element={<Navigate to="/production-unit-setup" replace />} />
        <Route path="/production" element={<Navigate to="/production-unit-setup" replace />} />
        <Route
          path="/contact"
          element={<ContactUs onOpenWhatsApp={openWhatsApp} />}
        />
        <Route path="/contact-us" element={<Navigate to="/contact" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
      <CallModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

export default App;
