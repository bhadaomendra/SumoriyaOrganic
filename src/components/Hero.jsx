import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

const Hero = ({ onOpenWhatsApp }) => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-wrapper">
      <div className="container hero-grid">
        {/* Left Text */}
        <div>
          <div className="hero-tag">
            PRACTICAL TRAINING | CULTIVATION EXPERTISE | PRODUCTION SUPPORT
          </div>

          <h1 className="hero-title">
            Build Your Own <br />
            <span>Cordyceps</span> <br />
            Production Unit
          </h1>

          <p className="hero-subtext">
            Learn from real experience. Get practical training, cultivation knowledge and production support from industry experts.
          </p>

          <div className="hero-btns-group">
            <button type="button" onClick={() => scrollTo('gallery')} className="btn-pill btn-pill-orange">
              <span>Explore Training</span>
              <ArrowRight size={18} />
            </button>

            <button type="button" onClick={onOpenWhatsApp} className="btn-pill btn-pill-outline-light">
              <MessageCircle size={18} color="#25d366" />
              <span>Talk to an Expert</span>
            </button>
          </div>
        </div>

        {/* Right Hero Image Card (Exact visual image asset) */}
        <div>
          <img 
            src="/hero_img_original.png" 
            alt="Cordyceps Production Unit Lab Expert" 
            className="hero-img-original"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
