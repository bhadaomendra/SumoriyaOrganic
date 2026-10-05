import React from 'react';
import { ShieldCheck, FileText, Truck, Banknote, ArrowUpRight } from 'lucide-react';

const Buyback = ({ onOpenContact }) => {
  return (
    <section id="buyback" className="section-padding" style={{ background: 'var(--primary-dark)', color: '#ffffff' }}>
      <div className="container">
        <div className="section-head" style={{ color: '#ffffff' }}>
          <span className="section-tag" style={{ color: 'var(--gold-glow)' }}>100% Risk-Free Business</span>
          <h2 className="section-title" style={{ color: '#ffffff' }}>Legal Stamp-Paper Buyback Guarantee</h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Market ki bikri ki chinta khatam! Hum pehle hi din legal stamp paper par aapke sath agreement karte hain.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginTop: '40px' }}>
          <div style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(10px)', padding: '30px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <FileText size={36} color="var(--gold-glow)" style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '10px' }}>Legal Notarized Contract</h3>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)' }}>
              ₹500 ke govt stamp paper par 1 se 3 saal ka written buyback contract hota hai.
            </p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(10px)', padding: '30px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <Banknote size={36} color="var(--gold-glow)" style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '10px' }}>Pre-Fixed Rate Guarantee</h3>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)' }}>
              Market crash hone par bhi hum aapko contract mein taya shuda fixed rate par hi bhugtan karte hain.
            </p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(10px)', padding: '30px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <Truck size={36} color="var(--gold-glow)" style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '10px' }}>Doorstep Logistics Pickup</h3>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)' }}>
              Aapki dry/fresh crop ko hum khud aapke farm se pickup karte hain. Transport ka koi jhanjhat nahi.
            </p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(10px)', padding: '30px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <ShieldCheck size={36} color="var(--gold-glow)" style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '10px' }}>Direct Bank Transfer</h3>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)' }}>
              Crop pickup hote hi 48 ghante ke andar direct NEFT / UPI bank transfer milta hai.
            </p>
          </div>
        </div>

        <div style={{ marginTop: '50px', textAlignment: 'center', textAlign: 'center' }}>
          <button onClick={onOpenContact} className="btn btn-gold" style={{ padding: '16px 36px', fontSize: '1.05rem' }}>
            <span>Read Sample Buyback Agreement</span>
            <ArrowUpRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Buyback;
