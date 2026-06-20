/* @ds-bundle: {"format":3,"namespace":"ToiletPlusDesignSystem_5215f9","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"RatingBadge","sourcePath":"components/core/RatingBadge.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"GuaranteeCard","sourcePath":"components/marketing/GuaranteeCard.jsx"},{"name":"ReviewCard","sourcePath":"components/marketing/ReviewCard.jsx"},{"name":"ServiceCard","sourcePath":"components/marketing/ServiceCard.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"9062bf3b558e","components/buttons/Button.jsx":"166218c40020","components/core/Badge.jsx":"a8e8e1567c3a","components/core/Card.jsx":"020077e6b624","components/core/RatingBadge.jsx":"e172635232a6","components/forms/Input.jsx":"f2d11189e018","components/forms/Select.jsx":"971ff54cdce7","components/marketing/GuaranteeCard.jsx":"901119b33340","components/marketing/ReviewCard.jsx":"60b2fa710bae","components/marketing/ServiceCard.jsx":"3c934a7b72dd","ui_kits/website/BookingModal.jsx":"cdae8b6ea2c5","ui_kits/website/Footer.jsx":"208ca82695b3","ui_kits/website/Guarantees.jsx":"977787ab3468","ui_kits/website/Header.jsx":"6090a25af8e8","ui_kits/website/Hero.jsx":"384b4b6538a5","ui_kits/website/Reviews.jsx":"82a3661c1740","ui_kits/website/Services.jsx":"6ac086fa9b32"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ToiletPlusDesignSystem_5215f9 = window.ToiletPlusDesignSystem_5215f9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Toilet Plus logo lockup — vector "+" mark with a red water-droplet,
 * plus the Archivo wordmark. Use `tone="dark"` on navy/photo backgrounds.
 */
function Logo({
  tone = 'light',
  showWordmark = true,
  size = 36,
  href,
  style,
  ...rest
}) {
  const onDark = tone === 'dark';
  const markFill = onDark ? '#FFFFFF' : 'url(#tpMarkG)';
  const plusFill = onDark ? '#0B3D7E' : '#FFFFFF';
  const mark = /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 72 72",
    fill: "none",
    "aria-hidden": "true",
    style: {
      display: 'block',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "tpMarkG",
    x1: "8",
    y1: "8",
    x2: "64",
    y2: "64",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#1466CC"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#0B3D7E"
  }))), /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "4",
    width: "64",
    height: "64",
    rx: "16",
    fill: markFill
  }), /*#__PURE__*/React.createElement("rect", {
    x: "31",
    y: "18",
    width: "10",
    height: "36",
    rx: "5",
    fill: plusFill
  }), /*#__PURE__*/React.createElement("rect", {
    x: "18",
    y: "31",
    width: "36",
    height: "10",
    rx: "5",
    fill: plusFill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M53 14c0 4.4-3.1 7-6.5 7S40 18.4 40 14c0-3.3 4.2-7.8 5.9-9.5a.8.8 0 0 1 1.2 0C48.8 6.2 53 10.7 53 14Z",
    fill: "#FF4D4D"
  }));
  const inner = /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: size * 0.32,
      ...style
    }
  }, rest), mark, showWordmark && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: size * 0.82,
      letterSpacing: '-0.02em',
      lineHeight: 1,
      color: onDark ? '#FFFFFF' : 'var(--text-strong)'
    }
  }, "Toilet", /*#__PURE__*/React.createElement("span", {
    style: {
      color: onDark ? 'var(--color-accent)' : 'var(--color-primary)'
    }
  }, "+")));
  if (href) {
    return /*#__PURE__*/React.createElement("a", {
      href: href,
      style: {
        textDecoration: 'none',
        display: 'inline-flex'
      }
    }, inner);
  }
  return inner;
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  border-radius:var(--radius-pill); cursor:pointer; text-decoration:none; white-space:nowrap;
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
.tp-btn--primary{ --_bg:var(--color-primary); --_bgH:var(--color-primary-hover); --_shadow:var(--shadow-primary); }
.tp-btn--accent{ --_bg:var(--color-accent); --_bgH:var(--color-accent-hover); --_shadow:var(--shadow-accent); }
.tp-btn--navy{ --_bg:var(--blue-900); --_bgH:var(--blue-800); --_shadow:var(--shadow-sm); }
.tp-btn--outline{ --_bg:transparent; --_fg:var(--color-primary); --_bd:var(--border-strong); --_bgH:var(--surface-muted); --_bdH:var(--color-primary); }
.tp-btn--ghost{ --_bg:transparent; --_fg:var(--text-strong); --_bd:transparent; --_bgH:var(--surface-sunken); }
.tp-btn--on-dark{ --_bg:#fff; --_fg:var(--blue-900); --_bgH:var(--gray-100); }
.tp-btn--block{ display:flex; width:100%; }
`;

/**
 * Primary action control. `accent` is reserved for emergency / "call now" urgency.
 */
function Button({
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
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), iconLeft, children && /*#__PURE__*/React.createElement("span", null, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  blue: {
    bg: 'var(--blue-50)',
    fg: 'var(--blue-700)'
  },
  navy: {
    bg: 'var(--blue-900)',
    fg: '#fff'
  },
  accent: {
    bg: 'var(--red-50)',
    fg: 'var(--red-600)'
  },
  green: {
    bg: 'var(--green-50)',
    fg: 'var(--green-500)'
  },
  amber: {
    bg: 'var(--amber-50)',
    fg: 'var(--amber-500)'
  },
  gray: {
    bg: 'var(--gray-100)',
    fg: 'var(--gray-600)'
  },
  solid: {
    bg: 'var(--color-primary)',
    fg: '#fff'
  }
};

/** Small status / qualifier pill — "Licensed", "24/7", "Same-Day". */
function Badge({
  tone = 'blue',
  icon,
  size = 'md',
  children,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.blue;
  const pad = size === 'sm' ? '3px 9px' : '5px 12px';
  const fs = size === 'sm' ? 11.5 : 13;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: t.bg,
      color: t.fg,
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: fs,
      lineHeight: 1,
      letterSpacing: '.01em',
      padding: pad,
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Generic surface card — hairline border, cool-tinted shadow, soft radius.
 *  `hover` adds a lift on pointer-over (for clickable cards). */
function Card({
  hover = false,
  pad = 24,
  as = 'div',
  className = '',
  style,
  children,
  ...rest
}) {
  const [over, setOver] = React.useState(false);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: className,
    onMouseEnter: hover ? () => setOver(true) : undefined,
    onMouseLeave: hover ? () => setOver(false) : undefined,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-soft)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: over ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      padding: pad,
      transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
      transform: over ? 'translateY(-3px)' : 'none',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/RatingBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Stars({
  value = 5,
  size = 16
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 1
    },
    "aria-label": `${value} out of 5 stars`
  }, [0, 1, 2, 3, 4].map(i => {
    const fill = Math.min(1, Math.max(0, value - i));
    return /*#__PURE__*/React.createElement("svg", {
      key: i,
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      style: {
        display: 'block'
      }
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      id: `st${i}-${value}`
    }, /*#__PURE__*/React.createElement("stop", {
      offset: `${fill * 100}%`,
      stopColor: "#FFB400"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: `${fill * 100}%`,
      stopColor: "#E0E6F0"
    }))), /*#__PURE__*/React.createElement("path", {
      d: "M12 2.4l2.9 5.9 6.5.95-4.7 4.58 1.1 6.47L12 17.3l-5.8 3.06 1.1-6.47L2.6 9.25l6.5-.95z",
      fill: `url(#st${i}-${value})`
    }));
  }));
}

/** Trust badge — star rating + score + review count. Mirrors the "Google rating" chip. */
function RatingBadge({
  value = 4.9,
  count = 2148,
  label = 'Google Reviews',
  size = 'md',
  style,
  ...rest
}) {
  const big = size === 'lg';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: big ? 12 : 9,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-soft)',
      boxShadow: 'var(--shadow-sm)',
      borderRadius: 'var(--radius-pill)',
      padding: big ? '10px 18px' : '7px 14px',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: big ? 22 : 18,
      color: 'var(--text-strong)',
      lineHeight: 1
    }
  }, value.toFixed(1)), /*#__PURE__*/React.createElement(Stars, {
    value: value,
    size: big ? 18 : 15
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: big ? 13.5 : 12,
      color: 'var(--text-muted)',
      fontWeight: 600
    }
  }, count.toLocaleString(), " ", label));
}
Object.assign(__ds_scope, { RatingBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/RatingBadge.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}

/** Labeled text input with optional leading icon, hint and error state. */
function Input({
  label,
  required,
  icon,
  hint,
  error,
  id,
  style,
  ...rest
}) {
  useStyleOnce('tp-field-styles', FIELD_CSS);
  const fid = id || (label ? 'tp-' + label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: `tp-field${error ? ' tp-field--error' : ''}`,
    style: style
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "tp-field__label",
    htmlFor: fid
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "tp-field__req"
  }, " *")), /*#__PURE__*/React.createElement("div", {
    className: "tp-field__ctrl"
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "tp-field__icon"
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    className: `tp-input${icon ? ' tp-input--has-icon' : ''}`
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    className: "tp-field__hint"
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Labeled native select, styled to match Input (shares .tp-field styles). */
function Select({
  label,
  required,
  hint,
  error,
  id,
  children,
  style,
  ...rest
}) {
  const fid = id || (label ? 'tp-' + label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: `tp-field${error ? ' tp-field--error' : ''}`,
    style: style
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "tp-field__label",
    htmlFor: fid
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "tp-field__req"
  }, " *")), /*#__PURE__*/React.createElement("div", {
    className: "tp-field__ctrl"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    className: "tp-input",
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      paddingRight: 40,
      cursor: 'pointer',
      backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%236A7689' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'><path d='M6 9l6 6 6-6'/></svg>\")",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 12px center'
    }
  }, rest), children)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    className: "tp-field__hint"
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/marketing/GuaranteeCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A promise/guarantee block — icon on a navy or blue chip, title, one-line proof.
 *  Use for "Upfront pricing", "Same-day service", "Licensed & insured". */
function GuaranteeCard({
  icon,
  title,
  children,
  tone = 'blue',
  style,
  ...rest
}) {
  const navy = tone === 'navy';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start',
      background: navy ? 'transparent' : 'var(--surface-card)',
      border: navy ? '1px solid var(--border-on-dark)' : '1px solid var(--border-soft)',
      borderRadius: 'var(--radius-lg)',
      padding: 22,
      boxShadow: navy ? 'none' : 'var(--shadow-sm)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      flex: 'none',
      borderRadius: 'var(--radius-md)',
      background: navy ? 'rgba(255,255,255,0.12)' : 'var(--blue-50)',
      color: navy ? '#fff' : 'var(--color-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    "aria-hidden": "true"
  }, icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '2px 0 5px',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 18,
      color: navy ? '#fff' : 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14.5,
      lineHeight: 1.5,
      color: navy ? 'var(--text-on-dark-muted)' : 'var(--text-body)'
    }
  }, children)));
}
Object.assign(__ds_scope, { GuaranteeCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/GuaranteeCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ReviewCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Stars({
  value = 5
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 2
    },
    "aria-label": `${value} of 5`
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("svg", {
    key: i,
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: i < value ? '#FFB400' : '#E0E6F0'
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2.4l2.9 5.9 6.5.95-4.7 4.58 1.1 6.47L12 17.3l-5.8 3.06 1.1-6.47L2.6 9.25l6.5-.95z"
  }))));
}

/** Customer review card — stars, quote, and author with location. */
function ReviewCard({
  rating = 5,
  quote,
  author,
  location,
  source = 'Google',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-soft)',
      borderRadius: 'var(--radius-lg)',
      padding: 26,
      boxShadow: 'var(--shadow-sm)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(Stars, {
    value: rating
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.6,
      color: 'var(--text-strong)',
      fontWeight: 500
    }
  }, "\"", quote, "\""), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: '50%',
      flex: 'none',
      background: 'var(--blue-100)',
      color: 'var(--blue-700)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 15
    }
  }, (author || '?').charAt(0)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, author), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, location, location && source ? ' · ' : '', source))));
}
Object.assign(__ds_scope, { ReviewCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ReviewCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A single plumbing service tile — icon, name, plain-talk description, link.
 *  Lifts on hover; the whole card is a link when `href` is set. */
function ServiceCard({
  icon,
  title,
  children,
  href = '#',
  linkLabel = 'Learn more',
  style,
  ...rest
}) {
  const [over, setOver] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setOver(true),
    onMouseLeave: () => setOver(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      textDecoration: 'none',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-soft)',
      borderRadius: 'var(--radius-lg)',
      padding: 26,
      boxShadow: over ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transform: over ? 'translateY(-4px)' : 'none',
      transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
      borderColor: over ? 'var(--blue-200)' : 'var(--border-soft)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 54,
      height: 54,
      borderRadius: 'var(--radius-md)',
      background: over ? 'var(--color-primary)' : 'var(--blue-50)',
      color: over ? '#fff' : 'var(--color-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex'
    },
    "aria-hidden": "true"
  }, icon)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 21,
      color: 'var(--text-strong)',
      letterSpacing: '-0.01em'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.55,
      color: 'var(--text-body)',
      flex: 1
    }
  }, children), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--color-primary)'
    }
  }, linkLabel, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      transform: over ? 'translateX(3px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  }))));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/BookingModal.jsx
try { (() => {
/* Booking modal — 3-step flow (job → details → confirmed). window.TPBooking */
(function () {
  const {
    Icon
  } = window.TPKit;
  const {
    useState
  } = React;
  function Step({
    n,
    label,
    active,
    done
  }) {
    return React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, React.createElement('span', {
      style: {
        width: 26,
        height: 26,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 13,
        fontWeight: 700,
        fontFamily: 'var(--font-display)',
        background: done ? 'var(--green-500)' : active ? 'var(--color-primary)' : 'var(--gray-200)',
        color: done || active ? '#fff' : 'var(--text-muted)'
      }
    }, done ? React.createElement(Icon, {
      name: 'Check',
      size: 15,
      color: '#fff'
    }) : n), React.createElement('span', {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: active || done ? 'var(--text-strong)' : 'var(--text-muted)'
      }
    }, label));
  }
  function Booking({
    onClose
  }) {
    const {
      Button,
      Input,
      Select,
      Badge
    } = window.ToiletPlusDesignSystem_5215f9;
    const [step, setStep] = useState(1);
    const shell = children => React.createElement('div', {
      onClick: onClose,
      style: {
        position: 'fixed',
        inset: 0,
        background: 'rgba(7,30,61,0.55)',
        backdropFilter: 'blur(4px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24
      }
    }, React.createElement('div', {
      onClick: e => e.stopPropagation(),
      style: {
        background: '#fff',
        borderRadius: 'var(--radius-xl)',
        width: 'min(560px, 100%)',
        maxHeight: '90vh',
        overflow: 'auto',
        boxShadow: 'var(--shadow-xl)'
      }
    }, children));
    const header = React.createElement('div', {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '22px 26px 0'
      }
    }, React.createElement('div', {
      style: {
        display: 'flex',
        gap: 18
      }
    }, React.createElement(Step, {
      n: 1,
      label: 'Job',
      active: step === 1,
      done: step > 1
    }), React.createElement(Step, {
      n: 2,
      label: 'Details',
      active: step === 2,
      done: step > 2
    }), React.createElement(Step, {
      n: 3,
      label: 'Done',
      active: step === 3,
      done: false
    })), React.createElement('button', {
      onClick: onClose,
      'aria-label': 'Close',
      style: {
        border: 'none',
        background: 'var(--surface-sunken)',
        width: 34,
        height: 34,
        borderRadius: '50%',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-muted)'
      }
    }, React.createElement(Icon, {
      name: 'X',
      size: 18
    })));
    if (step === 1) {
      return shell([React.createElement('div', {
        key: 'h'
      }, header), React.createElement('div', {
        key: 'b',
        style: {
          padding: '20px 26px 28px'
        }
      }, React.createElement('h3', {
        style: {
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 26,
          color: 'var(--text-strong)',
          margin: '0 0 6px'
        }
      }, 'What\u2019s going on?'), React.createElement('p', {
        style: {
          fontSize: 15,
          color: 'var(--text-muted)',
          margin: '0 0 20px'
        }
      }, 'A quick heads-up is plenty \u2014 we\u2019ll get the details on the call.'), React.createElement(Select, {
        label: 'Type of job',
        required: true,
        style: {
          marginBottom: 16
        }
      }, React.createElement('option', null, 'Clogged or slow drain'), React.createElement('option', null, 'Water heater (no hot water)'), React.createElement('option', null, 'Leak or burst pipe'), React.createElement('option', null, 'Sewer / main line backup'), React.createElement('option', null, 'Toilet, faucet or fixture'), React.createElement('option', null, 'Something else')), React.createElement('div', {
        style: {
          display: 'flex',
          gap: 16,
          marginBottom: 22
        }
      }, React.createElement(Input, {
        label: 'ZIP code',
        icon: React.createElement(Icon, {
          name: 'MapPin',
          size: 18
        }),
        placeholder: '98103',
        style: {
          flex: 1
        }
      }), React.createElement(Select, {
        label: 'Urgency',
        style: {
          flex: 1
        }
      }, React.createElement('option', null, 'Emergency \u2014 today'), React.createElement('option', null, 'This week'), React.createElement('option', null, 'Just planning ahead'))), React.createElement(Button, {
        variant: 'primary',
        size: 'lg',
        block: true,
        onClick: () => setStep(2),
        iconRight: React.createElement(Icon, {
          name: 'ArrowRight',
          size: 18
        })
      }, 'Continue'))]);
    }
    if (step === 2) {
      return shell([React.createElement('div', {
        key: 'h'
      }, header), React.createElement('div', {
        key: 'b',
        style: {
          padding: '20px 26px 28px'
        }
      }, React.createElement('h3', {
        style: {
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 26,
          color: 'var(--text-strong)',
          margin: '0 0 6px'
        }
      }, 'Where do we text you?'), React.createElement('p', {
        style: {
          fontSize: 15,
          color: 'var(--text-muted)',
          margin: '0 0 20px'
        }
      }, 'We\u2019ll confirm a real arrival window \u2014 no phone-tag.'), React.createElement(Input, {
        label: 'Your name',
        required: true,
        placeholder: 'Jane from Maple St.',
        style: {
          marginBottom: 16
        }
      }), React.createElement('div', {
        style: {
          display: 'flex',
          gap: 16,
          marginBottom: 16
        }
      }, React.createElement(Input, {
        label: 'Mobile',
        required: true,
        icon: React.createElement(Icon, {
          name: 'Phone',
          size: 18
        }),
        placeholder: '(555) 240-7867',
        style: {
          flex: 1
        }
      }), React.createElement(Select, {
        label: 'Best time',
        style: {
          flex: 1
        }
      }, React.createElement('option', null, 'Morning'), React.createElement('option', null, 'Afternoon'), React.createElement('option', null, 'Evening'))), React.createElement('div', {
        style: {
          display: 'flex',
          gap: 12
        }
      }, React.createElement(Button, {
        variant: 'ghost',
        size: 'lg',
        onClick: () => setStep(1),
        iconLeft: React.createElement(Icon, {
          name: 'ArrowLeft',
          size: 18
        })
      }, 'Back'), React.createElement(Button, {
        variant: 'primary',
        size: 'lg',
        block: true,
        onClick: () => setStep(3)
      }, 'Request my visit')))]);
    }
    return shell(React.createElement('div', {
      style: {
        padding: '40px 32px 36px',
        textAlign: 'center'
      }
    }, React.createElement('div', {
      style: {
        width: 72,
        height: 72,
        borderRadius: '50%',
        background: 'var(--green-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 20px'
      }
    }, React.createElement(Icon, {
      name: 'CheckCheck',
      size: 36,
      color: 'var(--green-500)'
    })), React.createElement('h3', {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 28,
        color: 'var(--text-strong)',
        margin: '0 0 10px'
      }
    }, 'You\u2019re on the schedule \uD83D\uDD27'), React.createElement('p', {
      style: {
        fontSize: 16,
        color: 'var(--text-body)',
        lineHeight: 1.55,
        margin: '0 auto 22px',
        maxWidth: 380
      }
    }, 'A real dispatcher is reviewing your request now. Watch for a text from ', React.createElement('strong', null, '(555) 240-7867'), ' with your arrival window \u2014 usually within 15 minutes.'), React.createElement('div', {
      style: {
        display: 'flex',
        gap: 8,
        justifyContent: 'center',
        marginBottom: 26,
        flexWrap: 'wrap'
      }
    }, React.createElement(Badge, {
      tone: 'green',
      icon: React.createElement(Icon, {
        name: 'ShieldCheck',
        size: 13
      })
    }, 'Licensed & insured'), React.createElement(Badge, {
      tone: 'blue',
      icon: React.createElement(Icon, {
        name: 'Tag',
        size: 13
      })
    }, 'Upfront pricing')), React.createElement(Button, {
      variant: 'primary',
      size: 'lg',
      onClick: onClose
    }, 'Done')));
  }
  window.TPBooking = Booking;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/BookingModal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
/* Footer. window.TPFooter */
(function () {
  const {
    Icon
  } = window.TPKit;
  const COLS = [['Services', ['Drain Cleaning', 'Water Heaters', 'Leak Repair', 'Sewer & Main Line', 'Repiping']], ['Company', ['About Toilet Plus', 'Our Plumbers', 'Service Area', 'Careers', 'Reviews']], ['Resources', ['Upfront Pricing', 'Financing', 'Maintenance Tips', 'Emergency Guide', 'Contact']]];
  function Footer() {
    const {
      Logo,
      Button
    } = window.ToiletPlusDesignSystem_5215f9;
    return React.createElement('footer', {
      style: {
        background: '#05152B',
        color: 'var(--text-on-dark-muted)'
      }
    },
    // CTA strip
    React.createElement('div', {
      style: {
        borderBottom: '1px solid var(--border-on-dark)'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '36px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 24,
        flexWrap: 'wrap'
      }
    }, React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16
      }
    }, React.createElement('span', {
      style: {
        width: 46,
        height: 46,
        borderRadius: 12,
        background: 'var(--color-accent)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, React.createElement(Icon, {
      name: 'Phone',
      size: 22,
      color: '#fff'
    })), React.createElement('div', null, React.createElement('div', {
      style: {
        color: '#fff',
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 22
      }
    }, 'Got a plumbing emergency right now?'), React.createElement('div', {
      style: {
        fontSize: 14
      }
    }, 'We answer the phone 24/7 \u2014 holidays included.'))), React.createElement(Button, {
      variant: 'accent',
      size: 'lg',
      href: 'tel:5552407867',
      iconLeft: React.createElement(Icon, {
        name: 'Phone',
        size: 18
      })
    }, '(555) 240-7867'))),
    // columns
    React.createElement('div', {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '56px 24px 40px',
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
        gap: 40
      }
    }, React.createElement('div', null, React.createElement(Logo, {
      size: 34,
      tone: 'dark'
    }), React.createElement('p', {
      style: {
        fontSize: 14,
        lineHeight: 1.6,
        margin: '16px 0 18px',
        maxWidth: 300
      }
    }, 'Locally owned plumbers serving the metro and 30 miles out. Upfront pricing, real people, and work we stand behind.'), React.createElement('div', {
      style: {
        display: 'flex',
        gap: 10
      }
    }, ['Facebook', 'Instagram', 'Youtube', 'Star'].map(s => React.createElement('a', {
      key: s,
      href: '#',
      'aria-label': s,
      style: {
        width: 38,
        height: 38,
        borderRadius: 10,
        border: '1px solid var(--border-on-dark)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff'
      }
    }, React.createElement(Icon, {
      name: s,
      size: 17
    }))))), COLS.map(([title, links]) => React.createElement('div', {
      key: title
    }, React.createElement('div', {
      style: {
        color: '#fff',
        fontWeight: 700,
        fontSize: 14,
        marginBottom: 14,
        letterSpacing: '.02em'
      }
    }, title), React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, links.map(l => React.createElement('a', {
      key: l,
      href: '#',
      style: {
        color: 'var(--text-on-dark-muted)',
        textDecoration: 'none',
        fontSize: 14
      }
    }, l)))))),
    // legal
    React.createElement('div', {
      style: {
        borderTop: '1px solid var(--border-on-dark)'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '20px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 12,
        fontSize: 13
      }
    }, React.createElement('span', {
      style: {
        fontFamily: 'var(--font-mono)'
      }
    }, '\u00A9 2026 Toilet Plus Plumbing \u00B7 Lic. #PL-48217 \u00B7 Bonded & Insured'), React.createElement('span', {
      style: {
        display: 'flex',
        gap: 20
      }
    }, React.createElement('a', {
      href: '#',
      style: {
        color: 'var(--text-on-dark-muted)',
        textDecoration: 'none'
      }
    }, 'Privacy'), React.createElement('a', {
      href: '#',
      style: {
        color: 'var(--text-on-dark-muted)',
        textDecoration: 'none'
      }
    }, 'Terms'), React.createElement('a', {
      href: '#',
      style: {
        color: 'var(--text-on-dark-muted)',
        textDecoration: 'none'
      }
    }, 'Accessibility')))));
  }
  window.TPFooter = Footer;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Guarantees.jsx
try { (() => {
/* Guarantee band (navy) + stat strip. window.TPGuarantees */
(function () {
  const {
    Eyebrow,
    Icon
  } = window.TPKit;
  const ITEMS = [['Tag', 'Upfront, flat-rate pricing', 'You approve the price before we lift a wrench. No hourly meter running, no surprise line items.'], ['Clock', 'On time, or we call you', 'We give a real arrival window and text when we\u2019re 30 minutes out. Your day doesn\u2019t revolve around us.'], ['BadgeCheck', 'Licensed & background-checked', 'Every plumber is licensed, insured, and vetted. We treat your home like our mom lives there.'], ['RotateCcw', '2-year workmanship warranty', 'If something we fixed acts up, we come back and make it right. No fine print, no fight.']];
  function Guarantees() {
    const {
      GuaranteeCard
    } = window.ToiletPlusDesignSystem_5215f9;
    return React.createElement('section', {
      id: 'why',
      style: {
        background: 'var(--surface-navy)',
        color: '#fff',
        padding: '88px 0'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 24px'
      }
    }, React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: '0.9fr 1.1fr',
        gap: 56,
        alignItems: 'center'
      }
    }, React.createElement('div', null, React.createElement(Eyebrow, {
      accent: true
    }, React.createElement(Icon, {
      name: 'HandHeart',
      size: 14
    }), 'The Toilet Plus promise'), React.createElement('h2', {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 42,
        letterSpacing: '-0.015em',
        color: '#fff',
        margin: '0 0 16px',
        lineHeight: 1.06
      }
    }, 'No surprises. No upsell. Just the fix.'), React.createElement('p', {
      style: {
        fontSize: 17,
        lineHeight: 1.6,
        color: 'var(--text-on-dark-muted)',
        margin: 0
      }
    }, 'We\u2019re a local shop, not a call-center franchise. You get the same plumbers, the same honest read, and a price we stand behind \u2014 every single visit.')), React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 16
      }
    }, ITEMS.map(([ic, t, b]) => React.createElement(GuaranteeCard, {
      key: t,
      tone: 'navy',
      icon: React.createElement(Icon, {
        name: ic,
        size: 22
      }),
      title: t
    }, b))))));
  }
  window.TPGuarantees = Guarantees;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Guarantees.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
/* Sticky site header — utility bar + main nav. Exposes window.TPHeader */
(function () {
  const NAV = ['Services', 'Why Us', 'Service Area', 'Financing', 'Reviews'];
  function Header({
    onBook
  }) {
    const {
      Logo,
      Button
    } = window.ToiletPlusDesignSystem_5215f9;
    const {
      Icon
    } = window.TPKit;
    return React.createElement('header', {
      style: {
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--border-soft)'
      }
    },
    // utility strip
    React.createElement('div', {
      style: {
        background: 'var(--blue-900)',
        color: '#fff'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '7px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 13
      }
    }, React.createElement('span', {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        color: 'var(--text-on-dark-muted)'
      }
    }, React.createElement(Icon, {
      name: 'ShieldCheck',
      size: 15,
      color: '#7FE3B0'
    }), 'Licensed, bonded & insured · Lic. #PL-48217'), React.createElement('span', {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 18
      }
    }, React.createElement('a', {
      href: '#',
      style: {
        color: 'var(--text-on-dark-muted)',
        textDecoration: 'none',
        display: 'inline-flex',
        gap: 6,
        alignItems: 'center'
      }
    }, React.createElement(Icon, {
      name: 'MapPin',
      size: 14
    }), 'Find your location'), React.createElement('a', {
      href: 'tel:5552407867',
      style: {
        color: '#fff',
        fontWeight: 700,
        textDecoration: 'none',
        display: 'inline-flex',
        gap: 6,
        alignItems: 'center'
      }
    }, React.createElement(Icon, {
      name: 'Phone',
      size: 14,
      color: 'var(--color-accent)'
    }), React.createElement('span', {
      style: {
        fontFamily: 'var(--font-mono)'
      }
    }, '(555) 240-7867'))))),
    // main bar
    React.createElement('div', {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 24px',
        height: 76,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, React.createElement(Logo, {
      size: 36,
      href: '#'
    }), React.createElement('nav', {
      style: {
        display: 'flex',
        gap: 28
      }
    }, NAV.map(n => React.createElement('a', {
      key: n,
      href: '#',
      style: {
        fontSize: 15,
        fontWeight: 600,
        color: 'var(--text-body)',
        textDecoration: 'none'
      }
    }, n))), React.createElement('div', {
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'center'
      }
    }, React.createElement(Button, {
      variant: 'accent',
      size: 'sm',
      iconLeft: React.createElement(Icon, {
        name: 'CalendarCheck',
        size: 16
      }),
      onClick: onBook
    }, 'Book Online'))));
  }
  window.TPHeader = Header;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
/* Hero — navy band, headline + rating left, quick-book card right. window.TPHero */
(function () {
  function Hero({
    onBook
  }) {
    const {
      Button,
      RatingBadge,
      Badge,
      Input
    } = window.ToiletPlusDesignSystem_5215f9;
    const {
      Icon
    } = window.TPKit;
    return React.createElement('section', {
      style: {
        position: 'relative',
        background: 'linear-gradient(160deg, #0B3D7E 0%, #071E3D 70%)',
        color: '#fff',
        overflow: 'hidden'
      }
    },
    // faint pipe-grid texture
    React.createElement('div', {
      style: {
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)',
        backgroundSize: '26px 26px',
        pointerEvents: 'none'
      }
    }), React.createElement('div', {
      style: {
        position: 'relative',
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '72px 24px 84px',
        display: 'grid',
        gridTemplateColumns: '1.15fr 0.85fr',
        gap: 56,
        alignItems: 'center'
      }
    },
    // left
    React.createElement('div', null, React.createElement('div', {
      style: {
        display: 'flex',
        gap: 8,
        marginBottom: 22,
        flexWrap: 'wrap'
      }
    }, React.createElement(Badge, {
      tone: 'accent',
      icon: React.createElement(Icon, {
        name: 'Clock',
        size: 13
      })
    }, '24/7 Emergency Plumber'), React.createElement(Badge, {
      tone: 'solid',
      icon: React.createElement(Icon, {
        name: 'BadgeCheck',
        size: 13
      })
    }, 'Same-Day Service')), React.createElement('h1', {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 60,
        lineHeight: 1.02,
        letterSpacing: '-0.02em',
        margin: '0 0 18px',
        color: '#fff'
      }
    }, 'Burst pipe? Slow drain?', React.createElement('br'), React.createElement('span', {
      style: {
        color: 'var(--blue-300)'
      }
    }, 'We\u2019ll be there fast.')), React.createElement('p', {
      style: {
        fontSize: 19,
        lineHeight: 1.55,
        color: 'var(--text-on-dark-muted)',
        maxWidth: 520,
        margin: '0 0 28px'
      }
    }, 'Local, licensed plumbers for drain cleaning, water heaters, leak repair, and sewer lines \u2014 with upfront pricing and no surprise fees. Real people, honest answers.'), React.createElement('div', {
      style: {
        display: 'flex',
        gap: 14,
        alignItems: 'center',
        flexWrap: 'wrap',
        marginBottom: 28
      }
    }, React.createElement(Button, {
      variant: 'accent',
      size: 'lg',
      iconLeft: React.createElement(Icon, {
        name: 'Phone',
        size: 18
      }),
      href: 'tel:5552407867'
    }, 'Call (555) 240-7867'), React.createElement(Button, {
      variant: 'on-dark',
      size: 'lg',
      iconLeft: React.createElement(Icon, {
        name: 'CalendarCheck',
        size: 18
      }),
      onClick: onBook
    }, 'Book online')), React.createElement(RatingBadge, {
      value: 4.9,
      count: 2148,
      size: 'lg'
    })),
    // right — quick book card
    React.createElement('div', {
      style: {
        background: '#fff',
        borderRadius: 'var(--radius-xl)',
        padding: 28,
        boxShadow: 'var(--shadow-xl)',
        color: 'var(--text-body)'
      }
    }, React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginBottom: 6
      }
    }, React.createElement('span', {
      style: {
        width: 40,
        height: 40,
        borderRadius: 10,
        background: 'var(--blue-50)',
        color: 'var(--color-primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, React.createElement(Icon, {
      name: 'Wrench',
      size: 20
    })), React.createElement('h3', {
      style: {
        margin: 0,
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 22,
        color: 'var(--text-strong)'
      }
    }, 'Get a fast quote')), React.createElement('p', {
      style: {
        margin: '0 0 16px',
        fontSize: 14,
        color: 'var(--text-muted)'
      }
    }, 'Tell us your ZIP and what\u2019s wrong \u2014 we\u2019ll text back availability in minutes.'), React.createElement(Input, {
      label: 'ZIP code',
      icon: React.createElement(Icon, {
        name: 'MapPin',
        size: 18
      }),
      placeholder: '98103',
      style: {
        marginBottom: 14
      }
    }), React.createElement(Button, {
      variant: 'primary',
      size: 'lg',
      block: true,
      onClick: onBook,
      iconRight: React.createElement(Icon, {
        name: 'ArrowRight',
        size: 18
      })
    }, 'Check availability'), React.createElement('div', {
      style: {
        display: 'flex',
        gap: 16,
        marginTop: 16,
        justifyContent: 'center',
        fontSize: 12.5,
        color: 'var(--text-muted)'
      }
    }, React.createElement('span', {
      style: {
        display: 'inline-flex',
        gap: 5,
        alignItems: 'center'
      }
    }, React.createElement(Icon, {
      name: 'ShieldCheck',
      size: 14,
      color: 'var(--green-500)'
    }), 'No spam'), React.createElement('span', {
      style: {
        display: 'inline-flex',
        gap: 5,
        alignItems: 'center'
      }
    }, React.createElement(Icon, {
      name: 'Tag',
      size: 14,
      color: 'var(--green-500)'
    }), 'Upfront pricing')))));
  }
  window.TPHero = Hero;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Reviews.jsx
try { (() => {
/* Reviews section. window.TPReviews */
(function () {
  const {
    Section,
    Eyebrow,
    Icon
  } = window.TPKit;
  const REVIEWS = [[5, 'Water heater died on a Sunday and they had hot water back by dinner. Quoted the price before starting \u2014 no games.', 'Marcus T.', 'Northgate'], [5, 'Snaked a drain two other companies wanted to replace. Saved me about $1,800 and explained exactly what was going on.', 'Priya R.', 'Ballard'], [5, 'Found a slab leak fast, patched the drywall back, and left the place cleaner than they found it. Genuinely kind crew.', 'Dave & Lin', 'Greenwood']];
  function Reviews() {
    const {
      ReviewCard,
      RatingBadge
    } = window.ToiletPlusDesignSystem_5215f9;
    return React.createElement(Section, {
      id: 'reviews'
    }, React.createElement('div', {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 40,
        flexWrap: 'wrap',
        gap: 20
      }
    }, React.createElement('div', null, React.createElement(Eyebrow, null, React.createElement(Icon, {
      name: 'MessageSquareHeart',
      size: 14
    }), 'Neighbors, not testimonials'), React.createElement('h2', {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 42,
        letterSpacing: '-0.015em',
        color: 'var(--text-strong)',
        margin: 0
      }
    }, 'Why folks keep our number saved')), React.createElement(RatingBadge, {
      value: 4.9,
      count: 2148,
      size: 'lg'
    })), React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 20
      }
    }, REVIEWS.map(([r, q, a, l]) => React.createElement(ReviewCard, {
      key: a,
      rating: r,
      quote: q,
      author: a,
      location: l,
      source: 'Google'
    }))));
  }
  window.TPReviews = Reviews;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Reviews.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
/* Services grid section. window.TPServices */
(function () {
  const {
    Section,
    Eyebrow,
    Icon
  } = window.TPKit;
  const SERVICES = [['Droplets', 'Drain Cleaning', 'Slow sink or backed-up shower? We snake, hydro-jet, and camera the line so the clog actually stays gone \u2014 not just pushed down.'], ['Flame', 'Water Heater Repair & Install', 'No hot water this morning? We fix and replace tank and tankless units, size them right, and haul the old one away.'], ['Waves', 'Leak Detection & Repair', 'Mystery water spot or a spike on the bill? We trace slab and pinhole leaks before they wreck your drywall.'], ['Pipette', 'Sewer & Main Line', 'Gurgling drains across the house usually means the main. We camera-inspect and clear roots, bellies, and breaks.'], ['ShowerHead', 'Faucets, Toilets & Fixtures', 'Running toilet, dripping faucet, wobbly flange \u2014 the small stuff that wastes water and nags at you. Done same day.'], ['Gauge', 'Repiping & Water Quality', 'Low pressure or rusty water? We repipe old galvanized lines and install filtration so every tap runs clean.']];
  function Services() {
    const {
      ServiceCard
    } = window.ToiletPlusDesignSystem_5215f9;
    return React.createElement(Section, {
      id: 'services',
      tone: 'muted'
    }, React.createElement('div', {
      style: {
        textAlign: 'center',
        maxWidth: 640,
        margin: '0 auto 48px'
      }
    }, React.createElement('div', {
      style: {
        display: 'flex',
        justifyContent: 'center'
      }
    }, React.createElement(Eyebrow, null, React.createElement(Icon, {
      name: 'Wrench',
      size: 14
    }), 'What we fix')), React.createElement('h2', {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 44,
        letterSpacing: '-0.015em',
        color: 'var(--text-strong)',
        margin: '0 0 14px'
      }
    }, 'Plumbing services, done right the first time'), React.createElement('p', {
      style: {
        fontSize: 17,
        color: 'var(--text-muted)',
        margin: 0,
        lineHeight: 1.6
      }
    }, 'From a dripping faucet to a full repipe \u2014 residential and light commercial. If it carries water, we work on it.')), React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 20
      }
    }, SERVICES.map(([ic, title, body]) => React.createElement(ServiceCard, {
      key: title,
      icon: React.createElement(Icon, {
        name: ic,
        size: 26
      }),
      title,
      href: '#'
    }, body))));
  }
  window.TPServices = Services;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.RatingBadge = __ds_scope.RatingBadge;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.GuaranteeCard = __ds_scope.GuaranteeCard;

__ds_ns.ReviewCard = __ds_scope.ReviewCard;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

})();
