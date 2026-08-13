import React, { useEffect } from 'react';
import { X, Check, Clock, Calendar, Gauge, ArrowRight } from 'lucide-react';
import { Button } from './Button';

export function ProgramDetailModal({ program, onClose, onBookProgram, currentLang = 'am' }) {
  useEffect(() => {
    if (program) {
      document.body.classList.add('scroll-locked');
    } else {
      document.body.classList.remove('scroll-locked');
    }
    return () => document.body.classList.remove('scroll-locked');
  }, [program]);

  if (!program) return null;
  const isAmharic = currentLang === 'am';

  const name = isAmharic ? program.nameAm : program.nameEn;
  const category = isAmharic ? program.categoryAm : program.categoryEn;
  const fullDescription = isAmharic ? program.fullDescriptionAm : program.fullDescriptionEn;
  const duration = isAmharic ? program.durationAm : program.durationEn;
  const difficulty = isAmharic ? program.difficultyAm : program.difficultyEn;
  const scheduleSummary = isAmharic ? program.scheduleSummaryAm : program.scheduleSummaryEn;
  const benefits = isAmharic ? program.benefitsAm : program.benefitsEn;
  const targetAudience = isAmharic ? program.targetAudienceAm : program.targetAudienceEn;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" style={{ maxWidth: '750px' }} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="program-image-wrapper" style={{ height: '220px', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem' }}>
          <img src={program.image} alt={name} className="program-image" />
          <span className="program-category-tag">{category}</span>
        </div>

        <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{name}</h2>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
          {fullDescription}
        </p>

        <div className="responsive-grid-3" style={{ marginBottom: '1.5rem', backgroundColor: 'var(--bg-input)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', display: 'block', textTransform: 'uppercase' }}>
              {isAmharic ? "ጊዜ" : "Duration"}
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-main)', fontWeight: 700, fontSize: '0.95rem' }}>
              <Clock size={16} style={{ color: 'var(--accent-orange)' }} /> {duration}
            </div>
          </div>
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', display: 'block', textTransform: 'uppercase' }}>
              {isAmharic ? "ደረጃ" : "Difficulty"}
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-main)', fontWeight: 700, fontSize: '0.95rem' }}>
              <Gauge size={16} style={{ color: 'var(--accent-orange)' }} /> {difficulty}
            </div>
          </div>
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', display: 'block', textTransform: 'uppercase' }}>
              {isAmharic ? "የጊዜ ሰሌዳ" : "Schedule"}
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-main)', fontWeight: 700, fontSize: '0.85rem' }}>
              <Calendar size={16} style={{ color: 'var(--accent-orange)' }} /> {scheduleSummary}
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>
            {isAmharic ? "የፕሮግራሙ ዋነኛ ጥቅሞች" : "Key Program Benefits"}
          </h4>
          <ul className="form-row-2col" style={{ listStyle: 'none' }}>
            {benefits.map((benefit, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <Check size={18} style={{ color: 'var(--accent-orange)', flexShrink: 0, marginTop: '2px' }} />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="form-row-2col" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem', alignItems: 'center' }}>
          <div>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-subtle)' }}>
              {isAmharic ? "ለማን የተዘጋጀ" : "TARGET AUDIENCE"}
            </span>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-main)' }}>{targetAudience}</p>
          </div>

          <Button
            variant="primary"
            icon={ArrowRight}
            onClick={() => {
              onClose();
              onBookProgram(isAmharic ? `በ${name} ይመዝገቡ` : `Enroll in ${name}`);
            }}
            style={{ width: '100%' }}
          >
            {isAmharic ? "ፕሮግራሙን ይጀምሩ" : "START PROGRAM"}
          </Button>
        </div>
      </div>
    </div>
  );
}
