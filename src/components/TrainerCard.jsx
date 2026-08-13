import React from 'react';
import { Instagram, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';
import { Button } from './Button';

export function TrainerCard({ trainer, onSelectTrainer, currentLang = 'am' }) {
  const isAmharic = currentLang === 'am';
  const name = isAmharic ? trainer.nameAm : trainer.nameEn;
  const role = isAmharic ? trainer.roleAm : trainer.roleEn;
  const bio = isAmharic ? trainer.bioAm : trainer.bioEn;

  return (
    <div className="card trainer-card">
      <div className="trainer-portrait-wrapper">
        <img
          src={trainer.image}
          alt={name}
          className="trainer-portrait"
          loading="lazy"
        />
        <div className="trainer-overlay">
          <div className="trainer-info">
            <span className="trainer-role">{role}</span>
            <h3 className="trainer-name">{name}</h3>
            <p style={{ fontSize: '0.85rem', color: '#D4D4D8', marginBottom: '1rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
              {bio}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div className="trainer-socials" onClick={(e) => e.stopPropagation()}>
                <a href={trainer.socials.instagram} target="_blank" rel="noopener noreferrer" className="social-link" aria-label={`${name} Instagram`}>
                  <Instagram size={16} />
                </a>
                <a href={trainer.socials.twitter} target="_blank" rel="noopener noreferrer" className="social-link" aria-label={`${name} Twitter`}>
                  <Twitter size={16} />
                </a>
                <a href={trainer.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" aria-label={`${name} LinkedIn`}>
                  <Linkedin size={16} />
                </a>
              </div>

              <Button
                variant="outline"
                icon={ArrowUpRight}
                onClick={() => onSelectTrainer(trainer)}
                style={{ padding: '0.4rem 0.85rem', fontSize: '0.75rem' }}
              >
                {isAmharic ? 'መገለጫ' : 'PROFILE'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
