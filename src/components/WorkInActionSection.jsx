import React from 'react';
import { ArrowRight } from 'lucide-react';

const images = [
  ['/gal1.png','Practical Lab Training'],
  ['/gal2.png','Cultivation Racks'],
  ['/gal3.png','Cordyceps Production'],
  ['/gal4.png','Expert Guidance'],
  ['/gal5.png','Production Facility']
];

const WorkInActionSection = () => (
  <section id="gallery" className="section-padding">
    <div className="container">
      <div className="gallery-head">
        <div>
          <span className="section-tag">OUR WORK IN ACTION</span>
          <h2 className="gallery-title">Training | Production | Guidance</h2>
          <p className="gallery-subtitle">Real lab. Real training. Real production. A complete learning experience with practical exposure.</p>
        </div>
        <a href="#contact" className="btn-pill btn-pill-outline-dark">View Gallery <ArrowRight size={16} /></a>
      </div>
      <div className="gallery-grid">
        {images.map(([src,title]) => (
          <div className="gallery-item" key={src}>
            <img src={src} alt={title} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WorkInActionSection;
