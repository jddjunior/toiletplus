'use client';

import React from 'react';

const FIELD_CSS = `
.tp-field{ display:flex; flex-direction:column; gap:6px; font-family:var(--font-body); }
.tp-field__label{ font-size:13px; font-weight:600; color:var(--text-strong); }
.tp-field__req{ color:var(--color-accent); }
.tp-field__ctrl{ position:relative; display:flex; align-items:center; }
.tp-input{
  width:100%; font-family:var(--font-body); font-size:16px; color:var(--text-strong);
  background:var(--surface-card); border:1px solid var(--border-strong);
  border-radius:var(--radius-md); padding:12px 14px; line-height:1.3;
  transition:border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out);
}
.tp-input::placeholder{ color:var(--text-faint); }
.tp-input:hover{ border-color:var(--gray-400); }
.tp-input:focus{ outline:none; border-color:var(--color-primary); box-shadow:var(--focus-ring); }
.tp-input--has-icon{ padding-left:42px; }
.tp-field__icon{ position:absolute; left:14px; color:var(--text-muted); display:flex; pointer-events:none; }
.tp-field__icon svg{ width:18px; height:18px; }
.tp-field--error .tp-input{ border-color:var(--color-accent); }
.tp-field__hint{ font-size:12px; color:var(--text-muted); }
.tp-field--error .tp-field__hint{ color:var(--color-accent); }
`;

function useStyleOnce(id, css) {
  React.useEffect(() => {
    if (typeof document === 'undefined' || document.getElementById(id)) return;
    const el = document.createElement('style'); el.id = id; el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}

/** Labeled text input with optional leading icon, hint and error state. */
export function Input({ label, required, icon, hint, error, id, style, ...rest }) {
  useStyleOnce('tp-field-styles', FIELD_CSS);
  const fid = id || (label ? 'tp-' + label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return (
    <div className={`tp-field${error ? ' tp-field--error' : ''}`} style={style}>
      {label && (
        <label className="tp-field__label" htmlFor={fid}>
          {label}{required && <span className="tp-field__req"> *</span>}
        </label>
      )}
      <div className="tp-field__ctrl">
        {icon && <span className="tp-field__icon">{icon}</span>}
        <input id={fid} className={`tp-input${icon ? ' tp-input--has-icon' : ''}`} {...rest} />
      </div>
      {(hint || error) && <span className="tp-field__hint">{error || hint}</span>}
    </div>
  );
}
