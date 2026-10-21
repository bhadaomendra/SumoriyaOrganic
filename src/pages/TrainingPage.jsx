import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, GraduationCap, BookOpen, UserCheck, Headphones } from 'lucide-react';
import './pages.css';

const TrainingPage = ({ onOpenWhatsApp, onOpenContact }) => {
  return (
    <div className="inner-page-wrapper">
      <div className="inner-page-hero">
        <div className="container">
          <div className="inner-page-breadcrumb">
            <Link to="/">Home</Link>
            <span className="inner-page-breadcrumb-separator">/</span>
            <span>Training & Courses</span>
          </div>
          <span className="inner-page-tag">Practical Grower Education</span>
          <h1 className="inner-page-title">Training & Courses</h1>
          <p className="inner-page-subtitle">
            Comprehensive hands-on training on Cordyceps Militaris cultivation, liquid culture propagation, substrate preparation, harvest protocols, and commercial unit management.
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
            <h2>Practical, Hands-on Cultivation Mastery</h2>
            <p>
              Our training program bridges the gap between academic mycology and practical commercial success. Each grower learns real-world aseptic techniques inside actual working laminar air flows and growing chambers.
            </p>
          </div>

          <div className="inner-page-grid">
            <div className="inner-page-card">
              <div className="inner-page-card-icon">
                <BookOpen size={24} />
              </div>
              <h3 className="inner-page-card-title">Training Curriculum</h3>
              <p className="inner-page-card-desc">
                Sterilization chemistry, nutrient broth formulation, inoculation protocols, environmental control systems, drying, and packaging standards.
              </p>
            </div>

            <div className="inner-page-card">
              <div className="inner-page-card-icon">
                <GraduationCap size={24} />
              </div>
              <h3 className="inner-page-card-title">Lab Practical Experience</h3>
              <p className="inner-page-card-desc">
                Work directly with master cultures, pressure vessels, autoclaves, and cleanrooms under the watchful eye of senior mycologists.
              </p>
            </div>

            <div className="inner-page-card">
              <div className="inner-page-card-icon">
                <UserCheck size={24} />
              </div>
              <h3 className="inner-page-card-title">Who Can Join?</h3>
              <p className="inner-page-card-desc">
                Ideal for progressive farmers, agri-business entrepreneurs, students, professionals seeking a commercial second income stream.
              </p>
            </div>

            <div className="inner-page-card">
              <div className="inner-page-card-icon">
                <Headphones size={24} />
              </div>
              <h3 className="inner-page-card-title">Lifetime Post-Training Support</h3>
              <p className="inner-page-card-desc">
                Ongoing technical guidance, troubleshooting contamination via video call, culture refreshers, and batch quality reviews.
              </p>
            </div>
          </div>

          <div className="inner-page-cta-box">
            <div className="inner-page-cta-text">
              <h3>Next Batch Enrollment & Syllabus</h3>
              <p>Seats are limited per batch to ensure individual workstation access. Check upcoming dates and fees.</p>
            </div>
            <div className="inner-page-cta-actions">
              <button type="button" onClick={onOpenWhatsApp} className="btn-pill btn-pill-green">
                <MessageCircle size={18} color="#25d366" fill="#25d366" />
                Enroll via WhatsApp
              </button>
              <button type="button" onClick={onOpenContact} className="btn-pill btn-pill-orange">
                <Phone size={18} />
                Get Syllabus
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingPage;
