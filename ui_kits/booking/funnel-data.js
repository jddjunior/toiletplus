/* Toilet Plus — booking funnel data: services + diagnostics, flat-rate pricebook,
   ZIP→area routing, plumber roster, and slot generation. window.TPFunnelData */
(function () {
  // --- Service catalog (drives intake chips, diagnostics, urgency & quote) ---
  const SERVICES = {
    clog: {
      id: 'clog', icon: 'Droplets', label: 'Clogged or slow drain',
      react: 'Drains are our bread and butter \u2014 we\u2019ll have it flowing.',
      diagnostic: {
        q: 'Where\u2019s it backing up?',
        options: [
          { label: 'One sink or tub', urgency: 'soon' },
          { label: 'Several drains at once', urgency: 'today', note: 'multiple fixtures \u2192 likely the main line' },
          { label: 'A toilet', urgency: 'soon' },
        ],
      },
      price: { low: 149, high: 325, note: 'Flat-rate after a free camera look. Hydro-jetting quoted on site.' },
    },
    water_heater: {
      id: 'water_heater', icon: 'Flame', label: 'No hot water',
      react: 'Cold showers are no way to start a day. Let\u2019s sort the heater.',
      diagnostic: {
        q: 'Tank or tankless \u2014 and is there any water around the base?',
        options: [
          { label: 'Tank, no leak', urgency: 'today' },
          { label: 'Tankless, error code', urgency: 'today' },
          { label: 'Water pooling at the base', urgency: 'urgent', note: 'a leaking tank can fail fast' },
        ],
      },
      price: { low: 185, high: 480, note: 'Repair flat-rate. Full replacement quoted on site (we size it right).' },
    },
    leak: {
      id: 'leak', icon: 'Waves', label: 'Leak or burst pipe',
      react: 'Water where it shouldn\u2019t be \u2014 let\u2019s stop it before it spreads.',
      diagnostic: {
        q: 'Is water actively running right now?',
        options: [
          { label: 'Yes, actively \u2014 I can\u2019t stop it', urgency: 'emergency', note: 'active burst \u2192 emergency dispatch' },
          { label: 'A slow drip', urgency: 'today' },
          { label: 'Just a stain or damp spot', urgency: 'soon' },
        ],
      },
      price: { low: 165, high: 390, note: 'Flat-rate diagnosis + repair. Slab/behind-wall leaks quoted after locate.' },
    },
    sewer: {
      id: 'sewer', icon: 'Pipette', label: 'Sewer / main line backup',
      react: 'Main-line trouble is messy but routine for us. We\u2019ll camera it and clear it.',
      diagnostic: {
        q: 'How much of the house is affected?',
        options: [
          { label: 'The whole house / sewage backing up', urgency: 'emergency', note: 'whole-house backup \u2192 emergency' },
          { label: 'A couple of fixtures', urgency: 'today' },
        ],
      },
      price: { low: 199, high: 450, note: 'Flat-rate clearing + camera inspection. Root/repair work quoted on site.' },
    },
    fixture: {
      id: 'fixture', icon: 'ShowerHead', label: 'Toilet, faucet or fixture',
      react: 'The small stuff that nags at you \u2014 usually a same-day fix.',
      diagnostic: {
        q: 'What\u2019s it doing?',
        options: [
          { label: 'Running / won\u2019t stop', urgency: 'soon' },
          { label: 'Dripping or low pressure', urgency: 'soon' },
          { label: 'Wobbly / won\u2019t flush', urgency: 'soon' },
        ],
      },
      price: { low: 129, high: 280, note: 'Flat-rate per fixture. Parts shown before we install.' },
    },
    other: {
      id: 'other', icon: 'Wrench', label: 'Something else',
      react: 'No problem \u2014 if it carries water, we work on it.',
      diagnostic: {
        q: 'Give me a sentence on what\u2019s going on.',
        options: null, // free text
      },
      price: { low: 0, high: 0, note: 'We\u2019ll give you a flat-rate number once the plumber sees it \u2014 always before any work.' },
    },
  };

  const SERVICE_ORDER = ['clog', 'water_heater', 'leak', 'sewer', 'fixture', 'other'];

  // --- ZIP → service area + routed crew ---
  const PLUMBERS = [
    { id: 'sam', name: 'Sam R.', crew: 'Ballard crew', initial: 'S', rating: 4.9, truck: 'TP-07' },
    { id: 'dee', name: 'Dee K.', crew: 'Northgate crew', initial: 'D', rating: 4.9, truck: 'TP-03' },
    { id: 'mateo', name: 'Mateo L.', crew: 'Greenwood crew', initial: 'M', rating: 4.8, truck: 'TP-11' },
  ];

  const AREAS = {
    '98103': { area: 'Wallingford', plumber: 'sam' },
    '98107': { area: 'Ballard', plumber: 'sam' },
    '98115': { area: 'Northgate', plumber: 'dee' },
    '98125': { area: 'Lake City', plumber: 'dee' },
    '98133': { area: 'Greenwood', plumber: 'mateo' },
  };

  function lookupZip(zip) {
    const hit = AREAS[(zip || '').trim()];
    if (hit) return { area: hit.area, plumber: PLUMBERS.find(p => p.id === hit.plumber), covered: true };
    // any other 5-digit zip: covered, round-robin a crew
    if (/^\d{5}$/.test((zip || '').trim())) {
      const p = PLUMBERS[(parseInt(zip, 10)) % PLUMBERS.length];
      return { area: 'your area', plumber: p, covered: true };
    }
    return { area: null, plumber: null, covered: false };
  }

  // --- Slot generation by urgency ---
  const URGENCY = {
    emergency: { label: 'Emergency', tone: 'accent', read: 'This is an emergency \u2014 I\u2019m flagging it for priority dispatch right now.' },
    urgent:    { label: 'Urgent',    tone: 'amber',  read: 'I\u2019d treat this as urgent so it doesn\u2019t get worse.' },
    today:     { label: 'Today',     tone: 'blue',   read: 'We can knock this out today.' },
    soon:      { label: 'Soon',      tone: 'blue',   read: 'Not an emergency \u2014 we\u2019ll get you on the schedule quick.' },
  };

  function slotsFor(urgency, plumber) {
    const eta = plumber ? plumber.name : 'a plumber';
    if (urgency === 'emergency') {
      return [
        { id: 's0', when: 'Right now', detail: 'Priority dispatch \u00b7 next 2 hrs', eta: '~40 min out', hot: true },
        { id: 's1', when: 'Today, 2\u20134 PM', detail: 'If you\u2019ve stopped the water', eta: '' },
      ];
    }
    if (urgency === 'urgent' || urgency === 'today') {
      return [
        { id: 's1', when: 'Today, 2\u20134 PM', detail: eta + ' \u00b7 soonest', eta: '~1 hr 15 out', hot: urgency === 'urgent' },
        { id: 's2', when: 'Today, 4\u20136 PM', detail: eta, eta: '' },
        { id: 's3', when: 'Tomorrow, 8\u201310 AM', detail: 'First call of the day', eta: '' },
      ];
    }
    return [
      { id: 's2', when: 'Tomorrow, 8\u201310 AM', detail: eta + ' \u00b7 first call', eta: '' },
      { id: 's3', when: 'Tomorrow, 12\u20132 PM', detail: eta, eta: '' },
      { id: 's4', when: 'Thursday, 9\u201311 AM', detail: 'Plan-ahead slot', eta: '' },
    ];
  }

  function estimateFor(service) {
    const p = SERVICES[service] ? SERVICES[service].price : null;
    if (!p || (!p.low && !p.high)) return { text: 'Quoted on site', note: p ? p.note : '', low: 0, high: 0 };
    return { text: '$' + p.low + '\u2013$' + p.high, note: p.note, low: p.low, high: p.high };
  }

  window.TPFunnelData = { SERVICES, SERVICE_ORDER, PLUMBERS, AREAS, URGENCY, lookupZip, slotsFor, estimateFor };
})();
