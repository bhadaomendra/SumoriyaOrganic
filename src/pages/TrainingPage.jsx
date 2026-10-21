import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Users,
  Monitor,
  Building,
  CheckCircle2,
  Clock,
  Sparkles,
  FlaskConical,
  Layers,
  ShieldAlert,
  Sprout,
  ArrowRight,
  PhoneCall,
  MapPin,
  PackageCheck
} from 'lucide-react';
import './TrainingPage.css';

const TrainingPage = ({ onOpenWhatsApp, onOpenContact }) => {
  // Dynamic SEO Meta & Canonical Management
  useEffect(() => {
    document.title = 'Cordyceps Cultivation Training in Jaipur & India | Sumoriya Organic';

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      'Learn Cordyceps militaris cultivation with Sumoriya Organic through 2-day theory and practical training. Online and office batches available across India.';

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://sumoriyaorganic.com/cordyceps-cultivation-training';

    // Structured Data (Course + FAQPage Schema)
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'training-schema';
    schemaScript.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Course',
          name: '2-Day Cordyceps Militaris Cultivation Training',
          description:
            'Structured 2-day training program covering theory and hands-on practical Cordyceps cultivation, culture handling, and production workflow.',
          provider: {
            '@type': 'Organization',
            name: 'Sumoriya Organic Agro Gold Pvt. Ltd.',
            sameAs: 'https://sumoriyaorganic.com'
          },
          hasCourseInstance: [
            {
              '@type': 'CourseInstance',
              courseMode: 'Offline',
              location: {
                '@type': 'Place',
                name: 'Sumoriya Organic Training Facility',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Jaipur',
                  addressRegion: 'Rajasthan',
                  addressCountry: 'India'
                }
              }
            },
            {
              '@type': 'CourseInstance',
              courseMode: 'Online'
            }
          ]
        },
        {
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What is the duration of Cordyceps cultivation training?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The training duration is 2 days, with one day of theory and one day of practical learning.'
              }
            },
            {
              '@type': 'Question',
              name: 'Do you provide Cordyceps training in Jaipur?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, Sumoriya Organic provides Cordyceps cultivation training options for participants in Jaipur and from across India.'
              }
            },
            {
              '@type': 'Question',
              name: 'Is Cordyceps training available online?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, training is available in online as well as office/practical formats.'
              }
            },
            {
              '@type': 'Question',
              name: 'What is the maximum batch size?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Each batch is limited to approximately 10–12 participants.'
              }
            },
            {
              '@type': 'Question',
              name: 'Is this training suitable for beginners?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. The program is designed for beginners as well as growers, entrepreneurs and individuals interested in Cordyceps cultivation.'
              }
            },
            {
              '@type': 'Question',
              name: 'What will I learn during the training?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The training covers Cordyceps militaris, culture and inoculation, substrate preparation, incubation, fruiting, environmental management, contamination control and harvesting.'
              }
            },
            {
              '@type': 'Question',
              name: 'Can I start my own Cordyceps production unit after training?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: "The training helps participants understand the cultivation process and production requirements. Those planning a production unit can explore Sumoriya Organic's Production Unit Setup support."
              }
            },
            {
              '@type': 'Question',
              name: 'How can I know the current training fee?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Contact our team for the current training fee, upcoming batch dates and registration details.'
              }
            }
          ]
        }
      ]
    });
    document.head.appendChild(schemaScript);

    return () => {
      const el = document.getElementById('training-schema');
      if (el) el.remove();
    };
  }, []);

  const day1Topics = [
    'Understanding Cordyceps militaris',
    'Cultivation cycle',
    'Culture & inoculation fundamentals',
    'Substrate preparation',
    'Incubation',
    'Fruiting requirements',
    'Temperature & humidity management',
    'Light & air exchange',
    'Hygiene & contamination control',
    'Harvest & post-harvest basics',
    'Production planning fundamentals'
  ];

  const day2Topics = [
    'Practical cultivation workflow',
    'Culture / inoculation handling',
    'Substrate preparation process',
    'Jar preparation & handling',
    'Environmental monitoring',
    'Incubation & fruiting-stage understanding',
    'Contamination identification',
    'Harvesting',
    'Post-harvest handling',
    'Understanding the production workflow'
  ];

  const whyChoosePoints = [
    {
      num: '01',
      title: 'Structured 2-Day Training',
      desc: 'Systematically organized curriculum moving from core scientific principles to real hands-on operations.'
    },
    {
      num: '02',
      title: 'Small Batch Size',
      desc: 'Strictly limited to 10–12 participants per batch to ensure direct personal guidance and workstation access.'
    },
    {
      num: '03',
      title: 'Theory + Practical',
      desc: 'Equal emphasis on understanding the biological fundamentals on Day 1 and practicing aseptic handling on Day 2.'
    },
    {
      num: '04',
      title: 'Production-Focused Learning',
      desc: 'Instruction designed specifically around commercial indoor cultivation standards and hygienic protocols.'
    },
    {
      num: '05',
      title: 'Beginner Friendly',
      desc: 'No prior mycology or mushroom farming background required. Every concept is broken down with clarity.'
    },
    {
      num: '06',
      title: 'Learning Before Investment',
      desc: 'Gain complete operational clarity on unit requirements, equipment, and workflow before committing capital.'
    }
  ];

  const whoCanJoinList = [
    'Beginners',
    'Farmers & Growers',
    'Aspiring Entrepreneurs',
    'Mushroom Cultivators',
    'Production Partners',
    'Business Owners',
    'Individuals planning a Cordyceps production unit'
  ];

  const learningModules = [
    {
      title: 'Cordyceps Militaris',
      desc: 'Biology, strain characteristics, and environmental sensitivity of the species.',
      icon: <Sparkles size={24} />
    },
    {
      title: 'Culture & Inoculation',
      desc: 'Aseptic liquid culture handling and sterile inoculation techniques.',
      icon: <FlaskConical size={24} />
    },
    {
      title: 'Substrate Preparation',
      desc: 'Nutritional grain base formulation, moisture balancing, and autoclave sterilization.',
      icon: <Layers size={24} />
    },
    {
      title: 'Incubation',
      desc: 'Dark phase temperature, humidity management, and uniform mycelium colonization.',
      icon: <Clock size={24} />
    },
    {
      title: 'Fruiting',
      desc: 'Light spectrum, fresh air exchange, and microclimate parameters for pinhead formation.',
      icon: <Sprout size={24} />
    },
    {
      title: 'Contamination Control',
      desc: 'Cleanroom sanitization, spore barrier maintenance, and contamination identification.',
      icon: <ShieldAlert size={24} />
    },
    {
      title: 'Harvest & Post-Harvest',
      desc: 'Peak maturity harvesting, gentle drying, moisture standards, and grading storage.',
      icon: <PackageCheck size={24} />
    }
  ];

  const faqs = [
    {
      q: 'What is the duration of Cordyceps cultivation training?',
      a: 'The training duration is 2 days, with one day of theory and one day of practical learning.'
    },
    {
      q: 'Do you provide Cordyceps training in Jaipur?',
      a: 'Yes, Sumoriya Organic provides Cordyceps cultivation training options for participants in Jaipur and from across India.'
    },
    {
      q: 'Is Cordyceps training available online?',
      a: 'Yes, training is available in online as well as office/practical formats.'
    },
    {
      q: 'What is the maximum batch size?',
      a: 'Each batch is limited to approximately 10–12 participants.'
    },
    {
      q: 'Is this training suitable for beginners?',
      a: 'Yes. The program is designed for beginners as well as growers, entrepreneurs and individuals interested in Cordyceps cultivation.'
    },
    {
      q: 'What will I learn during the training?',
      a: 'The training covers Cordyceps militaris, culture and inoculation, substrate preparation, incubation, fruiting, environmental management, contamination control and harvesting.'
    },
    {
      q: 'Can I start my own Cordyceps production unit after training?',
      a: "The training helps participants understand the cultivation process and production requirements. Those planning a production unit can explore Sumoriya Organic's Production Unit Setup support."
    },
    {
      q: 'How can I know the current training fee?',
      a: 'Contact our team for the current training fee, upcoming batch dates and registration details.'
    }
  ];

  return (
    <div className="training-page">
      {/* 1. Hero Section */}
      <section className="training-hero">
        <div className="training-container">
          <nav className="training-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="training-breadcrumb-sep">/</span>
            <span>Training & Courses</span>
          </nav>

          <span className="training-eyebrow">SUMORIYA ORGANIC GROWER EDUCATION</span>

          <h1 className="training-hero-title">
            Cordyceps Cultivation Training in Jaipur & India
          </h1>

          <p className="training-hero-subheading">
            2-Day Cordyceps Militaris Training with Theory & Practical Learning
          </p>

          <p className="training-hero-intro">
            Learn the fundamentals and practical process of Cordyceps militaris cultivation through
            a structured 2-day training program designed for beginners, growers, entrepreneurs and
            aspiring production partners.
          </p>

          <div className="hero-highlights-strip">
            <div className="hero-highlight-pill">
              <span className="highlight-tag">Duration</span>
              <span className="highlight-val">2 Days — 1 Day Theory + 1 Day Practical</span>
            </div>
            <div className="hero-highlight-pill">
              <span className="highlight-tag">Batch Size</span>
              <span className="highlight-val">Maximum 10–12 Participants</span>
            </div>
            <div className="hero-highlight-pill">
              <span className="highlight-tag">Training Modes</span>
              <span className="highlight-val">Online & Office / Practical</span>
            </div>
          </div>

          <div className="hero-actions">
            <button
              type="button"
              className="btn-training-primary"
              onClick={onOpenWhatsApp}
            >
              <PhoneCall size={18} />
              Enquire About Training
            </button>
            <button
              type="button"
              className="btn-training-outline"
              onClick={onOpenContact}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* 2 & 3. Dual Section: Jaipur & Pan-India Context */}
      <section className="training-section">
        <div className="training-container">
          <div className="info-dual-grid">
            {/* Section: Cordyceps Training in Jaipur */}
            <div className="info-card">
              <div className="info-card-header">
                <div className="info-card-icon">
                  <MapPin size={22} />
                </div>
                <h2 className="info-card-title">Cordyceps Training in Jaipur</h2>
              </div>
              <div className="info-card-body">
                <p>
                  Sumoriya Organic provides structured Cordyceps militaris cultivation training for
                  individuals, growers and entrepreneurs looking to understand controlled Cordyceps
                  production.
                </p>
                <p>
                  Our Jaipur training option combines one day of theory with one day of practical
                  learning, helping participants understand both the cultivation principles and the
                  practical workflow involved in Cordyceps production.
                </p>
                <p>
                  With limited batch sizes of 10–12 participants, the training is designed to
                  provide focused interaction, better understanding and practical exposure. If you
                  are searching for the best Cordyceps training in Jaipur with dedicated lab
                  workstations, our facility offers an immersive environment.
                </p>
              </div>
            </div>

            {/* Section: Cordyceps Cultivation Training in India */}
            <div className="info-card">
              <div className="info-card-header">
                <div className="info-card-icon">
                  <GraduationCap size={22} />
                </div>
                <h2 className="info-card-title">Cordyceps Cultivation Training in India</h2>
              </div>
              <div className="info-card-body">
                <p>
                  Cordyceps cultivation is a specialized form of controlled mushroom production that
                  requires an understanding of culture handling, substrate preparation, environmental
                  conditions, hygiene, incubation, fruiting and harvesting.
                </p>
                <p>
                  Our Cordyceps cultivation training is designed for participants from across India
                  who want to build a practical understanding of the complete cultivation process
                  before starting or expanding a production setup.
                </p>
                <p>
                  Whether you are planning a micro-unit or a commercial laboratory facility, our
                  program provides the essential biological and operational grounding required for
                  quality Cordyceps farming training across India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Sumoriya Organic for Cordyceps Training */}
      <section className="training-section training-section-alt">
        <div className="training-container">
          <div className="training-section-header text-center">
            <span className="training-eyebrow">TRAINING ADVANTAGES</span>
            <h2 className="training-section-title">
              Why Choose Sumoriya Organic for Cordyceps Training?
            </h2>
            <p className="training-section-desc">
              Focused on imparting reliable technical discipline and practical lab exposure rather
              than superficial theory.
            </p>
          </div>

          <div className="why-train-grid">
            {whyChoosePoints.map((point) => (
              <div key={point.num} className="why-train-card">
                <div className="why-train-num">{point.num}</div>
                <div className="why-train-content">
                  <h3>{point.title}</h3>
                  <p>{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 2-Day Cordyceps Militaris Training Program (Syllabus) */}
      <section className="training-section">
        <div className="training-container">
          <div className="training-section-header text-center">
            <span className="training-eyebrow">STEP-BY-STEP CURRICULUM</span>
            <h2 className="training-section-title">
              2-Day Cordyceps Militaris Training Program
            </h2>
            <p className="training-section-desc">
              Comprehensive two-phase curriculum covering every stage of commercial indoor cultivation.
            </p>
          </div>

          <div className="curriculum-grid">
            {/* Day 1 */}
            <div className="day-card">
              <span className="day-badge">DAY 1</span>
              <h3 className="day-title">THEORY & FUNDAMENTALS</h3>
              <p className="day-desc">
                Building scientific understanding of Cordyceps biology, environmental discipline,
                and contamination prevention.
              </p>
              <ul className="syllabus-list">
                {day1Topics.map((topic) => (
                  <li key={topic} className="syllabus-item">
                    <CheckCircle2 size={18} className="syllabus-icon" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Day 2 */}
            <div className="day-card">
              <span className="day-badge">DAY 2</span>
              <h3 className="day-title">PRACTICAL TRAINING</h3>
              <p className="day-desc">
                Hands-on practice under laminar air flow hoods, autoclave handling, substrate
                preparation, and harvest inspection.
              </p>
              <ul className="syllabus-list">
                {day2Topics.map((topic) => (
                  <li key={topic} className="syllabus-item">
                    <CheckCircle2 size={18} className="syllabus-icon" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Online & Office Cordyceps Training */}
      <section className="training-section training-section-alt">
        <div className="training-container">
          <div className="training-section-header text-center">
            <span className="training-eyebrow">TRAINING DELIVERY MODES</span>
            <h2 className="training-section-title">Online & Office Cordyceps Training</h2>
            <p className="training-section-desc">
              Flexible learning alternatives tailored for local and pan-India participants.
            </p>
          </div>

          <div className="modes-grid">
            <div className="mode-card">
              <div className="mode-icon">
                <Monitor size={24} />
              </div>
              <h3 className="mode-title">ONLINE TRAINING</h3>
              <p className="mode-text">
                Live instructor-led training for participants who want to learn from anywhere in
                India. Includes interactive query resolution and complete course study materials.
              </p>
            </div>

            <div className="mode-card">
              <div className="mode-icon">
                <Building size={24} />
              </div>
              <h3 className="mode-title">OFFICE / PRACTICAL</h3>
              <p className="mode-text">
                Classroom-based learning combined with practical exposure to the Cordyceps
                cultivation process inside working cleanrooms and growing chambers in Jaipur.
              </p>
            </div>

            <div className="mode-card">
              <div className="mode-icon">
                <Users size={24} />
              </div>
              <h3 className="mode-title">BATCH SIZE</h3>
              <p className="mode-text">
                Maximum 10–12 participants per batch to guarantee individual attention, personalized
                doubt clearance, and direct equipment handling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Who Can Join Cordyceps Cultivation Training? */}
      <section className="training-section">
        <div className="training-container">
          <div className="training-section-header">
            <span className="training-eyebrow">ELIGIBILITY & PARTICIPANTS</span>
            <h2 className="training-section-title">
              Who Can Join Cordyceps Cultivation Training?
            </h2>
            <p className="training-section-desc">
              Our structured course is developed to empower individuals across diverse professional
              backgrounds:
            </p>
          </div>

          <div className="who-join-grid">
            {whoCanJoinList.map((item) => (
              <div key={item} className="who-join-pill">
                <CheckCircle2 size={20} className="who-join-icon" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. What You Will Learn in Cordyceps Training */}
      <section className="training-section training-section-alt">
        <div className="training-container">
          <div className="training-section-header text-center">
            <span className="training-eyebrow">LEARNING MODULES</span>
            <h2 className="training-section-title">
              What You Will Learn in Cordyceps Training
            </h2>
            <p className="training-section-desc">
              Structured knowledge modules that guide you through every milestone of cultivation.
            </p>
          </div>

          <div className="learn-modules-grid">
            {learningModules.map((module) => (
              <div key={module.title} className="module-card">
                <div className="module-icon-wrap">{module.icon}</div>
                <h4>{module.title}</h4>
                <p>{module.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. From Cordyceps Training to Production Unit Setup */}
      <section className="training-section">
        <div className="training-container">
          <div className="setup-transition-box">
            <span className="training-eyebrow">THE COMPLETE ROADMAP</span>
            <h2 className="training-section-title">
              From Cordyceps Training to Production Unit Setup
            </h2>
            <p>
              Training provides the knowledge required to understand the cultivation process. If
              you are planning to establish your own Cordyceps production unit, the next step is to
              understand the infrastructure, equipment, environment and workflow required for
              production.
            </p>

            <div className="setup-flow-steps">
              <span className="flow-step-tag">Learn</span>
              <span className="flow-step-arrow">→</span>
              <span className="flow-step-tag">Understand</span>
              <span className="flow-step-arrow">→</span>
              <span className="flow-step-tag">Plan</span>
              <span className="flow-step-arrow">→</span>
              <span className="flow-step-tag">Setup</span>
              <span className="flow-step-arrow">→</span>
              <span className="flow-step-tag">Cultivate</span>
              <span className="flow-step-arrow">→</span>
              <span className="flow-step-tag">Produce</span>
            </div>

            <a href="/#process" className="btn-goto-setup">
              Explore Production Unit Setup
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* 10. Cordyceps Training Fees */}
      <section className="training-section training-section-alt">
        <div className="training-container">
          <div className="fee-card">
            <div className="fee-info">
              <span className="training-eyebrow" style={{ color: '#d69a36' }}>
                FEE TRANSPARENCY & ENROLLMENT
              </span>
              <h3>Cordyceps Training Fees</h3>
              <p>
                Training fees vary according to the selected training format and upcoming batch.
                Contact our team for current fees, batch dates and registration details.
              </p>
            </div>
            <button
              type="button"
              className="btn-fee-cta"
              onClick={onOpenWhatsApp}
            >
              <PhoneCall size={18} />
              Connect With Us for Training Fee & Upcoming Batch
            </button>
          </div>
        </div>
      </section>

      {/* 11. FAQ Section */}
      <section className="training-section">
        <div className="training-container">
          <div className="training-section-header text-center">
            <span className="training-eyebrow">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="training-section-title">
              Common Questions About Cordyceps Training
            </h2>
            <p className="training-section-desc">
              Everything you need to know about duration, syllabus, batch schedules, and practical learning.
            </p>
          </div>

          <div className="faq-grid">
            {faqs.map((faq) => (
              <div key={faq.q} className="faq-card">
                <h3 className="faq-q">{faq.q}</h3>
                <p className="faq-a">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Final CTA Section */}
      <section className="final-cta-section">
        <div className="training-container">
          <div className="final-cta-box">
            <div className="final-cta-content">
              <h2>Ready to Learn Cordyceps Cultivation?</h2>
              <p>
                Build your understanding before you build your production unit. Start your Cordyceps
                cultivation journey with structured, practical training from Sumoriya Organic.
              </p>
            </div>
            <div className="final-cta-actions">
              <button
                type="button"
                className="btn-training-primary"
                onClick={onOpenWhatsApp}
              >
                Enquire About Training
              </button>
              <button
                type="button"
                className="btn-training-outline"
                onClick={onOpenContact}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainingPage;
