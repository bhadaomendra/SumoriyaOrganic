import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';

const Navbar = ({ onOpenWhatsApp }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Cordyceps', path: '/cordyceps' },
    { label: 'Training', path: '/training' },
    { label: 'Production Setup', path: '/production-setup' },
    { label: 'Buyback', path: '/buyback' },
    { label: 'Contact', path: '/contact' }
  ];

  const handleMobileNav = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        {/* Official Sumoriya High-Res Transparent Logo */}
        <Link to="/" className="brand-logo-wrapper" aria-label="Go to home">
          <img 
            src="/sumoriya-official-logo-transparent.png" 
            alt="Sumoriya Organic Agro Gold Private Limited Logo" 
            className="brand-logo-img" 
          />
        </Link>

        <nav aria-label="Primary navigation">
          <ul className="nav-links-list">
            {navItems.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) => (isActive ? 'nav-link-btn active' : 'nav-link-btn')}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button type="button" onClick={onOpenWhatsApp} className="btn-pill btn-pill-green">
          <MessageCircle size={18} color="#25d366" fill="#25d366" />
          Enquire on WhatsApp
        </button>

        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {open && (
        <div className="mobile-nav">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleMobileNav(item.path)}
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            className="btn-pill btn-pill-green mobile-whatsapp"
            onClick={() => { setOpen(false); onOpenWhatsApp(); }}
          >
            <MessageCircle size={18} color="#25d366" fill="#25d366" />
            Enquire on WhatsApp
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
