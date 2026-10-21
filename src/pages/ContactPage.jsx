import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import './pages.css';

const ContactPage = ({ onOpenWhatsApp }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    interest: 'Training & Setup',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="inner-page-wrapper">
      <div className="inner-page-hero">
        <div className="container">
          <div className="inner-page-breadcrumb">
            <Link to="/">Home</Link>
            <span className="inner-page-breadcrumb-separator">/</span>
            <span>Contact Us</span>
          </div>
          <span className="inner-page-tag">Get In Touch</span>
          <h1 className="inner-page-title">Contact Sumoriya Organic</h1>
          <p className="inner-page-subtitle">
            Have questions about training dates, unit setup feasibility, or visiting our lab? Connect directly with our team in Jaipur.
          </p>
        </div>
      </div>

      <div className="inner-page-content">
        <div className="container">
          <div className="inner-page-status-badge">
            <span className="inner-page-status-dot"></span>
            <span>Page Scaffolded & Ready for Content</span>
          </div>

          <div className="inner-page-grid" style={{ marginBottom: '32px' }}>
            <div className="inner-page-card">
              <div className="inner-page-card-icon">
                <Phone size={24} />
              </div>
              <h3 className="inner-page-card-title">Call Us Directly</h3>
              <p className="inner-page-card-desc" style={{ marginBottom: '14px' }}>
                Speak with our cultivation counselors between 9:00 AM – 7:00 PM (Mon–Sat).
              </p>
              <a href="tel:+919358463311" style={{ color: 'var(--orange)', fontWeight: 700, fontSize: '1.1rem' }}>
                +91 93584 63311
              </a>
            </div>

            <div className="inner-page-card">
              <div className="inner-page-card-icon">
                <MessageCircle size={24} />
              </div>
              <h3 className="inner-page-card-title">WhatsApp Support</h3>
              <p className="inner-page-card-desc" style={{ marginBottom: '14px' }}>
                Instant inquiry replies, photos, brochures, and live training batch updates.
              </p>
              <button
                type="button"
                onClick={onOpenWhatsApp}
                style={{ color: 'var(--green-800)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <span>Chat on WhatsApp</span> →
              </button>
            </div>

            <div className="inner-page-card">
              <div className="inner-page-card-icon">
                <Mail size={24} />
              </div>
              <h3 className="inner-page-card-title">Official Email</h3>
              <p className="inner-page-card-desc" style={{ marginBottom: '14px' }}>
                For business partnerships, institutional tie-ups, and corporate inquiries.
              </p>
              <a href="mailto:sumoriyaorganic@gmail.com" style={{ color: 'var(--orange)', fontWeight: 700 }}>
                sumoriyaorganic@gmail.com
              </a>
            </div>

            <div className="inner-page-card">
              <div className="inner-page-card-icon">
                <MapPin size={24} />
              </div>
              <h3 className="inner-page-card-title">Location & Reach</h3>
              <p className="inner-page-card-desc">
                Sumoriya Organic Agro Gold Private Limited<br />
                Jaipur, Rajasthan, India<br />
                Pan-India Setup & Supply
              </p>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="inner-page-intro-box">
            <h2>Send Us an Enquiry Message</h2>
            <p style={{ marginBottom: '24px' }}>
              Fill in your details below and our team will get in touch with complete information brochures and cost estimates.
            </p>

            {formSubmitted ? (
              <div style={{ background: 'rgba(37, 211, 102, 0.1)', border: '1px solid #25d366', padding: '24px', borderRadius: '12px', textAlign: 'center', color: 'var(--green-900)' }}>
                <CheckCircle size={36} color="#25d366" style={{ margin: '0 auto 12px' }} />
                <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Thank You! Your Enquiry is Received.</h3>
                <p>Our senior consultant will contact you on <strong>{formData.phone || 'your phone number'}</strong> shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px', color: 'var(--ink)' }}>Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1px solid var(--line)', background: 'var(--white)' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px', color: 'var(--ink)' }}>WhatsApp / Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1px solid var(--line)', background: 'var(--white)' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px', color: 'var(--ink)' }}>City / State</label>
                  <input
                    type="text"
                    placeholder="e.g. Jaipur, Rajasthan"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1px solid var(--line)', background: 'var(--white)' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px', color: 'var(--ink)' }}>Area of Interest</label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1px solid var(--line)', background: 'var(--white)' }}
                  >
                    <option value="Training & Setup">Training + Production Unit Setup</option>
                    <option value="Training Only">Training & Courses Only</option>
                    <option value="Setup Only">Lab Setup & Equipment Only</option>
                    <option value="Buyback Details">Buyback Terms & Guarantee</option>
                    <option value="Other Inquiries">Other Inquiries</option>
                  </select>
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px', color: 'var(--ink)' }}>Message or Specific Requirements</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your room size, background, or any specific questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1px solid var(--line)', background: 'var(--white)' }}
                  ></textarea>
                </div>
                <div style={{ gridColumn: '1 / -1', marginTop: '8px' }}>
                  <button type="submit" className="btn-pill btn-pill-orange">
                    <Send size={18} />
                    Submit Enquiry Now
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
