import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, Wrench, ThermometerSnowflake, Settings, HelpCircle } from 'lucide-react';
import './pages.css';

const ProductionSetupPage = ({ onOpenWhatsApp, onOpenContact }) => {
  return (
    <div className="inner-page-wrapper">
      <div className="inner-page-hero">
        <div className="container">
          <div className="inner-page-breadcrumb">
            <Link to="/">Home</Link>
            <span className="inner-page-breadcrumb-separator">/</span>
            <span>Production Setup</span>
          </div>
          <span className="inner-page-tag">Turnkey Commercial Facilities</span>
          <h1 className="inner-page-title">Production Unit Setup</h1>
          <p className="inner-page-subtitle">
            Turnkey commercial laboratory infrastructure, HVAC environmental chambers, specialized autoclaves, and scalable rack design engineered for profitable Cordyceps yields.
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
            <h2>Scientific Turnkey Lab Engineering</h2>
            <p>
              Growing Cordyceps Militaris at scale requires strict environmental discipline. We design, supply, install, and commission complete units tailored to your space—from a 150 sq.ft. micro-unit to multi-thousand jar industrial facilities.
            </p>
          </div>

          <div className="inner-page-grid">
            <div className="inner-page-card">
              <div className="inner-page-card-icon">
                <ThermometerSnowflake size={24} />
              </div>
              <h3 className="inner-page-card-title">Climate & HVAC Systems</h3>
              <p className="inner-page-card-desc">
                Precision refrigeration, ultrasonic humidification, automatic fresh-air dampers, and CO2 monitoring to maintain ideal mushroom fruiting environments.
              </p>
            </div>

            <div className="inner-page-card">
              <div className="inner-page-card-icon">
                <Settings size={24} />
              </div>
              <h3 className="inner-page-card-title">Laboratory Equipment</h3>
              <p className="inner-page-card-desc">
                Certified Class II Laminar Flow benches, vertical industrial autoclaves, jar shakers, and custom spectrum photoperiod LED lighting racks.
              </p>
            </div>

            <div className="inner-page-card">
              <div className="inner-page-card-icon">
                <Wrench size={24} />
              </div>
              <h3 className="inner-page-card-title">Cleanroom Layout & Civil Plan</h3>
              <p className="inner-page-card-desc">
                Air-lock entry design, epoxy flooring specs, antimicrobial PUF paneling, and unidirectional workflow to eliminate contamination risks.
              </p>
            </div>

            <div className="inner-page-card">
              <div className="inner-page-card-icon">
                <HelpCircle size={24} />
              </div>
              <h3 className="inner-page-card-title">On-Site Commissioning</h3>
              <p className="inner-page-card-desc">
                Our technicians visit your site to supervise machine setup, test environmental parameters, run pilot batches, and train your staff.
              </p>
            </div>
          </div>

          <div className="inner-page-cta-box">
            <div className="inner-page-cta-text">
              <h3>Plan Your Commercial Unit Setup</h3>
              <p>Share your room dimensions or budget, and our engineering team will provide a customized layout blueprint and equipment estimate.</p>
            </div>
            <div className="inner-page-cta-actions">
              <button type="button" onClick={onOpenWhatsApp} className="btn-pill btn-pill-green">
                <MessageCircle size={18} color="#25d366" fill="#25d366" />
                Discuss Setup on WhatsApp
              </button>
              <button type="button" onClick={onOpenContact} className="btn-pill btn-pill-orange">
                <Phone size={18} />
                Request Facility Blueprint
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductionSetupPage;
