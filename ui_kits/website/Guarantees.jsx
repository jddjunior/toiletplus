/* Guarantee band (navy) — numbered "no fine print" promises. window.TPGuarantees */
(function () {
  const ITEMS = [
    ['01', 'Upfront, flat-rate pricing', 'You approve the price before we lift a wrench. No hourly meter running, no surprise line items on the invoice.'],
    ['02', 'On time, or we call you', 'A real arrival window, and a text when we\u2019re 30 minutes out. Your whole day doesn\u2019t revolve around waiting on us.'],
    ['03', 'Licensed & background-checked', 'Every plumber is licensed, insured, and vetted. We treat your home like our own mom lives there.'],
    ['04', '2-year workmanship warranty', 'If something we fixed acts up, we come back and make it right. No fine print, no fight, no re-trip fee.'],
  ];

  function Guarantees() {
    const { Icon, Stamp, blueprint, useViewport } = window.TPKit;
    const { isMobile } = useViewport();
    return React.createElement('section', { id: 'why', style: { position: 'relative', background: 'var(--surface-navy)', color: '#fff', padding: isMobile ? '60px 0' : '100px 0', overflow: 'hidden' } },
      React.createElement('div', { style: { position: 'absolute', inset: 0, ...blueprint('rgba(255,255,255,0.04)', 32), pointerEvents: 'none' } }),
      React.createElement('div', { style: { position: 'relative', maxWidth: 'var(--container-max)', margin: '0 auto', padding: isMobile ? '0 18px' : '0 24px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '0.85fr 1.15fr', gap: isMobile ? 32 : 56 } },
        // left header
        React.createElement('div', null,
          React.createElement('div', { style: { display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 18 } },
            React.createElement('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 600, color: 'var(--color-accent)', letterSpacing: '.08em' } }, '02'),
            React.createElement(Stamp, { tone: 'onDark', tick: false }, 'The Toilet Plus promise')),
          React.createElement('h2', { style: { fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: isMobile ? 30 : 46, lineHeight: 1.02, letterSpacing: '-0.02em', color: '#fff', margin: '0 0 18px' } },
            'No surprises. No upsell. ', React.createElement('span', { style: { color: 'var(--blue-300)' } }, 'Just the fix.')),
          React.createElement('p', { style: { fontSize: 16.5, lineHeight: 1.6, color: 'var(--text-on-dark-muted)', margin: '0 0 26px', maxWidth: 420 } },
            'We\u2019re a local shop, not a call-center franchise. Same plumbers, same honest read, and a price we stand behind \u2014 every single visit.'),
          React.createElement('div', { style: { display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-mono)', fontSize: 12.5, letterSpacing: '.05em', textTransform: 'uppercase', color: '#fff', border: '1px solid var(--border-on-dark)', borderRadius: 'var(--radius-sm)', padding: '10px 14px' } },
            React.createElement(Icon, { name: 'FileSignature', size: 16, color: 'var(--blue-300)' }), 'Written estimate, every job')),
        // right numbered grid
        React.createElement('div', { style: { display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 0, border: '1px solid var(--border-on-dark)', borderRadius: 'var(--radius-md)', overflow: 'hidden' } },
          ITEMS.map(([n, t, b], i) =>
            React.createElement('div', { key: n, style: {
              padding: '26px 24px',
              borderRight: !isMobile && i % 2 === 0 ? '1px solid var(--border-on-dark)' : 'none',
              borderBottom: isMobile ? (i < ITEMS.length - 1 ? '1px solid var(--border-on-dark)' : 'none') : (i < 2 ? '1px solid var(--border-on-dark)' : 'none'),
            } },
              React.createElement('div', { style: { fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 600, color: 'var(--color-accent)', marginBottom: 12, letterSpacing: '.06em' } }, n),
              React.createElement('h4', { style: { margin: '0 0 8px', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, color: '#fff', lineHeight: 1.15 } }, t),
              React.createElement('p', { style: { margin: 0, fontSize: 14, lineHeight: 1.5, color: 'var(--text-on-dark-muted)' } }, b))))
      )
    );
  }

  window.TPGuarantees = Guarantees;
})();
