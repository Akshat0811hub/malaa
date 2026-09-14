import React from 'react';
import { Link } from 'react-router-dom';
import './ArrowButton.css';

/**
 * Premium architectural arrow button inspired by Stål's signature interaction.
 * Supports: 'textual', 'outline', 'solid', 'light-solid'
 */
export default function ArrowButton({
  children,
  to,
  href,
  onClick,
  variant = 'textual',
  className = '',
  arrowDirection = 'right',
  type = 'button'
}) {
  const content = (
    <span className="arrow-btn-inner">
      <span className="arrow-btn-text">{children}</span>
      <span className={`arrow-icon-holder ${arrowDirection}`}>
        <svg
          className="stal-arrowline"
          viewBox="0 0 46 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="1" y1="7" x2="43" y2="7" stroke="currentColor" strokeWidth="1.5" />
          <path d="M38 2L43 7L38 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
        </svg>
      </span>
      {variant === 'textual' && <span className="arrow-btn-underline"></span>}
    </span>
  );

  const classes = `arrow-btn arrow-btn--${variant} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
