import React from 'react';
import { Star, MapPin, Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: 'Ramesh Sharma',
      location: 'Jaipur, Rajasthan',
      role: 'Oyster Mushroom Grower (200 sq ft)',
      income: '₹35,000 / month',
      text: 'Maine apne khali kamre se Sumoriya ke saath shuruat ki thi. Training bohot aasaan thi aur har mahine mera buyback payment time par bank account mein aa jata hai.',
      stars: 5
    },
    {
      name: 'Mukesh Patel',
      location: 'Udaipur, Rajasthan',
      role: 'Commercial Setup (500 sq ft)',
      income: '₹85,000 / month',
      text: 'Sumoriya ki agronomist team bohot supportive hai. Shuruat mein humidity control mein problem aayi thi toh unhone video call par guide karke solve karwaya.',
      stars: 5
    },
    {
      name: 'Sunita Devi',
      location: 'Sikar, Rajasthan',
      role: 'Oyster & Milky Mushroom (150 sq ft)',
      income: '₹28,000 / month',
      text: 'Ghar ke kaam ke saath-saath 2 ghante roz dekar yeh kheti aasaani se chal rahi hai. Aatmanirbhar banne ka yeh sabse behtar rasta hai.',
      stars: 5
    }
  ];

  return (
    <section id="testimonials" className="section-padding">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">Success Stories</span>
          <h2 className="section-title">Humare Growers Ki Zubani</h2>
          <p className="section-subtitle">
            Rajasthan aur pure Bharat se 350+ log Sumoriya Organic ke saath judkar har mahine acchi aamdani kamaye hain.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {reviews.map((rev, index) => (
            <div key={index} className="card" style={{ position: 'relative' }}>
              <Quote size={40} color="var(--primary-subtle)" style={{ position: 'absolute', top: '20px', right: '20px' }} />

              <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                {[...Array(rev.stars)].map((_, i) => (
                  <Star key={i} size={18} fill="var(--gold-main)" color="var(--gold-main)" />
                ))}
              </div>

              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '24px', fontStyle: 'italic' }}>
                "{rev.text}"
              </p>

              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--primary-dark)' }}>{rev.name}</h4>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    <MapPin size={14} color="var(--primary)" />
                    <span>{rev.location}</span>
                  </div>
                </div>

                <div style={{ background: 'var(--primary-subtle)', padding: '6px 12px', borderRadius: 'var(--radius-sm)', color: 'var(--primary-dark)', fontWeight: '700', fontSize: '0.85rem' }}>
                  {rev.income}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
