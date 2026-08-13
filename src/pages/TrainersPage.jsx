import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { TrainerCard } from '../components/TrainerCard';
import { Button } from '../components/Button';
import { trainersData } from '../data/trainersData';
import { ArrowRight } from 'lucide-react';

export function TrainersPage({ onSelectTrainer, onOpenJoinModal }) {
  const [selectedRole, setSelectedRole] = useState('All');

  const roles = ['All', 'Strength', 'Personal', 'Functional', 'Nutrition'];

  const filteredTrainers = selectedRole === 'All'
    ? trainersData
    : trainersData.filter((t) => t.role.toLowerCase().includes(selectedRole.toLowerCase()) || t.specialization.toLowerCase().includes(selectedRole.toLowerCase()));

  return (
    <div style={{ paddingTop: 'calc(var(--nav-height) + 2rem)' }}>
      <div className="container">
        <SectionHeading
          badge="WORLD-CLASS COACHING"
          title="MEET THE COACHES"
          subtitle="Our certified coaches bring years of competitive experience, sports science education, and intense dedication to every session."
          center
        />

        {/* Filters */}
        <div className="filter-tabs">
          {roles.map((r) => (
            <button
              key={r}
              className={`filter-btn ${selectedRole === r ? 'active' : ''}`}
              onClick={() => setSelectedRole(r)}
            >
              {r}
            </button>
          ))}
        </div>

        {/* Trainers Grid */}
        <div className="trainers-grid" style={{ marginBottom: '5rem' }}>
          {filteredTrainers.map((trainer) => (
            <TrainerCard
              key={trainer.id}
              trainer={trainer}
              onSelectTrainer={onSelectTrainer}
            />
          ))}
        </div>

        {/* Coaching Banner */}
        <div className="card" style={{ padding: '2.5rem 1.5rem', backgroundColor: 'var(--bg-card)', marginBottom: '4rem', border: '1px solid var(--border-color)' }}>
          <div className="responsive-grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="section-badge">1-ON-1 PERSONAL TRAINING</span>
              <h3 style={{ fontSize: '2rem', margin: '0.75rem 0 1rem 0' }}>TAILORED EXCLUSIVELY TO YOUR PHYSIOLOGY</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                Skip the trial and error. Work directly with a dedicated coach who creates your periodized lifting scheme, tracks your bio-metrics, and guides your nutrition week by week.
              </p>

              <Button
                variant="primary"
                icon={ArrowRight}
                onClick={() => onOpenJoinModal('1-on-1 Personal Training Inquiry')}
              >
                REQUEST A PERSONAL TRAINER
              </Button>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop"
                alt="Personal Training"
                style={{ width: '100%', height: '280px', objectFit: 'cover', borderRadius: 'var(--radius-md)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
