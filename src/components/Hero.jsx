import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

const Hero = ({ onOpenWhatsApp }) => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="hero-wrapper">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="hero-tag">PRACTICAL TRAINING | CULTIVATION EXPERTISE | PRODUCTION SUPPORT</div>
          <h1 className="hero-title">Build Your Own<br /><span>Cordyceps</span><br />Production Unit</h1>
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

        <div className="hero-visual">
          <img
            src="/hero_img_original.png"
            alt="Cordyceps cultivation expert working with production jars"
            className="hero-img-original"
            fetchPriority="high"
          />
          <div className="hero-message" aria-label="This Medicinal Mushroom Can Be a Profitable Business for You">
            <span>This Medicinal Mushroom<br />Can Be a Profitable<br />Business for You</span>
            <i aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
