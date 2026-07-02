import * as LucideIcons from 'lucide-react';

export function Icon({ name, size = 22, stroke = 2, color = 'currentColor', className }) {
  const Cmp = LucideIcons[name];
  if (!Cmp) return null;
  return <Cmp size={size} strokeWidth={stroke} color={color} className={className} aria-hidden="true" />;
}

export function blueprint(color, gap = 30) {
  return {
    backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`,
    backgroundSize: `${gap}px ${gap}px`,
  };
}

export function Section({ id, tone = 'page', pad = 104, children, style, className }) {
  const bg = tone === 'muted' ? 'var(--surface-muted)'
    : tone === 'navy' ? 'var(--surface-navy)'
    : tone === 'brand' ? 'var(--color-primary)'
    : 'var(--surface-page)';
  return (
    <section id={id} className={className} style={{ background: bg, padding: `${pad}px 0`, ...style }}>
      <div className="tp-container">{children}</div>
    </section>
  );
}

export function Stamp({ children, tone = 'blue', tick, style }) {
  const fg = tone === 'onDark' ? 'var(--blue-300)' : tone === 'accent' ? 'var(--color-accent)' : 'var(--color-primary)';
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 600,
      letterSpacing: '.12em', textTransform: 'uppercase', color: fg, ...style,
    }}>
      {tick !== false && <span style={{ width: 14, height: 2, background: 'var(--color-accent)', display: 'inline-block' }} />}
      {children}
    </span>
  );
}

export function SectionHead({ index, kicker, title, intro, onDark, accentTitle, align = 'split', titleSize = 46 }) {
  const titleColor = onDark ? '#fff' : 'var(--text-strong)';
  const muted = onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)';
  const head = (
    <div style={{ maxWidth: align === 'split' ? 620 : 760 }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 18 }}>
        {index && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 600, color: 'var(--color-accent)', letterSpacing: '.08em' }}>{index}</span>}
        <Stamp tone={onDark ? 'onDark' : 'blue'} tick={false}>{kicker}</Stamp>
      </div>
      <h2 className="tp-sectionhead__title" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: titleSize, lineHeight: 1.04, letterSpacing: '-0.02em', color: titleColor, margin: 0 }}>
        {title}{accentTitle && <span style={{ color: onDark ? 'var(--blue-300)' : 'var(--color-primary)' }}>{accentTitle}</span>}
      </h2>
    </div>
  );
  if (align === 'split' && intro) {
    return (
      <div className="tp-sectionhead__grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 40, alignItems: 'end', borderBottom: onDark ? '1px solid var(--border-on-dark)' : '1px solid var(--border-strong)', paddingBottom: 28, marginBottom: 44 }}>
        {head}
        <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: muted }}>{intro}</p>
      </div>
    );
  }
  return (
    <div style={{ marginBottom: 40 }}>
      {head}
      {intro && <p style={{ margin: '16px 0 0', fontSize: 16, lineHeight: 1.6, color: muted, maxWidth: 560 }}>{intro}</p>}
    </div>
  );
}
