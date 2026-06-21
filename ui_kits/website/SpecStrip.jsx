/* Spec stat strip — industrial band of big mono figures. window.TPSpecStrip */
(function () {
  const STATS = [
    ['18', 'yrs', 'In the trade, locally owned'],
    ['~1', 'hr', 'Average arrival window'],
    ['12k', '+', 'Jobs done & warrantied'],
    ['4.9', '\u2605', '2,148 verified reviews'],
  ];

  function SpecStrip() {
    const { blueprint, useViewport } = window.TPKit;
    const { isMobile } = useViewport();
    return React.createElement('section', { style: { position: 'relative', background: 'var(--color-primary)', overflow: 'hidden' } },
      React.createElement('div', { style: { position: 'absolute', inset: 0, ...blueprint('rgba(255,255,255,0.08)', 30), pointerEvents: 'none' } }),
      React.createElement('div', { style: { position: 'relative', maxWidth: 'var(--container-max)', margin: '0 auto', padding: isMobile ? '0 18px' : '0 24px' } },
        React.createElement('div', { style: { display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)' } },
          STATS.map(([n, unit, label], i) => {
            const leftBorder = isMobile ? (i % 2 === 0 ? 'none' : '1px solid rgba(255,255,255,0.18)') : (i === 0 ? 'none' : '1px solid rgba(255,255,255,0.18)');
            const topBorder = isMobile && i >= 2 ? '1px solid rgba(255,255,255,0.18)' : 'none';
            return React.createElement('div', { key: label, style: { padding: isMobile ? '26px 20px' : '34px 28px', borderLeft: leftBorder, borderTop: topBorder } },
              React.createElement('div', { style: { display: 'flex', alignItems: 'baseline', gap: 4, color: '#fff' } },
                React.createElement('span', { style: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: isMobile ? 40 : 52, letterSpacing: '-0.03em', lineHeight: 1 } }, n),
                React.createElement('span', { style: { fontFamily: 'var(--font-mono)', fontSize: isMobile ? 17 : 20, fontWeight: 600, color: 'var(--blue-100)' } }, unit)),
              React.createElement('div', { style: { marginTop: 10, fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.78)', lineHeight: 1.4 } }, label));
          })))
    );
  }

  window.TPSpecStrip = SpecStrip;
})();
