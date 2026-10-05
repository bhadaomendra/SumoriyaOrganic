import React from 'react';
import { GraduationCap, Award, Video, Users, CheckCircle } from 'lucide-react';

const Training = ({ onOpenContact }) => {
  return (
    <section id="training" className="section-padding" style={{ background: '#ffffff' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
          <div>
            <span className="section-tag">Skill & Certification</span>
            <h2 className="section-title">Practical Training & Masterclass Program</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '1.05rem' }}>
              Mushroom kheti mein safalta ke liye sahi gyaan zaroori hai. Humare <b>Practical Offline Classes</b> aur <b>Live Online Batches</b> mein sikhein substrate preparation se lekar disease prevention tak sab kuch!
            </p>

            <div style={{ display: 'grid', gap: '16px', marginBottom: '30px' }}>
              <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary-subtle)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-dark)' }}>Online & Offline Flexible Batches</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Ghar baithe video module ya humare farm par aakar practical hands-on training lein.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--gold-subtle)', color: 'var(--gold-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Award size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-dark)' }}>ISO Certified Govt-Recognized Training</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Course completion ke baad verified Certificate milta hai jo bank loan mein maddad karta hai.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary-subtle)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Users size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-dark)' }}>Lifetime Support & Agronomist Call</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Farming ke dauran koi bhi samasya aane par humari expert team 24/7 guided helpline deti hai.</p>
                </div>
              </div>
            </div>

            <button onClick={onOpenContact} className="btn btn-primary">
              Enroll In Next Training Batch
            </button>
          </div>

          <div style={{ position: 'relative' }}>
            <img 
              src="/cordyceps_kit.jpg" 
              alt="Mushroom Training Class" 
              style={{
                width: '100%',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-lg)',
                border: '4px solid #ffffff'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;
