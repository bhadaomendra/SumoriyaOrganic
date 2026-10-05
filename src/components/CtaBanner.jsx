import React from 'react';
import { MessageCircle, PhoneCall } from 'lucide-react';

const CtaBanner = ({ onOpenWhatsApp, onOpenContact }) => (
  <section id="contact" className="sec-padding cta-section">
    <div className="container cta-grid">
      <div>
        <h2 className="cta-title">Let’s Grow the Future <span>Together</span></h2>
        <p className="cta-copy">Get training, production support and buyback guidance to start or scale your Cordyceps unit.</p>
        <div className="cta-actions">
          <button type="button" onClick={onOpenWhatsApp} className="btn-pill btn-pill-orange"><MessageCircle size={19} /> Enquire on WhatsApp</button>
          <button type="button" onClick={onOpenContact} className="btn-pill btn-pill-outline-light"><PhoneCall size={18} /> Request a Call Back</button>
        </div>
      </div>
      <div className="cta-visual">
        <img src="/about_jar.jpg" alt="Cordyceps cultivation jars" loading="lazy" />
      </div>
    </div>
  </section>
);

export default CtaBanner;
