import React from 'react';
import Hero from '../components/Hero';
import FeatureBar from '../components/FeatureBar';
import AboutSection from '../components/AboutSection';
import ProcessSection from '../components/ProcessSection';
import BuybackSection from '../components/BuybackSection';
import WorkInActionSection from '../components/WorkInActionSection';
import CtaBanner from '../components/CtaBanner';

const HomePage = ({ onOpenWhatsApp, onOpenContact }) => {
  return (
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
};

export default HomePage;
