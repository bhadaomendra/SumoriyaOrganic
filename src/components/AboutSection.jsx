import React from 'react';
import { ArrowRight, GraduationCap, TestTube, Building2, Handshake, MessageSquare } from 'lucide-react';

const items = [
  [GraduationCap,'Training Programs','Offline / Online'],
  [TestTube,'Cultivation & Production Knowledge',''],
  [Building2,'Unit Setup Guidance',''],
  [Handshake,'Buyback Support',''],
  [MessageSquare,'Ongoing Consultation','']
];

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="container about-grid">
      <div>
        <span className="section-tag">ABOUT SUMORIYA ORGANIC</span>
        <h2 className="about-title">Knowledge. Support.<br />Real Opportunities.</h2>
        <p className="about-copy">
          Sumoriya Organic Agro Gold Pvt. Ltd. is focused on Cordyceps cultivation, practical training and production support. We work with individuals, farmers and entrepreneurs to help them learn, set up their own unit and build a sustainable business in the mushroom industry.
        </p>
        <a href="#contact" className="btn-pill btn-pill-outline-dark">Know More About Us <ArrowRight size={16} /></a>
      </div>

      <div>
        <img src="/about_jar_original.png" alt="Cordyceps cultivation jar" className="about-image" loading="lazy" />
      </div>

      <div className="about-list">
        {items.map(([Icon,label,note]) => (
          <div className="about-list-item" key={label}>
            <div className="icon-circle"><Icon size={19} color="var(--green-800)" /></div>
            <div className="about-list-label">{label}{note && <small style={{display:'block',fontWeight:500,color:'var(--muted)',marginTop:2}}>({note})</small>}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
