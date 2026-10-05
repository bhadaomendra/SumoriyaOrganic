import React from 'react';
import { ArrowRight, TrendingUp, ShieldCheck, Handshake } from 'lucide-react';

const BuybackSection = ({ onOpenWhatsApp }) => {
  return (
    <section id="buyback" className="section-padding" style={{ background: 'var(--bg-dark-hero)', color: 'var(--text-cream)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '50px', alignItems: 'center' }}>
          
          {/* Left Handshake Image (Exact original cropped asset) */}
          <div>
            <img 
              src="/buyback_original.png" 
              alt="Buyback Agreement Handshake and Gold Seal" 
              style={{
                width: '100%',
                borderRadius: 'var(--radius-md)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                border: '1px solid rgba(244, 239, 230, 0.15)'
              }}
            />
          </div>

          {/* Right Content */}
          <div>
            <span className="section-tag" style={{ color: 'var(--color-orange)' }}>OUR KEY ADVANTAGE</span>
            
            <h2 className="font-serif" style={{ fontSize: '3rem', color: 'var(--text-cream)', marginBottom: '20px' }}>
              Buyback <span style={{ color: 'var(--color-orange)' }}>Guarantee</span>
            </h2>

            <p style={{ color: 'var(--text-light-muted)', fontSize: '1.05rem', marginBottom: '32px', lineHeight: '1.7' }}>
              We support our trained clients and production partners with a structured buyback assurance (as per agreement terms) to help reduce market risk and ensure a stable business journey.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', alignItems: 'center' }}>
              <div>
                <button type="button" onClick={onOpenWhatsApp} className="btn-pill btn-pill-orange" style={{ padding: '14px 32px' }}>
                  <span>Know More About Buyback</span>
                  <ArrowRight size={18} />
                </button>
              </div>

              <div style={{ display: 'grid', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.9rem', color: 'var(--text-cream)' }}>
                  <TrendingUp size={20} color="var(--color-gold-border)" />
                  <span>Stable Market Support</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.9rem', color: 'var(--text-cream)' }}>
                  <ShieldCheck size={20} color="var(--color-gold-border)" />
                  <span>Reduced Business Risk</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.9rem', color: 'var(--text-cream)' }}>
                  <Handshake size={20} color="var(--color-gold-border)" />
                  <span>Long-term Partnership</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default BuybackSection;
