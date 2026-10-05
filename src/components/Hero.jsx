import React from 'react';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';

const Hero = ({ onOpenWhatsApp }) => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-wrapper">
      <div className="container hero-layout">
        {/* Left Column */}
        <div>
          <div className="hero-tag">
            PRACTICAL TRAINING | CULTIVATION EXPERTISE | PRODUCTION SUPPORT
          </div>

          <h1 className="hero-heading font-serif">
            Build Your Own <br />
            <span>Cordyceps</span> <br />
            Production Unit
          </h1>

          <p className="hero-paragraph">
            Learn from real experience. Get practical training, cultivation knowledge and production support from industry experts.
          </p>

          <div className="hero-btns">
            <button onClick={() => scrollTo('gallery')} className="btn-pill btn-orange">
              <span>Explore Training</span>
              <ArrowRight size={18} />
            </button>

            <button onClick={onOpenWhatsApp} className="btn-pill btn-dark-outline">
              <MessageCircle size={18} color="#25d366" />
              <span>Talk to an Expert</span>
            </button>
          </div>
        </div>

        {/* Right Column with Image & Floating Badge */}
        <div className="hero-img-box">
          <img 
            src="/hero_scientist.jpg" 
            alt="Scientist in Cordyceps Lab" 
            className="hero-img"
          />

          {/* Round Badge matching top right float in image */}
          <div className="floating-round-badge">
            <span>
              Practical <br />
              Knowledge <br />
              <strong style={{ color: 'var(--color-orange)' }}>Real Training</strong> <br />
              Real Results
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
