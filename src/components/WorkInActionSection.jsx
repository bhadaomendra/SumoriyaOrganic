import React, { useState, useEffect } from 'react';
import { ArrowRight, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

/*
  Gallery photos live in /public/gallery/g1.jpg ... g12.jpg.
  To change one, replace the file with the same name
  (landscape or square, 1200px wide or larger).
*/
const images = [
  ['/gallery/g1.jpg', 'Practical Lab Training'],
  ['/gallery/g2.jpg', 'Cultivation Racks'],
  ['/gallery/g3.jpg', 'Cordyceps Production'],
  ['/gallery/g4.jpg', 'Culture Preparation'],
  ['/gallery/g5.jpg', 'Drying and Preservation'],
  ['/gallery/g6.jpg', 'Liquid Culture & Inoculum'],
  ['/gallery/g7.jpg', 'Substrate & Sterilization'],
  ['/gallery/g8.jpg', 'Cleanroom Inoculation'],
  ['/gallery/g9.jpg', 'Incubation & Colonization'],
  ['/gallery/g10.jpg', 'Fruiting & Growth Monitoring'],
  ['/gallery/g11.jpg', 'Mature Cordyceps Militaris'],
  ['/gallery/g12.jpg', 'Cultivation Kit & Equipment']
];

const WorkInActionSection = () => {
  const [activeIdx, setActiveIdx] = useState(null);

  // Keyboard navigation (Esc to close, Left/Right arrow to navigate)
  useEffect(() => {
    if (activeIdx === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveIdx(null);
      } else if (e.key === 'ArrowRight') {
        setActiveIdx((prev) => (prev + 1) % images.length);
      } else if (e.key === 'ArrowLeft') {
        setActiveIdx((prev) => (prev - 1 + images.length) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIdx]);

  return (
    <section id="gallery" className="section-padding">
      <div className="container">
        <div className="gallery-head">
          <div>
            <span className="section-tag">OUR WORK IN ACTION</span>
            <h2 className="gallery-title">Training | Production | Guidance</h2>
            <p className="gallery-subtitle">
              Real lab. Real training. Real production. A complete learning experience with practical exposure.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setActiveIdx(0)}
            className="btn-pill btn-pill-outline-dark"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
          >
            <span>View Gallery</span>
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="gallery-grid">
          {images.map(([src, title], idx) => (
            <div
              className="gallery-item"
              key={src}
              onClick={() => setActiveIdx(idx)}
              style={{ cursor: 'pointer', position: 'relative' }}
              title={`Click to preview: ${title}`}
            >
              <img
                src={src}
                alt={title}
                width="1200"
                height="1000"
                loading="lazy"
                decoding="async"
              />
              <div
                className="gallery-item-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(11,33,23,0.85) 100%)',
                  opacity: 0.9,
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '12px',
                  pointerEvents: 'none'
                }}
              >
                <span
                  style={{
                    color: '#ffffff',
                    fontSize: '0.82rem',
                    fontWeight: 650,
                    lineHeight: 1.25,
                    textShadow: '0 1px 3px rgba(0,0,0,0.6)'
                  }}
                >
                  {title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      {activeIdx !== null && (
        <div
          onClick={() => setActiveIdx(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.88)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: 'clamp(12px, 3vw, 24px)'
          }}
          role="dialog"
          aria-modal="true"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setActiveIdx(null)}
            aria-label="Close preview (Esc)"
            title="Close (Esc)"
            style={{
              position: 'absolute',
              top: '14px',
              right: '14px',
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.22)',
              border: '1px solid rgba(255, 255, 255, 0.45)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10001,
              transition: 'background 0.2s ease, transform 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.35)';
              e.currentTarget.style.transform = 'scale(1.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.22)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <X size={22} />
          </button>

          {/* Previous Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIdx((prev) => (prev - 1 + images.length) % images.length);
            }}
            aria-label="Previous image"
            style={{
              position: 'absolute',
              left: 'clamp(8px, 2vw, 20px)',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.18)',
              border: '1px solid rgba(255, 255, 255, 0.35)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10001
            }}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Next Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIdx((prev) => (prev + 1) % images.length);
            }}
            aria-label="Next image"
            style={{
              position: 'absolute',
              right: 'clamp(8px, 2vw, 20px)',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.18)',
              border: '1px solid rgba(255, 255, 255, 0.35)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10001
            }}
          >
            <ChevronRight size={24} />
          </button>

          {/* Modal Content */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '920px',
              maxHeight: '85vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative'
            }}
          >
            <img
              src={images[activeIdx][0]}
              alt={images[activeIdx][1]}
              style={{
                maxWidth: '100%',
                maxHeight: '68vh',
                objectFit: 'contain',
                borderRadius: '16px',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6)',
                border: '2px solid rgba(255, 255, 255, 0.15)'
              }}
            />
            <div
              style={{
                marginTop: '12px',
                textAlign: 'center',
                color: '#ffffff',
                padding: '0 10px'
              }}
            >
              <h3 style={{ fontSize: 'clamp(1rem, 4vw, 1.2rem)', fontWeight: 700, marginBottom: '4px' }}>
                {images[activeIdx][1]}
              </h3>
              <span style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                {activeIdx + 1} of {images.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkInActionSection;
