import React from 'react';
import { Sprout, Settings, Handshake, Users, Globe2 } from 'lucide-react';

const FeatureBar = () => (
  <section className="feature-bar-section" aria-label="Sumoriya Organic key benefits">
    <div className="container feature-bar-grid-5">
      <div className="feature-pill-single"><Sprout size={22} color="var(--green-800)" /><span>Hands-on<br />Practical Training</span></div>
      <div className="feature-pill-single"><Settings size={22} color="var(--green-800)" /><span>Production Unit<br />Setup Guidance</span></div>
      <div className="feature-pill-single feature-pill-gold">
        <Handshake size={25} color="#8b5a13" />
        <span><strong>BUYBACK GUARANTEE</strong><small style={{display:'block',fontWeight:600,color:'#7a4d10'}}>For Eligible Production Partners</small></span>
      </div>
      <div className="feature-pill-single"><Users size={22} color="var(--green-800)" /><span>Expert Consultation<br />& Ongoing Support</span></div>
      <div className="feature-pill-single"><Globe2 size={22} color="var(--green-800)" /><span>All India<br />Support</span></div>
    </div>
  </section>
);

export default FeatureBar;
