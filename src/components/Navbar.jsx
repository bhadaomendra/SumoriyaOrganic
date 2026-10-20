import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = ({ onOpenWhatsApp }) => {
  const [open, setOpen] = useState(false);

  const links = [
    ['Home', '/'],
    ['About', '/about-us'],
    ['Cordyceps', '/cordyceps'],
    ['Training', '/training'],
    ['Production Setup', '/production-unit'],
    ['Buyback Guarantee', '/buyback-guarantee'],
    ['Contact', '/contact'],
  ];

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        <Link to="/" className="brand-logo-wrapper" onClick={closeMenu} aria-label="Go to home">
          <img
            src="/sumoriya-official-logo-transparent.png"
            alt="Sumoriya Organic Agro Gold Private Limited Logo"
            className="brand-logo-img"
          />
        </Link>

        <nav aria-label="Primary navigation">
          <ul className="nav-links-list">
            {links.map(([label, path]) => (
              <li key={label}>
                <NavLink
                  to={path}
                  end={path === '/'}
                  onClick={closeMenu}
                  className={({ isActive }) => `nav-link-btn ${isActive ? 'active' : ''}`}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button type="button" onClick={onOpenWhatsApp} className="btn-pill btn-pill-green">
          <MessageCircle size={18} color="#25d366" fill="#25d366" />
          Enquire on WhatsApp
        </button>

        <button type="button" className="mobile-menu-btn" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {open && (
        <div className="mobile-nav">
          {links.map(([label, path]) => (
            <NavLink
              key={label}
              to={path}
              end={path === '/'}
              onClick={closeMenu}
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              {label}
            </NavLink>
          ))}
          <button type="button" className="btn-pill btn-pill-green mobile-whatsapp" onClick={() => { closeMenu(); onOpenWhatsApp(); }}>
            <MessageCircle size={18} color="#25d366" fill="#25d366" />
            Enquire on WhatsApp
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
