import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Dumbbell, Zap, HeartHandshake, Award } from 'lucide-react';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';
import { siteConfig } from '../data/siteData';

export function AboutPage({ onOpenJoinModal }) {
  const navigate = useNavigate();

  const values = [
    {
      icon: ShieldCheck,
      title: "UNCOMPROMISING STANDARDS",
      desc: "From gear hygiene to coaching credentials, we never cut corners on quality or safety."
    },
    {
      icon: Dumbbell,
      title: "PROGRESSIVE OVERLOAD",
      desc: "Real transformation requires structured, measurable weight & intensity progression over time."
    },
    {
      icon: Zap,
      title: "HIGH-VOLTAGE ENERGY",
      desc: "Our environment is engineered to spark motivation the instant you step onto the training floor."
    },
    {
      icon: HeartHandshake,
      title: "INCLUSIVE ATHLETIC COMMUNITY",
      desc: "Whether you are squatting 200kg or lifting your first barbell, everyone receives equal respect."
    }
  ];

  return (
    <div style={{ paddingTop: 'calc(var(--nav-height) + 2rem)' }}>
      <div className="container">
        {/* Header Banner */}
        <SectionHeading
          badge="OUR STORY & PHILOSOPHY"
          title="MORE THAN A GYM. A STANDARD."
          subtitle="Founded with a relentless vision: to bring world-class athletic strength facilities and elite coaching to Addis Ababa."
          center
        />

        {/* Story Section */}
        <div className="about-grid" style={{ marginBottom: '6rem' }}>
          <div className="about-image-wrapper">
            <img
              src="/assets/about_gym.jpg"
              alt="IronForge Gym Facility"
              className="about-image"
            />
          </div>

          <div>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>THE IRONFORGE ORIGIN</h3>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: '1.7' }}>
              IronForge Fitness was created out of frustration with generic commercial gyms that prioritize vanity over real physical performance. We wanted to build a sanctuary for dedicated lifters, athletes, and driven individuals who value hard work and tangible progress.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
              We brought together custom Hammer Strength rigs, competition powerlifting barbells, specialized turf areas, and an infrared sauna recovery lounge to establish a modern fitness standard in Ethiopia.
            </p>

            <div className="philosophy-card">
              <p style={{ color: 'var(--text-main)', fontStyle: 'italic', fontWeight: 600 }}>
                "We believe fitness is not about temporary motivation. It's about building discipline, confidence, strength, and a lifestyle that lasts."
              </p>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div style={{ marginBottom: '6rem' }}>
          <SectionHeading
            badge="FOUNDATIONAL VALUES"
            title="WHAT DRIVES US EVERY DAY"
            center
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {values.map((v, i) => (
              <div key={i} className="card" style={{ padding: '2rem' }}>
                <v.icon size={36} style={{ color: 'var(--accent-orange)', marginBottom: '1rem' }} />
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{v.title}</h4>
                <p style={{ fontSize: '0.9rem' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Facility Breakdown */}
        <div style={{ backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)', padding: '3.5rem 2.5rem', border: '1px solid var(--border-color)', marginBottom: '6rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span className="section-badge">FACILITY SPECIFICATIONS</span>
              <h3 style={{ fontSize: '2.25rem', margin: '0.75rem 0 1rem 0' }}>DESIGNED FOR PEAK PERFORMANCE</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                Spread across 1,500 square meters in Bole Medhaniallem, IronForge offers designated strength zones, metabolic turf, a boxing ring, mind-body studios, and hydrotherapy recovery.
              </p>

              <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '2rem' }}>
                <li style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>• 10+ Heavy Power Racks</li>
                <li style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>• Eleiko & Rogue Olympic Bars</li>
                <li style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>• 25-meter Sprint Turf</li>
                <li style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>• Infrared Sauna Suite</li>
                <li style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>• Cold Plunge Ice Baths</li>
                <li style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>• 24/7 Keycard Entry</li>
              </ul>

              <Button variant="primary" icon={ArrowRight} onClick={() => onOpenJoinModal('Book Facility Tour')}>
                BOOK A FREE FACILITY TOUR
              </Button>
            </div>

            <div>
              <img
                src="/assets/hero_bg.jpg"
                alt="IronForge Interior"
                style={{ width: '100%', height: '380px', objectFit: 'cover', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}
              />
            </div>
          </div>
        </div>

        {/* Final Callout */}
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <h3 style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>READY TO SEE FOR YOURSELF?</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Claim your 7-day all-access trial pass and join the IronForge family today.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Button variant="primary" icon={ArrowRight} onClick={() => onOpenJoinModal('Claim 7-Day Free Trial')}>
              CLAIM FREE TRIAL
            </Button>
            <Button variant="secondary" onClick={() => navigate('/membership')}>
              VIEW MEMBERSHIPS
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
