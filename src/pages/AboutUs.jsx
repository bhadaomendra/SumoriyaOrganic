import React from 'react';
import { ArrowRight, CheckCircle2, Handshake, GraduationCap, Factory, Sprout } from 'lucide-react';

const AboutUs = ({ onOpenWhatsApp }) => {
  const areas = [
    { icon: GraduationCap, title: 'Practical Training', text: 'Hands-on learning focused on understanding real Cordyceps cultivation processes and production practices.' },
    { icon: Factory, title: 'Production Support', text: 'Guidance for building a structured production workflow with attention to process, hygiene and consistency.' },
    { icon: Sprout, title: 'Unit Setup & Consultation', text: 'Practical direction for planning cultivation spaces, equipment, workflow and day-to-day production requirements.' },
    { icon: Handshake, title: 'Buyback Guarantee', text: 'A business-support approach designed to connect cultivation with a defined market-support pathway.' },
  ];

  const reasons = [
    'Practical, production-focused approach',
    'Hands-on learning and guidance',
    'Structured production-unit setup support',
    'Quality-conscious cultivation practices',
    'Long-term support beyond training',
    'Buyback Guarantee',
  ];

  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="container about-hero-grid">
          <div className="about-hero-copy">
            <span className="section-tag">ABOUT SUMORIYA ORGANIC</span>
            <h1>Building Opportunities Through <span>Cordyceps Cultivation</span></h1>
            <p>Sumoriya Organic Agro Gold Pvt. Ltd. is focused on practical Cordyceps cultivation, production-unit development, training and long-term business support.</p>
            <button type="button" className="btn-pill btn-pill-orange" onClick={onOpenWhatsApp}>
              Talk to Our Team <ArrowRight size={17} />
            </button>
          </div>
          <div className="about-hero-panel">
            <div className="about-hero-orbit orbit-one" />
            <div className="about-hero-orbit orbit-two" />
            <div className="about-hero-card">
              <span>OUR FOCUS</span>
              <strong>Learn. Build. Grow.</strong>
              <p>Practical knowledge, controlled processes and meaningful business support.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding about-story">
        <div className="container about-two-col">
          <div>
            <span className="section-tag">WHO WE ARE</span>
            <h2 className="about-section-title">Making Cordyceps cultivation more <em>practical and structured.</em></h2>
          </div>
          <div className="about-story-copy">
            <p>Sumoriya Organic Agro Gold Pvt. Ltd. is working to make Cordyceps cultivation more practical, structured and accessible for aspiring entrepreneurs and growers across India.</p>
            <p>Our approach goes beyond simply teaching cultivation. We focus on practical knowledge, production support, unit setup guidance and long-term business opportunities so that growers can understand the complete journey — from culture preparation to harvesting and market support.</p>
            <p>We believe that successful cultivation is built on the right knowledge, controlled processes, quality practices and a reliable support system.</p>
          </div>
        </div>
      </section>

      <section className="about-areas section-padding">
        <div className="container">
          <div className="about-section-heading">
            <span className="section-tag">WHAT WE DO</span>
            <h2 className="about-section-title">Support across the cultivation journey.</h2>
          </div>
          <div className="about-area-grid">
            {areas.map(({ icon: Icon, title, text }) => (
              <article className="about-area-card" key={title}>
                <div className="about-icon"><Icon size={22} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-approach section-padding">
        <div className="container">
          <div className="about-section-heading centered">
            <span className="section-tag">OUR APPROACH</span>
            <h2 className="about-section-title">Learn <b>→</b> Build <b>→</b> Grow</h2>
            <p>We help you understand the process before you invest in building your production journey.</p>
          </div>
          <div className="about-steps">
            <div><span>01</span><h3>Learn</h3><p>Understand cultivation, process discipline and production requirements through practical learning.</p></div>
            <div><span>02</span><h3>Build</h3><p>Plan your unit, workflow and infrastructure with practical setup guidance.</p></div>
            <div><span>03</span><h3>Grow</h3><p>Move towards consistent production with ongoing support and market-oriented thinking.</p></div>
          </div>
        </div>
      </section>

      <section className="section-padding about-why">
        <div className="container about-two-col why-grid">
          <div>
            <span className="section-tag">WHY SUMORIYA ORGANIC</span>
            <h2 className="about-section-title">More than training. A practical path towards production.</h2>
            <p className="about-muted">Our focus is to help growers understand the complete journey instead of treating cultivation as a standalone skill.</p>
          </div>
          <div className="about-check-list">
            {reasons.map((reason) => <div key={reason}><CheckCircle2 size={19} /><span>{reason}</span></div>)}
          </div>
        </div>
      </section>

      <section className="about-vision section-padding">
        <div className="container vision-grid">
          <div className="vision-card">
            <span className="section-tag">OUR VISION</span>
            <h2>Building a stronger Cordyceps cultivation ecosystem in India.</h2>
            <p>To build a stronger and more sustainable Cordyceps cultivation ecosystem in India by combining practical knowledge, responsible production and meaningful business opportunities.</p>
          </div>
          <div className="mission-card">
            <span className="section-tag">OUR MISSION</span>
            <h2>Helping people move from learning to structured production.</h2>
            <p>To help individuals and entrepreneurs move from learning Cordyceps cultivation to building a structured production business with the right knowledge, infrastructure and support.</p>
          </div>
        </div>
      </section>

      <section className="about-final-cta">
        <div className="container">
          <div>
            <span className="section-tag">START YOUR JOURNEY</span>
            <h2>Ready to Explore Cordyceps Cultivation?</h2>
            <p>Whether you are starting from scratch or planning to expand your production, our team can help you understand the right path.</p>
          </div>
          <button type="button" className="btn-pill btn-pill-orange" onClick={onOpenWhatsApp}>Get Consultation <ArrowRight size={17} /></button>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
