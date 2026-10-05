import React, { useState } from 'react';
import { Send, Phone, MapPin, Mail, MessageSquare, CheckCircle } from 'lucide-react';

const ContactForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    spaceSize: '100-200 sq ft (1 Room)',
    mushroomType: 'Oyster Mushroom'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Automatic WhatsApp redirection option
      const message = `Namaste Sumoriya Organic! Mera naam ${formData.name} hai (${formData.city}). Main mushroom farming setup ki jankari chahta hoon. Space: ${formData.spaceSize}. Phone: ${formData.phone}`;
      const url = `https://wa.me/919829000000?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    }, 1200);
  };

  return (
    <section id="contact" className="section-padding" style={{ background: '#f8faf8' }}>
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto', background: '#ffffff', borderRadius: 'var(--radius-lg)', padding: '40px', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border)' }}>
          
          <div className="section-head" style={{ marginBottom: '30px' }}>
            <span className="section-tag">Free Guidance & Callback</span>
            <h2 className="section-title">Get Free Consultation & Quote</h2>
            <p className="section-subtitle">
              Apni jankari bharein aur humare expert agronomist se 15 minute mein muft salah paayein.
            </p>
          </div>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{ width: '64px', height: '64px', background: 'var(--primary-subtle)', color: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                <CheckCircle size={36} />
              </div>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--primary-dark)', marginBottom: '10px' }}>Aapka Request Mil Gaya Hai!</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>
                Humari team jald hi aapko <b>{formData.phone}</b> par call karegi. Aapko WhatsApp par redirected kiya ja raha hai...
              </p>
              <button onClick={() => setSubmitted(false)} className="btn btn-outline">
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={{ fontWeight: '600', fontSize: '0.9rem', display: 'block', marginBottom: '6px' }}>Full Name (Aapka Naam)*</label>
                  <input 
                    type="text"
                    required
                    placeholder="e.g. Omendra Singh"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', fontSize: '0.95rem', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ fontWeight: '600', fontSize: '0.9rem', display: 'block', marginBottom: '6px' }}>Mobile Number (WhatsApp)*</label>
                  <input 
                    type="tel"
                    required
                    placeholder="e.g. 98290XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', fontSize: '0.95rem', outline: 'none' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={{ fontWeight: '600', fontSize: '0.9rem', display: 'block', marginBottom: '6px' }}>City / Location (Shehar)*</label>
                  <input 
                    type="text"
                    required
                    placeholder="e.g. Jaipur, Rajasthan"
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', fontSize: '0.95rem', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ fontWeight: '600', fontSize: '0.9rem', display: 'block', marginBottom: '6px' }}>Available Space (Kamra / Space Size)</label>
                  <select 
                    value={formData.spaceSize}
                    onChange={(e) => setFormData({...formData, spaceSize: e.target.value})}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', fontSize: '0.95rem', outline: 'none', background: '#fff' }}
                  >
                    <option>100-200 sq ft (1 Room)</option>
                    <option>300-500 sq ft (2-3 Rooms)</option>
                    <option>500+ sq ft (Big Hall / Shed)</option>
                    <option>Abhi Jagah Tay Nahi Hai</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ fontWeight: '600', fontSize: '0.9rem', display: 'block', marginBottom: '6px' }}>Preferred Mushroom Interest</label>
                <select 
                  value={formData.mushroomType}
                  onChange={(e) => setFormData({...formData, mushroomType: e.target.value})}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', fontSize: '0.95rem', outline: 'none', background: '#fff' }}
                >
                  <option>Oyster Mushroom (ऑयस्टर मशरूम)</option>
                  <option>Button Mushroom (बटन मशरूम)</option>
                  <option>Cordyceps / Keeda Jadi (कीड़ा जड़ी)</option>
                  <option>Multiple / Complete Guidance Needed</option>
                </select>
              </div>

              <button type="submit" className="btn btn-gold" style={{ width: '100%', padding: '16px', fontSize: '1.05rem', marginTop: '10px' }}>
                <Send size={18} />
                <span>Submit & Chat on WhatsApp</span>
              </button>
            </form>
          )}

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
