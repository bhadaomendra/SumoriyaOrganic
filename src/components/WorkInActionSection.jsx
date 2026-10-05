import React from 'react';
import { ArrowRight } from 'lucide-react';

const WorkInActionSection = () => {
  const images = [
    { src: '/gal1.png', title: 'Lab Training' },
    { src: '/gal2.png', title: 'Cultivation Racks' },
    { src: '/gal3.png', title: 'Cordyceps Jars' },
    { src: '/gal4.png', title: 'Expert Guidance' },
    { src: '/gal5.png', title: 'Lab Facility' }
  ];

  return (
    <section id="gallery" className="section-padding" style={{ background: 'var(--bg-cream-page)' }}>
      <div className="container">
        {/* Top Header Row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '35px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <span className="section-tag">OUR WORK IN ACTION</span>
            <h2 className="font-serif" style={{ fontSize: '2.5rem', color: 'var(--text-dark)', marginBottom: '8px' }}>
              Training | Production | Guidance
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem' }}>
              Real lab. Real training. Real production. A complete learning experience with practical exposure.
            </p>
          </div>

          <a href="#contact" className="btn-pill btn-pill-outline-dark">
            <span>View Gallery</span>
            <ArrowRight size={16} />
          </a>
        </div>

        {/* 5 Horizontal Grid Items */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '14px' }}>
          {images.map((img, idx) => (
            <div 
              key={idx}
              style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                height: '140px',
                boxShadow: '0 4px 14px rgba(18,32,24,0.06)',
                border: '1px solid rgba(18, 32, 24, 0.08)'
              }}
            >
              <img 
                src={img.src} 
                alt={img.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkInActionSection;
