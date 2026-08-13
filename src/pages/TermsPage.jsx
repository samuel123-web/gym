import React from 'react';
import { SectionHeading } from '../components/SectionHeading';

export function TermsPage() {
  return (
    <div style={{ paddingTop: 'calc(var(--nav-height) + 2rem)', minHeight: '70vh' }}>
      <div className="container" style={{ maxWidth: '850px' }}>
        <SectionHeading
          badge="MEMBERSHIP AGREEMENT"
          title="TERMS & CONDITIONS"
          subtitle="Last updated: August 2026"
        />

        <div className="card" style={{ padding: '2.5rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
          <h3 style={{ color: 'var(--text-main)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>1. FACILITY RULES & CODE OF CONDUCT</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            All members and trial pass holders agree to re-rack all barbells, dumbbells, and plates after use. Clean athletic footwear and suitable workout apparel must be worn at all times on the main training floor.
          </p>

          <h3 style={{ color: 'var(--text-main)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>2. MEMBERSHIP CANCELLATIONS & PAUSES</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Monthly recurring memberships require a 14-day written notice prior to the next billing cycle for cancellation. Annual memberships can be paused for up to 60 days per calendar year.
          </p>

          <h3 style={{ color: 'var(--text-main)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>3. SAFETY & ASSUMPTION OF RISK</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Physical exercise involves inherent risks. Members agree to follow proper form instructions provided by coaches and use safety spotters during heavy lifting sessions.
          </p>

          <h3 style={{ color: 'var(--text-main)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>4. 24/7 ACCESS RESPONSIBILITY</h3>
          <p>
            Keycards are non-transferable. Tailgating or admitting non-members outside staffed operating hours is strictly prohibited and results in immediate membership termination.
          </p>
        </div>
      </div>
    </div>
  );
}
