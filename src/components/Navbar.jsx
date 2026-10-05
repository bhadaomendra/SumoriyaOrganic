import React from 'react';
import { Sprout, MessageCircle } from 'lucide-react';

const Navbar = ({ onOpenWhatsApp }) => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="navbar">
      <div className="container nav-container">
        {/* Brand Logo */}
        <a href="#hero" className="brand-logo-wrapper">
          <div className="brand-icon">
            <Sprout size={24} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span className="brand-title">SUMORIYA ORGANIC</span>
            <span className="brand-subtitle">AGRO GOLD PRIVATE LIMITED</span>
          </div>
        </a>

        {/* Clean Borderless Text Navigation */}
        <ul className="nav-links-list">
          <li><button type="button" onClick={() => scrollTo('hero')} className="nav-link-btn active">Home</button></li>
          <li><button type="button" onClick={() => scrollTo('about')} className="nav-link-btn">About</button></li>
          <li><button type="button" onClick={() => scrollTo('about')} className="nav-link-btn">Cordyceps</button></li>
          <li><button type="button" onClick={() => scrollTo('gallery')} className="nav-link-btn">Training</button></li>
          <li><button type="button" onClick={() => scrollTo('process')} className="nav-link-btn">Production Setup</button></li>
          <li><button type="button" onClick={() => scrollTo('buyback')} className="nav-link-btn">Buyback</button></li>
          <li><button type="button" onClick={() => scrollTo('gallery')} className="nav-link-btn">Gallery</button></li>
          <li><button type="button" onClick={() => scrollTo('contact')} className="nav-link-btn">Contact</button></li>
        </ul>

        {/* Right WhatsApp Pill Button */}
        <button type="button" onClick={onOpenWhatsApp} className="btn-pill btn-pill-green">
          <MessageCircle size={18} color="#25d366" fill="#25d366" />
          <span>Enquire on WhatsApp</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
