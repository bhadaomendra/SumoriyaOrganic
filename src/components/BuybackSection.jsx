import React from 'react';
import { ArrowRight, TrendingUp, ShieldCheck, Handshake } from 'lucide-react';

const BuybackSection = ({ onOpenWhatsApp }) => {
  return (
    <section id="buyback" className="sec-padding" style={{ background: 'var(--bg-dark)', color: 'var(--text-cream)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '50px', alignItems: 'center' }}>
          
          {/* Left Handshake Image with Gold Badge Seal Overlay */}
          <div style={{ position: 'relative' }}>
            <img 
              src="/buyback_handshake.jpg" 
              alt="Buyback Agreement Handshake" 
              style={{
                width: '100%',
                borderRadius: 'var(--radius-md)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                border: '1px solid var(--border-dark)'
              }}
            />

            {/* Round Gold Seal Badge */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '140px',
              height: '140px',
              background: 'radial-gradient(circle, #fceecb 0%, #d4932b 100%)',
              borderRadius: '50%',
              border: '6px double #734807',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              color: '#3d2502',
              padding: '10px'
            }}>
              <Handshake size={32} color="#543303" />
              <div style={{ fontSize: '0.75rem', fontWeight: '900', letterSpacing: '0.5px', marginTop: '4px' }}>
                BUYBACK
              </div>
              <div style={{ fontSize: '0.65rem', fontWeight: '800' }}>
                GUARANTEE
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <span className="hero-tag" style={{ color: 'var(--color-orange)' }}>OUR KEY ADVANTAGE</span>
            
            <h2 className="font-serif" style={{ fontSize: '3rem', color: 'var(--text-cream)', marginBottom: '20px' }}>
              Buyback <span style={{ color: 'var(--color-orange)' }}>Guarantee</span>
            </h2>

            <p style={{ color: 'var(--text-light-muted)', fontSize: '1.05rem', marginBottom: '32px', lineHeight: '1.7' }}>
              We support our trained clients and production partners with a structured buyback assurance (as per agreement terms) to help reduce market risk and ensure a stable business journey.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', alignItems: 'center' }}>
              <div>
                <button onClick={onOpenWhatsApp} className="btn-pill btn-orange" style={{ padding: '14px 32px' }}>
                  <span>Know More About Buyback</span>
                  <ArrowRight size={18} />
                </button>
              </div>

              <div style={{ display: 'grid', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.9rem', color: 'var(--text-cream)' }}>
                  <TrendingUp size={20} color="var(--color-gold)" />
                  <span>Stable Market Support</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.9rem', color: 'var(--text-cream)' }}>
                  <ShieldCheck size={20} color="var(--color-gold)" />
                  <span>Reduced Business Risk</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.9rem', color: 'var(--text-cream)' }}>
                  <Handshake size={20} color="var(--color-gold)" />
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
