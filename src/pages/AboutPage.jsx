import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, Target, Eye, Award, Users } from 'lucide-react';
import './pages.css';

const AboutPage = ({ onOpenWhatsApp, onOpenContact }) => {
  return (
    <div className="inner-page-wrapper">
      <div className="inner-page-hero">
        <div className="container">
          <div className="inner-page-breadcrumb">
            <Link to="/">Home</Link>
            <span className="inner-page-breadcrumb-separator">/</span>
            <span>About Us</span>
          </div>
          <span className="inner-page-tag">Sumoriya Organic Agro Gold</span>
          <h1 className="inner-page-title">About Sumoriya Organic</h1>
          <p className="inner-page-subtitle">
            Pioneering premium Cordyceps Militaris cultivation in India through scientific lab design, practical grower training, and trusted buyback partnerships.
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
            <h2>Our Purpose & Credibility</h2>
            <p>
              Sumoriya Organic Agro Gold Private Limited is dedicated to empowering agri-entrepreneurs and growers across India with commercially viable Cordyceps mushroom production technology. We combine rigorous research, specialized lab equipment, and direct market linkage.
            </p>
          </div>

          <div className="inner-page-grid">
            <div className="inner-page-card">
              <div className="inner-page-card-icon">
                <Target size={24} />
              </div>
              <h3 className="inner-page-card-title">Our Vision</h3>
              <p className="inner-page-card-desc">
                Building a self-reliant and highly profitable medicinal mushroom cultivation ecosystem in India with world-class quality standards.
              </p>
            </div>

            <div className="inner-page-card">
              <div className="inner-page-card-icon">
                <Eye size={24} />
              </div>
              <h3 className="inner-page-card-title">Our Mission</h3>
              <p className="inner-page-card-desc">
                Providing transparent, end-to-end guidance from cleanroom setup to high-yield harvesting with guaranteed buyback agreements.
              </p>
            </div>

            <div className="inner-page-card">
              <div className="inner-page-card-icon">
                <Award size={24} />
              </div>
              <h3 className="inner-page-card-title">Quality & Standards</h3>
              <p className="inner-page-card-desc">
                Strict laboratory protocols, high cordycepin content strains, and continuous technological support for our partner growers.
              </p>
            </div>

            <div className="inner-page-card">
              <div className="inner-page-card-icon">
                <Users size={24} />
              </div>
              <h3 className="inner-page-card-title">Expert Team & Support</h3>
              <p className="inner-page-card-desc">
                Hands-on guidance by experienced mycologists and cultivation consultants at every phase of your unit's development.
              </p>
            </div>
          </div>

          <div className="inner-page-cta-box">
            <div className="inner-page-cta-text">
              <h3>Connect with Our Leadership & Team</h3>
              <p>Have questions about Sumoriya Organic or want to visit our production facility? Reach out to us today.</p>
            </div>
            <div className="inner-page-cta-actions">
              <button type="button" onClick={onOpenWhatsApp} className="btn-pill btn-pill-green">
                <MessageCircle size={18} color="#25d366" fill="#25d366" />
                Chat on WhatsApp
              </button>
              <button type="button" onClick={onOpenContact} className="btn-pill btn-pill-orange">
                <Phone size={18} />
                Request Callback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
