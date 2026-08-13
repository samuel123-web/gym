import React from 'react';
import { SectionHeading } from '../components/SectionHeading';

export function PrivacyPage() {
  return (
    <div style={{ paddingTop: 'calc(var(--nav-height) + 2rem)', minHeight: '70vh' }}>
      <div className="container" style={{ maxWidth: '850px' }}>
        <SectionHeading
          badge="LEGAL & PRIVACY"
          title="PRIVACY POLICY"
          subtitle="Last updated: August 2026"
        />

        <div className="card" style={{ padding: '2.5rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
          <h3 style={{ color: 'var(--text-main)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>1. INFORMATION WE COLLECT</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            At IronForge Fitness, we respect your personal data. We collect personal information that you voluntarily provide to us when registering for memberships, requesting 7-day trial passes, booking personal training sessions, or contacting our concierge team.
          </p>

          <h3 style={{ color: 'var(--text-main)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>2. HOW WE USE YOUR INFORMATION</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Your information is used strictly to process your membership access, manage class reservations, personalize training programs, send security alerts, and respond to your service requests. We do not sell your personal data to third parties.
          </p>

          <h3 style={{ color: 'var(--text-main)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>3. DATA SECURITY & STORAGE</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            We implement high-grade physical, digital, and managerial safeguards to protect your personal information against unauthorized access, alteration, or disclosure.
          </p>

          <h3 style={{ color: 'var(--text-main)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>4. YOUR RIGHTS</h3>
          <p>
            You have the right to inspect, update, or request the deletion of your personal data at any time by contacting our support desk at hello@ironforgefitness.com.
          </p>
        </div>
      </div>
    </div>
  );
}
