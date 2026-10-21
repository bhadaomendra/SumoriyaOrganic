import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';

const Navbar = ({ onOpenWhatsApp }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const handleNavClick = (id) => {
    setOpen(false);

    if (id === 'about') {
      navigate('/about');
      return;
    }

    if (id === 'cordyceps') {
      navigate('/cordyceps');
      return;
    }

    if (id === 'training') {
      navigate('/cordyceps-cultivation-training');
      return;
    }

    if (id === 'setup') {
      navigate('/production-unit-setup');
      return;
    }

    if (id === 'contact') {
      navigate('/contact');
      return;
    }

    if (id === 'hero' && !isHomePage) {
      navigate('/');
      return;
    }

    if (isHomePage) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${id}`);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const links = [
    ['Home', 'hero'],
    ['About', 'about'],
    ['Cordyceps Militaris', 'cordyceps'],
    ['Training', 'training'],
    ['Production Setup', 'setup'],
    ['Gallery', 'gallery'],
    ['Contact', 'contact']
  ];

  const isLinkActive = (_label, id) => {
    if (id === 'hero') return isHomePage;
    if (id === 'about') return location.pathname === '/about';
    if (id === 'cordyceps') return location.pathname === '/cordyceps';
    if (id === 'training') return location.pathname === '/cordyceps-cultivation-training' || location.pathname === '/training';
    if (id === 'setup') return location.pathname === '/production-unit-setup' || location.pathname === '/production-setup';
    if (id === 'contact') return location.pathname === '/contact' || location.pathname === '/contact-us';
    return false;
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
            {links.map(([label, id]) => (
              <li key={label}>
                <button
                  type="button"
                  onClick={() => handleNavClick(id)}
                  className={isLinkActive(label, id) ? 'nav-link-btn active' : 'nav-link-btn'}
                >
                  {label}
                </button>
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
          {links.map(([label, id]) => (
            <button
              key={label}
              type="button"
              onClick={() => handleNavClick(id)}
              className={isLinkActive(label, id) ? 'active' : ''}
            >
              {label}
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
