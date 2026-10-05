import React from 'react';
import { ChevronRight } from 'lucide-react';

const steps = [
  ['01','Culture & Preparation','Mother culture / liquid culture and substrate preparation.','/step1_original.png'],
  ['02','Cultivation & Growth','Controlled environment and proper care.','/step2_original.png'],
  ['03','Harvest & Production','Harvesting, drying and value addition.','/step3_original.png']
];

const ProcessSection = () => (
  <section id="process" className="section-padding process-section">
    <div className="container">
      <div className="process-head">
        <span className="section-tag">OUR PROCESS</span>
        <h2 className="process-title">From Culture to Harvest</h2>
        <p className="process-subtitle">A simple 3-step cultivation journey with practical learning.</p>
      </div>

      <div className="process-grid">
        {steps.map(([num,title,desc,img], index) => (
          <React.Fragment key={num}>
            <article className="process-card">
              <div className="process-image-wrap"><img src={img} alt={title} loading="lazy" /></div>
              <span className="process-number">{num}</span>
              <h3 className="process-card-title">{title}</h3>
              <p className="process-card-desc">{desc}</p>
            </article>
            {index < 2 && <div className="process-arrow" aria-hidden="true"><ChevronRight size={34} /></div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
