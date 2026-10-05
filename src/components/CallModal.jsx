import React, { useState } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';

const CallModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({ name: '', phone: '', city: '' });
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDone(true);
    setTimeout(() => {
      setDone(false);
      onClose();
    }, 2500);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.65)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2000,
      padding: '20px'
    }}>
      <div style={{
        background: '#ffffff',
        borderRadius: 'var(--radius-lg)',
        width: '100%',
        maxWidth: '480px',
        padding: '36px',
        position: 'relative',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
      }}>
        <button 
          onClick={onClose} 
          style={{ position: 'absolute', top: '20px', right: '20px', background: 'transparent', border: 'none', cursor: 'pointer' }}
        >
          <X size={24} color="var(--text-muted)" />
        </button>

        {done ? (
          <div style={{ textAlign: 'center', padding: '30px 10px' }}>
            <CheckCircle size={48} color="var(--color-orange)" style={{ margin: '0 auto 16px' }} />
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginBottom: '8px' }}>Request Received!</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
              Humare senior advisor 15 minute mein <b>{formData.phone}</b> par call karenge.
            </p>
          </div>
        ) : (
          <div>
            <h3 className="font-serif" style={{ fontSize: '1.8rem', color: 'var(--text-dark)', marginBottom: '6px' }}>
              Request a Call Back
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
              Apna phone number dijiye, humare expert aapko Call Back karenge.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '16px' }}>
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: '700', display: 'block', marginBottom: '6px' }}>Name (Aapka Naam)*</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  style={{ width: '100%', padding: '12px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', outline: 'none', fontSize: '0.95rem' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: '700', display: 'block', marginBottom: '6px' }}>Phone Number (WhatsApp)*</label>
                <input 
                  type="tel" 
                  required 
                  placeholder="e.g. 98290XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  style={{ width: '100%', padding: '12px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', outline: 'none', fontSize: '0.95rem' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: '700', display: 'block', marginBottom: '6px' }}>City / Location*</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Jaipur"
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                  style={{ width: '100%', padding: '12px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', outline: 'none', fontSize: '0.95rem' }}
                />
              </div>

              <button type="submit" className="btn-pill btn-orange" style={{ width: '100%', marginTop: '8px' }}>
                <Send size={18} />
                <span>Submit Call Request</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default CallModal;
