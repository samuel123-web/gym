import React from 'react';

export function SectionHeading({
  badge,
  title,
  subtitle,
  center = false,
  className = ''
}) {
  return (
    <div className={`section-header ${center ? 'center' : ''} ${className}`}>
      {badge && (
        <div className="section-badge">
          <span>{badge}</span>
        </div>
      )}
      {title && <h2 className="section-title">{title}</h2>}
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
