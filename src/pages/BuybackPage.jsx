import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, FileCheck, DollarSign, Handshake, ShieldAlert } from 'lucide-react';
import './pages.css';

const BuybackPage = ({ onOpenWhatsApp, onOpenContact }) => {
  return (
    <div className="inner-page-wrapper">
      <div className="inner-page-hero">
        <div className="container">
          <div className="inner-page-breadcrumb">
            <Link to="/">Home</Link>
            <span className="inner-page-breadcrumb-separator">/</span>
            <span>Buyback Guarantee</span>
          </div>
          <span className="inner-page-tag">Risk-Free Commercial Model</span>
          <h1 className="inner-page-title">Buyback Guarantee</h1>
          <p className="inner-page-subtitle">
            Secure, contract-backed harvest buyback ensuring guaranteed market access, predictable cash flows, and transparent grade-based pricing for partner growers.
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
            <h2>Grow with Confidence: Guaranteed Market Linkage</h2>
            <p>
              The biggest hesitation for new mushroom growers is marketing the harvest. Sumoriya Organic solves this completely by signing formal, stamp-paper backed buyback contracts before your production begins.
            </p>
          </div>

          <div className="inner-page-grid">
            <div className="inner-page-card">
              <div className="inner-page-card-icon">
                <FileCheck size={24} />
              </div>
              <h3 className="inner-page-card-title">Legal Agreement</h3>
              <p className="inner-page-card-desc">
                Clear contractual commitment on quantity, harvest cycles, testing parameters, and minimum guaranteed floor prices.
              </p>
            </div>

            <div className="inner-page-card">
              <div className="inner-page-card-icon">
                <DollarSign size={24} />
              </div>
              <h3 className="inner-page-card-title">Transparent Pricing</h3>
              <p className="inner-page-card-desc">
                Tiered pricing structure based on dry weight, moisture content, and cordycepin assay percentages with no hidden cuts.
              </p>
            </div>

            <div className="inner-page-card">
              <div className="inner-page-card-icon">
                <Handshake size={24} />
              </div>
              <h3 className="inner-page-card-title">Prompt Payment Settlement</h3>
              <p className="inner-page-card-desc">
                Direct bank transfer payouts processed upon batch verification and lab quality testing within stipulated turnaround times.
              </p>
            </div>

            <div className="inner-page-card">
              <div className="inner-page-card-icon">
                <ShieldAlert size={24} />
              </div>
              <h3 className="inner-page-card-title">Zero Marketing Hassle</h3>
              <p className="inner-page-card-desc">
                Focus 100% of your energy on growing healthy batches while Sumoriya Organic handles nationwide pharma and consumer market distribution.
              </p>
            </div>
          </div>

          <div className="inner-page-cta-box">
            <div className="inner-page-cta-text">
              <h3>Review Our Sample Buyback Agreement</h3>
              <p>Get the terms, conditions, quality parameters, and price chart sent directly to your WhatsApp or email.</p>
            </div>
            <div className="inner-page-cta-actions">
              <button type="button" onClick={onOpenWhatsApp} className="btn-pill btn-pill-green">
                <MessageCircle size={18} color="#25d366" fill="#25d366" />
                Request Agreement on WhatsApp
              </button>
              <button type="button" onClick={onOpenContact} className="btn-pill btn-pill-orange">
                <Phone size={18} />
                Speak to Buyback Desk
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuybackPage;
