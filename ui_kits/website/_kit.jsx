/* Toilet Plus — shared UI-kit helpers (icons + spec-sheet primitives).
   Loaded before the screen files; exposes window.TPKit.* */
(function () {
  const { useRef, useEffect } = React;

  // Lucide icon -> inline svg (robust to API changes)
  function Icon({ name, size = 22, stroke = 2, color = 'currentColor' }) {
    const ref = useRef();
    useEffect(() => {
      const node = window.lucide && (lucide.icons?.[name] || lucide[name]);
      if (!node || !ref.current) return;
      const svg = lucide.createElement(node);
      svg.setAttribute('width', size);
      svg.setAttribute('height', size);
      if (stroke) svg.setAttribute('stroke-width', stroke);
      if (color && color !== 'currentColor') svg.setAttribute('stroke', color);
      ref.current.innerHTML = '';
      ref.current.appendChild(svg);
    }, [name, size, stroke, color]);
    return React.createElement('span', { ref, style: { display: 'inline-flex' } });
  }

  // Fine blueprint grid — atmosphere without the floaty-dot SaaS cliché.
  function blueprint(color, gap = 30) {
    return {
      backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`,
      backgroundSize: `${gap}px ${gap}px`,
    };
  }

  function Section({ id, tone = 'page', pad = 104, children, style }) {
    const bg = tone === 'muted' ? 'var(--surface-muted)'
      : tone === 'navy' ? 'var(--surface-navy)'
      : tone === 'brand' ? 'var(--color-primary)'
      : 'var(--surface-page)';
    return React.createElement('section', {
      id,
      style: { background: bg, padding: `${pad}px 0`, ...style },
    }, React.createElement('div', { style: { maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 24px' } }, children));
  }

  // Mono stamp label — equipment/spec-sheet tag. `tick` adds a leading red mark.
  function Stamp({ children, tone = 'blue', tick, style }) {
    const fg = tone === 'onDark' ? 'var(--blue-300)' : tone === 'accent' ? 'var(--color-accent)' : 'var(--color-primary)';
    return React.createElement('span', {
      style: {
        display: 'inline-flex', alignItems: 'center', gap: 8,
        fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 600,
        letterSpacing: '.12em', textTransform: 'uppercase', color: fg, ...style,
      },
    },
      tick !== false && React.createElement('span', { style: { width: 14, height: 2, background: 'var(--color-accent)', display: 'inline-block' } }),
      children);
  }

  // Left-aligned numbered section header. index="01", kicker="Services", then headline + optional intro.
  function SectionHead({ index, kicker, title, intro, onDark, accentTitle, align = 'split', titleSize = 46 }) {
    const titleColor = onDark ? '#fff' : 'var(--text-strong)';
    const muted = onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)';
    const head = React.createElement('div', { style: { maxWidth: align === 'split' ? 620 : 760 } },
      React.createElement('div', { style: { display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 18 } },
        index && React.createElement('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 600, color: 'var(--color-accent)', letterSpacing: '.08em' } }, index),
        React.createElement(Stamp, { tone: onDark ? 'onDark' : 'blue', tick: false }, kicker)),
      React.createElement('h2', { style: { fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: titleSize, lineHeight: 1.04, letterSpacing: '-0.02em', color: titleColor, margin: 0 } },
        title, accentTitle && React.createElement('span', { style: { color: onDark ? 'var(--blue-300)' : 'var(--color-primary)' } }, accentTitle)));
    if (align === 'split' && intro) {
      return React.createElement('div', { style: { display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 40, alignItems: 'end', borderBottom: onDark ? '1px solid var(--border-on-dark)' : '1px solid var(--border-strong)', paddingBottom: 28, marginBottom: 44 } },
        head,
        React.createElement('p', { style: { margin: 0, fontSize: 16, lineHeight: 1.6, color: muted } }, intro));
    }
    return React.createElement('div', { style: { marginBottom: 40 } }, head,
      intro && React.createElement('p', { style: { margin: '16px 0 0', fontSize: 16, lineHeight: 1.6, color: muted, maxWidth: 560 } }, intro));
  }

  window.TPKit = { Icon, Section, Stamp, SectionHead, blueprint };
})();
