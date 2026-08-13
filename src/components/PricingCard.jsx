import React from 'react';
import { Check, X } from 'lucide-react';
import { Button } from './Button';

export function PricingCard({ plan, billingCycle, onSelectPlan, currentLang = 'am' }) {
  const isAnnual = billingCycle === 'annual';
  const isAmharic = currentLang === 'am';
  const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

  const name = isAmharic ? plan.nameAm : plan.nameEn;
  const description = isAmharic ? plan.descriptionAm : plan.descriptionEn;
  const badge = isAmharic ? plan.badgeAm : plan.badgeEn;
  const period = isAmharic ? plan.periodAm : plan.periodEn;
  const ctaText = isAmharic ? plan.ctaTextAm : plan.ctaTextEn;
  const features = isAmharic ? plan.featuresAm : plan.featuresEn;

  return (
    <div className={`pricing-card ${plan.isPopular ? 'featured' : ''}`}>
      {badge && <div className="pricing-badge">{badge}</div>}

      <div className="pricing-header">
        <h3 className="plan-name">{name}</h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{description}</p>

        <div className="plan-price-wrapper">
          <span className="plan-currency" style={{ fontSize: '1.25rem' }}>ETB</span>
          <span className="plan-amount">{price.toLocaleString()}</span>
          <span className="plan-period">{period}</span>
        </div>
        {isAnnual && (
          <span style={{ fontSize: '0.75rem', color: 'var(--accent-orange)', fontWeight: 600, display: 'block', marginTop: '0.25rem' }}>
            {isAmharic ? 'በዓመት የሚከፈል (20% ቅናሽ)' : 'Billed annually (Save 20%)'}
          </span>
        )}
      </div>

      <ul className="pricing-features">
        {features.map((feat, index) => (
          <li key={index} className={`feature-item ${!feat.included ? 'disabled' : ''}`}>
            {feat.included ? (
              <Check size={18} className="feature-icon" />
            ) : (
              <X size={18} className="feature-icon" />
            )}
            <span>{feat.text}</span>
          </li>
        ))}
      </ul>

      <Button
        variant={plan.isPopular ? 'primary' : 'outline'}
        onClick={() => onSelectPlan(plan)}
        style={{ width: '100%' }}
      >
        {ctaText}
      </Button>
    </div>
  );
}
