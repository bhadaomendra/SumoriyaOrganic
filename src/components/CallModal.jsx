import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';

const CallModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', city: '' });
  const [done, setDone] = useState(false);

  // Close modal when Escape key is pressed
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setDone(true);
    setTimeout(() => {
      setDone(false);
      onClose();
    }, 2500);
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.68)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '16px'
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#ffffff',
          borderRadius: 'var(--radius, 18px)',
          width: '100%',
          maxWidth: '480px',
          maxHeight: 'calc(100vh - 32px)',
          overflowY: 'auto',
          padding: 'clamp(22px, 5vw, 36px)',
          position: 'relative',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.35)',
          border: '1px solid rgba(0, 0, 0, 0.08)'
        }}
      >
        {/* Prominent, Clearly Visible Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal (Esc)"
          title="Close (Esc)"
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            background: '#f3f4f6',
            border: '1px solid #e5e7eb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#17251d',
            zIndex: 10,
            transition: 'all 0.2s ease',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.06)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#e5e7eb';
            e.currentTarget.style.color = '#000000';
            e.currentTarget.style.transform = 'scale(1.08)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#f3f4f6';
            e.currentTarget.style.color = '#17251d';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <X size={20} strokeWidth={2.4} />
        </button>

        {done ? (
          <div style={{ textAlign: 'center', padding: '30px 10px' }}>
            <CheckCircle size={48} color="var(--orange, #e96b25)" style={{ margin: '0 auto 16px' }} />
            <h3 style={{ fontSize: '1.4rem', color: 'var(--ink, #17251d)', marginBottom: '8px' }}>
              Request Received!
            </h3>
            <p style={{ color: 'var(--muted, #647067)', fontSize: '0.92rem' }}>
              Humare senior advisor 15 minute mein <b>{formData.phone}</b> par call karenge.
            </p>
          </div>
        ) : (
          <div>
            <h3
              id="modal-title"
              className="font-serif"
              style={{ fontSize: '1.8rem', color: 'var(--ink, #17251d)', marginBottom: '6px', paddingRight: '36px' }}
            >
              Request a Call Back
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--muted, #647067)', marginBottom: '24px' }}>
              Apna phone number dijiye, humare expert aapko Call Back karenge.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '16px' }}>
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: '700', display: 'block', marginBottom: '6px', color: 'var(--ink, #17251d)' }}>
                  Name (Aapka Naam)*
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    border: '1px solid var(--line, #d1d5db)',
                    outline: 'none',
                    fontSize: '16px',
                    color: 'var(--ink, #17251d)',
                    background: '#ffffff'
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: '700', display: 'block', marginBottom: '6px', color: 'var(--ink, #17251d)' }}>
                  Phone Number (WhatsApp)*
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9XXXXXXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    border: '1px solid var(--line, #d1d5db)',
                    outline: 'none',
                    fontSize: '16px',
                    color: 'var(--ink, #17251d)',
                    background: '#ffffff'
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: '700', display: 'block', marginBottom: '6px', color: 'var(--ink, #17251d)' }}>
                  City / Location*
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jaipur"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    border: '1px solid var(--line, #d1d5db)',
                    outline: 'none',
                    fontSize: '16px',
                    color: 'var(--ink, #17251d)',
                    background: '#ffffff'
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn-pill btn-pill-orange"
                style={{ width: '100%', marginTop: '8px' }}
              >
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
