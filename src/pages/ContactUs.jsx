import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  GraduationCap,
  Building2,
  Workflow,
  ShieldCheck,
  AlertCircle,
  Compass,
  Sparkles,
  CalendarCheck
} from 'lucide-react';
import './ContactUs.css';

const ContactUs = ({ onOpenWhatsApp }) => {
  const location = useLocation();
  const [openFaq, setOpenFaq] = useState(0);
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    interest: 'Cordyceps Cultivation Training',
    status: 'Just Exploring',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  // Handle URL Query Params and Hash Scrolling (e.g. ?interest=Production+Unit+Setup#contact-form)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const queryInterest = params.get('interest');
    if (queryInterest) {
      setFormState((prev) => ({ ...prev, interest: queryInterest }));
    }

    if (location.hash === '#contact-form') {
      setTimeout(() => {
        const formElem = document.getElementById('contact-form');
        if (formElem) {
          formElem.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  }, [location]);

  // Dynamic SEO Meta & Canonical Management
  useEffect(() => {
    document.title = 'Contact Sumoriya Organic | Cordyceps Training Center in Jaipur & India';

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      'Contact Sumoriya Organic Agro Gold Pvt. Ltd. in Jaipur, Rajasthan. Enquire about upcoming 2-day Cordyceps cultivation training batches, lab setup consultation & buyback guarantee across India.';

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://sumoriyaorganic.com/contact';

    // Structured Data (ContactPage, Organization & FAQPage Schema)
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'contact-schema';
    schemaScript.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ContactPage',
          name: 'Contact Sumoriya Organic',
          url: 'https://sumoriyaorganic.com/contact',
          description:
            'Contact Sumoriya Organic for Cordyceps cultivation training, production unit setup, cultivation support and Buyback Guarantee.'
        },
        {
          '@type': 'Organization',
          name: 'Sumoriya Organic Agro Gold Pvt. Ltd.',
          url: 'https://sumoriyaorganic.com',
          logo: 'https://sumoriyaorganic.com/sumoriya-official-logo.png',
          telephone: '+919358463311',
          email: 'sumoriyaorganic@gmail.com',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Jaipur',
            addressRegion: 'Rajasthan',
            addressCountry: 'IN'
          }
        },
        {
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Can I contact Sumoriya Organic for Cordyceps training?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. You can contact us for information about our 2-day Cordyceps cultivation training program, upcoming batches and available training formats.'
              }
            },
            {
              '@type': 'Question',
              name: 'Can you help me plan a Cordyceps production unit?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. You can discuss your available space, production plans and requirements with our team for production unit setup guidance.'
              }
            },
            {
              '@type': 'Question',
              name: 'I already have a production unit. Can I contact you for support?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Existing growers can contact us to discuss their current setup and production-related requirements.'
              }
            },
            {
              '@type': 'Question',
              name: 'Does Sumoriya Organic provide a Buyback Guarantee?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Sumoriya Organic provides a Buyback Guarantee for eligible Cordyceps production, subject to applicable quality, quantity and commercial terms.'
              }
            },
            {
              '@type': 'Question',
              name: 'Can beginners contact you?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Absolutely. If you are exploring Cordyceps cultivation for the first time, you can contact our team to understand the training and production journey.'
              }
            },
            {
              '@type': 'Question',
              name: 'How can I enquire about training fees?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Contact our team for current training fees and upcoming batch details.'
              }
            }
          ]
        }
      ]
    });
    document.head.appendChild(schemaScript);

    return () => {
      const existingSchema = document.getElementById('contact-schema');
      if (existingSchema) existingSchema.remove();
    };
  }, []);

  const scrollToForm = (preselectInterest = null) => {
    if (preselectInterest) {
      setFormState((prev) => ({ ...prev, interest: preselectInterest }));
    }
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (formError) setFormError('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!formState.name.trim() || !formState.phone.trim() || !formState.message.trim()) {
      setFormError('Please fill in all required fields (Name, Mobile Number, Message).');
      return;
    }

    setFormSubmitted(true);
    setFormError('');
  };

  const openWhatsAppWithForm = () => {
    const text = encodeURIComponent(
      `Hello Sumoriya Organic!
Name: ${formState.name}
Phone: ${formState.phone}
Interested in: ${formState.interest}
Current Status: ${formState.status}
Message: ${formState.message}`
    );
    window.open(`https://wa.me/919358463311?text=${text}`, '_blank');
  };

  const faqs = [
    {
      q: 'Can I contact Sumoriya Organic for Cordyceps training?',
      a: 'Yes. You can contact us for information about our 2-day Cordyceps cultivation training program, upcoming batches and available training formats.'
    },
    {
      q: 'Can you help me plan a Cordyceps production unit?',
      a: 'Yes. You can discuss your available space, production plans and requirements with our team for production unit setup guidance.'
    },
    {
      q: 'I already have a production unit. Can I contact you for support?',
      a: 'Yes. Existing growers can contact us to discuss their current setup and production-related requirements.'
    },
    {
      q: 'Does Sumoriya Organic provide a Buyback Guarantee?',
      a: 'Yes. Sumoriya Organic provides a Buyback Guarantee for eligible Cordyceps production, subject to applicable quality, quantity and commercial terms.'
    },
    {
      q: 'Can beginners contact you?',
      a: 'Absolutely. If you are exploring Cordyceps cultivation for the first time, you can contact our team to understand the training and production journey.'
    },
    {
      q: 'How can I enquire about training fees?',
      a: 'Contact our team for current training fees and upcoming batch details.'
    }
  ];

  const journeySteps = [
    { num: '01', title: 'Explore', desc: 'Discover Cordyceps potential' },
    { num: '02', title: 'Learn', desc: '2-Day Practical Training' },
    { num: '03', title: 'Plan', desc: 'Facility layout & zoning' },
    { num: '04', title: 'Setup', desc: 'Equipment & cleanroom' },
    { num: '05', title: 'Produce', desc: 'Controlled crop cycles' },
    { num: '06', title: 'Grow', desc: 'Structured buyback support' }
  ];

  return (
    <div className="contact-page">
      {/* Breadcrumb Navigation */}
      <nav className="contact-breadcrumb" aria-label="Breadcrumb">
        <div className="container">
          <ol className="contact-breadcrumb-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="contact-breadcrumb-sep">/</li>
            <li aria-current="page">Contact Us</li>
          </ol>
        </div>
      </nav>

      {/* SECTION 1 — HERO */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content text-center">
            <span className="contact-badge">
              <Sparkles size={15} />
              CONNECT WITH SUMORIYA ORGANIC
            </span>
            <h1 className="contact-hero-title">
              Let’s Build Your Cordyceps Journey Together
            </h1>
            <p className="contact-hero-subheading">
              Connect with Sumoriya Organic for Training, Production Unit Setup, Cultivation Support and Buyback Guarantee.
            </p>
            <p className="contact-hero-desc">
              Whether you are exploring Cordyceps cultivation for the first time, planning a production unit, or looking for production support, our team is here to understand your requirements and guide you towards the right next step.
            </p>
            <div className="contact-hero-actions">
              <button
                type="button"
                onClick={() => scrollToForm()}
                className="contact-btn contact-btn-primary"
              >
                <Send size={18} />
                Send Your Enquiry
              </button>
              <button
                type="button"
                onClick={onOpenWhatsApp}
                className="contact-btn contact-btn-secondary"
              >
                <MessageCircle size={18} color="#25d366" />
                WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — HOW CAN WE HELP YOU? */}
      <section className="contact-section contact-services-section">
        <div className="container">
          <div className="contact-section-header text-center">
            <span className="contact-section-tag">AREAS OF SUPPORT</span>
            <h2 className="contact-section-title">How Can We Help You?</h2>
            <p className="contact-section-subtitle">
              Select the area you would like to explore or discuss with our technical team.
            </p>
          </div>

          <div className="contact-services-grid">
            {/* Card 1: Training */}
            <div className="contact-service-card">
              <div className="contact-service-icon-box">
                <GraduationCap size={24} />
              </div>
              <h3 className="contact-service-title">Cordyceps Training</h3>
              <p className="contact-service-desc">
                Learn about our 2-day Cordyceps militaris cultivation training program through theory and practical learning.
              </p>
              <Link
                to="/cordyceps-cultivation-training"
                className="contact-service-link"
              >
                <span>Explore Training</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Card 2: Production Setup */}
            <div className="contact-service-card">
              <div className="contact-service-icon-box">
                <Building2 size={24} />
              </div>
              <h3 className="contact-service-title">Production Unit Setup</h3>
              <p className="contact-service-desc">
                Planning a new Cordyceps production unit or looking to improve an existing setup? Discuss your requirements with us.
              </p>
              <Link
                to="/production-unit-setup"
                className="contact-service-link"
              >
                <span>Discuss Unit Setup</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Card 3: Cultivation Support */}
            <div className="contact-service-card">
              <div className="contact-service-icon-box">
                <Workflow size={24} />
              </div>
              <h3 className="contact-service-title">Cultivation & Production Support</h3>
              <p className="contact-service-desc">
                Get guidance related to cultivation processes, production workflow and operational requirements.
              </p>
              <button
                type="button"
                onClick={() => scrollToForm('Cultivation & Production Support')}
                className="contact-service-link-btn"
              >
                <span>Talk to Our Team</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Card 4: Buyback Guarantee */}
            <div className="contact-service-card">
              <div className="contact-service-icon-box">
                <ShieldCheck size={24} />
              </div>
              <h3 className="contact-service-title">Buyback Guarantee</h3>
              <p className="contact-service-desc">
                Learn more about Sumoriya Organic's Buyback Guarantee for eligible Cordyceps production.
              </p>
              <button
                type="button"
                onClick={() => scrollToForm('Buyback Guarantee')}
                className="contact-service-link-btn"
              >
                <span>Discuss Buyback</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — CONTACT FORM */}
      <section id="contact-form" className="contact-section contact-form-section">
        <div className="container">
          <div className="contact-form-wrapper">
            <div className="contact-form-header text-center">
              <span className="contact-section-tag">ENQUIRY FORM</span>
              <h2 className="contact-section-title">Send Us Your Requirement</h2>
              <div className="contact-gold-divider mx-auto"></div>
              <p className="contact-form-intro">
                Tell us a little about your requirement. Our team will review your enquiry and get back to you.
              </p>
            </div>

            {formSubmitted ? (
              <div className="contact-form-success">
                <CheckCircle2 size={54} className="contact-success-icon" />
                <h3 className="contact-success-title">Thank You, {formState.name}!</h3>
                <p className="contact-success-desc">
                  Your enquiry regarding <strong>{formState.interest}</strong> has been received. Our senior advisor will connect with you at <strong>{formState.phone}</strong> shortly.
                </p>
                <div className="contact-success-actions">
                  <button
                    type="button"
                    onClick={openWhatsAppWithForm}
                    className="contact-btn contact-btn-primary"
                  >
                    <MessageCircle size={18} />
                    Continue on WhatsApp Now
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormState({
                        name: '',
                        phone: '',
                        email: '',
                        interest: 'Cordyceps Cultivation Training',
                        status: 'Just Exploring',
                        message: ''
                      });
                    }}
                    className="contact-btn contact-btn-secondary"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="contact-form-box" noValidate>
                {formError && (
                  <div className="contact-form-error-alert" role="alert">
                    <AlertCircle size={18} />
                    <span>{formError}</span>
                  </div>
                )}

                <div className="contact-form-grid">
                  {/* Field 1: Full Name */}
                  <div className="contact-field-group">
                    <label htmlFor="fullName" className="contact-label">
                      Full Name <span className="required-star">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="name"
                      required
                      placeholder="Enter your name"
                      value={formState.name}
                      onChange={handleFormChange}
                      className="contact-input"
                    />
                  </div>

                  {/* Field 2: Mobile Number */}
                  <div className="contact-field-group">
                    <label htmlFor="mobileNumber" className="contact-label">
                      Mobile Number <span className="required-star">*</span>
                    </label>
                    <input
                      type="tel"
                      id="mobileNumber"
                      name="phone"
                      required
                      placeholder="Enter your mobile number"
                      value={formState.phone}
                      onChange={handleFormChange}
                      className="contact-input"
                    />
                  </div>

                  {/* Field 3: Email Address */}
                  <div className="contact-field-group">
                    <label htmlFor="emailAddress" className="contact-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="emailAddress"
                      name="email"
                      placeholder="Enter your email address"
                      value={formState.email}
                      onChange={handleFormChange}
                      className="contact-input"
                    />
                  </div>

                  {/* Field 4: Interest */}
                  <div className="contact-field-group">
                    <label htmlFor="interest" className="contact-label">
                      I am interested in <span className="required-star">*</span>
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formState.interest}
                      onChange={handleFormChange}
                      className="contact-select"
                    >
                      <option value="Cordyceps Cultivation Training">Cordyceps Cultivation Training</option>
                      <option value="Production Unit Setup">Production Unit Setup</option>
                      <option value="Existing Unit Improvement">Existing Unit Improvement</option>
                      <option value="Cultivation & Production Support">Cultivation & Production Support</option>
                      <option value="Buyback Guarantee">Buyback Guarantee</option>
                      <option value="General Enquiry">General Enquiry</option>
                    </select>
                  </div>

                  {/* Field 5: Current Status */}
                  <div className="contact-field-group full-width">
                    <label htmlFor="currentStatus" className="contact-label">
                      Current Status
                    </label>
                    <select
                      id="currentStatus"
                      name="status"
                      value={formState.status}
                      onChange={handleFormChange}
                      className="contact-select"
                    >
                      <option value="Just Exploring">Just Exploring</option>
                      <option value="Planning to Start">Planning to Start</option>
                      <option value="Already Growing">Already Growing</option>
                      <option value="Existing Production Unit">Existing Production Unit</option>
                      <option value="Looking to Expand">Looking to Expand</option>
                    </select>
                  </div>

                  {/* Field 6: Message */}
                  <div className="contact-field-group full-width">
                    <label htmlFor="message" className="contact-label">
                      Message / Requirement <span className="required-star">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell us about your requirement, available space or any questions you have."
                      value={formState.message}
                      onChange={handleFormChange}
                      className="contact-textarea"
                    />
                  </div>
                </div>

                <div className="contact-form-submit-wrapper">
                  <button type="submit" className="contact-btn contact-btn-gold">
                    <Send size={18} />
                    <span>Send Enquiry</span>
                  </button>
                  <p className="contact-form-privacy-note">
                    Your details are safe with us. We respect your privacy and will never share your information.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 4 — DIRECT CONTACT */}
      <section className="contact-section contact-direct-section">
        <div className="container">
          <div className="contact-section-header text-center">
            <span className="contact-section-tag">QUICK CONNECT</span>
            <h2 className="contact-section-title">Prefer to Talk Directly?</h2>
            <p className="contact-section-subtitle">
              Reach out through any of our official direct communication channels.
            </p>
          </div>

          <div className="contact-direct-grid">
            {/* Card 1: WhatsApp */}
            <div className="contact-direct-card">
              <div className="contact-direct-icon-box whatsapp">
                <MessageCircle size={26} />
              </div>
              <span className="contact-direct-tag">FASTEST RESPONSE</span>
              <h3 className="contact-direct-title">WhatsApp</h3>
              <p className="contact-direct-desc">
                Connect with our team for a quick enquiry.
              </p>
              <div className="contact-direct-value">+91 93584 63311</div>
              <button
                type="button"
                onClick={onOpenWhatsApp}
                className="contact-btn contact-btn-secondary"
              >
                <MessageCircle size={18} color="#25d366" />
                WhatsApp Us
              </button>
            </div>

            {/* Card 2: Phone */}
            <div className="contact-direct-card">
              <div className="contact-direct-icon-box phone">
                <Phone size={26} />
              </div>
              <span className="contact-direct-tag">OFFICE HOURS</span>
              <h3 className="contact-direct-title">Phone</h3>
              <p className="contact-direct-desc">
                Speak with our team regarding training, unit setup or other requirements.
              </p>
              <div className="contact-direct-value">+91 93584 63311</div>
              <a
                href="tel:+919358463311"
                className="contact-btn contact-btn-secondary"
              >
                <Phone size={18} />
                Call Us
              </a>
            </div>

            {/* Card 3: Email */}
            <div className="contact-direct-card">
              <div className="contact-direct-icon-box email">
                <Mail size={26} />
              </div>
              <span className="contact-direct-tag">DETAILED INQUIRIES</span>
              <h3 className="contact-direct-title">Email</h3>
              <p className="contact-direct-desc">
                Send us your detailed enquiry and we'll get back to you.
              </p>
              <div className="contact-direct-value">sumoriyaorganic@gmail.com</div>
              <a
                href="mailto:sumoriyaorganic@gmail.com"
                className="contact-btn contact-btn-secondary"
              >
                <Mail size={18} />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — LOCATION */}
      <section className="contact-section contact-location-section">
        <div className="container">
          <div className="contact-location-box">
            <div className="contact-location-text">
              <span className="contact-section-tag">HEADQUARTERS</span>
              <h2 className="contact-section-title">Visit / Connect With Sumoriya Organic</h2>
              <div className="contact-gold-divider"></div>
              
              <div className="contact-location-address">
                <MapPin size={22} className="contact-gold-icon" />
                <div>
                  <h3 className="contact-address-title">Sumoriya Organic Agro Gold Pvt. Ltd.</h3>
                  <p className="contact-address-p">Jaipur, Rajasthan, India</p>
                </div>
              </div>

              <div className="contact-appointment-notice">
                <CalendarCheck size={20} className="contact-gold-icon" />
                <p>
                  <strong>Notice:</strong> Visits are available by prior appointment. Please contact our team before planning your visit.
                </p>
              </div>

              <div className="contact-location-actions">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Jaipur+Rajasthan+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn contact-btn-primary"
                >
                  <MapPin size={18} />
                  Get Directions
                </a>
                <button
                  type="button"
                  onClick={onOpenWhatsApp}
                  className="contact-btn contact-btn-secondary"
                >
                  <CalendarCheck size={18} />
                  Schedule Appointment
                </button>
              </div>
            </div>

            <div className="contact-location-visual">
              <div className="contact-location-card-preview">
                <div className="contact-preview-badge">
                  <Compass size={16} />
                  <span>Central Coordination Center</span>
                </div>
                <h4 className="contact-preview-heading">Pan-India Cultivation Network</h4>
                <p className="contact-preview-p">
                  Coordination center supporting Cordyceps growers, batch training sessions, and production partners across all states in India.
                </p>
                <ul className="contact-preview-list">
                  <li><CheckCircle2 size={16} /> Regular 2-Day Practical Batches</li>
                  <li><CheckCircle2 size={16} /> Online & Offline Support</li>
                  <li><CheckCircle2 size={16} /> Buyback Partner Consultations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — WHY CONTACT SUMORIYA ORGANIC? */}
      <section className="contact-section contact-why-section">
        <div className="container">
          <div className="contact-why-card">
            <div className="contact-section-header text-center">
              <span className="contact-section-tag">STRATEGIC GUIDANCE</span>
              <h2 className="contact-section-title">
                One Conversation Can Help You Choose the Right Path
              </h2>
              <div className="contact-gold-divider mx-auto"></div>
              <p className="contact-why-text">
                Starting Cordyceps cultivation involves many decisions — training, space, infrastructure, equipment, environmental control and production planning.
              </p>
              <p className="contact-why-text">
                Instead of trying to figure everything out at once, connect with our team and discuss your specific requirement. We can help you understand the next practical step for your Cordyceps journey.
              </p>
            </div>

            {/* Visual Journey Process */}
            <div className="contact-journey-wrapper">
              <h3 className="contact-journey-title text-center">The Cordyceps Cultivation Pathway</h3>
              <div className="contact-journey-flow">
                {journeySteps.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className="contact-journey-step">
                      <div className="contact-journey-badge">{step.num}</div>
                      <h4 className="contact-journey-step-title">{step.title}</h4>
                      <p className="contact-journey-step-desc">{step.desc}</p>
                    </div>
                    {idx < journeySteps.length - 1 && (
                      <div className="contact-journey-arrow" aria-hidden="true">
                        <ArrowRight size={20} className="contact-arrow-desktop" />
                        <span className="contact-arrow-mobile">↓</span>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — FAQ */}
      <section className="contact-section contact-faq-section">
        <div className="container">
          <div className="contact-section-header text-center">
            <span className="contact-section-tag">CLARIFICATIONS</span>
            <h2 className="contact-section-title">Frequently Asked Questions</h2>
            <p className="contact-section-subtitle">
              Common questions answered about contacting our team, scheduling training, and getting setup assistance.
            </p>
          </div>

          <div className="contact-faq-list">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`contact-faq-item ${isOpen ? 'active' : ''}`}
                >
                  <button
                    type="button"
                    className="contact-faq-question"
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={20}
                      className={`contact-faq-chevron ${isOpen ? 'rotated' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="contact-faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 8 — FINAL CTA */}
      <section className="contact-section contact-final-cta">
        <div className="container">
          <div className="contact-cta-card">
            <span className="contact-badge">
              <Sparkles size={15} />
              GET IN TOUCH
            </span>
            <h2 className="contact-cta-title">Ready to Take the Next Step?</h2>
            <p className="contact-cta-desc">
              Tell us what you are planning, and let's discuss the right path for your Cordyceps journey.
            </p>
            <div className="contact-cta-buttons">
              <button
                type="button"
                onClick={() => scrollToForm()}
                className="contact-btn contact-btn-primary"
              >
                <Send size={18} />
                Send Your Enquiry
              </button>
              <button
                type="button"
                onClick={onOpenWhatsApp}
                className="contact-btn contact-btn-secondary"
              >
                <MessageCircle size={18} color="#25d366" />
                WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
