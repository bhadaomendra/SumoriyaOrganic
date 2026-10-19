import React from 'react';
import { MessageCircle, PhoneCall } from 'lucide-react';

/*
  Banner photo lives at /public/cta/banner.jpg.
  To change it, replace that file with the same name
  (close-up of orange Cordyceps, 1400px wide or larger; the left edge
  fades into the green panel).
*/
const Leaf = ({ x, y, r, s = 1, fill }) => (
  <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
    <path d="M0 0 C 18 -34 62 -40 96 -6 C 66 30 20 34 0 0 Z" fill={fill} />
    <path d="M2 0 C 30 -4 62 -8 90 -6" stroke="rgba(255,255,255,.28)" strokeWidth="1.4" fill="none" strokeLinecap="round" />
  </g>
);

const CtaBanner = ({ onOpenWhatsApp, onOpenContact }) => (
  <section id="contact" className="cta-section">
    <div className="container">
      <div className="cta-card">
        <svg className="cta-leaves" viewBox="0 0 120 220" preserveAspectRatio="xMinYMid slice" aria-hidden="true">
          <Leaf x={-14} y={34} r={32} s={0.9} fill="#3f7a3a" />
          <Leaf x={-26} y={112} r={-24} s={1.05} fill="#2f6a35" />
          <Leaf x={-18} y={188} r={-52} s={1} fill="#4a8a3f" />
        </svg>

        <div className="cta-text">
          <h2 className="cta-title">Let’s Grow the Future <span>Together</span></h2>
          <p className="cta-copy">Get training, production support and buyback guidance to start or scale your Cordyceps unit.</p>
        </div>

        <div className="cta-actions">
          <button type="button" onClick={onOpenWhatsApp} className="btn-pill btn-pill-orange"><MessageCircle size={19} /> Enquire on WhatsApp</button>
          <button type="button" onClick={onOpenContact} className="btn-pill btn-pill-outline-gold"><PhoneCall size={18} /> Request a Call Back</button>
        </div>

        <div className="cta-photo">
          <img src="/cta/banner.jpg" alt="Cordyceps fruiting bodies close-up" width="1024" height="710" loading="lazy" decoding="async" />
        </div>
      </div>
    </div>
  </section>
);

export default CtaBanner;
