import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Thermometer,
  Droplets,
  Sun,
  Wind,
  Sparkles,
  FlaskConical,
  ShieldCheck,
  Building2,
  GraduationCap
} from 'lucide-react';
import './CordycepsPage.css';

const CordycepsPage = ({ onOpenWhatsApp, onOpenContact }) => {
  useEffect(() => {
    document.title = 'Cordyceps Militaris Mushroom | Cultivation, Biology & Benefits | Sumoriya Organic';

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      'Discover Cordyceps militaris: species biology, controlled lab cultivation parameters, medicinal value, and commercial mushroom farming feasibility in India with Sumoriya Organic.';

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://sumoriyaorganic.com/cordyceps';
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const uniqueCards = [
    {
      title: 'Distinctive Appearance',
      text: 'Cordyceps militaris develops slender, club-shaped fruiting bodies that typically display a vibrant orange to orange-red colour.',
      icon: <Sparkles size={24} />
    },
    {
      title: 'Specialized Cultivation',
      text: 'Its cultivation requires controlled environmental conditions and careful management throughout the production cycle.',
      icon: <FlaskConical size={24} />
    },
    {
      title: 'Controlled Indoor Production',
      text: 'Unlike traditional field cultivation, Cordyceps militaris can be produced indoors under managed environmental conditions.',
      icon: <Building2 size={24} />
    }
  ];

  const comparisonData = [
    {
      feature: 'Scientific identity',
      militaris: 'Cordyceps militaris',
      sinensis: 'Commonly associated with Ophiocordyceps sinensis'
    },
    {
      feature: 'Natural habitat',
      militaris: 'Broadly distributed in various regions',
      sinensis: 'Naturally associated with high-altitude ecosystems'
    },
    {
      feature: 'Cultivation',
      militaris: 'Can be cultivated under controlled conditions',
      sinensis: 'Traditional natural form is difficult to cultivate'
    },
    {
      feature: 'Appearance',
      militaris: 'Typically orange fruiting bodies',
      sinensis: 'Naturally occurring form has a different appearance'
    },
    {
      feature: 'Commercial cultivation',
      militaris: 'Established controlled-cultivation methods exist',
      sinensis: 'Natural wild product is much more limited'
    }
  ];

  const processSteps = [
    {
      step: 'STEP 01',
      title: 'CULTURE',
      desc: 'A healthy culture provides the starting material for controlled cultivation.'
    },
    {
      step: 'STEP 02',
      title: 'INOCULATION',
      desc: 'The culture is introduced into a prepared substrate under controlled and hygienic conditions.'
    },
    {
      step: 'STEP 03',
      title: 'MYCELIAL GROWTH',
      desc: 'The mycelium develops through the substrate during the incubation stage.'
    },
    {
      step: 'STEP 04',
      title: 'FRUITING',
      desc: 'Under suitable environmental conditions, the characteristic fruiting bodies begin to develop.'
    },
    {
      step: 'STEP 05',
      title: 'HARVEST',
      desc: 'Mature fruiting bodies are harvested and handled appropriately for further processing or use.'
    }
  ];

  const conditions = [
    {
      title: 'Temperature',
      desc: 'Maintaining an appropriate temperature range for each stage of cultivation.',
      icon: <Thermometer size={22} />
    },
    {
      title: 'Humidity',
      desc: 'Managing moisture levels according to the production stage.',
      icon: <Droplets size={22} />
    },
    {
      title: 'Light',
      desc: 'Providing suitable lighting conditions during fruiting development.',
      icon: <Sun size={22} />
    },
    {
      title: 'Air Exchange',
      desc: 'Maintaining appropriate ventilation and gas exchange.',
      icon: <Wind size={22} />
    },
    {
      title: 'Hygiene',
      desc: 'Following clean working practices to reduce contamination risks.',
      icon: <ShieldCheck size={22} />
    }
  ];

  const precisionPoints = [
    'Culture Quality',
    'Clean Production Practices',
    'Environmental Control',
    'Consistent Monitoring'
  ];

  const faqs = [
    {
      q: 'What is Cordyceps militaris?',
      a: 'Cordyceps militaris is a species of fungus known for its distinctive orange fruiting bodies and its ability to be cultivated under controlled conditions.'
    },
    {
      q: 'Is Cordyceps militaris a mushroom?',
      a: 'It is a cultivated fungal species that produces a mushroom-like fruiting body. It belongs to the fungal kingdom.'
    },
    {
      q: 'Can Cordyceps militaris be cultivated indoors?',
      a: 'Yes. It can be cultivated indoors under controlled environmental conditions using suitable substrates and cultivation procedures.'
    },
    {
      q: 'How is Cordyceps militaris different from Cordyceps sinensis?',
      a: 'They are different species. Cordyceps militaris is commonly cultivated under controlled conditions, while the naturally occurring form traditionally associated with Cordyceps sinensis comes from a very different natural environment.'
    },
    {
      q: 'What conditions are important for cultivation?',
      a: 'Temperature, humidity, light, air exchange, substrate quality and hygiene are among the important factors that need to be managed.'
    },
    {
      q: 'Is Cordyceps cultivation the same as ordinary mushroom cultivation?',
      a: 'No. Although both involve fungal cultivation, Cordyceps militaris has specific biological and environmental requirements that make its production more specialized.'
    }
  ];

  return (
    <div className="cordyceps-page">
      {/* 1. Page Title / Hero */}
      <section className="cordyceps-hero">
        <div className="cordyceps-container">
          <nav className="cordyceps-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="cordyceps-breadcrumb-sep">/</span>
            <span>Cordyceps Militaris</span>
          </nav>
          <span className="cordyceps-eyebrow">Species Profile & Biology</span>
          <h1 className="cordyceps-hero-title">Cordyceps Militaris</h1>
          <p className="cordyceps-hero-subheading">
            Understanding the Species, Its Characteristics and Controlled Cultivation
          </p>
          <p className="cordyceps-hero-intro">
            Cordyceps militaris is a distinctive fungal species known for its bright orange fruiting
            bodies and ability to be cultivated under controlled indoor conditions. Its unique
            biology and specialized cultivation process have made it an important species in the
            field of cultivated functional mushrooms.
          </p>
          <button
            type="button"
            className="cordyceps-hero-btn"
            onClick={() => scrollToSection('what-is-cordyceps')}
          >
            Explore Cordyceps
          </button>
        </div>
      </section>

      {/* 2. What is Cordyceps Militaris? */}
      <section className="cordyceps-section" id="what-is-cordyceps">
        <div className="cordyceps-container">
          <div className="cordyceps-section-header">
            <span className="cordyceps-eyebrow">BIOLOGICAL CLASSIFICATION</span>
            <h2 className="cordyceps-section-title">What is Cordyceps Militaris?</h2>
          </div>
          <div className="what-is-box">
            <p>
              Cordyceps militaris is a species of entomopathogenic fungus belonging to the
              Cordycipitaceae family. In nature, it is associated with insects and their larvae.
              Under controlled cultivation, however, Cordyceps militaris can be grown on prepared
              substrates to produce its characteristic orange fruiting bodies.
            </p>
            <p>
              Unlike many commonly cultivated mushrooms, Cordyceps militaris requires a more
              controlled production environment. Factors such as substrate composition,
              temperature, humidity, light, airflow and hygiene can influence its growth and
              fruiting.
            </p>
          </div>
        </div>
      </section>

      {/* 3. A Unique Cultivated Mushroom */}
      <section className="cordyceps-section cordyceps-section-alt">
        <div className="cordyceps-container">
          <div className="cordyceps-section-header text-center">
            <span className="cordyceps-eyebrow">DISTINCT CHARACTERISTICS</span>
            <h2 className="cordyceps-section-title">A Unique Cultivated Mushroom</h2>
          </div>
          <div className="unique-grid">
            {uniqueCards.map((card) => (
              <div key={card.title} className="unique-card">
                <div className="unique-card-icon">{card.icon}</div>
                <h3 className="unique-card-title">{card.title}</h3>
                <p className="unique-card-text">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Cordyceps Militaris vs. Cordyceps Sinensis */}
      <section className="cordyceps-section">
        <div className="cordyceps-container">
          <div className="cordyceps-section-header">
            <span className="cordyceps-eyebrow">SPECIES COMPARISON</span>
            <h2 className="cordyceps-section-title">
              Cordyceps Militaris vs. Cordyceps Sinensis
            </h2>
            <p className="cordyceps-section-desc">
              Understanding the key biological, ecological, and commercial differences between the two species.
            </p>
          </div>

          <div className="compare-table-wrapper">
            <table className="compare-table">
              <thead>
                <tr>
                  <th className="col-feature">Feature</th>
                  <th className="col-militaris">Cordyceps Militaris</th>
                  <th className="col-sinensis">Cordyceps Sinensis</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row) => (
                  <tr key={row.feature}>
                    <td className="cell-feature">{row.feature}</td>
                    <td className="cell-militaris">{row.militaris}</td>
                    <td className="cell-sinensis">{row.sinensis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="compare-note">
            "The two are related but are not the same species."
          </div>
        </div>
      </section>

      {/* 5. From Mycelium to Fruiting Body */}
      <section className="cordyceps-section cordyceps-section-alt">
        <div className="cordyceps-container">
          <div className="cordyceps-section-header text-center">
            <span className="cordyceps-eyebrow">CULTIVATION CYCLE</span>
            <h2 className="cordyceps-section-title">From Mycelium to Fruiting Body</h2>
            <p className="cordyceps-section-desc">
              A structured overview of the foundational biological phases in controlled indoor production.
            </p>
          </div>

          <div className="process-chain">
            {processSteps.map((step) => (
              <div key={step.step} className="process-card">
                <span className="process-step-num">{step.step}</span>
                <h3 className="process-card-title">{step.title}</h3>
                <p className="process-card-text">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Controlled Conditions Matter */}
      <section className="cordyceps-section">
        <div className="cordyceps-container">
          <div className="cordyceps-section-header">
            <span className="cordyceps-eyebrow">ENVIRONMENTAL PARAMETERS</span>
            <h2 className="cordyceps-section-title">Controlled Conditions Matter</h2>
            <p className="cordyceps-section-desc">
              Cordyceps militaris cultivation depends on maintaining suitable environmental
              conditions throughout its growth cycle. Consistency and cleanliness are particularly
              important for controlled production.
            </p>
          </div>

          <div className="conditions-grid">
            {conditions.map((item) => (
              <div key={item.title} className="condition-card">
                <div className="condition-icon">{item.icon}</div>
                <h3 className="condition-title">{item.title}</h3>
                <p className="condition-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. The Growing Substrate */}
      <section className="cordyceps-section cordyceps-section-alt">
        <div className="cordyceps-container">
          <div className="cordyceps-section-header">
            <span className="cordyceps-eyebrow">NUTRITIONAL MEDIUM</span>
            <h2 className="cordyceps-section-title">The Growing Substrate</h2>
          </div>
          <div className="info-panel">
            <p>
              The substrate provides the nutritional base required for mycelial development and
              fruiting. Its composition, preparation, moisture level and sterilization are important
              parts of the cultivation process.
            </p>
            <p>
              A properly prepared substrate helps create a consistent environment for mycelial growth
              and subsequent fruiting.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Precision Matters */}
      <section className="cordyceps-section">
        <div className="cordyceps-container">
          <div className="cordyceps-section-header">
            <span className="cordyceps-eyebrow">OPERATIONAL DISCIPLINE</span>
            <h2 className="cordyceps-section-title">Precision Matters</h2>
            <p className="cordyceps-section-desc">
              Cordyceps militaris is not simply a mushroom that can be placed in a room and left to
              grow. Successful cultivation requires attention to environmental conditions,
              substrate preparation, culture quality, hygiene and day-to-day monitoring.
            </p>
          </div>

          <div className="precision-grid">
            {precisionPoints.map((point) => (
              <div key={point} className="precision-item">
                <span className="precision-dot"></span>
                <span>{point}</span>
              </div>
            ))}
          </div>

          <div className="precision-highlight">
            "Good cultivation begins with understanding the biology of the organism and controlling
            the environment around it."
          </div>
        </div>
      </section>

      {/* 9. From Nature to Controlled Production */}
      <section className="cordyceps-section cordyceps-section-alt">
        <div className="cordyceps-container">
          <div className="cordyceps-section-header">
            <span className="cordyceps-eyebrow">EVOLUTION OF CULTIVATION</span>
            <h2 className="cordyceps-section-title">From Nature to Controlled Production</h2>
          </div>
          <div className="info-panel">
            <p>
              Cordyceps militaris has a fascinating natural life cycle associated with insects.
              Modern cultivation techniques allow the species to be produced under controlled
              indoor conditions using prepared substrates and managed environmental parameters.
            </p>
            <p>
              This transition from natural occurrence to controlled cultivation has opened the door
              to structured production systems and specialized cultivation practices.
            </p>
          </div>
        </div>
      </section>

      {/* 10. Knowledge Before Cultivation */}
      <section className="cordyceps-section">
        <div className="cordyceps-container">
          <div className="cordyceps-section-header">
            <span className="cordyceps-eyebrow">FOUNDATIONAL LEARNING</span>
            <h2 className="cordyceps-section-title">Knowledge Before Cultivation</h2>
          </div>
          <div className="knowledge-box">
            <p>
              Understanding the organism is the first step towards understanding its cultivation. Its
              biology, growth requirements and environmental sensitivity all influence how a
              production system should be designed and managed.
            </p>
            <p>
              For anyone exploring Cordyceps cultivation, developing a clear understanding of the
              species provides a strong foundation for the next stage of learning and production
              planning.
            </p>
            <div className="knowledge-actions">
              <a href="/#gallery" className="btn-action-primary">
                <GraduationCap size={18} />
                Explore Training
              </a>
              <a href="/#process" className="btn-action-secondary">
                <Building2 size={18} />
                Explore Production Unit Setup
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="cordyceps-section cordyceps-section-alt">
        <div className="cordyceps-container">
          <div className="cordyceps-section-header text-center">
            <span className="cordyceps-eyebrow">QUESTIONS & ANSWERS</span>
            <h2 className="cordyceps-section-title">Frequently Asked Questions</h2>
            <p className="cordyceps-section-desc">
              Common questions regarding Cordyceps militaris biology, characteristics, and indoor cultivation.
            </p>
          </div>

          <div className="faq-grid">
            {faqs.map((faq) => (
              <div key={faq.q} className="faq-card">
                <h3 className="faq-question">{faq.q}</h3>
                <p className="faq-answer">"{faq.a}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta-section">
        <div className="cordyceps-container">
          <div className="final-cta-box">
            <div className="final-cta-content">
              <h2>Interested in Understanding Cordyceps Cultivation?</h2>
              <p>
                Explore the next step with Sumoriya Organic and learn more about practical
                cultivation, training and production possibilities.
              </p>
            </div>
            <div className="final-cta-actions">
              <a href="/#gallery" className="btn-final-primary">
                Explore Training
              </a>
              <a href="/#process" className="btn-final-outline">
                Production Unit Setup
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CordycepsPage;
