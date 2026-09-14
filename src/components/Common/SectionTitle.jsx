import React from 'react';
import './SectionTitle.css';

export default function SectionTitle({
  tagline,
  title,
  description,
  align = 'left',
  action,
  className = ''
}) {
  return (
    <div className={`section-title-wrap section-title--${align} ${className}`}>
      <div className="section-title-content">
        {tagline && <span className="eyebrow-label">{tagline}</span>}
        {title && <h2 className="section-heading">{title}</h2>}
        {description && <p className="section-description">{description}</p>}
      </div>
      {action && <div className="section-title-action">{action}</div>}
    </div>
  );
}
