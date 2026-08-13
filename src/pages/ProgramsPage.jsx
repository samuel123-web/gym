import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { ProgramCard } from '../components/ProgramCard';
import { Button } from '../components/Button';
import { programsData } from '../data/programsData';

export function ProgramsPage({ onSelectProgram, onOpenJoinModal }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Strength', 'Personalized', 'Conditioning', 'Transformation', 'Community'];

  const filteredPrograms = selectedCategory === 'All'
    ? programsData
    : programsData.filter((p) => p.category === selectedCategory);

  return (
    <div style={{ paddingTop: 'calc(var(--nav-height) + 2rem)', minHeight: '80vh' }}>
      <div className="container">
        <SectionHeading
          badge="OUR DISCIPLINES"
          title="TRAIN WITH PURPOSE."
          subtitle="Explore our comprehensive training programs designed for power, endurance, composition, and longevity."
          center
        />

        {/* Filter Tabs */}
        <div className="filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Program Cards Grid */}
        <div className="programs-grid" style={{ marginBottom: '5rem' }}>
          {filteredPrograms.map((program) => (
            <ProgramCard
              key={program.id}
              program={program}
              onSelectProgram={onSelectProgram}
            />
          ))}
        </div>

        {/* CTA Banner */}
        <div className="cta-banner-section" style={{ borderRadius: 'var(--radius-lg)', marginBottom: '5rem' }}>
          <img src="/assets/hero_bg.jpg" alt="Join Program" className="cta-banner-bg" />
          <div className="cta-banner-content">
            <h3 style={{ fontSize: '2.5rem', color: '#FFFFFF', marginBottom: '1rem' }}>
              NEED HELP CHOOSING THE RIGHT PROGRAM?
            </h3>
            <p style={{ fontSize: '1.1rem', color: '#D4D4D8', marginBottom: '2rem' }}>
              Schedule a complimentary 15-minute consultation with one of our master strength coaches.
            </p>
            <Button
              variant="primary"
              icon={ArrowRight}
              onClick={() => onOpenJoinModal('Free Program Consultation')}
            >
              BOOK FREE CONSULTATION
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
