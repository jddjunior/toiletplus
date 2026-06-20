import React from 'react';

/* Inject a component's CSS once per document. Lets DS components carry real
   :hover / :active / :focus-visible / :disabled states while staying self-contained. */
function useStyleOnce(id, css) {
  React.useEffect(() => {
    if (typeof document === 'undefined' || document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}

const BTN_CSS = `
.tp-btn{
  --_bg:var(--color-primary); --_fg:#fff; --_bd:transparent; --_shadow:none;
  font-family:var(--font-body); font-weight:700; letter-spacing:.005em;
  display:inline-flex; align-items:center; justify-content:center; gap:.55em;
  border:var(--border-2) solid var(--_bd); background:var(--_bg); color:var(--_fg);
  border-radius:var(--radius-md); cursor:pointer; text-decoration:none; white-space:nowrap;
  box-shadow:var(--_shadow); transition:transform var(--dur-fast) var(--ease-out),
    background var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out),
    border-color var(--dur-fast) var(--ease-out); user-select:none;
}
.tp-btn:hover{ background:var(--_bgH,var(--_bg)); border-color:var(--_bdH,var(--_bd)); }
.tp-btn:active{ transform:translateY(1px); }
.tp-btn:focus-visible{ outline:none; box-shadow:var(--focus-ring), var(--_shadow); }
.tp-btn[disabled]{ opacity:.5; cursor:not-allowed; transform:none; }
.tp-btn svg{ width:1.15em; height:1.15em; flex:none; }

/* sizes */
.tp-btn--sm{ font-size:14px; padding:8px 16px; }
.tp-btn--md{ font-size:16px; padding:12px 22px; }
.tp-btn--lg{ font-size:18px; padding:16px 30px; }

/* variants */
.tp-btn--primary{ --_bg:var(--color-primary); --_bgH:var(--color-primary-hover); --_shadow:var(--shadow-sm); }
.tp-btn--accent{ --_bg:var(--color-accent); --_bgH:var(--color-accent-hover); --_shadow:var(--shadow-sm); }
.tp-btn--navy{ --_bg:var(--blue-900); --_bgH:var(--blue-800); --_shadow:var(--shadow-sm); }
.tp-btn--outline{ --_bg:transparent; --_fg:var(--color-primary); --_bd:var(--border-strong); --_bgH:var(--surface-muted); --_bdH:var(--color-primary); }
.tp-btn--ghost{ --_bg:transparent; --_fg:var(--text-strong); --_bd:transparent; --_bgH:var(--surface-sunken); }
.tp-btn--on-dark{ --_bg:#fff; --_fg:var(--blue-900); --_bgH:var(--gray-100); }
.tp-btn--block{ display:flex; width:100%; }
`;

/**
 * Primary action control. `accent` is reserved for emergency / "call now" urgency.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  iconLeft,
  iconRight,
  as,
  className = '',
  children,
  ...rest
}) {
  useStyleOnce('tp-btn-styles', BTN_CSS);
  const Tag = as || (rest.href ? 'a' : 'button');
  const cls = `tp-btn tp-btn--${variant} tp-btn--${size}${block ? ' tp-btn--block' : ''}${className ? ' ' + className : ''}`;
  return (
    <Tag className={cls} {...rest}>
      {iconLeft}
      {children && <span>{children}</span>}
      {iconRight}
    </Tag>
  );
}
