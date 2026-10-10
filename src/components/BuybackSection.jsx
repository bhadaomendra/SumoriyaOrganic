import React from 'react';
import { ArrowRight, ChartColumnIncreasing, ShieldCheck, Sprout } from 'lucide-react';

/*
  Banner photo lives at /public/buyback/banner.jpg.
  To change it, replace that file with the same name
  (wide image, 1600px or larger; keep the handshake / seal on the LEFT
  side because the right edge fades into the green panel).
*/
const benefits = [
  { icon: ChartColumnIncreasing, label: 'Stable Market Support' },
  { icon: ShieldCheck, label: 'Reduced Business Risk' },
  { icon: Sprout, label: 'Long-term Partnership' }
];

const BuybackSection = ({ onOpenWhatsApp }) => (
  <section id="buyback" className="buyback-section">
    <div className="container">
      <div className="buyback-card">
        <div className="buyback-photo">
          <img
            src="/buyback/banner.jpg"
            alt="Handshake over a buyback guarantee agreement"
            width="1376"
            height="768"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="buyback-text">
          <span className="section-tag">OUR KEY ADVANTAGE</span>
          <h2 className="buyback-title">Buyback <span>Guarantee</span></h2>
          <p className="buyback-copy">
            We support our trained clients and production partners with a structured buyback assurance (as per agreement terms) to help reduce market risk and ensure a stable business journey.
          </p>
          <button type="button" onClick={onOpenWhatsApp} className="btn-pill btn-pill-orange">
            Know More About Buyback <ArrowRight size={17} />
          </button>
        </div>

        <ul className="buyback-benefits">
          {benefits.map(({ icon: Icon, label }) => (
            <li className="buyback-benefit" key={label}>
              <Icon size={30} strokeWidth={1.8} color="var(--gold)" aria-hidden="true" />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default BuybackSection;
