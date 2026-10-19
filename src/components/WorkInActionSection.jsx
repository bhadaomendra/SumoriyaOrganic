import React from 'react';
import { ArrowRight } from 'lucide-react';

/*
  Gallery photos live in /public/gallery/g1.jpg ... g5.jpg.
  To change one, replace the file with the same name
  (landscape or square, 1200px wide or larger).
*/
const images = [
  ['/gallery/g1.jpg','Practical Lab Training'],
  ['/gallery/g2.jpg','Cultivation Racks'],
  ['/gallery/g3.jpg','Cordyceps Production'],
  ['/gallery/g4.jpg','Culture Preparation'],
  ['/gallery/g5.jpg','Drying and Preservation']
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
            <img src={src} alt={title} width="1200" height="1000" loading="lazy" decoding="async" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WorkInActionSection;
