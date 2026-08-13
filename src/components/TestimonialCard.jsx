import React from 'react';
import { Star, Quote } from 'lucide-react';

export function TestimonialCard({ testimonial, currentLang = 'am' }) {
  const isAmharic = currentLang === 'am';
  const quote = isAmharic ? testimonial.quoteAm : testimonial.quoteEn;
  const role = isAmharic ? testimonial.roleAm : testimonial.roleEn;
  const program = isAmharic ? testimonial.programAm : testimonial.programEn;

  return (
    <div className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyBetween: 'space-between', marginBottom: '1.25rem' }}>
        <div style={{ display: 'flex', gap: '0.25rem' }}>
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} size={18} fill="#F97316" color="#F97316" />
          ))}
        </div>
        <Quote size={28} style={{ color: 'var(--accent-orange-dim)', marginLeft: 'auto' }} />
      </div>

      <p style={{ fontStyle: 'italic', color: '#E4E4E7', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.5rem', flexGrow: 1 }}>
        "{quote}"
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--accent-orange)' }}
          loading="lazy"
        />
        <div>
          <h4 style={{ fontSize: '1.05rem', color: 'var(--text-main)' }}>{testimonial.name}</h4>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{role} • {program}</span>
        </div>
      </div>
    </div>
  );
}
