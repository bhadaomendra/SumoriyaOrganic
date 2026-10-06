import React from 'react';
import { ArrowRight, GraduationCap, TestTube, Building2, Handshake, MessageSquare } from 'lucide-react';

const items = [
  { icon: GraduationCap, label: 'Training Programs', note: 'Offline / Online' },
  { icon: TestTube, label: 'Cultivation & Production Knowledge', note: '' },
  { icon: Building2, label: 'Unit Setup Guidance', note: '' },
  { icon: Handshake, label: 'Buyback Support', note: '' },
  { icon: MessageSquare, label: 'Ongoing Consultation', note: '' }
];

const AboutSection = () => (
  <section id="about" className="about-section-wrapper">
    <div className="container about-grid">
      {/* Left Column: Headline & Copy */}
      <div className="about-left-col">
        <span className="section-tag">ABOUT SUMORIYA ORGANIC</span>
        <h2 className="about-title">
          Knowledge.<br />
          Support.<br />
          Real<br />
          Opportunities.
        </h2>
        <p className="about-copy">
          Sumoriya Organic Agro Gold Pvt. Ltd. is focused on Cordyceps cultivation, practical training and production support. We work with individuals, farmers and entrepreneurs to help them learn, set up their own unit and build a sustainable business in the mushroom industry.
        </p>
        <a href="#contact" className="btn-pill btn-pill-outline-dark about-btn">
          Know More About Us <ArrowRight size={16} />
        </a>
      </div>

      {/* Center Column: Cordyceps Jar Image */}
      <div className="about-center-col">
        <img
          src="/about_jar_original.png"
          alt="Cordyceps cultivation jar with vibrant mushroom fruiting bodies"
          className="about-image"
          loading="lazy"
        />
      </div>

      {/* Right Column: Feature List Card */}
      <div className="about-right-col">
        <div className="about-list">
          {items.map(({ icon: Icon, label, note }) => (
            <div className="about-list-item" key={label}>
              <div className="icon-circle">
                <Icon size={18} color="var(--green-800)" />
              </div>
              <div className="about-list-text">
                <span className="about-list-label">{label}</span>
                {note && <span className="about-list-note">({note})</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
