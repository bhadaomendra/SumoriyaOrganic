import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  Layers,
  ThermometerSnowflake,
  Workflow,
  Wrench,
  ShieldCheck,
  Zap,
  Activity,
  Boxes,
  ArrowRight,
  CheckCircle2,
  Check,
  ChevronDown,
  Sparkles,
  HelpCircle,
  PhoneCall,
  MessageCircle,
  GraduationCap,
  TrendingUp,
  Cpu,
  Droplets,
  Sun,
  Wind,
  Sparkle,
  Gauge,
  Factory,
  Compass,
  FileCheck2,
  RefreshCw,
  FolderSync,
  ArrowDown,
  Handshake,
  AlertCircle
} from 'lucide-react';
import './ProductionSetupPage.css';

const ProductionSetupPage = ({ onOpenWhatsApp, onOpenContact }) => {
  const [openFaq, setOpenFaq] = useState(0);

  // Dynamic SEO Meta & Canonical Management
  useEffect(() => {
    document.title = 'Cordyceps Production Unit Setup in India | Sumoriya Organic';

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      'Plan and set up a structured Cordyceps militaris production unit with Sumoriya Organic. Get support for layout, equipment, environmental control and production workflow.';

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://sumoriyaorganic.com/production-unit-setup';

    // Structured Data (Service + FAQPage Schema)
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'setup-schema';
    schemaScript.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          name: 'Cordyceps Production Unit Setup',
          serviceType: 'Cordyceps Cultivation Facility Planning & Infrastructure Support',
          provider: {
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
          areaServed: {
            '@type': 'Country',
            name: 'India'
          },
          description:
            'End-to-end guidance for Cordyceps militaris production unit setup, space planning, cleanroom layout, equipment selection, and climate control.'
        },
        {
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What is a Cordyceps production unit?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'A Cordyceps production unit is a controlled cultivation setup designed to support the different stages of Cordyceps militaris production, from preparation and inoculation through incubation, fruiting and post-harvest handling.'
              }
            },
            {
              '@type': 'Question',
              name: 'What space is required for a Cordyceps production unit?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Space requirements depend on the planned production workflow, unit design and scale. Sumoriya Organic can help assess the available space and plan the setup accordingly.'
              }
            },
            {
              '@type': 'Question',
              name: 'What equipment is required for Cordyceps cultivation?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Equipment depends on the production process and unit requirements. It may include sterilization, inoculation, environmental control, monitoring, rack and post-harvest equipment.'
              }
            },
            {
              '@type': 'Question',
              name: 'Can you help set up a new Cordyceps unit?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Sumoriya Organic provides support for planning and developing Cordyceps production units.'
              }
            },
            {
              '@type': 'Question',
              name: 'Can you improve an existing production unit?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Existing spaces and setups can be reviewed to identify opportunities for better workflow, environmental management and operational planning.'
              }
            },
            {
              '@type': 'Question',
              name: 'Do I need Cordyceps training before setting up a unit?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Training is highly useful for understanding the cultivation process. If you have not yet completed training, you can explore our Cordyceps Cultivation Training program before planning your production unit.'
              }
            },
            {
              '@type': 'Question',
              name: 'Does Sumoriya Organic provide Buyback Guarantee?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Sumoriya Organic provides a Buyback Guarantee. Applicable terms and conditions should be discussed with the Sumoriya Organic team.'
              }
            }
          ]
        }
      ]
    });
    document.head.appendChild(schemaScript);

    return () => {
      const existingSchema = document.getElementById('setup-schema');
      if (existingSchema) existingSchema.remove();
    };
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  // Section 3: 9 Components of a Production Unit
  const unitComponents = [
    {
      icon: Compass,
      title: 'Space Planning',
      desc: 'Assessing square footage, ceiling heights, and vertical racking capacity for optimal production volume.'
    },
    {
      icon: Layers,
      title: 'Room Layout',
      desc: 'Creating clear demarcations between clean, semi-clean, and utility zones to prevent cross-contamination.'
    },
    {
      icon: ThermometerSnowflake,
      title: 'Environmental Control',
      desc: 'Designing dedicated climate zones for consistent temperature, humidity, lighting, and air exchange.'
    },
    {
      icon: Workflow,
      title: 'Production Workflow',
      desc: 'Organizing unidirectional operational movement from substrate preparation through fruiting to harvest.'
    },
    {
      icon: Wrench,
      title: 'Equipment Planning',
      desc: 'Selecting appropriately sized autoclaves, laminar flow hoods, HVAC systems, and illumination.'
    },
    {
      icon: ShieldCheck,
      title: 'Hygiene & Contamination Control',
      desc: 'Implementing airlocks, sanitation protocols, positive air pressure, and easy-clean surfaces.'
    },
    {
      icon: Zap,
      title: 'Electrical & Utility Planning',
      desc: 'Calculating connected power loads, backup generator requirements, and purified water supply lines.'
    },
    {
      icon: Activity,
      title: 'Monitoring Systems',
      desc: 'Integrating continuous digital telemetry instruments for real-time monitoring of growth parameters.'
    },
    {
      icon: Boxes,
      title: 'Production & Storage Areas',
      desc: 'Designating dry raw material storage, sterile jar holding, and post-harvest packaging spaces.'
    }
  ];

  // Section 4: Process Timeline (7 Steps)
  const timelineSteps = [
    {
      step: '01',
      title: 'Space Assessment',
      desc: 'Evaluating dimensions, ventilation, electrical capacity, water access, and structural feasibility.'
    },
    {
      step: '02',
      title: 'Unit Planning',
      desc: 'Determining planned jar capacities, target production volumes, and functional room divisions.'
    },
    {
      step: '03',
      title: 'Layout & Workflow',
      desc: 'Designing blueprints with clean-to-dirty zoning, operator pathways, and efficient transit routes.'
    },
    {
      step: '04',
      title: 'Equipment Planning',
      desc: 'Selecting compatible sterilization, laminar airflow, rack sizing, and specialized lighting systems.'
    },
    {
      step: '05',
      title: 'Environment Setup',
      desc: 'Installing thermal insulation, HVAC systems, ultrasonic humidification, and HEPA air handling.'
    },
    {
      step: '06',
      title: 'Hygiene & Process Preparation',
      desc: 'Sanitization regimes, sterile protocols, calibration of sensors, and trial run validation.'
    },
    {
      step: '07',
      title: 'Production Ready',
      desc: 'Commencing active mother culture inoculation and structured crop cycles with support.'
    }
  ];

  // Section 5: Planning Checklist Points
  const planningChecklist = [
    'Available space assessment',
    'Room dimensions & ceiling heights',
    'Functional zoning & contamination barriers',
    'Workflow planning & operator movement paths',
    'Entry, gowning & airlock movement paths',
    'Equipment placement & ergonomic access',
    'Electrical load calculations & backup power',
    'Pure water supply & drainage lines',
    'Cleaning, sanitization & maintenance access',
    'Raw material, consumable & harvest storage'
  ];

  // Section 6: Key Functional Areas
  const functionalAreas = [
    {
      tag: 'Raw & Materials',
      title: 'Preparation Area',
      desc: 'For substrate formulation, nutrient enrichment, and initial jar filling before sterilization.',
      img: '/process/p1.jpg',
      alt: 'cordyceps production unit setup substrate preparation area'
    },
    {
      tag: 'Thermal Decontamination',
      title: 'Sterilization Area',
      desc: 'For sterilization-related processes and equipment to eliminate unwanted microbiological competitors.',
      img: '/process/p2.jpg',
      alt: 'cordyceps cultivation unit sterilization equipment area'
    },
    {
      tag: 'Sterile Transfer',
      title: 'Inoculation / Clean Area',
      desc: 'For controlled inoculation activities with laminar airflow work stations and strict cleanroom protocols.',
      img: '/gallery/g1.jpg',
      alt: 'cordyceps lab setup inoculation clean area'
    },
    {
      tag: 'Dark Phase Colonization',
      title: 'Incubation Area',
      desc: 'For mycelial development under controlled dark-phase conditions and stable thermal maintenance.',
      img: '/process/p4.jpg',
      alt: 'cordyceps farming setup mycelium incubation area'
    },
    {
      tag: 'Controlled Light & Humidity',
      title: 'Fruiting Area',
      desc: 'For controlled fruiting and environmental management, optimizing stroma growth and pigmentation.',
      img: '/gallery/g2.jpg',
      alt: 'cordyceps production setup fruiting racks and light'
    },
    {
      tag: 'Handling & Value Addition',
      title: 'Harvest & Post-Harvest Area',
      desc: 'For hygienic harvesting, precision dehydration, grading, moisture testing, and vacuum packaging.',
      img: '/process/p6.jpg',
      alt: 'cordyceps post-harvest handling and drying area'
    },
    {
      tag: 'Organized Inventory',
      title: 'Storage Area',
      desc: 'For appropriate storage of materials, consumables, tools, and finished dried Cordyceps products.',
      img: '/gallery/g5.jpg',
      alt: 'cordyceps mushroom unit setup finished goods storage'
    }
  ];

  // Section 7: Controlled Environment Parameters
  const environmentParameters = [
    {
      icon: ThermometerSnowflake,
      name: 'Temperature',
      desc: 'Controlled thermal regulation suited for both mycelial colonization and fruiting induction cycles.'
    },
    {
      icon: Droplets,
      name: 'Humidity',
      desc: 'Micro-droplet ultrasonic humidity injection to maintain lush stroma growth without surface pooling.'
    },
    {
      icon: Sun,
      name: 'Light',
      desc: 'Specific spectral photoperiods calibrated to stimulate carotenoid pigmentation and upright stroma formation.'
    },
    {
      icon: Wind,
      name: 'Air Exchange',
      desc: 'Continuous regulated air exchange to manage CO2 levels and prevent morphological deformities.'
    },
    {
      icon: Sparkle,
      name: 'Cleanliness',
      desc: 'Non-porous, washable surfaces and standard operating procedures for daily and weekly sanitization.'
    },
    {
      icon: ShieldCheck,
      name: 'Contamination Control',
      desc: 'Airlocks, physical barriers, positive pressure differentials, and strict personnel hygiene protocols.'
    },
    {
      icon: Gauge,
      name: 'Environmental Monitoring',
      desc: 'Continuous digital telemetry and reliable sensors for real-time monitoring of growth parameters.'
    }
  ];

  // Section 8: Equipment Categories
  const equipmentCategories = [
    { title: 'Sterilization Equipment', desc: 'Heavy-duty autoclaves and steam sterilizers for substrate jars.' },
    { title: 'Inoculation Equipment', desc: 'Laminar airflow workstations and sterile inoculation tools.' },
    { title: 'Environmental Control Equipment', desc: 'Precision split AC systems and environmental regulators.' },
    { title: 'Humidity Management', desc: 'Ultrasonic humidifiers, piping distribution, and humidity sensors.' },
    { title: 'Air Filtration / Air Handling', desc: 'HEPA filters, exhaust fans, and fresh air intake units.' },
    { title: 'Lighting Systems', desc: 'Specialized spectral LED grow lights calibrated for Cordyceps.' },
    { title: 'Racks & Shelving', desc: 'Custom rust-resistant multi-tier racking for maximum jar density.' },
    { title: 'Monitoring Instruments', desc: 'Digital thermo-hygrometers, lux meters, and environment loggers.' },
    { title: 'Cleaning & Hygiene Equipment', desc: 'UV air purifiers, footbaths, sanitizing sprayers, and personal protective wear.' },
    { title: 'Drying / Post-Harvest Equipment', desc: 'Dehydrators for consistent, low-temperature preservation of bioactive compounds.' }
  ];

  // Section 10: Beneficiaries
  const beneficiaries = [
    {
      title: 'New Entrepreneurs',
      desc: 'Individuals looking to enter the high-value specialty mushroom cultivation industry with a planned approach.'
    },
    {
      title: 'Existing Growers',
      desc: 'Mushroom farmers wanting to diversify from button/oyster into Cordyceps militaris for higher value yield.'
    },
    {
      title: 'Mushroom Cultivators',
      desc: 'Growers seeking to retrofit existing farm spaces into precision-controlled cleanroom facilities.'
    },
    {
      title: 'Production Partners',
      desc: 'Growers interested in structured production and working under Sumoriya Organic’s Buyback Guarantee.'
    },
    {
      title: 'Business Owners',
      desc: 'Agri-business investors looking for structured turnkey facility planning and technical guidance.'
    },
    {
      title: 'Commercial Cultivators',
      desc: 'Individuals planning commercial Cordyceps cultivation at scalable, professional capacities.'
    },
    {
      title: 'Existing Setup Improvers',
      desc: 'Growers looking to audit, troubleshoot, and improve contamination control in an existing unit.'
    }
  ];

  // Section 13: Why Choose Sumoriya Organic
  const whyChooseUs = [
    {
      title: 'Cordyceps-Focused Approach',
      desc: 'Specialized exclusively in Cordyceps militaris cultivation rather than generic, unfocused agri-farming advice.'
    },
    {
      title: 'Practical Production Planning',
      desc: 'Real facility insights developed from operating an active commercial Cordyceps lab and training center.'
    },
    {
      title: 'Workflow-Based Unit Design',
      desc: 'Logical room architecture that minimizes physical foot-traffic and reduces contamination risks.'
    },
    {
      title: 'Environmental Control Planning',
      desc: 'Engineered climate balancing ensuring reliable temperature, humidity, and photoperiod regulation.'
    },
    {
      title: 'Equipment Planning Support',
      desc: 'Objective, requirement-driven equipment selection tailored to your intended production scale.'
    },
    {
      title: 'Hygiene-Focused Setup',
      desc: 'Cleanroom zoning principles, airlocks, and bio-security protocols embedded into every layout.'
    },
    {
      title: 'Support From Planning to Production',
      desc: 'Comprehensive guidance spanning initial blueprint planning, equipment setup, training, and first crop.'
    },
    {
      title: 'Buyback Guarantee',
      desc: 'Structured market linkage and buyback support for eligible production partners, subject to applicable terms.'
    }
  ];

  // FAQs
  const faqs = [
    {
      q: 'What is a Cordyceps production unit?',
      a: 'A Cordyceps production unit is a controlled cultivation setup designed to support the different stages of Cordyceps militaris production, from preparation and inoculation through incubation, fruiting and post-harvest handling.'
    },
    {
      q: 'What space is required for a Cordyceps production unit?',
      a: 'Space requirements depend on the planned production workflow, unit design and scale. Sumoriya Organic can help assess the available space and plan the setup accordingly.'
    },
    {
      q: 'What equipment is required for Cordyceps cultivation?',
      a: 'Equipment depends on the production process and unit requirements. It may include sterilization, inoculation, environmental control, monitoring, rack and post-harvest equipment.'
    },
    {
      q: 'Can you help set up a new Cordyceps unit?',
      a: 'Yes. Sumoriya Organic provides support for planning and developing Cordyceps production units.'
    },
    {
      q: 'Can you improve an existing production unit?',
      a: 'Yes. Existing spaces and setups can be reviewed to identify opportunities for better workflow, environmental management and operational planning.'
    },
    {
      q: 'Do I need Cordyceps training before setting up a unit?',
      a: 'Training is highly useful for understanding the cultivation process. If you have not yet completed training, you can explore our Cordyceps Cultivation Training program before planning your production unit.'
    },
    {
      q: 'Does Sumoriya Organic provide Buyback Guarantee?',
      a: 'Yes. Sumoriya Organic provides a Buyback Guarantee. Applicable terms and conditions should be discussed with the Sumoriya Organic team.'
    }
  ];

  return (
    <div className="setup-page">
      {/* Breadcrumb Navigation */}
      <nav className="setup-breadcrumb" aria-label="Breadcrumb">
        <div className="container">
          <ol className="setup-breadcrumb-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="setup-breadcrumb-sep">/</li>
            <li aria-current="page">Cordyceps Production Unit Setup</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="setup-hero">
        <div className="container setup-hero-grid">
          <div className="setup-hero-content">
            <span className="setup-badge">
              <Building2 size={15} />
              FACILITY PLANNING & INFRASTRUCTURE
            </span>
            <h1 className="setup-hero-title">Cordyceps Production Unit Setup</h1>
            <p className="setup-hero-subheading">
              Plan and Build a Structured Cordyceps Militaris Production Unit
            </p>
            <p className="setup-hero-desc">
              Planning a Cordyceps production unit requires more than equipment and space. The right
              layout, environmental control, workflow, hygiene practices and production planning are
              important for building a functional cultivation setup.
            </p>

            <div className="setup-hero-actions">
              <button
                type="button"
                onClick={onOpenWhatsApp}
                className="setup-btn setup-btn-primary"
              >
                <MessageCircle size={18} />
                Discuss Your Production Unit
              </button>
              <button
                type="button"
                onClick={onOpenContact}
                className="setup-btn setup-btn-secondary"
              >
                <PhoneCall size={18} />
                Contact Us
              </button>
            </div>

            <div className="setup-hero-highlights">
              <div className="setup-highlight-item">
                <CheckCircle2 size={16} className="setup-check-icon" />
                <span>Layout & Zoning Guidance</span>
              </div>
              <div className="setup-highlight-item">
                <CheckCircle2 size={16} className="setup-check-icon" />
                <span>Environmental Control Planning</span>
              </div>
              <div className="setup-highlight-item">
                <CheckCircle2 size={16} className="setup-check-icon" />
                <span>Cleanroom Hygiene Protocols</span>
              </div>
            </div>
          </div>

          <div className="setup-hero-visual">
            <div className="setup-hero-image-wrapper">
              <img
                src="/gallery/g2.jpg"
                alt="cordyceps production unit setup cultivation racks and controlled environment"
                className="setup-hero-img"
                width="1200"
                height="1000"
              />
              <div className="setup-hero-glass-card">
                <div className="setup-glass-badge">
                  <Factory size={16} />
                  <span>Production Unit Blueprint</span>
                </div>
                <p className="setup-glass-text">
                  Tailored cleanroom layout, multi-tier racking, and environmental automation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Cordyceps Production Unit Setup in India */}
      <section className="setup-section setup-overview-section">
        <div className="container">
          <div className="setup-overview-card">
            <div className="setup-overview-text">
              <span className="setup-section-tag">PRACTICAL FACILITY PLANNING</span>
              <h2 className="setup-section-title">Cordyceps Production Unit Setup in India</h2>
              <div className="setup-gold-divider"></div>
              <p className="setup-overview-p">
                Sumoriya Organic supports individuals, growers and entrepreneurs in planning and
                developing Cordyceps militaris production units. From understanding space requirements
                to planning the cultivation environment and workflow, our approach focuses on creating a
                practical and structured production setup.
              </p>
              <p className="setup-overview-p">
                Whether you are planning a new unit or looking to improve an existing setup, the right
                planning can help create a more organized cultivation environment.
              </p>
            </div>

            <div className="setup-overview-features">
              <div className="setup-overview-feat-item">
                <div className="setup-feat-num">01</div>
                <div>
                  <h3 className="setup-feat-title">Space-Optimized Blueprints</h3>
                  <p className="setup-feat-desc">Maximize jar density and vertical utilization while keeping clear aisles.</p>
                </div>
              </div>
              <div className="setup-overview-feat-item">
                <div className="setup-feat-num">02</div>
                <div>
                  <h3 className="setup-feat-title">Biosecurity & Hygiene</h3>
                  <p className="setup-feat-desc">Contamination barrier strategies engineered for high-purity cultivation.</p>
                </div>
              </div>
              <div className="setup-overview-feat-item">
                <div className="setup-feat-num">03</div>
                <div>
                  <h3 className="setup-feat-title">Unidirectional Workflow</h3>
                  <p className="setup-feat-desc">Smooth transit from substrate preparation to fruiting and post-harvest drying.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: What Goes Into a Cordyceps Production Unit? */}
      <section className="setup-section setup-components-section">
        <div className="container">
          <div className="setup-section-header text-center">
            <span className="setup-section-tag">CORE INFRASTRUCTURE PILLARS</span>
            <h2 className="setup-section-title">What Goes Into a Cordyceps Production Unit?</h2>
            <p className="setup-section-subtitle">
              A successful Cordyceps unit integrates multiple interdependent systems designed to sustain
              repeatable, contamination-resistant cultivation cycles.
            </p>
          </div>

          <div className="setup-components-grid">
            {unitComponents.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="setup-component-card">
                  <div className="setup-component-icon-box">
                    <IconComp size={24} />
                  </div>
                  <h3 className="setup-component-title">{item.title}</h3>
                  <p className="setup-component-desc">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: From Space to Production Timeline */}
      <section className="setup-section setup-timeline-section">
        <div className="container">
          <div className="setup-section-header text-center">
            <span className="setup-section-tag">IMPLEMENTATION ROADMAP</span>
            <h2 className="setup-section-title">From Space to Production</h2>
            <p className="setup-section-subtitle">
              A structured, step-by-step development process taking you from an empty space to an active,
              productive cultivation unit.
            </p>
          </div>

          <div className="setup-timeline-flow">
            {timelineSteps.map((step, idx) => (
              <div key={idx} className="setup-timeline-step">
                <div className="setup-timeline-step-badge">{step.step}</div>
                <div className="setup-timeline-step-body">
                  <h3 className="setup-timeline-step-title">{step.title}</h3>
                  <p className="setup-timeline-step-desc">{step.desc}</p>
                </div>
                {idx < timelineSteps.length - 1 && (
                  <div className="setup-timeline-connector" aria-hidden="true">
                    <ArrowRight size={18} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Plan Your Cordyceps Production Unit */}
      <section className="setup-section setup-planning-section">
        <div className="container">
          <div className="setup-planning-layout">
            <div className="setup-planning-info">
              <span className="setup-section-tag">SYSTEMATIC FACILITY DESIGN</span>
              <h2 className="setup-section-title">Plan Your Cordyceps Production Unit</h2>
              <div className="setup-gold-divider"></div>
              <p className="setup-planning-p">
                Every production unit should be planned according to its available space, intended
                production workflow and operational requirements. Proper planning helps reduce unnecessary
                movement, maintain cleaner workflows and make day-to-day operations easier to manage.
              </p>
              <div className="setup-planning-quote-box">
                <Sparkles size={20} className="setup-gold-icon" />
                <p>
                  "Efficient planning eliminates bottlenecks before equipment is installed, ensuring smooth
                  daily operations and lower contamination risk."
                </p>
              </div>
            </div>

            <div className="setup-planning-checklist-card">
              <h3 className="setup-checklist-title">Production Planning Checklist</h3>
              <p className="setup-checklist-subtitle">
                Key aspects evaluated during facility planning:
              </p>
              <ul className="setup-checklist-list">
                {planningChecklist.map((item, idx) => (
                  <li key={idx} className="setup-checklist-item">
                    <Check size={18} className="setup-checklist-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Key Areas of a Cordyceps Production Unit */}
      <section className="setup-section setup-areas-section">
        <div className="container">
          <div className="setup-section-header text-center">
            <span className="setup-section-tag">ZONING & FACILITY ARCHITECTURE</span>
            <h2 className="setup-section-title">Key Areas of a Cordyceps Production Unit</h2>
            <p className="setup-section-subtitle">
              Dividing the unit into dedicated functional zones maintains environmental integrity and
              safeguards each stage of production.
            </p>
          </div>

          <div className="setup-areas-grid">
            {functionalAreas.map((area, idx) => (
              <div key={idx} className="setup-area-card">
                <div className="setup-area-img-wrap">
                  <img
                    src={area.img}
                    alt={area.alt}
                    className="setup-area-img"
                    width="600"
                    height="400"
                    loading="lazy"
                  />
                  <span className="setup-area-tag">{area.tag}</span>
                </div>
                <div className="setup-area-content">
                  <h3 className="setup-area-title">{area.title}</h3>
                  <p className="setup-area-desc">{area.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="setup-area-note-card">
            <FileCheck2 size={20} className="setup-note-icon" />
            <p>
              <strong>Note:</strong> Actual area requirements and configuration depend on the planned
              production workflow and unit scale.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: Controlled Environment for Cordyceps Cultivation */}
      <section className="setup-section setup-environment-section">
        <div className="container">
          <div className="setup-section-header text-center">
            <span className="setup-section-tag">MICRO-CLIMATE MANAGEMENT</span>
            <h2 className="setup-section-title">Controlled Environment for Cordyceps Cultivation</h2>
            <p className="setup-section-subtitle">
              Cordyceps militaris requires a controlled cultivation environment. A production unit therefore
              needs appropriate planning for environmental parameters and continuous monitoring.
            </p>
          </div>

          <div className="setup-env-grid">
            {environmentParameters.map((param, idx) => {
              const ParamIcon = param.icon;
              return (
                <div key={idx} className="setup-env-card">
                  <div className="setup-env-icon-box">
                    <ParamIcon size={22} />
                  </div>
                  <h3 className="setup-env-name">{param.name}</h3>
                  <p className="setup-env-desc">{param.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 8: Cordyceps Production Equipment Planning */}
      <section className="setup-section setup-equipment-section">
        <div className="container">
          <div className="setup-equipment-box">
            <div className="setup-section-header text-center">
              <span className="setup-section-tag">FUNCTIONAL SELECTION</span>
              <h2 className="setup-section-title">Cordyceps Production Equipment Planning</h2>
              <p className="setup-section-subtitle">
                Equipment selection should be based on the production workflow, unit design and operational
                requirements rather than simply choosing individual machines.
              </p>
            </div>

            <div className="setup-equipment-grid">
              {equipmentCategories.map((eq, idx) => (
                <div key={idx} className="setup-equipment-card">
                  <div className="setup-equipment-num">{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</div>
                  <div>
                    <h3 className="setup-equipment-title">{eq.title}</h3>
                    <p className="setup-equipment-desc">{eq.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="setup-equipment-cta-wrapper">
              <button
                type="button"
                onClick={onOpenWhatsApp}
                className="setup-btn setup-btn-primary"
              >
                <MessageCircle size={18} />
                Discuss Equipment Requirements
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Setting Up a New Unit or Improving an Existing Unit? */}
      <section className="setup-section setup-options-section">
        <div className="container">
          <div className="setup-section-header text-center">
            <span className="setup-section-tag">CUSTOM APPROACHES</span>
            <h2 className="setup-section-title">
              Setting Up a New Unit or Improving an Existing Unit?
            </h2>
            <p className="setup-section-subtitle">
              We offer tailored guidance whether starting from an empty facility or auditing an existing farm.
            </p>
          </div>

          <div className="setup-options-grid">
            <div className="setup-option-card setup-option-new">
              <div className="setup-option-badge">
                <Factory size={16} />
                GREENFIELD PROJECT
              </div>
              <h3 className="setup-option-title">NEW PRODUCTION UNIT</h3>
              <p className="setup-option-desc">
                Planning a new Cordyceps unit from the beginning allows the layout, workflow and
                environmental requirements to be considered together.
              </p>
              <ul className="setup-option-points">
                <li><Check size={16} /> Complete room zoning from day one</li>
                <li><Check size={16} /> Purpose-built electrical and drainage lines</li>
                <li><Check size={16} /> Optimized unidirectional workflow paths</li>
                <li><Check size={16} /> Sized precisely for target production goals</li>
              </ul>
              <button
                type="button"
                onClick={onOpenWhatsApp}
                className="setup-btn setup-btn-primary"
              >
                <MessageCircle size={18} />
                Discuss Your Unit
              </button>
            </div>

            <div className="setup-option-card setup-option-existing">
              <div className="setup-option-badge">
                <RefreshCw size={16} />
                RETROFIT & AUDIT
              </div>
              <h3 className="setup-option-title">EXISTING UNIT</h3>
              <p className="setup-option-desc">
                Already have a space or cultivation setup? We can help you review the existing
                arrangement and identify areas that may require improvement.
              </p>
              <ul className="setup-option-points">
                <li><Check size={16} /> Contamination hotspot identification</li>
                <li><Check size={16} /> Air circulation & humidity re-balancing</li>
                <li><Check size={16} /> Retrofitting rooms for cleanroom standards</li>
                <li><Check size={16} /> Workflow reorganization to prevent bottlenecks</li>
              </ul>
              <button
                type="button"
                onClick={onOpenContact}
                className="setup-btn setup-btn-secondary"
              >
                <PhoneCall size={18} />
                Discuss Your Unit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Who Can Benefit From Production Unit Setup Support? */}
      <section className="setup-section setup-beneficiaries-section">
        <div className="container">
          <div className="setup-section-header text-center">
            <span className="setup-section-tag">WHO WE SUPPORT</span>
            <h2 className="setup-section-title">
              Who Can Benefit From Production Unit Setup Support?
            </h2>
            <p className="setup-section-subtitle">
              Our structured approach supports a wide range of individuals and organizations entering
              commercial Cordyceps production.
            </p>
          </div>

          <div className="setup-beneficiaries-grid">
            {beneficiaries.map((b, idx) => (
              <div key={idx} className="setup-beneficiary-card">
                <div className="setup-beneficiary-icon">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h3 className="setup-beneficiary-title">{b.title}</h3>
                  <p className="setup-beneficiary-desc">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 11: Already Completed Cordyceps Training? */}
      <section className="setup-section setup-training-link-section">
        <div className="container">
          <div className="setup-banner-card">
            <div className="setup-banner-content">
              <span className="setup-badge">
                <GraduationCap size={15} />
                FOUNDATION KNOWLEDGE
              </span>
              <h2 className="setup-banner-title">Already Completed Cordyceps Training?</h2>
              <p className="setup-banner-desc">
                If you already understand the cultivation process and are ready to plan your own production
                unit, the next step is developing the right infrastructure and workflow.
              </p>

              <div className="setup-process-strip">
                <span className="setup-strip-item">Training</span>
                <span className="setup-strip-arrow">→</span>
                <span className="setup-strip-item highlight">Planning</span>
                <span className="setup-strip-arrow">→</span>
                <span className="setup-strip-item">Setup</span>
                <span className="setup-strip-arrow">→</span>
                <span className="setup-strip-item">Production</span>
              </div>

              <div className="setup-banner-actions">
                <Link
                  to="/cordyceps-cultivation-training"
                  className="setup-btn setup-btn-primary"
                >
                  <GraduationCap size={18} />
                  Explore Cordyceps Training
                </Link>
                <Link
                  to="/cordyceps"
                  className="setup-btn setup-btn-secondary"
                >
                  Learn About Cordyceps Militaris
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 12: Buyback Guarantee — Support Beyond Production */}
      <section id="buyback-guarantee" className="setup-section setup-buyback-section">
        <div className="container">
          <div className="setup-buyback-main-card">
            {/* Header / Intro */}
            <div className="setup-buyback-header text-center">
              <span className="setup-badge">
                <ShieldCheck size={15} />
                MARKET LINKAGE & ASSURANCE
              </span>
              <h2 className="setup-section-title">Buyback Guarantee — Support Beyond Production</h2>
              <div className="setup-gold-divider mx-auto"></div>
              <p className="setup-buyback-intro-p">
                Setting up a Cordyceps production unit is only the beginning. Once production starts, having a reliable market-support system can be an important part of building a sustainable cultivation business.
              </p>
              <p className="setup-buyback-intro-p">
                Sumoriya Organic provides a <strong>Buyback Guarantee</strong> for eligible Cordyceps production, subject to applicable quality, quantity and commercial terms.
              </p>
            </div>

            {/* Subsection: How It Fits Into Your Journey */}
            <div className="setup-buyback-journey-block">
              <h3 className="setup-journey-heading text-center">How It Fits Into Your Journey</h3>
              <div className="setup-journey-steps">
                <div className="setup-journey-step">
                  <span className="setup-journey-num">1</span>
                  <span className="setup-journey-title">Training</span>
                </div>
                <div className="setup-journey-arrow" aria-hidden="true">
                  <ArrowRight size={20} className="setup-journey-arrow-desktop" />
                  <ArrowDown size={20} className="setup-journey-arrow-mobile" />
                </div>
                <div className="setup-journey-step">
                  <span className="setup-journey-num">2</span>
                  <span className="setup-journey-title">Production Unit Setup</span>
                </div>
                <div className="setup-journey-arrow" aria-hidden="true">
                  <ArrowRight size={20} className="setup-journey-arrow-desktop" />
                  <ArrowDown size={20} className="setup-journey-arrow-mobile" />
                </div>
                <div className="setup-journey-step">
                  <span className="setup-journey-num">3</span>
                  <span className="setup-journey-title">Cultivation & Production</span>
                </div>
                <div className="setup-journey-arrow" aria-hidden="true">
                  <ArrowRight size={20} className="setup-journey-arrow-desktop" />
                  <ArrowDown size={20} className="setup-journey-arrow-mobile" />
                </div>
                <div className="setup-journey-step highlight">
                  <span className="setup-journey-num">4</span>
                  <span className="setup-journey-title">Buyback Guarantee</span>
                </div>
              </div>
              <p className="setup-journey-support-text text-center">
                Eligible production can be supported through Sumoriya Organic's Buyback Guarantee, subject to applicable terms.
              </p>
            </div>

            {/* Subsection: Why Buyback Support Matters */}
            <div className="setup-buyback-cards-block">
              <h3 className="setup-cards-heading text-center">Why Buyback Support Matters</h3>
              <div className="setup-buyback-grid">
                <div className="setup-buyback-card">
                  <div className="setup-buyback-card-icon">
                    <TrendingUp size={22} />
                  </div>
                  <h4 className="setup-buyback-card-title">Market Support</h4>
                  <p className="setup-buyback-card-desc">
                    A defined buyback pathway can provide greater clarity after production.
                  </p>
                </div>

                <div className="setup-buyback-card">
                  <div className="setup-buyback-card-icon">
                    <Factory size={22} />
                  </div>
                  <h4 className="setup-buyback-card-title">Production-Focused Approach</h4>
                  <p className="setup-buyback-card-desc">
                    Our focus extends beyond setting up the unit.
                  </p>
                </div>

                <div className="setup-buyback-card">
                  <div className="setup-buyback-card-icon">
                    <Handshake size={22} />
                  </div>
                  <h4 className="setup-buyback-card-title">Long-Term Support</h4>
                  <p className="setup-buyback-card-desc">
                    We aim to support the journey from cultivation to production.
                  </p>
                </div>

                <div className="setup-buyback-card">
                  <div className="setup-buyback-card-icon">
                    <FileCheck2 size={22} />
                  </div>
                  <h4 className="setup-buyback-card-title">Clear Terms</h4>
                  <p className="setup-buyback-card-desc">
                    Buyback is subject to applicable quality, quantity and commercial requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Important Note / Disclaimer */}
            <div className="setup-buyback-disclaimer-card">
              <AlertCircle size={22} className="setup-disclaimer-icon" />
              <p className="setup-disclaimer-text">
                <strong>Important Note:</strong> Buyback eligibility, quality requirements, quantity requirements and other commercial terms may apply. Please contact the Sumoriya Organic team for current Buyback Guarantee details.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="setup-buyback-actions-wrapper">
              <button
                type="button"
                onClick={onOpenWhatsApp}
                className="setup-btn setup-btn-gold"
              >
                <ShieldCheck size={18} />
                Discuss Buyback Guarantee
              </button>
              <button
                type="button"
                onClick={onOpenContact}
                className="setup-btn setup-btn-secondary"
              >
                <ArrowRight size={18} />
                Start Your Production Journey
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 13: Why Choose Sumoriya Organic for Production Unit Setup? */}
      <section className="setup-section setup-why-section">
        <div className="container">
          <div className="setup-section-header text-center">
            <span className="setup-section-tag">SUMORIYA ADVANTAGE</span>
            <h2 className="setup-section-title">
              Why Choose Sumoriya Organic for Production Unit Setup?
            </h2>
            <p className="setup-section-subtitle">
              We combine specialized mycology knowledge, operational lab experience, and structured grower
              support.
            </p>
          </div>

          <div className="setup-why-grid">
            {whyChooseUs.map((w, idx) => (
              <div key={idx} className="setup-why-card">
                <div className="setup-why-icon-box">
                  <CheckCircle2 size={20} />
                </div>
                <h3 className="setup-why-title">{w.title}</h3>
                <p className="setup-why-desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="setup-section setup-faq-section">
        <div className="container">
          <div className="setup-section-header text-center">
            <span className="setup-section-tag">QUESTIONS & ANSWERS</span>
            <h2 className="setup-section-title">
              Frequently Asked Questions About Cordyceps Production Unit Setup
            </h2>
            <p className="setup-section-subtitle">
              Common questions answered about setting up, planning, and optimizing a Cordyceps militaris
              cultivation unit.
            </p>
          </div>

          <div className="setup-faq-list">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`setup-faq-item ${isOpen ? 'active' : ''}`}
                >
                  <button
                    type="button"
                    className="setup-faq-question"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={20}
                      className={`setup-faq-chevron ${isOpen ? 'rotated' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="setup-faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="setup-section setup-final-cta">
        <div className="container">
          <div className="setup-cta-card">
            <span className="setup-badge">
              <Sparkles size={15} />
              GET STARTED TODAY
            </span>
            <h2 className="setup-cta-title">Ready to Plan Your Cordyceps Production Unit?</h2>
            <p className="setup-cta-desc">
              Tell us about your available space, production plans and requirements. Our team can help you
              understand the right approach for planning your Cordyceps production setup.
            </p>
            <div className="setup-cta-buttons">
              <button
                type="button"
                onClick={onOpenWhatsApp}
                className="setup-btn setup-btn-primary"
              >
                <MessageCircle size={18} />
                Discuss Your Production Unit
              </button>
              <button
                type="button"
                onClick={onOpenContact}
                className="setup-btn setup-btn-secondary"
              >
                <PhoneCall size={18} />
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductionSetupPage;
