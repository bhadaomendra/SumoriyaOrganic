import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

const Hero = ({ onOpenWhatsApp }) => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="hero-wrapper">
      {/* Background Lab Image + Transparent Gradient Overlay */}
      <div className="hero-bg-layer">
        <img
          src="/sumoriya-hero.png"
          alt="Cordyceps cultivation lab background"
          className="hero-bg-img"
          fetchPriority="high"
        />
        <div className="hero-gradient-overlay"></div>
      </div>

      <div className="container hero-container-grid">
        {/* Left Copy */}
        <div className="hero-copy">
          <div className="hero-tag">PRACTICAL TRAINING | CULTIVATION EXPERTISE | PRODUCTION SUPPORT</div>
          <h1 className="hero-title">
            Build Your Own<br />
            <span>Cordyceps</span><br />
            Production Unit
          </h1>
          <p className="hero-subtext">
            Learn practical Cordyceps cultivation, production techniques and how to build a scalable production unit with expert guidance.
          </p>
          <div className="hero-btns-group">
            <button type="button" onClick={() => scrollTo('training')} className="btn-pill btn-pill-orange">
              Explore Training <ArrowRight size={17} />
            </button>
            <button type="button" onClick={onOpenWhatsApp} className="btn-pill btn-pill-outline-light">
              <MessageCircle size={17} color="#25d366" /> Talk to an Expert
            </button>
          </div>
        </div>

        {/* Right Highlighted Brush Badge Card */}
        <div className="hero-right-highlight">
          <div className="brush-badge-card">
            <div className="brush-badge-text font-serif">
              <span className="brush-line-1">This Medicinal Mushroom</span>
              <span className="brush-line-2">Can Be a Profitable</span>
              <span className="brush-line-3">Business for You</span>
            </div>
            {/* Green Leaf Accent Icon */}
            <div className="brush-leaf-icon">
              <svg width="42" height="42" viewBox="0 0 24 24" fill="none">
                <path d="M17 3C13.5 3 11 5.5 11 8.5C11 9.8 11.4 11 12.1 12C9.5 12.6 7.5 14.8 7.5 17.5C7.5 20.5 9.8 22 12.5 22C15.5 22 18 19.8 18 16.8C18 15.2 17.3 13.8 16.2 12.8C17.3 11.8 18 10.3 18 8.5C18 5.5 17.5 3 17 3Z" fill="#2e7d32" opacity="0.9"/>
                <path d="M7 6C4.8 6 3 7.8 3 10C3 11.3 3.6 12.5 4.6 13.3C3.6 14.1 3 15.3 3 16.6C3 19 5 21 7.5 21C10 21 12 19 12 16.6C12 15 11.1 13.6 9.8 12.8C11 11.8 11.8 10.3 11.8 8.6C11.8 6 9.2 6 7 6Z" fill="#388e3c"/>
                <path d="M12.5 22C12.5 22 13 18 15.5 15" stroke="#1b5e20" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
