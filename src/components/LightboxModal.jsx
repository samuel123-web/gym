import React, { useEffect } from 'react';
import { X, Tag } from 'lucide-react';

export function LightboxModal({ item, onClose }) {
  useEffect(() => {
    if (item) {
      document.body.classList.add('scroll-locked');
    } else {
      document.body.classList.remove('scroll-locked');
    }
    return () => document.body.classList.remove('scroll-locked');
  }, [item]);

  if (!item) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        style={{ maxWidth: '900px', padding: '1rem', backgroundColor: '#0D0D0E', border: '1px solid var(--border-color)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close lightbox">
          <X size={20} />
        </button>

        <div style={{ width: '100%', maxHeight: '70vh', overflow: 'hidden', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }}>
          <img
            src={item.image}
            alt={item.title}
            style={{ width: '100%', height: '100%', objectFit: 'contain', maxHeight: '70vh' }}
          />
        </div>

        <div style={{ padding: '0.5rem 1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-orange)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.25rem' }}>
            <Tag size={14} /> {item.category}
          </div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{item.title}</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{item.caption}</p>
        </div>
      </div>
    </div>
  );
}
