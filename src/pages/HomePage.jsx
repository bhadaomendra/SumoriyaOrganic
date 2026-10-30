import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import FeatureBar from '../components/FeatureBar';
import AboutSection from '../components/AboutSection';
import ProcessSection from '../components/ProcessSection';
import BuybackSection from '../components/BuybackSection';
import WorkInActionSection from '../components/WorkInActionSection';
import CtaBanner from '../components/CtaBanner';

const HomePage = ({ onOpenWhatsApp, onOpenContact }) => {
  useEffect(() => {
    document.title = 'Sumoriya Organic | Best Cordyceps Cultivation Training in Jaipur & India | Production Unit Setup';

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      'Looking for the best Cordyceps cultivation training in Jaipur or India? Sumoriya Organic offers certified 2-day practical training, complete lab setup guidance, high-yield spawn, and structured buyback support across India.';

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://sumoriyaorganic.com/';
  }, []);

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
