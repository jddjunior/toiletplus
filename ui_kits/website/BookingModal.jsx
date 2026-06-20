/* Booking modal — 3-step flow (job → details → confirmed). window.TPBooking */
(function () {
  const { Icon } = window.TPKit;
  const { useState } = React;

  function Step({ n, label, active, done }) {
    return React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 8 } },
      React.createElement('span', { style: {
        width: 26, height: 26, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 13, fontWeight: 700, fontFamily: 'var(--font-display)',
        background: done ? 'var(--green-500)' : active ? 'var(--color-primary)' : 'var(--gray-200)',
        color: done || active ? '#fff' : 'var(--text-muted)',
      } }, done ? React.createElement(Icon, { name: 'Check', size: 15, color: '#fff' }) : n),
      React.createElement('span', { style: { fontSize: 13, fontWeight: 600, color: active || done ? 'var(--text-strong)' : 'var(--text-muted)' } }, label));
  }

  function Booking({ onClose }) {
    const { Button, Input, Select, Badge } = window.ToiletPlusDesignSystem_5215f9;
    const [step, setStep] = useState(1);

    const shell = (children) => React.createElement('div', {
      onClick: onClose,
      style: { position: 'fixed', inset: 0, background: 'rgba(7,30,61,0.55)', backdropFilter: 'blur(4px)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 },
    },
      React.createElement('div', { onClick: (e) => e.stopPropagation(), style: { background: '#fff', borderRadius: 'var(--radius-xl)', width: 'min(560px, 100%)', maxHeight: '90vh', overflow: 'auto', boxShadow: 'var(--shadow-xl)' } }, children));

    const header = React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '22px 26px 0' } },
      React.createElement('div', { style: { display: 'flex', gap: 18 } },
        React.createElement(Step, { n: 1, label: 'Job', active: step === 1, done: step > 1 }),
        React.createElement(Step, { n: 2, label: 'Details', active: step === 2, done: step > 2 }),
        React.createElement(Step, { n: 3, label: 'Done', active: step === 3, done: false })),
      React.createElement('button', { onClick: onClose, 'aria-label': 'Close', style: { border: 'none', background: 'var(--surface-sunken)', width: 34, height: 34, borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' } },
        React.createElement(Icon, { name: 'X', size: 18 })));

    if (step === 1) {
      return shell([
        React.createElement('div', { key: 'h' }, header),
        React.createElement('div', { key: 'b', style: { padding: '20px 26px 28px' } },
          React.createElement('h3', { style: { fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, color: 'var(--text-strong)', margin: '0 0 6px' } }, 'What\u2019s going on?'),
          React.createElement('p', { style: { fontSize: 15, color: 'var(--text-muted)', margin: '0 0 20px' } }, 'A quick heads-up is plenty \u2014 we\u2019ll get the details on the call.'),
          React.createElement(Select, { label: 'Type of job', required: true, style: { marginBottom: 16 } },
            React.createElement('option', null, 'Clogged or slow drain'),
            React.createElement('option', null, 'Water heater (no hot water)'),
            React.createElement('option', null, 'Leak or burst pipe'),
            React.createElement('option', null, 'Sewer / main line backup'),
            React.createElement('option', null, 'Toilet, faucet or fixture'),
            React.createElement('option', null, 'Something else')),
          React.createElement('div', { style: { display: 'flex', gap: 16, marginBottom: 22 } },
            React.createElement(Input, { label: 'ZIP code', icon: React.createElement(Icon, { name: 'MapPin', size: 18 }), placeholder: '98103', style: { flex: 1 } }),
            React.createElement(Select, { label: 'Urgency', style: { flex: 1 } },
              React.createElement('option', null, 'Emergency \u2014 today'),
              React.createElement('option', null, 'This week'),
              React.createElement('option', null, 'Just planning ahead'))),
          React.createElement(Button, { variant: 'primary', size: 'lg', block: true, onClick: () => setStep(2), iconRight: React.createElement(Icon, { name: 'ArrowRight', size: 18 }) }, 'Continue'))
      ]);
    }

    if (step === 2) {
      return shell([
        React.createElement('div', { key: 'h' }, header),
        React.createElement('div', { key: 'b', style: { padding: '20px 26px 28px' } },
          React.createElement('h3', { style: { fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, color: 'var(--text-strong)', margin: '0 0 6px' } }, 'Where do we text you?'),
          React.createElement('p', { style: { fontSize: 15, color: 'var(--text-muted)', margin: '0 0 20px' } }, 'We\u2019ll confirm a real arrival window \u2014 no phone-tag.'),
          React.createElement(Input, { label: 'Your name', required: true, placeholder: 'Jane from Maple St.', style: { marginBottom: 16 } }),
          React.createElement('div', { style: { display: 'flex', gap: 16, marginBottom: 16 } },
            React.createElement(Input, { label: 'Mobile', required: true, icon: React.createElement(Icon, { name: 'Phone', size: 18 }), placeholder: '(555) 240-7867', style: { flex: 1 } }),
            React.createElement(Select, { label: 'Best time', style: { flex: 1 } },
              React.createElement('option', null, 'Morning'), React.createElement('option', null, 'Afternoon'), React.createElement('option', null, 'Evening'))),
          React.createElement('div', { style: { display: 'flex', gap: 12 } },
            React.createElement(Button, { variant: 'ghost', size: 'lg', onClick: () => setStep(1), iconLeft: React.createElement(Icon, { name: 'ArrowLeft', size: 18 }) }, 'Back'),
            React.createElement(Button, { variant: 'primary', size: 'lg', block: true, onClick: () => setStep(3) }, 'Request my visit')))
      ]);
    }

    return shell(
      React.createElement('div', { style: { padding: '40px 32px 36px', textAlign: 'center' } },
        React.createElement('div', { style: { width: 72, height: 72, borderRadius: '50%', background: 'var(--green-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' } },
          React.createElement(Icon, { name: 'CheckCheck', size: 36, color: 'var(--green-500)' })),
        React.createElement('h3', { style: { fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, color: 'var(--text-strong)', margin: '0 0 10px' } }, 'You\u2019re on the schedule \uD83D\uDD27'),
        React.createElement('p', { style: { fontSize: 16, color: 'var(--text-body)', lineHeight: 1.55, margin: '0 auto 22px', maxWidth: 380 } }, 'A real dispatcher is reviewing your request now. Watch for a text from ', React.createElement('strong', null, '(555) 240-7867'), ' with your arrival window \u2014 usually within 15 minutes.'),
        React.createElement('div', { style: { display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 26, flexWrap: 'wrap' } },
          React.createElement(Badge, { tone: 'green', icon: React.createElement(Icon, { name: 'ShieldCheck', size: 13 }) }, 'Licensed & insured'),
          React.createElement(Badge, { tone: 'blue', icon: React.createElement(Icon, { name: 'Tag', size: 13 }) }, 'Upfront pricing')),
        React.createElement(Button, { variant: 'primary', size: 'lg', onClick: onClose }, 'Done'))
    );
  }

  window.TPBooking = Booking;
})();
