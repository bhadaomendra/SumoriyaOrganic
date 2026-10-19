import React from 'react';
import { ChevronRight } from 'lucide-react';

/*
  Photos live in /public/process/p1.jpg ... p6.jpg.
  To change a photo, just replace the file with the same name
  (square, 1000x1000px or larger works best, subject in the centre).
*/
const steps = [
  { num: 1, title: 'Culture Preparation', sub: 'Mother & Liquid Culture', img: '/process/p1.jpg' },
  { num: 2, title: 'Substrate Preparation', sub: '& Sterilization', img: '/process/p2.jpg' },
  { num: 3, title: 'Inoculation', sub: 'Practical Training', img: '/process/p3.jpg' },
  { num: 4, title: 'Incubation', sub: 'Control Environment', img: '/process/p4.jpg' },
  { num: 5, title: 'Fruiting & Harvest', sub: 'Monitoring & Care', img: '/process/p5.jpg' },
  { num: 6, title: 'Drying & Preservation', sub: 'Value Addition', img: '/process/p6.jpg' }
];

const ProcessSection = () => (
  <section id="process" className="section-padding process-section">
    <div className="container">
      <div className="process-head">
        <span className="section-tag">OUR PROCESS</span>
        <h2 className="process-title">From Culture to Harvest</h2>
        <p className="process-subtitle">A simple 6-step cultivation journey with practical learning.</p>
      </div>

      <ol className="process-flow">
        {steps.map(({ num, title, sub, img }, index) => (
          <React.Fragment key={num}>
            <li className="process-step">
              <div className="process-circle">
                <img src={img} alt={`${title} ${sub}`} width="800" height="800" loading="lazy" decoding="async" />
                <span className="process-num">{num}</span>
              </div>
              <h3 className="process-step-title">{title}</h3>
              <p className="process-step-sub">{sub}</p>
            </li>
            {index < steps.length - 1 && (
              <li className="process-arrow" aria-hidden="true"><ChevronRight size={22} strokeWidth={2.4} /></li>
            )}
          </React.Fragment>
        ))}
      </ol>
    </div>
  </section>
);

export default ProcessSection;
