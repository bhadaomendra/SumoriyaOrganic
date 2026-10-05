import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Calculator from './components/Calculator';
import SetupKits from './components/SetupKits';
import Training from './components/Training';
import Buyback from './components/Buyback';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-root">
      <Navbar onOpenContact={scrollToContact} />
      <main>
        <Hero onOpenContact={scrollToContact} />
        <Calculator onOpenContact={scrollToContact} />
        <SetupKits onOpenContact={scrollToContact} />
        <Training onOpenContact={scrollToContact} />
        <Buyback onOpenContact={scrollToContact} />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
