import React, { useState } from 'react';
import { Sprout, PhoneCall, Menu, X } from 'lucide-react';

const Navbar = ({ onOpenContact }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (id) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar-sticky">
      <div className="container nav-wrapper">
        {/* Brand Logo */}
        <a href="#hero" className="logo-brand">
          <div className="logo-icon">
            <Sprout size={24} />
          </div>
          <div>
            <span>Sumoriya</span>
            <span style={{ color: 'var(--gold-main)', marginLeft: '4px' }}>Organic</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <ul className="nav-links">
          <li><button onClick={() => scrollToSection('calculator')} className="nav-link">Income Calculator</button></li>
          <li><button onClick={() => scrollToSection('kits')} className="nav-link">Setup Kits</button></li>
          <li><button onClick={() => scrollToSection('training')} className="nav-link">Training</button></li>
          <li><button onClick={() => scrollToSection('buyback')} className="nav-link">100% Buyback</button></li>
          <li><button onClick={() => scrollToSection('testimonials')} className="nav-link">Reviews</button></li>
        </ul>

        {/* CTA Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button onClick={onOpenContact} className="btn btn-primary">
            <PhoneCall size={18} />
            <span>Book Free Consultation</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
