import React, { useState } from 'react';
import { Check, X, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { PricingCard } from '../components/PricingCard';
import { pricingData, membershipFeaturesMatrix } from '../data/pricingData';
import { FAQAccordion } from '../components/FAQAccordion';
import { faqData } from '../data/faqData';

export function MembershipPage({ onOpenJoinModal }) {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'annual'

  return (
    <div style={{ paddingTop: 'calc(var(--nav-height) + 2rem)' }}>
      <div className="container">
        <SectionHeading
          badge="MEMBERSHIP OPTIONS"
          title="CHOOSE YOUR LEVEL."
          subtitle="No hidden activation fees. No locked contracts. Upgrade, downgrade, or pause anytime."
          center
        />

        {/* Monthly / Annual Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '3.5rem' }}>
          <span style={{ fontSize: '0.95rem', fontWeight: 600, color: billingCycle === 'monthly' ? 'var(--text-main)' : 'var(--text-muted)' }}>
            Billed Monthly
          </span>

          <button
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
            aria-label="Toggle Billing Cycle"
            style={{
              width: '60px',
              height: '32px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--bg-card)',
              border: '2px solid var(--accent-orange)',
              position: 'relative',
              cursor: 'pointer',
              padding: '2px'
            }}
          >
            <div
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-orange)',
                transform: billingCycle === 'annual' ? 'translateX(28px)' : 'translateX(0)',
                transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            />
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.95rem', fontWeight: 600, color: billingCycle === 'annual' ? 'var(--text-main)' : 'var(--text-muted)' }}>
              Billed Annually
            </span>
            <span className="section-badge" style={{ fontSize: '0.7rem', padding: '0.15rem 0.6rem' }}>
              SAVE 20%
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '6rem' }}>
          {pricingData.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              billingCycle={billingCycle}
              onSelectPlan={() => onOpenJoinModal(`Join Plan: ${plan.name} (${billingCycle.toUpperCase()})`)}
            />
          ))}
        </div>

        {/* Feature Comparison Matrix Table */}
        <div style={{ marginBottom: '6rem' }}>
          <SectionHeading
            badge="PLAN COMPARISON"
            title="FEATURE COMPARISON MATRIX"
            subtitle="Compare all perks and access levels across our three tiers."
            center
          />

          <div style={{ overflowX: 'auto', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', padding: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '650px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border-color)' }}>
                  <th style={{ padding: '1rem', color: 'var(--text-main)', fontSize: '1.1rem' }}>FEATURES & PERKS</th>
                  <th style={{ padding: '1rem', color: 'var(--text-main)', textAlign: 'center', fontSize: '1.1rem' }}>BASIC (2,900 ETB)</th>
                  <th style={{ padding: '1rem', color: 'var(--accent-orange)', textAlign: 'center', fontSize: '1.1rem' }}>PRO (5,900 ETB)</th>
                  <th style={{ padding: '1rem', color: 'var(--text-main)', textAlign: 'center', fontSize: '1.1rem' }}>ELITE (9,900 ETB)</th>
                </tr>
              </thead>
              <tbody>
                {membershipFeaturesMatrix.map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid var(--border-color)', backgroundColor: idx % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)' }}>
                    <td style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>{row.feature}</td>
                    
                    {/* Basic */}
                    <td style={{ padding: '1rem', textAlign: 'center' }}>
                      {typeof row.basic === 'boolean' ? (
                        row.basic ? <Check size={20} style={{ color: 'var(--accent-orange)', margin: '0 auto' }} /> : <X size={20} style={{ color: 'var(--text-subtle)', margin: '0 auto' }} />
                      ) : (
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>{row.basic}</span>
                      )}
                    </td>

                    {/* Pro */}
                    <td style={{ padding: '1rem', textAlign: 'center', backgroundColor: 'rgba(249, 115, 22, 0.04)' }}>
                      {typeof row.pro === 'boolean' ? (
                        row.pro ? <Check size={20} style={{ color: 'var(--accent-orange)', margin: '0 auto' }} /> : <X size={20} style={{ color: 'var(--text-subtle)', margin: '0 auto' }} />
                      ) : (
                        <span style={{ fontSize: '0.9rem', color: 'var(--accent-orange)', fontWeight: 700 }}>{row.pro}</span>
                      )}
                    </td>

                    {/* Elite */}
                    <td style={{ padding: '1rem', textAlign: 'center' }}>
                      {typeof row.elite === 'boolean' ? (
                        row.elite ? <Check size={20} style={{ color: 'var(--accent-orange)', margin: '0 auto' }} /> : <X size={20} style={{ color: 'var(--text-subtle)', margin: '0 auto' }} />
                      ) : (
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-main)', fontWeight: 700 }}>{row.elite}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Guarantee Banner */}
        <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '3rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '6rem' }}>
          <ShieldCheck size={54} style={{ color: 'var(--accent-orange)', flexShrink: 0 }} />
          <div>
            <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>100% SATISFACTION & MOBILITY GUARANTEE</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Try IronForge risk-free. If within your first 14 days you feel our coaches or facilities do not meet your standards, we will refund your first month's payment immediately.
            </p>
          </div>
        </div>

        {/* FAQs */}
        <div style={{ marginBottom: '6rem' }}>
          <SectionHeading
            badge="QUESTIONS"
            title="MEMBERSHIP FAQS"
            center
          />
          <FAQAccordion items={faqData.slice(0, 5)} />
        </div>
      </div>
    </div>
  );
}
