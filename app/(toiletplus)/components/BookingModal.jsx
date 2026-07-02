'use client';

import React, { useState } from 'react';
import { Button } from '../../../components/buttons/Button';
import { Input } from '../../../components/forms/Input';
import { Select } from '../../../components/forms/Select';
import { Badge } from '../../../components/core/Badge';
import { Icon } from './kit';

function Step({ n, label, active, done }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <span style={{
        width: 26, height: 26, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 13, fontWeight: 700, fontFamily: 'var(--font-display)',
        background: done ? 'var(--green-500)' : active ? 'var(--color-primary)' : 'var(--gray-200)',
        color: done || active ? '#fff' : 'var(--text-muted)',
      }}>{done ? <Icon name="Check" size={15} color="#fff" /> : n}</span>
      <span style={{ fontSize: 13, fontWeight: 600, color: active || done ? 'var(--text-strong)' : 'var(--text-muted)' }}>{label}</span>
    </div>
  );
}

export function BookingModal({ onClose }) {
  const [step, setStep] = useState(1);

  const shell = (children) => (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(7,30,61,0.55)', backdropFilter: 'blur(4px)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: '#fff', borderRadius: 'var(--radius-xl)', width: 'min(560px, 100%)', maxHeight: '90vh', overflow: 'auto', boxShadow: 'var(--shadow-xl)' }}>
        {children}
      </div>
    </div>
  );

  const header = (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '22px 26px 0', flexWrap: 'wrap', gap: 12 }}>
      <div style={{ display: 'flex', gap: 18 }}>
        <Step n={1} label="Job" active={step === 1} done={step > 1} />
        <Step n={2} label="Details" active={step === 2} done={step > 2} />
        <Step n={3} label="Done" active={step === 3} done={false} />
      </div>
      <button onClick={onClose} aria-label="Close" style={{ border: 'none', background: 'var(--surface-sunken)', width: 34, height: 34, borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
        <Icon name="X" size={18} />
      </button>
    </div>
  );

  if (step === 1) {
    return shell(
      <>
        {header}
        <div style={{ padding: '20px 26px 28px' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, color: 'var(--text-strong)', margin: '0 0 6px' }}>What&rsquo;s going on?</h3>
          <p style={{ fontSize: 15, color: 'var(--text-muted)', margin: '0 0 20px' }}>A quick heads-up is plenty &mdash; we&rsquo;ll get the details on the call.</p>
          <Select label="Type of job" required style={{ marginBottom: 16 }}>
            <option>Clogged or slow drain</option>
            <option>Water heater (no hot water)</option>
            <option>Leak or burst pipe</option>
            <option>Sewer / main line backup</option>
            <option>Toilet, faucet or fixture</option>
            <option>Something else</option>
          </Select>
          <div style={{ display: 'flex', gap: 16, marginBottom: 22, flexWrap: 'wrap' }}>
            <Input label="ZIP code" icon={<Icon name="MapPin" size={18} />} placeholder="33602" style={{ flex: 1, minWidth: 140 }} />
            <Select label="Urgency" style={{ flex: 1, minWidth: 140 }}>
              <option>Emergency &mdash; today</option>
              <option>This week</option>
              <option>Just planning ahead</option>
            </Select>
          </div>
          <Button variant="primary" size="lg" block onClick={() => setStep(2)} iconRight={<Icon name="ArrowRight" size={18} />}>Continue</Button>
        </div>
      </>
    );
  }

  if (step === 2) {
    return shell(
      <>
        {header}
        <div style={{ padding: '20px 26px 28px' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, color: 'var(--text-strong)', margin: '0 0 6px' }}>Where do we text you?</h3>
          <p style={{ fontSize: 15, color: 'var(--text-muted)', margin: '0 0 20px' }}>We&rsquo;ll confirm a real arrival window &mdash; no phone-tag.</p>
          <Input label="Your name" required placeholder="Jane from Maple St." style={{ marginBottom: 16 }} />
          <div style={{ display: 'flex', gap: 16, marginBottom: 16, flexWrap: 'wrap' }}>
            <Input label="Mobile" required icon={<Icon name="Phone" size={18} />} placeholder="(813) 555-0142" style={{ flex: 1, minWidth: 160 }} />
            <Select label="Best time" style={{ flex: 1, minWidth: 140 }}>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </Select>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <Button variant="ghost" size="lg" onClick={() => setStep(1)} iconLeft={<Icon name="ArrowLeft" size={18} />}>Back</Button>
            <Button variant="primary" size="lg" block onClick={() => setStep(3)}>Request my visit</Button>
          </div>
        </div>
      </>
    );
  }

  return shell(
    <div style={{ padding: '40px 32px 36px', textAlign: 'center' }}>
      <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'var(--green-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
        <Icon name="CheckCheck" size={36} color="var(--green-500)" />
      </div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, color: 'var(--text-strong)', margin: '0 0 10px' }}>You&rsquo;re on the schedule</h3>
      <p style={{ fontSize: 16, color: 'var(--text-body)', lineHeight: 1.55, margin: '0 auto 22px', maxWidth: 380 }}>
        A real dispatcher is reviewing your request now. Watch for a text from <strong>(813) 555-0142</strong> with your arrival window &mdash; usually within 15 minutes.
      </p>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 26, flexWrap: 'wrap' }}>
        <Badge tone="green" icon={<Icon name="ShieldCheck" size={13} />}>Licensed & insured</Badge>
        <Badge tone="blue" icon={<Icon name="Tag" size={13} />}>Upfront pricing</Badge>
      </div>
      <Button variant="primary" size="lg" onClick={onClose}>Done</Button>
    </div>
  );
}
