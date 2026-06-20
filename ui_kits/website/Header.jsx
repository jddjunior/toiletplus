/* Sticky site header — utility bar + main nav. Exposes window.TPHeader */
(function () {
  const NAV = ['Services', 'Why Us', 'Service Area', 'Financing', 'Reviews'];

  function Header({ onBook }) {
    const { Logo, Button } = window.ToiletPlusDesignSystem_5215f9;
    const { Icon } = window.TPKit;
    return React.createElement('header', {
      style: { position: 'sticky', top: 0, zIndex: 50, background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--border-soft)' },
    },
      // utility strip
      React.createElement('div', { style: { background: 'var(--blue-900)', color: '#fff' } },
        React.createElement('div', { style: { maxWidth: 'var(--container-max)', margin: '0 auto', padding: '7px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 13 } },
          React.createElement('span', { style: { display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--text-on-dark-muted)' } },
            React.createElement(Icon, { name: 'ShieldCheck', size: 15, color: '#7FE3B0' }),
            'Licensed, bonded & insured · Lic. #PL-48217'),
          React.createElement('span', { style: { display: 'inline-flex', alignItems: 'center', gap: 18 } },
            React.createElement('a', { href: '#', style: { color: 'var(--text-on-dark-muted)', textDecoration: 'none', display: 'inline-flex', gap: 6, alignItems: 'center' } },
              React.createElement(Icon, { name: 'MapPin', size: 14 }), 'Find your location'),
            React.createElement('a', { href: 'tel:5552407867', style: { color: '#fff', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', gap: 6, alignItems: 'center' } },
              React.createElement(Icon, { name: 'Phone', size: 14, color: 'var(--color-accent)' }),
              React.createElement('span', { style: { fontFamily: 'var(--font-mono)' } }, '(555) 240-7867')))
        )),
      // main bar
      React.createElement('div', { style: { maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 24px', height: 76, display: 'flex', alignItems: 'center', justifyContent: 'space-between' } },
        React.createElement(Logo, { size: 36, href: '#' }),
        React.createElement('nav', { style: { display: 'flex', gap: 28 } },
          NAV.map((n) => React.createElement('a', { key: n, href: '#', style: { fontSize: 15, fontWeight: 600, color: 'var(--text-body)', textDecoration: 'none' } }, n))),
        React.createElement('div', { style: { display: 'flex', gap: 12, alignItems: 'center' } },
          React.createElement(Button, { variant: 'accent', size: 'sm', iconLeft: React.createElement(Icon, { name: 'CalendarCheck', size: 16 }), onClick: onBook }, 'Book Online'))
      )
    );
  }

  window.TPHeader = Header;
})();
