/* Footer. window.TPFooter */
(function () {
  const { Icon } = window.TPKit;

  const COLS = [
    ['Services', [
      {label: 'Drain Cleaning', href: '/pages/drain-cleaning.html'},
      {label: 'Water Heaters', href: '/pages/water-heaters.html'},
      {label: 'Leak Detection', href: '/pages/leak-detection.html'},
      {label: 'Sewer & Main Line', href: '/pages/sewer-main-line.html'},
      {label: 'Repiping', href: '/pages/repiping-water-quality.html'},
    ]],
    ['Company', [
      {label: 'About', href: '/pages/about.html'},
      {label: 'Contact', href: '/pages/contact.html'},
      {label: 'Service Area', href: '/pages/service-area.html'},
      {label: 'FAQ', href: '/pages/faq.html'},
    ]],
    ['Legal', [
      {label: 'Privacy Policy', href: '/pages/privacy-policy.html'},
      {label: 'Terms of Service', href: '/pages/terms-of-service.html'},
    ]],
  ];

  function Footer() {
    const { Logo, Button } = window.ToiletPlusDesignSystem_5215f9;
    return React.createElement('footer', { style: { background: '#05152B', color: 'var(--text-on-dark-muted)' } },
      // CTA strip
      React.createElement('div', { style: { borderBottom: '1px solid var(--border-on-dark)' } },
        React.createElement('div', { style: { maxWidth: 'var(--container-max)', margin: '0 auto', padding: '36px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, flexWrap: 'wrap' } },
          React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 16 } },
            React.createElement('span', { style: { width: 46, height: 46, borderRadius: 12, background: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' } }, React.createElement(Icon, { name: 'Phone', size: 22, color: '#fff' })),
            React.createElement('div', null,
              React.createElement('div', { style: { color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22 } }, 'Got a plumbing emergency right now?'),
              React.createElement('div', { style: { fontSize: 14 } }, 'We answer the phone 24/7 \u2014 holidays included.'))),
          React.createElement(Button, { variant: 'accent', size: 'lg', href: 'tel:5552407867', iconLeft: React.createElement(Icon, { name: 'Phone', size: 18 }) }, '(555) 240-7867'))),
      // columns
      React.createElement('div', { style: { maxWidth: 'var(--container-max)', margin: '0 auto', padding: '56px 24px 40px', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40 } },
        React.createElement('div', null,
          React.createElement(Logo, { size: 34, tone: 'dark' }),
          React.createElement('p', { style: { fontSize: 14, lineHeight: 1.6, margin: '16px 0 18px', maxWidth: 300 } }, 'Locally owned plumbers serving the metro and 30 miles out. Upfront pricing, real people, and work we stand behind.'),
          React.createElement('div', { style: { display: 'flex', gap: 10 } },
            ['Facebook', 'Instagram', 'Youtube', 'Star'].map((s) =>
              React.createElement('a', { key: s, href: '#', 'aria-label': s, style: { width: 38, height: 38, borderRadius: 10, border: '1px solid var(--border-on-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' } },
                React.createElement(Icon, { name: s, size: 17 }))))),
        COLS.map(([title, links]) =>
          React.createElement('div', { key: title },
            React.createElement('div', { style: { color: '#fff', fontWeight: 700, fontSize: 14, marginBottom: 14, letterSpacing: '.02em' } }, title),
            React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 10 } },
              links.map((l) => React.createElement('a', { key: l.label, href: l.href, style: { color: 'var(--text-on-dark-muted)', textDecoration: 'none', fontSize: 14 } }, l.label)))))),
      // legal
      React.createElement('div', { style: { borderTop: '1px solid var(--border-on-dark)' } },
        React.createElement('div', { style: { maxWidth: 'var(--container-max)', margin: '0 auto', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, fontSize: 13 } },
          React.createElement('span', { style: { fontFamily: 'var(--font-mono)' } }, '\u00A9 2026 Toilet Plus Plumbing \u00B7 Lic. #PL-48217 \u00B7 Bonded & Insured'),
          React.createElement('span', { style: { display: 'flex', gap: 20 } },
            React.createElement('a', { href: '/pages/privacy-policy.html', style: { color: 'var(--text-on-dark-muted)', textDecoration: 'none' } }, 'Privacy'),
            React.createElement('a', { href: '/pages/terms-of-service.html', style: { color: 'var(--text-on-dark-muted)', textDecoration: 'none' } }, 'Terms'),
            React.createElement('a', { href: '#', style: { color: 'var(--text-on-dark-muted)', textDecoration: 'none' } }, 'Accessibility'))))
    );
  }

  window.TPFooter = Footer;
})();
