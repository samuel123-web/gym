import React from 'react';
import { ArrowRight, Clock, Gauge } from 'lucide-react';

export function ProgramCard({ program, onSelectProgram, currentLang = 'am' }) {
  const isAmharic = currentLang === 'am';
  const name = isAmharic ? program.nameAm : program.nameEn;
  const category = isAmharic ? program.categoryAm : program.categoryEn;
  const shortDescription = isAmharic ? program.shortDescriptionAm : program.shortDescriptionEn;
  const duration = isAmharic ? program.durationAm : program.durationEn;
  const difficulty = isAmharic ? program.difficultyAm : program.difficultyEn;

  return (
    <div className="card program-card" onClick={() => onSelectProgram(program)}>
      <div className="program-image-wrapper">
        <img
          src={program.image}
          alt={name}
          className="program-image"
          loading="lazy"
        />
        <span className="program-category-tag">{category}</span>
      </div>

      <div className="program-content">
        <h3 className="program-title">{name}</h3>
        <p className="program-description">{shortDescription}</p>

        <div className="program-meta">
          <div className="program-meta-item">
            <Clock size={15} style={{ color: 'var(--accent-orange)' }} />
            <span>{duration}</span>
          </div>

          <div className="program-meta-item">
            <Gauge size={15} style={{ color: 'var(--accent-orange)' }} />
            <span>{difficulty}</span>
          </div>

          <div className="program-arrow">
            <ArrowRight size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
