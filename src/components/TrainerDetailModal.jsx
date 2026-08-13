import React from 'react';
import { X, Award, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from './Button';

export function TrainerDetailModal({ trainer, onClose, onBookTrainer, currentLang = 'am' }) {
  if (!trainer) return null;
  const isAmharic = currentLang === 'am';

  const name = isAmharic ? trainer.nameAm : trainer.nameEn;
  const role = isAmharic ? trainer.roleAm : trainer.roleEn;
  const detailedBio = isAmharic ? trainer.detailedBioAm : trainer.detailedBioEn;
  const philosophy = isAmharic ? trainer.philosophyAm : trainer.philosophyEn;
  const experience = isAmharic ? trainer.experienceAm : trainer.experienceEn;
  const certifications = isAmharic ? trainer.certificationsAm : trainer.certificationsEn;
  const availability = isAmharic ? trainer.availabilityAm : trainer.availabilityEn;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" style={{ maxWidth: '800px' }} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '2rem' }}>
          <div>
            <img
              src={trainer.image}
              alt={name}
              style={{ width: '100%', height: '360px', objectFit: 'cover', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}
            />
            <div style={{ marginTop: '1.25rem' }}>
              <span className="section-badge" style={{ marginBottom: '0.25rem' }}>
                {isAmharic ? "ልምድ" : "EXPERIENCE"}
              </span>
              <h4 style={{ fontSize: '1.25rem', color: 'var(--accent-orange)' }}>{experience}</h4>
            </div>
          </div>

          <div>
            <span className="trainer-role">{role}</span>
            <h2 style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{name}</h2>
            
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: '1.6' }}>
              {detailedBio}
            </p>

            <div className="philosophy-card" style={{ padding: '1rem', margin: '1rem 0' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-orange)', textTransform: 'uppercase', display: 'block', marginBottom: '0.25rem' }}>
                {isAmharic ? "የአሰልጣኝነት ፍልስፍና" : "Coaching Philosophy"}
              </span>
              <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: 'var(--text-main)', margin: 0 }}>
                "{philosophy}"
              </p>
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <h4 style={{ fontSize: '0.9rem', color: 'var(--text-main)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Award size={16} style={{ color: 'var(--accent-orange)' }} /> {isAmharic ? "የተረጋገጡ የትምህርት ማስረጃዎች" : "Certifications & Credentials"}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {certifications.map((cert, idx) => (
                  <li key={idx} style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={14} style={{ color: 'var(--accent-orange)' }} />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              <Clock size={16} style={{ color: 'var(--accent-orange)' }} />
              <span>{isAmharic ? "የስራ ሰዓት፡" : "Availability:"} <strong>{availability}</strong></span>
            </div>

            <Button
              variant="primary"
              icon={ArrowRight}
              onClick={() => {
                onClose();
                onBookTrainer(isAmharic ? `ከ${name} ጋር የግል ስልጠና ማስያዝ` : `1-on-1 Session with ${name}`);
              }}
              style={{ width: '100%' }}
            >
              {isAmharic ? `ከ${name} ጋር ስልጠና ያስይዙ` : `BOOK SESSION WITH ${name.split(' ')[0].toUpperCase()}`}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
