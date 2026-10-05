import React from 'react';
import { Sprout, Settings, Handshake, Users, Globe } from 'lucide-react';

const FeatureBar = () => {
  return (
    <div className="feature-bar-section">
      <div className="container feature-bar-grid-5">
        <div className="feature-pill-single">
          <Sprout size={18} color="var(--color-orange)" />
          <span>Hands-on Practical Training</span>
        </div>

        <div className="feature-pill-single">
          <Settings size={18} color="var(--color-orange)" />
          <span>Production Unit Setup Guidance</span>
        </div>

        <div className="feature-pill-single feature-pill-gold">
          <Handshake size={24} color="#8a530f" style={{ flexShrink: 0 }} />
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: '800', color: '#543004', textTransform: 'uppercase', lineHeight: '1.1' }}>
              BUYBACK GUARANTEE
            </div>
            <div style={{ fontSize: '0.68rem', color: '#73460f', fontWeight: '700' }}>
              For Eligible Production Partners
            </div>
          </div>
        </div>

        <div className="feature-pill-single">
          <Users size={18} color="var(--color-orange)" />
          <span>Expert Consultation & Ongoing Support</span>
        </div>

        <div className="feature-pill-single">
          <Globe size={18} color="var(--color-orange)" />
          <span>All India Support</span>
        </div>
      </div>
    </div>
  );
};

export default FeatureBar;
