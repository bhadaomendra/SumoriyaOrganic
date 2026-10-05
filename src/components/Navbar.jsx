import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

const Navbar = ({ onOpenWhatsApp }) => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  const links = [
    ['Home','hero'],['About','about'],['Cordyceps','about'],['Training','gallery'],
    ['Production Setup','process'],['Buyback','buyback'],['Gallery','gallery'],['Contact','contact']
  ];

  return (
    <header className="navbar">
      <div className="container nav-container">
        <button type="button" className="brand-logo-wrapper" onClick={() => scrollTo('hero')} aria-label="Go to home">
          <img src="/logo_original.png" alt="Sumoriya Organic Agro Gold Private Limited" className="brand-logo" />
        </button>

        <nav aria-label="Primary navigation">
          <ul className="nav-links-list">
            {links.map(([label,id], index) => (
              <li key={label}>
                <button type="button" onClick={() => scrollTo(id)} className={index === 0 ? 'nav-link-btn active' : 'nav-link-btn'}>
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <button type="button" onClick={onOpenWhatsApp} className="btn-pill btn-pill-green">
          <MessageCircle size={17} color="#25d366" fill="#25d366" />
          Enquire on WhatsApp
        </button>

        <button type="button" className="mobile-menu-btn" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {open && (
        <div className="mobile-nav">
          {links.map(([label,id]) => (
            <button key={label} type="button" onClick={() => scrollTo(id)}>{label}</button>
          ))}
          <button type="button" className="btn-pill btn-pill-green mobile-whatsapp" onClick={() => { setOpen(false); onOpenWhatsApp(); }}>
            <MessageCircle size={17} color="#25d366" fill="#25d366" />
            Enquire on WhatsApp
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
