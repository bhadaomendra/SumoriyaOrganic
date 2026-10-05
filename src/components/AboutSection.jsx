import React from 'react';
import { ArrowRight, GraduationCap, TestTube, Building2, Handshake, MessageSquare } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding" style={{ background: 'var(--bg-cream-page)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 0.8fr 0.9fr', gap: '30px', alignItems: 'center' }}>
          
          {/* Left Text */}
          <div>
            <span className="section-tag">ABOUT SUMORIYA ORGANIC</span>
            <h2 className="font-serif" style={{ fontSize: '2.5rem', color: 'var(--text-dark)', marginBottom: '20px' }}>
              Knowledge. Support. <br />
              Real Opportunities.
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '28px', lineHeight: '1.7' }}>
              Sumoriya Organic Agro Gold Pvt. Ltd. is focused on Cordyceps cultivation, practical training and production support. We work with individuals, farmers and entrepreneurs to help them learn, set up their own unit and build a sustainable business in the mushroom industry.
            </p>
            <a href="#contact" className="btn-pill btn-pill-outline-dark">
              <span>Know More About Us</span>
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Center Image (Original Cropped Asset) */}
          <div style={{ textAlign: 'center' }}>
            <img 
              src="/about_jar_original.png" 
              alt="Cordyceps Jar Original" 
              style={{
                width: '100%',
                maxHeight: '340px',
                objectFit: 'cover',
                borderRadius: 'var(--radius-md)',
                boxShadow: '0 8px 24px rgba(18,32,24,0.08)'
              }}
            />
          </div>

          {/* Right Feature List */}
          <div style={{
            background: 'var(--bg-cream-card)',
            padding: '30px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid rgba(18, 32, 24, 0.08)'
          }}>
            <div style={{ display: 'grid', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                  <GraduationCap size={20} color="var(--color-orange)" />
                </div>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '0.92rem', color: 'var(--text-dark)' }}>Training Programs</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>(Offline / Online)</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                  <TestTube size={20} color="var(--color-orange)" />
                </div>
                <div style={{ fontWeight: '700', fontSize: '0.92rem', color: 'var(--text-dark)' }}>
                  Cultivation & Production Knowledge
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                  <Building2 size={20} color="var(--color-orange)" />
                </div>
                <div style={{ fontWeight: '700', fontSize: '0.92rem', color: 'var(--text-dark)' }}>
                  Unit Setup Guidance
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                  <Handshake size={20} color="var(--color-orange)" />
                </div>
                <div style={{ fontWeight: '700', fontSize: '0.92rem', color: 'var(--text-dark)' }}>
                  Buyback Support
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                  <MessageSquare size={20} color="var(--color-orange)" />
                </div>
                <div style={{ fontWeight: '700', fontSize: '0.92rem', color: 'var(--text-dark)' }}>
                  Ongoing Consultation
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
