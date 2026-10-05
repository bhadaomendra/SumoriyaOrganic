import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

const Hero = ({ onOpenWhatsApp }) => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="hero-wrapper">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-tag">PRACTICAL TRAINING | CULTIVATION EXPERTISE | PRODUCTION SUPPORT</div>
          <h1 className="hero-title">Build Your Own<br /><span>Cordyceps</span><br />Production Unit</h1>
          <p className="hero-subtext">
            Learn from real experience. Get practical training, cultivation knowledge and production support from industry experts.
          </p>
          <div className="hero-btns-group">
            <button type="button" onClick={() => scrollTo('gallery')} className="btn-pill btn-pill-orange">
              Explore Training <ArrowRight size={17} />
            </button>
            <button type="button" onClick={onOpenWhatsApp} className="btn-pill btn-pill-outline-light">
              <MessageCircle size={17} color="#25d366" /> Talk to an Expert
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <img src="/hero_img_original.png" alt="Cordyceps cultivation expert working with production jars" className="hero-img-original" fetchPriority="high" />
          <div className="hero-badge">Practical Knowledge<br />Real Training<br />Real Results</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
