import React from 'react';
import { ChevronRight } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      num: '01',
      title: 'Culture & Preparation',
      desc: 'Mother culture / liquid culture and substrate preparation.',
      img: '/step1.jpg'
    },
    {
      num: '02',
      title: 'Cultivation & Growth',
      desc: 'Controlled environment and proper care.',
      img: '/step2.jpg'
    },
    {
      num: '03',
      title: 'Harvest & Production',
      desc: 'Harvesting, drying and value addition.',
      img: '/step3.jpg'
    }
  ];

  return (
    <section id="process" className="sec-padding" style={{ background: '#ffffff' }}>
      <div className="container">
        <div style={{ marginBottom: '50px' }}>
          <span className="tag-badge">OUR PROCESS</span>
          <h2 className="font-serif" style={{ fontSize: '2.5rem', color: 'var(--text-dark)', marginBottom: '10px' }}>
            From Culture to Harvest
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
            A simple 3-step cultivation journey with practical learning.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr auto 1fr', gap: '20px', alignItems: 'center' }}>
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div style={{
                background: 'var(--bg-cream)',
                borderRadius: 'var(--radius-md)',
                padding: '24px',
                textAlign: 'center',
                border: '1px solid var(--border-light)'
              }}>
                <div style={{ width: '130px', height: '130px', margin: '0 auto 20px', borderRadius: '50%', overflow: 'hidden', border: '3px solid #ffffff', boxShadow: '0 6px 18px rgba(0,0,0,0.08)' }}>
                  <img src={step.img} alt={step.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '8px' }}>
                  <span style={{
                    background: 'var(--color-orange)',
                    color: '#ffffff',
                    fontWeight: '800',
                    fontSize: '0.8rem',
                    padding: '2px 8px',
                    borderRadius: 'var(--radius-sm)'
                  }}>
                    {step.num}
                  </span>
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--text-dark)' }}>{step.title}</h3>
                </div>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                  {step.desc}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div key={`arrow-${idx}`} style={{ display: 'flex', justifyContent: 'center' }}>
                  <ChevronRight size={36} color="var(--color-orange)" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
