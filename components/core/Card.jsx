import React from 'react';

/** Generic surface card — hairline border, cool-tinted shadow, soft radius.
 *  `hover` adds a lift on pointer-over (for clickable cards). */
export function Card({ hover = false, pad = 24, as = 'div', className = '', style, children, ...rest }) {
  const [over, setOver] = React.useState(false);
  const Tag = as;
  return (
    <Tag
      className={className}
      onMouseEnter={hover ? () => setOver(true) : undefined}
      onMouseLeave={hover ? () => setOver(false) : undefined}
      style={{
        background: 'var(--surface-card)',
        border: '1px solid var(--border-soft)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: over ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        padding: pad,
        transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
        transform: over ? 'translateY(-3px)' : 'none',
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
