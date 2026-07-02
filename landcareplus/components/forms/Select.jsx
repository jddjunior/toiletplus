import React from 'react';

/** Labeled native select, styled to match Input (shares .tp-field styles). */
export function Select({ label, required, hint, error, id, children, style, ...rest }) {
  const fid = id || (label ? 'tp-' + label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return (
    <div className={`tp-field${error ? ' tp-field--error' : ''}`} style={style}>
      {label && (
        <label className="tp-field__label" htmlFor={fid}>
          {label}{required && <span className="tp-field__req"> *</span>}
        </label>
      )}
      <div className="tp-field__ctrl">
        <select
          id={fid}
          className="tp-input"
          style={{
            appearance: 'none', WebkitAppearance: 'none', paddingRight: 40, cursor: 'pointer',
            backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%236A7689' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'><path d='M6 9l6 6 6-6'/></svg>\")",
            backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center',
          }}
          {...rest}
        >
          {children}
        </select>
      </div>
      {(hint || error) && <span className="tp-field__hint">{error || hint}</span>}
    </div>
  );
}
