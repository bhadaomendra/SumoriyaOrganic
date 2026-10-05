import React from 'react';
import { Sprout, Settings, Handshake, Users, Globe } from 'lucide-react';

const FeatureBar = () => {
  return (
    <div className="feature-bar-wrapper">
      <div className="container feature-bar-grid">
        <div className="feature-pill-item">
          <Sprout size={18} color="var(--color-orange)" />
          <span>Hands-on Practical Training</span>
        </div>

        <div className="feature-pill-item">
          <Settings size={18} color="var(--color-orange)" />
          <span>Production Unit Setup Guidance</span>
        </div>

        <div className="feature-pill-item feature-pill-highlight">
          <Handshake size={22} color="#8a530f" />
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: '800', color: '#543004', textTransform: 'uppercase' }}>
              BUYBACK GUARANTEE
            </div>
            <div style={{ fontSize: '0.7rem', color: '#73460f', fontWeight: '600' }}>
              For Eligible Production Partners
            </div>
          </div>
        </div>

        <div className="feature-pill-item">
          <Users size={18} color="var(--color-orange)" />
          <span>Expert Consultation & Ongoing Support</span>
        </div>

        <div className="feature-pill-item">
          <Globe size={18} color="var(--color-orange)" />
          <span>All India Support</span>
        </div>
      </div>
    </div>
  );
};

export default FeatureBar;
