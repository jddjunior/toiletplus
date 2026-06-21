/* Services grid section with left-aligned numbered header. window.TPServices */
(function () {
  const { Section, SectionHead, Icon } = window.TPKit;

  const SERVICES = [
    ['01', 'Droplets', 'Drain Cleaning', 'Slow sink or backed-up shower? We snake, hydro-jet, and camera the line so the clog actually stays gone \u2014 not just pushed down.'],
    ['02', 'Flame', 'Water Heaters', 'No hot water this morning? We repair and replace tank and tankless units, size them right, and haul the old one away.'],
    ['03', 'Waves', 'Leak Detection', 'Mystery water spot or a spike on the bill? We trace slab and pinhole leaks before they wreck your drywall.'],
    ['04', 'Pipette', 'Sewer & Main Line', 'Gurgling drains across the house usually means the main. We camera-inspect and clear roots, bellies, and breaks.'],
    ['05', 'ShowerHead', 'Fixtures & Toilets', 'Running toilet, dripping faucet, wobbly flange \u2014 the small stuff that wastes water and nags at you. Done same day.'],
    ['06', 'Gauge', 'Repiping & Water Quality', 'Low pressure or rusty water? We repipe old galvanized lines and install filtration so every tap runs clean.'],
  ];

  function Services() {
    const { ServiceCard } = window.ToiletPlusDesignSystem_5215f9;
    const { isMobile, isTablet } = window.TPKit.useViewport();
    const cols = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)';
    return React.createElement(Section, { id: 'services', tone: 'muted' },
      React.createElement(SectionHead, {
        index: '01', kicker: 'What we fix',
        title: 'Plumbing services, done right ', accentTitle: 'the first time.',
        intro: 'From a dripping faucet to a full repipe \u2014 residential and light commercial. If it carries water, we work on it.',
      }),
      React.createElement('div', { style: { display: 'grid', gridTemplateColumns: cols, gap: 18 } },
        SERVICES.map(([idx, ic, title, body]) =>
          React.createElement(ServiceCard, { key: title, index: idx, icon: React.createElement(Icon, { name: ic, size: 30, stroke: 1.75 }), title, href: '#' }, body)))
    );
  }

  window.TPServices = Services;
})();
