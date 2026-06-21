/* Toilet Plus — agentic booking funnel. "Plus", an AI dispatcher, runs a structured
   conversation: ZIP lookup → smart intake & urgency triage → auto-schedule nearest
   plumber → flat-rate auto-quote → confirm. window.TPBookingFunnel */
(function () {
  const { useState, useRef, useEffect } = React;

  const FUNNEL_CSS = `
  @keyframes tpFadeUp { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:none; } }
  @keyframes tpBlink { 0%,80%,100% { opacity:.25; } 40% { opacity:1; } }
  .tp-msg { animation: tpFadeUp .28s var(--ease-out) both; }
  .tp-dot { width:6px; height:6px; border-radius:50%; background:var(--gray-400); display:inline-block; animation: tpBlink 1.2s infinite both; }
  .tp-chip { font-family:var(--font-body); font-size:14.5px; font-weight:600; color:var(--text-strong);
    background:#fff; border:1.5px solid var(--border-strong); border-radius:var(--radius-md);
    padding:13px 15px; text-align:left; cursor:pointer; display:flex; align-items:center; gap:11px;
    transition:border-color var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out); }
  .tp-chip:hover { border-color:var(--color-primary); background:var(--blue-50); }
  .tp-chip svg { color:var(--color-primary); }
  .tp-slot { text-align:left; cursor:pointer; background:#fff; border:1.5px solid var(--border-strong);
    border-radius:var(--radius-md); padding:14px 16px; display:flex; align-items:center; justify-content:space-between; gap:12px;
    transition:border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out); }
  .tp-slot:hover { border-color:var(--color-primary); box-shadow:var(--shadow-sm); }
  `;

  function AgentAvatar() {
    return React.createElement('span', { style: { width: 32, height: 32, flex: 'none', borderRadius: 8, background: 'linear-gradient(150deg,#1466CC,#0B3D7E)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 20, lineHeight: 1 } }, '+');
  }

  function BookingFunnel() {
    const { Button, Input } = window.ToiletPlusDesignSystem_5215f9;
    const { Icon, useViewport } = window.TPKit;
    const { isMobile } = useViewport();
    const D = window.TPFunnelData;

    const [messages, setMessages] = useState([
      { id: 1, from: 'agent', kind: 'text', name: true, text: 'Hey \u2014 I\u2019m Plus, the Toilet Plus dispatcher. I\u2019ll get a licensed plumber headed your way in a couple minutes. First up: what\u2019s your ZIP code?' },
    ]);
    const [typing, setTyping] = useState(false);
    const [phase, setPhase] = useState('zip');
    const [data, setData] = useState({});
    const [zip, setZip] = useState('');
    const [other, setOther] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const scroller = useRef();
    const idRef = useRef(2);

    useEffect(() => { if (scroller.current) scroller.current.scrollTop = scroller.current.scrollHeight; }, [messages, typing, phase]);

    const nid = () => idRef.current++;
    const pushUser = (text) => setMessages((m) => [...m, { id: nid(), from: 'user', text }]);

    // run agent: hide controls, type, then drop messages + advance
    function agent(msgs, nextPhase, patch, delay = 750) {
      setPhase('_wait');
      setTyping(true);
      if (patch) setData((d) => ({ ...d, ...patch }));
      setTimeout(() => {
        setTyping(false);
        setMessages((m) => [...m, ...msgs.map((x) => ({ id: nid(), from: 'agent', ...x }))]);
        setPhase(nextPhase);
      }, delay);
    }

    // --- step handlers ---
    function submitZip() {
      const res = D.lookupZip(zip);
      pushUser(zip || '\u2014');
      if (!res.covered) {
        agent([{ kind: 'text', text: 'Hmm, that doesn\u2019t look like a 5-digit ZIP. Mind trying again?' }], 'zip');
        return;
      }
      agent([
        { kind: 'text', name: true, text: `Good news \u2014 we\u2019ve got crews in ${res.area}. ${res.plumber.name}\u2019s ${res.plumber.crew} runs your block.` },
        { kind: 'note', text: `matched nearest licensed pro \u00b7 truck ${res.plumber.truck} \u00b7 \u2605 ${res.plumber.rating}` },
        { kind: 'text', text: 'So I can triage it right \u2014 what\u2019s going on over there?' },
      ], 'service', { zip, area: res.area, plumber: res.plumber });
      setZip('');
    }

    function pickService(id) {
      const s = D.SERVICES[id];
      pushUser(s.label);
      const est = D.estimateFor(id);
      const msgs = [{ kind: 'text', name: true, text: s.react }, { kind: 'text', text: s.diagnostic.q }];
      agent(msgs, id === 'other' ? 'diagnostic_text' : 'diagnostic', { service: id, serviceLabel: s.label, estimate: est });
    }

    function resolveDiagnostic(label, urgency, note) {
      pushUser(label);
      const u = D.URGENCY[urgency] || D.URGENCY.soon;
      const est = data.estimate || D.estimateFor(data.service);
      const slots = D.slotsFor(urgency, data.plumber);
      const msgs = [
        { kind: 'text', name: true, text: u.read },
      ];
      if (note) msgs.push({ kind: 'note', text: note });
      msgs.push({ kind: 'note', text: `routing ${data.plumber ? data.plumber.name : 'a pro'} \u00b7 checking today\u2019s board \u00b7 pricing from flat-rate book` });
      msgs.push({ kind: 'estimate', est });
      msgs.push({ kind: 'text', text: 'Here are the soonest windows I can hold for you \u2014 estimate above is locked before anyone turns a wrench:' });
      agent(msgs, 'schedule', { diagnostic: label, urgency, estimate: est, slots }, 950);
    }

    function submitOther() {
      if (!other.trim()) return;
      // simple urgency heuristic
      const t = other.toLowerCase();
      const urgency = /burst|flood|gushing|sewage|no water|emergency/.test(t) ? 'emergency' : /leak|hot water|backed up/.test(t) ? 'today' : 'soon';
      resolveDiagnostic(other.trim(), urgency, null);
      setOther('');
    }

    function pickSlot(slot) {
      pushUser(slot.when + (slot.eta ? ' \u00b7 ' + slot.eta : ''));
      agent([
        { kind: 'text', name: true, text: `Locked it in \u2014 ${slot.when}. ${data.plumber.name} will text when they roll out.` },
        { kind: 'text', text: 'Last thing and you\u2019re set: who should I send the confirmation to?' },
      ], 'contact', { slot });
    }

    function submitContact() {
      if (!name.trim() || !phone.trim()) return;
      pushUser(`${name} \u00b7 ${phone}`);
      agent([
        { kind: 'text', name: true, text: `You\u2019re booked, ${name.split(' ')[0]}. ${data.plumber.name} is on the schedule for ${data.slot.when}, and I\u2019ve texted a confirmation to ${phone}.` },
        { kind: 'text', text: 'You\u2019ll get an ETA text when they head out, and the flat-rate estimate is honored on arrival. Anything changes, just reply to that text \u2014 I\u2019m on it 24/7.' },
      ], 'done', { name, phone });
    }

    // --- render control for current phase ---
    function Control() {
      if (phase === 'zip') {
        return React.createElement('div', { style: { display: 'flex', gap: 10, alignItems: 'flex-end' } },
          React.createElement('div', { style: { flex: 1 } },
            React.createElement(Input, { label: 'ZIP code', icon: React.createElement(Icon, { name: 'MapPin', size: 18 }), placeholder: 'e.g. 98103', value: zip, onChange: (e) => setZip(e.target.value), onKeyDown: (e) => e.key === 'Enter' && submitZip(), inputMode: 'numeric', maxLength: 5 })),
          React.createElement(Button, { variant: 'primary', size: 'lg', onClick: submitZip, iconRight: React.createElement(Icon, { name: 'ArrowRight', size: 18 }) }, 'Start'));
      }
      if (phase === 'service') {
        return React.createElement('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 } },
          D.SERVICE_ORDER.map((id) => React.createElement('button', { key: id, className: 'tp-chip', onClick: () => pickService(id) },
            React.createElement(Icon, { name: D.SERVICES[id].icon, size: 19 }), D.SERVICES[id].label)));
      }
      if (phase === 'diagnostic') {
        const opts = D.SERVICES[data.service].diagnostic.options || [];
        return React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 10 } },
          opts.map((o, i) => React.createElement('button', { key: i, className: 'tp-chip', onClick: () => resolveDiagnostic(o.label, o.urgency, o.note) },
            React.createElement(Icon, { name: 'ChevronRight', size: 18 }), o.label)));
      }
      if (phase === 'diagnostic_text') {
        return React.createElement('div', { style: { display: 'flex', gap: 10, alignItems: 'flex-end' } },
          React.createElement('div', { style: { flex: 1 } },
            React.createElement(Input, { label: 'Tell me what\u2019s going on', placeholder: 'e.g. water shut-off valve won\u2019t close', value: other, onChange: (e) => setOther(e.target.value), onKeyDown: (e) => e.key === 'Enter' && submitOther() })),
          React.createElement(Button, { variant: 'primary', size: 'lg', onClick: submitOther, iconRight: React.createElement(Icon, { name: 'ArrowRight', size: 18 }) }, 'Send'));
      }
      if (phase === 'schedule') {
        return React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 10 } },
          (data.slots || []).map((s) => React.createElement('button', { key: s.id, className: 'tp-slot', onClick: () => pickSlot(s) },
            React.createElement('span', null,
              React.createElement('span', { style: { display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, fontSize: 15.5, color: 'var(--text-strong)' } },
                s.when,
                s.hot && React.createElement('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 600, letterSpacing: '.06em', color: 'var(--color-accent)', border: '1px solid var(--red-300)', borderRadius: 4, padding: '2px 5px', textTransform: 'uppercase' } }, 'Soonest')),
              React.createElement('span', { style: { display: 'block', fontSize: 13, color: 'var(--text-muted)', marginTop: 3 } }, s.detail)),
            React.createElement('span', { style: { display: 'inline-flex', alignItems: 'center', gap: 8 } },
              s.eta && React.createElement('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--color-primary)' } }, s.eta),
              React.createElement(Icon, { name: 'ArrowRight', size: 18, color: 'var(--color-primary)' })))));
      }
      if (phase === 'contact') {
        return React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 12 } },
          React.createElement('div', { style: { display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 12 } },
            React.createElement(Input, { label: 'Your name', placeholder: 'Jane from Maple St.', value: name, onChange: (e) => setName(e.target.value), style: { flex: 1 } }),
            React.createElement(Input, { label: 'Mobile', icon: React.createElement(Icon, { name: 'Phone', size: 18 }), placeholder: '(555) 240-7867', value: phone, onChange: (e) => setPhone(e.target.value), style: { flex: 1 } })),
          React.createElement(Button, { variant: 'primary', size: 'lg', block: true, onClick: submitContact, iconRight: React.createElement(Icon, { name: 'Check', size: 18 }) }, 'Confirm booking'),
          React.createElement('p', { style: { margin: 0, textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.03em', color: 'var(--text-faint)' } }, 'No charge to book \u00b7 flat-rate quoted before any work'));
      }
      if (phase === 'done') {
        return React.createElement('div', { style: { display: 'flex', gap: 10, flexWrap: 'wrap' } },
          React.createElement(Button, { variant: 'primary', size: 'lg', iconLeft: React.createElement(Icon, { name: 'CalendarPlus', size: 18 }) }, 'Add to calendar'),
          React.createElement(Button, { variant: 'outline', size: 'lg', iconLeft: React.createElement(Icon, { name: 'MessageSquare', size: 18 }) }, 'Text me the ticket'),
          React.createElement(Button, { variant: 'ghost', size: 'lg', onClick: () => window.location.reload(), iconLeft: React.createElement(Icon, { name: 'RotateCcw', size: 18 }) }, 'Start over'));
      }
      return null;
    }

    // --- message renderers ---
    function renderMsg(m) {
      if (m.from === 'user') {
        return React.createElement('div', { key: m.id, className: 'tp-msg', style: { display: 'flex', justifyContent: 'flex-end', marginBottom: 12 } },
          React.createElement('div', { style: { maxWidth: '78%', background: 'var(--color-primary)', color: '#fff', padding: '11px 15px', borderRadius: '14px 14px 4px 14px', fontSize: 15, lineHeight: 1.45, fontWeight: 500 } }, m.text));
      }
      if (m.kind === 'note') {
        return React.createElement('div', { key: m.id, className: 'tp-msg', style: { display: 'flex', gap: 10, margin: '-4px 0 12px 42px' } },
          React.createElement('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--text-faint)', letterSpacing: '.02em', display: 'inline-flex', alignItems: 'center', gap: 6 } },
            React.createElement('span', { style: { color: 'var(--color-primary)' } }, '\u21b3'), m.text));
      }
      if (m.kind === 'estimate') {
        const e = m.est || {};
        return React.createElement('div', { key: m.id, className: 'tp-msg', style: { display: 'flex', gap: 10, marginBottom: 12 } },
          React.createElement('span', { style: { width: 32, flex: 'none' } }),
          React.createElement('div', { style: { maxWidth: '82%', background: '#fff', border: '1px solid var(--border-strong)', borderRadius: '4px 14px 14px 14px', padding: 16, boxShadow: 'var(--shadow-sm)' } },
            React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 8 } },
              React.createElement(Icon, { name: 'Tag', size: 14, color: 'var(--color-primary)' }), 'Flat-rate estimate'),
            React.createElement('div', { style: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 30, letterSpacing: '-0.02em', color: 'var(--text-strong)', lineHeight: 1 } }, e.text || 'Quoted on site'),
            React.createElement('p', { style: { margin: '8px 0 0', fontSize: 13, lineHeight: 1.45, color: 'var(--text-muted)' } }, e.note)));
      }
      // agent text
      return React.createElement('div', { key: m.id, className: 'tp-msg', style: { display: 'flex', gap: 10, marginBottom: 12, alignItems: 'flex-start' } },
        React.createElement(AgentAvatar, null),
        React.createElement('div', { style: { maxWidth: '82%' } },
          m.name && React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 7, marginBottom: 4 } },
            React.createElement('span', { style: { fontWeight: 700, fontSize: 13, color: 'var(--text-strong)' } }, 'Plus'),
            React.createElement('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 9.5, letterSpacing: '.1em', textTransform: 'uppercase', color: '#fff', background: 'var(--blue-700)', borderRadius: 3, padding: '2px 5px' } }, 'AI Dispatcher')),
          React.createElement('div', { style: { background: '#fff', border: '1px solid var(--border-soft)', padding: '11px 15px', borderRadius: '4px 14px 14px 14px', fontSize: 15, lineHeight: 1.5, color: 'var(--text-strong)', boxShadow: 'var(--shadow-xs)' } }, m.text)));
    }

    const stepNo = { zip: 1, service: 2, diagnostic: 3, diagnostic_text: 3, schedule: 4, contact: 5, done: 5 };
    const lastStepRef = useRef(1);
    if (stepNo[phase]) lastStepRef.current = stepNo[phase];
    const curStep = lastStepRef.current;

    return React.createElement('div', { style: { minHeight: '100vh', background: 'var(--surface-muted)', display: 'flex', flexDirection: 'column' } },
      // top bar
      React.createElement('header', { style: { background: '#fff', borderBottom: '1px solid var(--border-soft)', position: 'sticky', top: 0, zIndex: 10 } },
        React.createElement('div', { style: { maxWidth: 1160, margin: '0 auto', padding: isMobile ? '0 16px' : '0 24px', height: isMobile ? 56 : 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 } },
          React.createElement(window.ToiletPlusDesignSystem_5215f9.Logo, { size: isMobile ? 26 : 30, href: '../website/index.html' }),
          React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: isMobile ? 8 : 14, flex: isMobile ? 1 : 'none', justifyContent: isMobile ? 'flex-end' : 'flex-start' } },
            React.createElement('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 11.5, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--text-muted)', whiteSpace: 'nowrap' } }, `Step ${Math.min(curStep, 5)} / 5`),
            React.createElement('span', { style: { width: isMobile ? 72 : 120, height: 5, background: 'var(--gray-200)', borderRadius: 3, overflow: 'hidden' } },
              React.createElement('span', { style: { display: 'block', height: '100%', width: `${(Math.min(curStep, 5) / 5) * 100}%`, background: 'var(--color-primary)', transition: 'width var(--dur-slow) var(--ease-out)' } }))),
          !isMobile && React.createElement('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 11.5, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: 7 } },
            React.createElement(Icon, { name: 'Phone', size: 14, color: 'var(--color-accent)' }), '(555) 240-7867'))),
      // body
      React.createElement('div', { style: { flex: 1, maxWidth: 1160, width: '100%', margin: '0 auto', padding: isMobile ? '20px 16px 32px' : '28px 24px 40px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'minmax(0,1fr) 360px', gap: isMobile ? 20 : 28, alignItems: 'start' } },
        // conversation column
        React.createElement('div', { style: { display: 'flex', flexDirection: 'column', minHeight: isMobile ? 'auto' : 'calc(100vh - 160px)', order: 1 } },
          React.createElement('div', { ref: scroller, style: { flex: 1, overflowY: 'auto', overflowX: 'hidden', paddingRight: 4, maxHeight: isMobile ? 'none' : 'calc(100vh - 230px)' } },
            messages.map(renderMsg),
            typing && React.createElement('div', { style: { display: 'flex', gap: 10, marginBottom: 12 } },
              React.createElement(AgentAvatar, null),
              React.createElement('div', { style: { background: '#fff', border: '1px solid var(--border-soft)', padding: '14px 16px', borderRadius: '4px 14px 14px 14px', display: 'inline-flex', gap: 5, boxShadow: 'var(--shadow-xs)' } },
                React.createElement('span', { className: 'tp-dot' }), React.createElement('span', { className: 'tp-dot', style: { animationDelay: '.2s' } }), React.createElement('span', { className: 'tp-dot', style: { animationDelay: '.4s' } })))),
          // control dock
          React.createElement('div', { style: { marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--border-soft)' } }, React.createElement(Control, null))),
        // ticket
        React.createElement(window.TPTicket, { data, status: phase === 'done' ? 'confirmed' : 'draft', ticketNo: 'TP-2049', isMobile })));
  }

  // inject styles once
  if (!document.getElementById('tp-funnel-css')) {
    const el = document.createElement('style'); el.id = 'tp-funnel-css'; el.textContent = FUNNEL_CSS; document.head.appendChild(el);
  }
  window.TPBookingFunnel = BookingFunnel;
})();
