import React from 'react';
import { MessageCircle, PhoneCall } from 'lucide-react';

const CtaBanner = ({ onOpenWhatsApp, onOpenContact }) => {
  return (
    <section id="contact" className="sec-padding" style={{ background: 'var(--bg-dark)', color: 'var(--text-cream)', position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px', alignItems: 'center' }}>
          <div>
            <h2 className="font-serif" style={{ fontSize: '3.2rem', color: 'var(--text-cream)', marginBottom: '16px' }}>
              Let's Grow the Future <span style={{ color: 'var(--color-orange)' }}>Together</span>
            </h2>
            <p style={{ color: 'var(--text-light-muted)', fontSize: '1.1rem', marginBottom: '36px', maxWidth: '560px' }}>
              Get training, production support and buyback guidance to start or scale your Cordyceps unit.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button onClick={onOpenWhatsApp} className="btn-pill btn-orange" style={{ padding: '16px 36px', fontSize: '1rem' }}>
                <MessageCircle size={20} color="#ffffff" />
                <span>Enquire on WhatsApp</span>
              </button>

              <button onClick={onOpenContact} className="btn-pill btn-dark-outline" style={{ padding: '16px 36px', fontSize: '1rem' }}>
                <PhoneCall size={18} color="var(--color-gold)" />
                <span>Request a Call Back</span>
              </button>
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <img 
              src="/about_jar.jpg" 
              alt="Cordyceps Mushrooms" 
              style={{
                maxWidth: '300px',
                borderRadius: 'var(--radius-lg)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                border: '2px solid var(--border-dark)'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
