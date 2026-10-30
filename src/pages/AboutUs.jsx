import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Activity,
  Building2,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Eye,
  Target,
  PhoneCall
} from 'lucide-react';
import './AboutUs.css';

const AboutUs = ({ onOpenWhatsApp, onOpenContact }) => {
  useEffect(() => {
    document.title = 'About Sumoriya Organic | Cordyceps Cultivation Leaders in Jaipur & India';

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      'Learn about Sumoriya Organic Agro Gold Pvt. Ltd. based in Jaipur, Rajasthan. Leading Cordyceps militaris cultivation, practical lab training, production unit setup, and buyback support across India.';

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://sumoriyaorganic.com/about';

    // Structured Data for AboutPage
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'about-schema';
    schemaScript.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About Sumoriya Organic Agro Gold Pvt. Ltd.',
      url: 'https://sumoriyaorganic.com/about',
      description:
        'Leading Cordyceps militaris cultivation, practical lab training, production unit setup, and buyback support across Jaipur, Rajasthan and India.'
    });
    document.head.appendChild(schemaScript);

    return () => {
      const existing = document.getElementById('about-schema');
      if (existing) existing.remove();
    };
  }, []);

  const whatWeDoList = [
    {
      num: '01',
      title: 'Practical Training',
      desc: 'Hands-on learning focused on real cultivation processes and production practices.',
      icon: <GraduationCap size={24} />
    },
    {
      num: '02',
      title: 'Production Support',
      desc: 'Guidance for maintaining structured production processes and cultivation practices.',
      icon: <Activity size={24} />
    },
    {
      num: '03',
      title: 'Unit Setup & Consultation',
      desc: 'Support in planning and setting up a practical Cordyceps production unit.',
      icon: <Building2 size={24} />
    },
    {
      num: '04',
      title: 'Buyback Guarantee',
      desc: 'A key part of our business support model.',
      icon: <ShieldCheck size={24} />,
      highlight: true
    }
  ];

  const approachSteps = [
    {
      step: 'Step 01',
      name: 'Learn',
      desc: 'Understand Cordyceps cultivation through practical knowledge and training.'
    },
    {
      step: 'Step 02',
      name: 'Build',
      desc: 'Create a structured production setup with the right processes and infrastructure.'
    },
    {
      step: 'Step 03',
      name: 'Grow',
      desc: 'Develop production capability with ongoing guidance and business support.'
    }
  ];

  const whyChooseUs = [
    'Practical production-focused approach',
    'Hands-on learning',
    'Structured unit setup guidance',
    'Quality-conscious cultivation practices',
    'Long-term support',
    'Buyback Guarantee',
    'Support beyond training'
  ];

  return (
    <div className="about-us-page">
      {/* 1. Hero Section */}
      <section className="about-hero">
        <div className="about-container">
          <nav className="about-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="about-breadcrumb-sep">/</span>
            <span>About Us</span>
          </nav>
          <span className="about-eyebrow">Sumoriya Organic Agro Gold Pvt. Ltd.</span>
          <h1 className="about-hero-title">
            Building Opportunities Through Cordyceps Cultivation
          </h1>
          <p className="about-hero-text">
            Sumoriya Organic Agro Gold Pvt. Ltd. is focused on practical Cordyceps cultivation,
            production-unit development, training and long-term business support.
          </p>
          <button
            type="button"
            className="about-hero-btn"
            onClick={onOpenContact || onOpenWhatsApp}
          >
            <PhoneCall size={18} />
            Talk to Our Team
          </button>
        </div>
      </section>

      {/* 2. Who We Are Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="who-we-are-grid">
            <div className="who-we-are-badge-card">
              <span className="about-eyebrow">WHO WE ARE</span>
              <h2 className="who-badge-title">
                Practical, Structured & Accessible Cultivation
              </h2>
              <p className="who-badge-desc">
                Dedicated to empowering progressive growers, farmers, and agri-entrepreneurs with
                scientific protocols and dependable industry partnerships.
              </p>
              <div className="who-badge-stats">
                <div className="who-stat-item">
                  <h4>Pan-India</h4>
                  <p>Grower Support</p>
                </div>
                <div className="who-stat-item">
                  <h4>End-to-End</h4>
                  <p>Setup to Harvest</p>
                </div>
              </div>
            </div>

            <div className="who-we-are-text-block">
              <p>
                Sumoriya Organic Agro Gold Pvt. Ltd. is working to make Cordyceps cultivation more
                practical, structured and accessible for aspiring entrepreneurs and growers across India.
              </p>
              <p>
                Our approach goes beyond simply teaching cultivation. We focus on practical knowledge,
                production support, unit setup guidance and long-term business opportunities so that
                growers can understand the complete journey — from culture preparation to harvesting
                and market support.
              </p>
              <div className="who-callout-box">
                <p>
                  "We believe that successful cultivation is built on the right knowledge, controlled
                  processes, quality practices and a reliable support system."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What We Do Section */}
      <section className="about-section about-section-alt">
        <div className="about-container">
          <div className="about-section-header text-center">
            <span className="about-eyebrow">WHAT WE DO</span>
            <h2 className="about-section-title">
              Complete Cultivation & Production Solutions
            </h2>
            <p className="about-section-subtitle">
              Structured assistance designed to turn botanical learning into commercial production capability.
            </p>
          </div>

          <div className="what-we-do-grid">
            {whatWeDoList.map((item) => (
              <div
                key={item.num}
                className={`what-card ${item.highlight ? 'what-card-highlight' : ''}`}
              >
                <div className="what-card-num">{item.num}</div>
                <div className="what-card-icon">{item.icon}</div>
                <h3 className="what-card-title">{item.title}</h3>
                <p className="what-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Approach Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-section-header text-center">
            <span className="about-eyebrow">OUR APPROACH</span>
            <h2 className="about-section-title">Learn → Build → Grow</h2>
            <p className="about-section-subtitle">
              A transparent, progressive three-phase framework designed for long-term viability.
            </p>
          </div>

          <div className="approach-steps">
            {approachSteps.map((step, idx) => (
              <div key={step.name} className="approach-card">
                <div className="approach-step-header">
                  <span className="approach-step-badge">{step.step}</span>
                  {idx < 2 && <ArrowRight size={20} className="approach-step-arrow" />}
                </div>
                <h3 className="approach-title">{step.name}</h3>
                <p className="approach-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Sumoriya Organic Section */}
      <section className="about-section about-section-alt">
        <div className="about-container">
          <div className="about-section-header">
            <span className="about-eyebrow">WHY SUMORIYA ORGANIC</span>
            <h2 className="about-section-title">
              Built on Practical Industry Fundamentals
            </h2>
            <p className="about-section-subtitle">
              The foundational advantages that define our grower partnerships.
            </p>
          </div>

          <div className="why-grid">
            {whyChooseUs.map((point) => {
              const isBuyback = point === 'Buyback Guarantee';
              return (
                <div
                  key={point}
                  className={`why-item ${isBuyback ? 'why-item-highlight' : ''}`}
                >
                  <CheckCircle2 size={20} className="why-icon" />
                  <span className="why-text">{point}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Vision & Mission Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="vm-grid">
            <div className="vm-card vm-card-vision">
              <span className="vm-tag">
                <Eye size={16} />
                OUR VISION
              </span>
              <h3 className="vm-title">Sustainable Cultivation Ecosystem</h3>
              <p className="vm-text">
                "To build a stronger and more sustainable Cordyceps cultivation ecosystem in India by
                combining practical knowledge, responsible production and meaningful business
                opportunities."
              </p>
            </div>

            <div className="vm-card vm-card-mission">
              <span className="vm-tag">
                <Target size={16} />
                OUR MISSION
              </span>
              <h3 className="vm-title">Structured Production Businesses</h3>
              <p className="vm-text">
                "To help individuals and entrepreneurs move from learning Cordyceps cultivation to
                building a structured production business with the right knowledge, infrastructure
                and support."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Final CTA Section */}
      <section className="about-cta-section">
        <div className="about-container">
          <div className="about-cta-box">
            <div className="about-cta-content">
              <h2>Ready to Explore Cordyceps Cultivation?</h2>
              <p>
                Whether you are starting from scratch or planning to expand your production, our
                team can help you understand the right path.
              </p>
            </div>
            <div className="about-cta-action">
              <button
                type="button"
                className="about-cta-btn"
                onClick={onOpenContact || onOpenWhatsApp}
              >
                Get Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
