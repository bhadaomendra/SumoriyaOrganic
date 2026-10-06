import React from 'react';
import { ArrowRight, GraduationCap, FlaskConical, Building2, Handshake, Users } from 'lucide-react';

const items = [
  { icon: GraduationCap, label: 'Training Programs', note: 'Offline / Online' },
  { icon: FlaskConical, label: 'Cultivation & Production Knowledge', note: '' },
  { icon: Building2, label: 'Unit Setup Guidance', note: '' },
  { icon: Handshake, label: 'Buyback Support', note: '' },
  { icon: Users, label: 'Ongoing Consultation', note: '' }
];

const AboutSection = () => (
  <section id="about" className="about-section-wrapper">
    {/* Left Background Mushroom Line-Art Sketch Watermark */}
    <div className="about-watermark left-watermark" aria-hidden="true">
      <svg viewBox="0 0 160 160" fill="none">
        <path d="M40 150 C40 110 48 70 52 50 C52 50 32 52 18 38 C6 26 12 8 35 8 C58 8 72 26 66 50 C78 38 94 38 104 50 C114 62 108 78 86 78 C80 98 74 128 68 150" stroke="#e86826" strokeWidth="1.4" strokeLinecap="round" opacity="0.32" />
        <path d="M22 38 Q40 26 58 38" stroke="#e86826" strokeWidth="1.2" opacity="0.25" />
        <path d="M70 52 Q88 40 102 52" stroke="#e86826" strokeWidth="1.2" opacity="0.25" />
        <path d="M98 150 C98 122 106 95 110 82 C110 82 95 84 84 72 C74 62 78 48 94 48 C110 48 122 60 116 78 C124 70 138 70 146 80 C154 90 148 102 130 102 C125 118 118 136 114 150" stroke="#e86826" strokeWidth="1.2" strokeLinecap="round" opacity="0.22" />
      </svg>
    </div>

    {/* Right Background Mushroom Line-Art Sketch Watermark */}
    <div className="about-watermark right-watermark" aria-hidden="true">
      <svg viewBox="0 0 200 340" fill="none">
        <path d="M90 330 C85 240 75 150 70 95 C70 95 30 105 15 75 C0 45 30 10 75 10 C120 10 150 45 135 75 C120 105 80 95 80 95 C85 150 95 240 100 330" stroke="#e86826" strokeWidth="1.5" strokeLinecap="round" opacity="0.26" />
        <path d="M25 70 Q75 40 125 70" stroke="#e86826" strokeWidth="1.2" opacity="0.22" />
        <path d="M35 55 Q75 30 115 55" stroke="#e86826" strokeWidth="1.2" opacity="0.2" />
        <path d="M145 330 C140 270 135 210 130 170 C130 170 105 178 95 155 C85 132 105 108 135 108 C165 108 185 132 175 155 C165 178 140 170 140 170 C145 210 150 270 155 330" stroke="#e86826" strokeWidth="1.3" strokeLinecap="round" opacity="0.22" />
      </svg>
    </div>

    <div className="container about-grid">
      {/* Left Column: Headline & Copy */}
      <div className="about-left-col">
        <span className="section-tag">ABOUT SUMORIYA ORGANIC</span>
        <h2 className="about-title">
          Knowledge. Support.<br />
          <span className="title-highlight-green">Real Opportunities.</span>
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
          src="/about_jar_new.jpg"
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
                <Icon size={20} color="#173b29" />
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
