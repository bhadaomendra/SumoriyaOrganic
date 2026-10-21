import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, Sparkles, Activity, ShieldCheck, Layers } from 'lucide-react';
import './pages.css';

const CordycepsPage = ({ onOpenWhatsApp, onOpenContact }) => {
  return (
    <div className="inner-page-wrapper">
      <div className="inner-page-hero">
        <div className="container">
          <div className="inner-page-breadcrumb">
            <Link to="/">Home</Link>
            <span className="inner-page-breadcrumb-separator">/</span>
            <span>Cordyceps Militaris</span>
          </div>
          <span className="inner-page-tag">Medicinal Mushroom Science</span>
          <h1 className="inner-page-title">Cordyceps Militaris</h1>
          <p className="inner-page-subtitle">
            Understand the biology, therapeutic compounds, commercial market potential, and clinical grade cultivation of Cordyceps Militaris.
          </p>
        </div>
      </div>

      <div className="inner-page-content">
        <div className="container">
          <div className="inner-page-status-badge">
            <span className="inner-page-status-dot"></span>
            <span>Page Scaffolded & Ready for Content</span>
          </div>

          <div className="inner-page-intro-box">
            <h2>The Gold Standard in Medicinal Mushrooms</h2>
            <p>
              Cordyceps Militaris is revered worldwide for its high concentration of bio-active Cordycepin and Adenosine. Cultivated under precise laboratory conditions without wild harvesting, it delivers consistent medicinal potency and lucrative commercial yields.
            </p>
          </div>

          <div className="inner-page-grid">
            <div className="inner-page-card">
              <div className="inner-page-card-icon">
                <Sparkles size={24} />
              </div>
              <h3 className="inner-page-card-title">Bio-active Cordycepin</h3>
              <p className="inner-page-card-desc">
                High potency cordycepin and adenosine compounds providing cellular energy (ATP), immunity modulation, and respiratory health support.
              </p>
            </div>

            <div className="inner-page-card">
              <div className="inner-page-card-icon">
                <Activity size={24} />
              </div>
              <h3 className="inner-page-card-title">Health Benefits & Uses</h3>
              <p className="inner-page-card-desc">
                Widely applied in athletic stamina formulations, anti-aging nutraceuticals, lung wellness, and modern dietary supplements.
              </p>
            </div>

            <div className="inner-page-card">
              <div className="inner-page-card-icon">
                <Layers size={24} />
              </div>
              <h3 className="inner-page-card-title">Indoor Cultivation Cycle</h3>
              <p className="inner-page-card-desc">
                Controlled 60–75 day growing cycle on sterile grain substrate under regulated temperature (18–22°C), humidity (85–90%), and light spectrum.
              </p>
            </div>

            <div className="inner-page-card">
              <div className="inner-page-card-icon">
                <ShieldCheck size={24} />
              </div>
              <h3 className="inner-page-card-title">Market Demand & Grading</h3>
              <p className="inner-page-card-desc">
                Graded by fruit body thickness, color intensity, moisture levels (under 5%), and active compound lab assays for maximum value.
              </p>
            </div>
          </div>

          <div className="inner-page-cta-box">
            <div className="inner-page-cta-text">
              <h3>Interested in Cultivating Cordyceps?</h3>
              <p>Get the complete technical dossier, chemical profile, and production feasibility report directly from our lab team.</p>
            </div>
            <div className="inner-page-cta-actions">
              <button type="button" onClick={onOpenWhatsApp} className="btn-pill btn-pill-green">
                <MessageCircle size={18} color="#25d366" fill="#25d366" />
                Ask Lab Specialist
              </button>
              <button type="button" onClick={onOpenContact} className="btn-pill btn-pill-orange">
                <Phone size={18} />
                Get Information
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CordycepsPage;
