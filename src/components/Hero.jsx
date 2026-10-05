import React from 'react';
import { ArrowRight, ShieldCheck, TrendingUp, Award, CheckCircle2 } from 'lucide-react';

const Hero = ({ onOpenContact }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-grid">
        {/* Left Content */}
        <div>
          <div className="badge-pill">
            <Award size={18} color="var(--gold-main)" />
            <span>Rajasthan's #1 Mushroom Farming Partner • 350+ Units Setup</span>
          </div>

          <h1 className="hero-title">
            Ghar Se Shuru Karein <span>High-Profit Organic</span> Mushroom Farming
          </h1>

          <p className="hero-sub">
            Apne khali kamre ya space ko mahine ki guaranteed aamdani mein badlein. Hum dete hain complete Turnkey Setup Kit, practical training, aur <b>100% Legal Stamp-Paper Buyback Guarantee</b>!
          </p>

          <div className="hero-actions">
            <button onClick={() => scrollToSection('calculator')} className="btn btn-gold">
              <span>Calculate Your Monthly Income</span>
              <ArrowRight size={18} />
            </button>
            <button onClick={onOpenContact} className="btn btn-outline">
              <span>Get Free Advice</span>
            </button>
          </div>

          {/* Quick Trust Highlights */}
          <div style={{ display: 'flex', gap: '20px', marginTop: '35px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', fontWeight: '600' }}>
              <CheckCircle2 size={18} color="var(--primary)" />
              <span>Small Space Required (10x10 Room)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', fontWeight: '600' }}>
              <CheckCircle2 size={18} color="var(--primary)" />
              <span>Harvest in 25-30 Days</span>
            </div>
          </div>
        </div>

        {/* Right Hero Image Frame */}
        <div className="hero-img-container">
          <img 
            src="/hero_mushroom.jpg" 
            alt="Organic Mushroom Farm Setup" 
            className="hero-main-img"
          />
          <div className="floating-badge">
            <div className="floating-badge-icon">
              <ShieldCheck size={28} />
            </div>
            <div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Guaranteed Income</div>
              <div style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--primary-dark)' }}>
                100% Legal Buyback Contract
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
