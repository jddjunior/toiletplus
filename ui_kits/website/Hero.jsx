/* Hero — navy band, blueprint grid, editorial headline + work-order quote ticket. window.TPHero */
(function () {
  function Hero({ onBook }) {
    const { Button, Input } = window.ToiletPlusDesignSystem_5215f9;
    const { Icon, Stamp, blueprint } = window.TPKit;

    return React.createElement('section', {
      style: { position: 'relative', background: 'linear-gradient(165deg, #0B3D7E 0%, #071E3D 72%)', color: '#fff', overflow: 'hidden' },
    },
      // blueprint grid
      React.createElement('div', { style: { position: 'absolute', inset: 0, ...blueprint('rgba(255,255,255,0.05)', 32), pointerEvents: 'none' } }),
      // big ghost wordmark watermark
      React.createElement('div', { style: { position: 'absolute', right: -40, bottom: -70, fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 320, lineHeight: 1, color: 'rgba(255,255,255,0.03)', pointerEvents: 'none', letterSpacing: '-0.04em' } }, '+'),

      React.createElement('div', { style: { position: 'relative', maxWidth: 'var(--container-max)', margin: '0 auto', padding: '76px 24px 88px', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 64, alignItems: 'center' } },
        // left
        React.createElement('div', null,
          React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 26, paddingBottom: 18, borderBottom: '1px solid var(--border-on-dark)' } },
            React.createElement(Stamp, { tone: 'accent' }, '24/7 Emergency'),
            React.createElement('span', { style: { width: 1, height: 14, background: 'var(--border-on-dark)' } }),
            React.createElement(Stamp, { tone: 'onDark', tick: false }, 'Licensed #PL-48217'),
            React.createElement('span', { style: { width: 1, height: 14, background: 'var(--border-on-dark)' } }),
            React.createElement(Stamp, { tone: 'onDark', tick: false }, 'Same-Day')),
          React.createElement('h1', { style: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 68, lineHeight: 0.98, letterSpacing: '-0.03em', margin: '0 0 22px', color: '#fff' } },
            'Burst pipe.', React.createElement('br'),
            'Slow drain.', React.createElement('br'),
            React.createElement('span', { style: { color: 'var(--blue-300)' } }, 'We show up fast.')),
          React.createElement('p', { style: { fontSize: 18, lineHeight: 1.55, color: 'var(--text-on-dark-muted)', maxWidth: 500, margin: '0 0 30px' } },
            'Local, licensed plumbers for drain cleaning, water heaters, leak detection, and sewer lines \u2014 with upfront, flat-rate pricing. Real people, honest answers, no surprise fees.'),
          React.createElement('div', { style: { display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', marginBottom: 28 } },
            React.createElement(Button, { variant: 'accent', size: 'lg', iconLeft: React.createElement(Icon, { name: 'Phone', size: 18 }), href: 'tel:5552407867' }, 'Call (555) 240-7867'),
            React.createElement(Button, { variant: 'on-dark', size: 'lg', iconLeft: React.createElement(Icon, { name: 'CalendarCheck', size: 18 }), onClick: onBook }, 'Book online')),
          // rating stamp line
          React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 12 } },
            React.createElement('span', { style: { display: 'inline-flex', gap: 2 } },
              [0,1,2,3,4].map(i => React.createElement('svg', { key: i, width: 18, height: 18, viewBox: '0 0 24 24', fill: '#FFB400' }, React.createElement('path', { d: 'M12 2.4l2.9 5.9 6.5.95-4.7 4.58 1.1 6.47L12 17.3l-5.8 3.06 1.1-6.47L2.6 9.25l6.5-.95z' })))),
            React.createElement('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 13.5, color: '#fff', fontWeight: 600 } }, '4.9'),
            React.createElement('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-on-dark-muted)' } }, '/ 2,148 Google reviews'))
        ),
        // right — work-order quote ticket
        React.createElement('div', { style: { background: '#fff', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-xl)', color: 'var(--text-body)', overflow: 'hidden' } },
          // ticket header bar
          React.createElement('div', { style: { background: 'var(--blue-900)', color: '#fff', padding: '14px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' } },
            React.createElement('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: 8 } },
              React.createElement(Icon, { name: 'ClipboardList', size: 15, color: 'var(--blue-300)' }), 'Quick Quote'),
            React.createElement('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--blue-300)' } }, 'EST. REPLY \u00B7 15 MIN')),
          // perforation
          React.createElement('div', { style: { height: 0, borderTop: '2px dashed var(--border-strong)', margin: '0' } }),
          React.createElement('div', { style: { padding: '24px 22px 26px' } },
            React.createElement('p', { style: { margin: '0 0 18px', fontSize: 14.5, color: 'var(--text-muted)', lineHeight: 1.5 } }, 'Drop your ZIP and what\u2019s wrong \u2014 a real dispatcher texts back availability in minutes.'),
            React.createElement(Input, { label: 'ZIP code', icon: React.createElement(Icon, { name: 'MapPin', size: 18 }), placeholder: '98103', style: { marginBottom: 16 } }),
            React.createElement(Button, { variant: 'primary', size: 'lg', block: true, onClick: onBook, iconRight: React.createElement(Icon, { name: 'ArrowRight', size: 18 }) }, 'Check availability'),
            React.createElement('div', { style: { display: 'flex', gap: 18, marginTop: 18, paddingTop: 16, borderTop: '1px solid var(--border-soft)', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--text-muted)' } },
              React.createElement('span', { style: { display: 'inline-flex', gap: 6, alignItems: 'center' } }, React.createElement(Icon, { name: 'ShieldCheck', size: 14, color: 'var(--green-500)' }), 'No spam'),
              React.createElement('span', { style: { display: 'inline-flex', gap: 6, alignItems: 'center' } }, React.createElement(Icon, { name: 'Tag', size: 14, color: 'var(--green-500)' }), 'Flat-rate'),
              React.createElement('span', { style: { display: 'inline-flex', gap: 6, alignItems: 'center' } }, React.createElement(Icon, { name: 'Clock', size: 14, color: 'var(--green-500)' }), '24/7')))
        )
      )
    );
  }

  window.TPHero = Hero;
})();
