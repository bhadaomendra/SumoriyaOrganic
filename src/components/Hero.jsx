import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

const Hero = ({ onOpenWhatsApp }) => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="hero-wrapper">
      {/* Lab Image spanning across the background (No Box / No Border) */}
      <div className="hero-bg-layer">
        <img
          src="/sumoriya-hero.png"
          alt="Cordyceps cultivation lab expert and shelves"
          className="hero-bg-img"
          fetchPriority="high"
        />
        <div className="hero-gradient-overlay"></div>
      </div>

      <div className="container hero-grid-layout">
        {/* Left Column: Text Copy */}
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

        {/* Right Column: Designer Brush Quote Badge */}
        <div className="hero-right-badge-wrapper">
          <div className="brush-quote-badge">
            <svg className="brush-bg-svg" viewBox="0 0 340 145" fill="none" preserveAspectRatio="none">
              <path 
                d="M12 22C42 12 115 14 175 10C235 6 302 14 326 24C336 29 333 50 330 74C326 100 334 120 320 127C293 140 208 132 148 136C88 140 28 130 10 120C1 114 4 90 7 64C10 40 3 26 12 22Z" 
                fill="#f7f2e4" 
                stroke="#ebdcb9" 
                strokeWidth="2"
              />
              <path 
                d="M6 30C48 18 138 20 198 14C258 8 312 20 332 32" 
                stroke="#eee3c8" 
                strokeWidth="4" 
                strokeLinecap="round" 
                opacity="0.7"
              />
              <path 
                d="M16 128C78 135 168 128 238 131C288 133 318 123 330 115" 
                stroke="#e5d5ac" 
                strokeWidth="3" 
                strokeLinecap="round" 
                opacity="0.6"
              />
            </svg>

            <div className="brush-text-content font-serif">
              <p>This Medicinal Mushroom</p>
              <p>Can Be a Profitable</p>
              <p>Business for You</p>
            </div>

            <div className="brush-leaf-branch">
              <svg width="58" height="58" viewBox="0 0 48 48" fill="none">
                <path d="M30 8C22 8 16 14 16 22C16 26 17.2 29.2 19.2 32C12.8 33.6 8 38.4 8 44.4C8 44.4 17.6 44.4 24 36.4C26.8 38.4 30 39.6 34 39.6C42 39.6 48 33.2 48 25.2C48 21.2 46.4 17.6 43.6 14.8C44.4 12.4 44.8 10 44.8 7.6C44.8 7.6 38.4 7.6 30 8Z" fill="#2e7d32" opacity="0.95"/>
                <path d="M18 16C10 16 3.6 22.4 3.6 30.4C3.6 34.4 4.8 37.6 6.8 40.4C2 42 -1.2 45.2 -1.2 46.4C-1.2 46.4 8.4 46.4 14.8 38.4 C17.6 40.4 20.8 41.6 24.8 41.6C32.8 41.6 38.8 35.2 38.8 27.2C38.8 23.2 37.2 19.6 34.4 16.8C35.2 14.4 35.6 12 35.6 9.6C35.6 9.6 29.2 9.6 18 16Z" fill="#388e3c"/>
                <path d="M16 46C20 38 28 30 43 22" stroke="#1b5e20" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
