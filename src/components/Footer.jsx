import React from 'react';
import { Sprout, Phone, Mail, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--primary-dark)', color: '#ffffff', paddingTop: '70px', paddingBottom: '30px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '40px', marginBottom: '50px' }}>
          
          {/* Col 1 */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.4rem', fontWeight: '800', fontFamily: 'var(--font-heading)', color: '#ffffff', marginBottom: '16px' }}>
              <div style={{ width: '36px', height: '36px', background: 'var(--gold-main)', color: 'var(--primary-dark)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Sprout size={22} />
              </div>
              <span>Sumoriya Organic</span>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>
              Sumoriya Organic Agro Gold India Pvt Ltd — Rajasthan ka pramukh indoor organic mushroom farming setup & legal buyback provider.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 style={{ fontSize: '1.1rem', color: 'var(--gold-glow)', marginBottom: '16px' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'grid', gap: '10px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>
              <li><a href="#hero" style={{ color: 'inherit' }}>Home</a></li>
              <li><a href="#calculator" style={{ color: 'inherit' }}>Income Calculator</a></li>
              <li><a href="#kits" style={{ color: 'inherit' }}>Setup Kits</a></li>
              <li><a href="#training" style={{ color: 'inherit' }}>Training Program</a></li>
              <li><a href="#buyback" style={{ color: 'inherit' }}>Buyback Guarantee</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 style={{ fontSize: '1.1rem', color: 'var(--gold-glow)', marginBottom: '16px' }}>Contact Office</h4>
            <ul style={{ listStyle: 'none', display: 'grid', gap: '12px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MapPin size={18} color="var(--gold-glow)" />
                <span>Jaipur & Sikar, Rajasthan, India</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={18} color="var(--gold-glow)" />
                <span>+91 98290 00000 / +91 94140 00000</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={18} color="var(--gold-glow)" />
                <span>info@sumoriyaorganic.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>
          <div>
            © {new Date().getFullYear()} Sumoriya Organic Agro Gold India Pvt Ltd. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            Built with <Heart size={14} color="#e63946" fill="#e63946" /> for Agriculture Innovators.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
