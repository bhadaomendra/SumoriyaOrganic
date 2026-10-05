import React from 'react';
import { Package, Shield, Check, Wrench, Thermometer, Sparkles } from 'lucide-react';

const SetupKits = ({ onOpenContact }) => {
  const kits = [
    {
      title: 'Starter Room Kit (10x10)',
      price: '₹60,000',
      tag: 'Ideal for Beginners',
      description: 'Chhoti jagah se shuruat karne ke liye complete Turnkey setup kit.',
      features: [
        'Modular Multi-tier Steel Racks',
        'Automatic Fogger & Humidifier System',
        'Temperature & Humidity Controllers',
        'First Batch Premium Spawn & Substrate',
        '1-Year Equipment Replacement Warranty',
        'Doorstep Setup Installation Support'
      ],
      popular: false
    },
    {
      title: 'Commercial Farming Kit (20x20)',
      price: '₹1,50,000',
      tag: 'Most Popular Choice',
      description: 'Commercial scale mushroom farming setup for maximum profit.',
      features: [
        'Heavy-duty Commercial Galvanized Racks',
        'Industrial High-Pressure Fogging System',
        'Digital Microclimate Control Panel',
        'High-Yield Spawn Bags + Pasteurization Unit',
        'Personal Dedicated Agronomist Support',
        'Guaranteed Legal Buyback Contract Included'
      ],
      popular: true
    },
    {
      title: 'Cordyceps High-Tech Kit',
      price: '₹2,50,000',
      tag: 'High Value Keeda Jadi',
      description: 'High-value Cordyceps Militaris indoor cultivation setup.',
      features: [
        'Sterile HEPA Air Filtration System',
        'UV Sterilization & LED Spectrum Lighting',
        'Precision Temperature Control Unit',
        'Master Culture & Substrate Formulas',
        'ISO Standard Lab Equipment Included',
        'Premium Buyback Rate up to ₹1.5 Lakh/kg'
      ],
      popular: false
    }
  ];

  return (
    <section id="kits" className="section-padding">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">Turnkey Infrastructure</span>
          <h2 className="section-title">Mushroom Farming Setup Kits</h2>
          <p className="section-subtitle">
            Humara har kit Complete Installation, Equipment, Spawns aur Legal Contract ke saath aata hai.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {kits.map((kit, index) => (
            <div 
              key={index} 
              className="card"
              style={{
                position: 'relative',
                border: kit.popular ? '2px solid var(--gold-main)' : '1px solid var(--border)',
                background: kit.popular ? 'linear-gradient(180deg, #ffffff 0%, var(--gold-subtle) 100%)' : '#ffffff'
              }}
            >
              {kit.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  right: '24px',
                  background: 'var(--gold-main)',
                  color: 'var(--primary-dark)',
                  fontWeight: '800',
                  fontSize: '0.75rem',
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <Sparkles size={14} /> {kit.tag}
                </div>
              )}

              <div style={{ marginBottom: '20px' }}>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '6px' }}>{kit.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{kit.description}</p>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '2.4rem', fontWeight: '800', color: 'var(--primary-dark)', fontFamily: 'var(--font-heading)' }}>
                  {kit.price}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Inclusive of setup & training</div>
              </div>

              <ul style={{ listStyle: 'none', display: 'grid', gap: '12px', marginBottom: '30px' }}>
                {kit.features.map((feature, fIdx) => (
                  <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem' }}>
                    <Check size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={onOpenContact}
                className={`btn ${kit.popular ? 'btn-gold' : 'btn-primary'}`}
                style={{ width: '100%' }}
              >
                Inquire For Kit
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SetupKits;
