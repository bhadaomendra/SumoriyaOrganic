import React from 'react';
import { Sprout, MessageCircle } from 'lucide-react';

const Navbar = ({ onOpenWhatsApp }) => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        {/* Brand Logo */}
        <a href="#hero" className="brand-logo">
          <div className="brand-icon-box">
            <Sprout size={22} color="var(--color-gold)" />
          </div>
          <div className="brand-text">
            <span className="brand-name">SUMORIYA ORGANIC</span>
            <span className="brand-sub">AGRO GOLD PRIVATE LIMITED</span>
          </div>
        </a>

        {/* Links */}
        <ul className="nav-menu">
          <li><button onClick={() => scrollTo('hero')} className="nav-item-link active">Home</button></li>
          <li><button onClick={() => scrollTo('about')} className="nav-item-link">About</button></li>
          <li><button onClick={() => scrollTo('about')} className="nav-item-link">Cordyceps</button></li>
          <li><button onClick={() => scrollTo('gallery')} className="nav-item-link">Training</button></li>
          <li><button onClick={() => scrollTo('process')} className="nav-item-link">Production Setup</button></li>
          <li><button onClick={() => scrollTo('buyback')} className="nav-item-link">Buyback</button></li>
          <li><button onClick={() => scrollTo('gallery')} className="nav-item-link">Gallery</button></li>
          <li><button onClick={() => scrollTo('contact')} className="nav-item-link">Contact</button></li>
        </ul>

        {/* Right WhatsApp Pill Button */}
        <button onClick={onOpenWhatsApp} className="btn-pill btn-green">
          <MessageCircle size={18} color="#25d366" fill="#25d366" />
          <span>Enquire on WhatsApp</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
