/* Sticky site header — utility bar + main nav. Exposes window.TPHeader */
(function () {
  const NAV = ['Services', 'Why Us', 'Service Area', 'Financing', 'Reviews'];

  function Header({ onBook }) {
    const { Logo, Button } = window.ToiletPlusDesignSystem_5215f9;
    const { Icon, useViewport } = window.TPKit;
    const { isMobile } = useViewport();
    const [menuOpen, setMenuOpen] = React.useState(false);
    const hpad = isMobile ? 18 : 24;

    return React.createElement('header', {
      style: { position: 'sticky', top: 0, zIndex: 50, background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--border-soft)' },
    },
      // utility strip
      React.createElement('div', { style: { background: 'var(--blue-900)', color: '#fff' } },
        React.createElement('div', { style: { maxWidth: 'var(--container-max)', margin: '0 auto', padding: `7px ${hpad}px`, display: 'flex', justifyContent: isMobile ? 'center' : 'space-between', alignItems: 'center', fontSize: isMobile ? 12 : 13 } },
          !isMobile && React.createElement('span', { style: { display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--text-on-dark-muted)' } },
            React.createElement(Icon, { name: 'ShieldCheck', size: 15, color: '#7FE3B0' }),
            'Licensed, bonded & insured · Lic. #PL-48217'),
          React.createElement('span', { style: { display: 'inline-flex', alignItems: 'center', gap: isMobile ? 14 : 18 } },
            !isMobile && React.createElement('a', { href: '#', style: { color: 'var(--text-on-dark-muted)', textDecoration: 'none', display: 'inline-flex', gap: 6, alignItems: 'center' } },
              React.createElement(Icon, { name: 'MapPin', size: 14 }), 'Find your location'),
            React.createElement('a', { href: 'tel:5552407867', style: { color: '#fff', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', gap: 6, alignItems: 'center' } },
              React.createElement(Icon, { name: 'Phone', size: 14, color: 'var(--color-accent)' }),
              React.createElement('span', { style: { fontFamily: 'var(--font-mono)' } }, '(555) 240-7867')))
        )),
      // main bar
      React.createElement('div', { style: { maxWidth: 'var(--container-max)', margin: '0 auto', padding: `0 ${hpad}px`, height: isMobile ? 62 : 76, display: 'flex', alignItems: 'center', justifyContent: 'space-between' } },
        React.createElement(Logo, { size: isMobile ? 30 : 36, href: '#' }),
        !isMobile && React.createElement('nav', { style: { display: 'flex', gap: 28 } },
          NAV.map((n) => React.createElement('a', { key: n, href: '#', style: { fontSize: 15, fontWeight: 600, color: 'var(--text-body)', textDecoration: 'none' } }, n))),
        React.createElement('div', { style: { display: 'flex', gap: 10, alignItems: 'center' } },
          React.createElement(Button, { variant: 'accent', size: 'sm', iconLeft: React.createElement(Icon, { name: 'CalendarCheck', size: 16 }), onClick: onBook }, isMobile ? 'Book' : 'Book Online'),
          isMobile && React.createElement('button', {
            'aria-label': menuOpen ? 'Close menu' : 'Open menu', 'aria-expanded': menuOpen,
            onClick: () => setMenuOpen((v) => !v),
            style: { border: '1px solid var(--border-strong)', background: '#fff', width: 40, height: 40, borderRadius: 'var(--radius-sm)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-strong)' },
          }, React.createElement(Icon, { name: menuOpen ? 'X' : 'Menu', size: 20 })))
      ),
      // mobile dropdown nav
      isMobile && menuOpen && React.createElement('nav', { style: { borderTop: '1px solid var(--border-soft)', background: '#fff', padding: `8px ${hpad}px 14px`, display: 'flex', flexDirection: 'column' } },
        NAV.map((n) => React.createElement('a', { key: n, href: '#', onClick: () => setMenuOpen(false), style: { fontSize: 16, fontWeight: 600, color: 'var(--text-body)', textDecoration: 'none', padding: '12px 0', borderBottom: '1px solid var(--border-soft)' } }, n)))
    );
  }

  window.TPHeader = Header;
})();
