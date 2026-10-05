import React from 'react';
import { ArrowRight } from 'lucide-react';

const WorkInActionSection = () => {
  const images = [
    { src: '/hero_scientist.jpg', title: 'Practical Lab Training' },
    { src: '/step2.jpg', title: 'Illuminated Cultivation Racks' },
    { src: '/about_jar.jpg', title: 'Cordyceps Militaris Macro' },
    { src: '/step3.jpg', title: 'Harvest Ready Jars' },
    { src: '/step1.jpg', title: 'Culture Inoculation Room' }
  ];

  return (
    <section id="gallery" className="sec-padding" style={{ background: 'var(--bg-cream)' }}>
      <div className="container">
        {/* Top Header Row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <span className="tag-badge">OUR WORK IN ACTION</span>
            <h2 className="font-serif" style={{ fontSize: '2.5rem', color: 'var(--text-dark)', marginBottom: '8px' }}>
              Training | Production | Guidance
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem' }}>
              Real lab. Real training. Real production. A complete learning experience with practical exposure.
            </p>
          </div>

          <a href="#contact" className="btn-pill btn-outline-dark">
            <span>View Gallery</span>
            <ArrowRight size={16} />
          </a>
        </div>

        {/* 5 Horizontal Grid Items */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px' }}>
          {images.map((img, idx) => (
            <div 
              key={idx}
              style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                height: '200px',
                boxShadow: 'var(--shadow-card)',
                position: 'relative'
              }}
            >
              <img 
                src={img.src} 
                alt={img.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.08)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1.0)'}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkInActionSection;
