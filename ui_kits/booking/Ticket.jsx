/* Live Job Ticket — work-order summary that fills in as the funnel progresses. window.TPTicket */
(function () {
  function Row({ icon, label, children, filled }) {
    const { Icon } = window.TPKit;
    return React.createElement('div', { style: { display: 'flex', gap: 12, padding: '13px 0', borderBottom: '1px solid var(--border-soft)' } },
      React.createElement('span', { style: { color: filled ? 'var(--color-primary)' : 'var(--text-faint)', display: 'flex', marginTop: 1 } }, React.createElement(Icon, { name: icon, size: 16 })),
      React.createElement('div', { style: { flex: 1, minWidth: 0 } },
        React.createElement('div', { style: { fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: 3 } }, label),
        React.createElement('div', { style: { fontSize: 14, fontWeight: filled ? 600 : 400, color: filled ? 'var(--text-strong)' : 'var(--text-faint)', lineHeight: 1.35 } }, filled ? children : 'Pending\u2026')));
  }

  function Ticket({ data, status, ticketNo }) {
    const { Icon, Badge } = { Icon: window.TPKit.Icon, Badge: window.ToiletPlusDesignSystem_5215f9.Badge };
    const confirmed = status === 'confirmed';
    const u = data.urgency && window.TPFunnelData.URGENCY[data.urgency];

    return React.createElement('aside', { style: { position: 'sticky', top: 24, alignSelf: 'start' } },
      React.createElement('div', { style: { background: '#fff', border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' } },
        // header bar
        React.createElement('div', { style: { background: confirmed ? 'var(--green-500)' : 'var(--blue-900)', color: '#fff', padding: '13px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' } },
          React.createElement('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 11.5, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: 8 } },
            React.createElement(Icon, { name: 'ClipboardList', size: 15 }), 'Job Ticket'),
          React.createElement('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 11.5, opacity: 0.85 } }, '#' + ticketNo)),
        // perforation
        React.createElement('div', { style: { borderTop: '2px dashed var(--border-strong)' } }),
        // status stamp
        React.createElement('div', { style: { padding: '14px 18px 4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' } },
          React.createElement('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-faint)' } }, 'Status'),
          confirmed
            ? React.createElement(Badge, { tone: 'green', icon: React.createElement(Icon, { name: 'CheckCheck', size: 13 }) }, 'Confirmed')
            : u
              ? React.createElement(Badge, { tone: u.tone, icon: React.createElement(Icon, { name: 'Loader', size: 13 }) }, u.label + ' \u00b7 Draft')
              : React.createElement(Badge, { tone: 'gray' }, 'Draft')),
        React.createElement('div', { style: { padding: '4px 18px 16px' } },
          React.createElement(Row, { icon: 'MapPin', label: 'Location', filled: !!data.area }, data.area ? (data.area + ' \u00b7 ' + data.zip) : null),
          React.createElement(Row, { icon: 'Wrench', label: 'Service', filled: !!data.serviceLabel }, data.serviceLabel),
          React.createElement(Row, { icon: 'Stethoscope', label: 'Details', filled: !!data.diagnostic }, data.diagnostic),
          React.createElement(Row, { icon: 'HardHat', label: 'Assigned plumber', filled: !!data.plumber },
            data.plumber ? React.createElement('span', { style: { display: 'inline-flex', alignItems: 'center', gap: 7 } },
              React.createElement('span', { style: { width: 22, height: 22, borderRadius: '50%', background: 'var(--blue-100)', color: 'var(--blue-700)', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 11, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' } }, data.plumber.initial),
              data.plumber.name + ' \u00b7 ' + data.plumber.crew) : null),
          React.createElement(Row, { icon: 'CalendarClock', label: 'Window', filled: !!data.slot }, data.slot && (data.slot.when + (data.slot.eta ? ' \u00b7 ' + data.slot.eta : ''))),
          React.createElement(Row, { icon: 'Tag', label: 'Flat-rate estimate', filled: !!data.estimate },
            data.estimate ? React.createElement('span', null,
              React.createElement('span', { style: { fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--color-primary)' } }, data.estimate.text)) : null),
          React.createElement(Row, { icon: 'User', label: 'Contact', filled: !!data.name }, data.name && (data.name + (data.phone ? ' \u00b7 ' + data.phone : '')))),
        // confirmed comms timeline
        confirmed && React.createElement('div', { style: { background: 'var(--green-50)', borderTop: '1px solid color-mix(in srgb, var(--green-500) 22%, transparent)', padding: '14px 18px' } },
          React.createElement('div', { style: { fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--green-500)', marginBottom: 10, fontWeight: 600 } }, 'What happens next'),
          [['MessageSquare', 'Confirmation text sent now'], ['Navigation', 'ETA text when the plumber rolls out'], ['Star', 'Follow-up + review request after']].map(([ic, t]) =>
            React.createElement('div', { key: t, style: { display: 'flex', gap: 9, alignItems: 'center', padding: '4px 0', fontSize: 13, color: 'var(--gray-700)' } },
              React.createElement(window.TPKit.Icon, { name: ic, size: 14, color: 'var(--green-500)' }), t)))
      ),
      // trust footer
      React.createElement('div', { style: { display: 'flex', gap: 14, justifyContent: 'center', marginTop: 14, fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--text-faint)' } },
        React.createElement('span', { style: { display: 'inline-flex', gap: 5, alignItems: 'center' } }, React.createElement(Icon, { name: 'ShieldCheck', size: 13 }), 'Encrypted'),
        React.createElement('span', { style: { display: 'inline-flex', gap: 5, alignItems: 'center' } }, React.createElement(Icon, { name: 'Lock', size: 13 }), 'No spam, ever')));
  }

  window.TPTicket = Ticket;
})();
