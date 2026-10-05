import React from 'react';
import { ArrowRight, TrendingUp, ShieldCheck, Handshake } from 'lucide-react';

const BuybackSection = ({ onOpenWhatsApp }) => (
  <section id="buyback" className="section-padding buyback-section">
    <div className="container buyback-grid">
      <div>
        <img src="/buyback_original.png" alt="Buyback partnership agreement" className="buyback-image" loading="lazy" />
      </div>
      <div>
        <span className="section-tag">OUR KEY ADVANTAGE</span>
        <h2 className="buyback-title">Buyback <span>Guarantee</span></h2>
        <p className="buyback-copy">
          We support our trained clients and production partners with a structured buyback assurance, subject to agreed terms and eligibility, to help reduce market risk and support a stable business journey.
        </p>
        <div className="buyback-content-row">
          <button type="button" onClick={onOpenWhatsApp} className="btn-pill btn-pill-orange">Know More About Buyback <ArrowRight size={17} /></button>
          <div className="buyback-benefits">
            <div className="buyback-benefit"><TrendingUp size={19} color="var(--gold)" /> Stable Market Support</div>
            <div className="buyback-benefit"><ShieldCheck size={19} color="var(--gold)" /> Reduced Business Risk</div>
            <div className="buyback-benefit"><Handshake size={19} color="var(--gold)" /> Long-term Partnership</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BuybackSection;
