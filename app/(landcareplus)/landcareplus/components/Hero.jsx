'use client';

import React from 'react';
import { Button } from '../../../../components/buttons/Button';
import { Input } from '../../../../components/forms/Input';
import { Icon, Stamp, blueprint } from './kit';
import { useBooking } from './BookingProvider';

export function Hero() {
  const openBooking = useBooking();

  return (
    <section className="tp-hero__section" style={{ position: 'relative', background: 'linear-gradient(165deg, #1D5C29 0%, #0F2E16 72%)', color: '#fff', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, ...blueprint('rgba(255,255,255,0.05)', 32), pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', right: -40, bottom: -70, fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 320, lineHeight: 1, color: 'rgba(255,255,255,0.03)', pointerEvents: 'none', letterSpacing: '-0.04em' }}>+</div>

      <div className="tp-hero__grid tp-container" style={{ position: 'relative', padding: '76px 24px 88px', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 64, alignItems: 'center' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 26, paddingBottom: 18, borderBottom: '1px solid var(--border-on-dark)' }}>
            <Stamp tone="accent">Storm Cleanup 24/7</Stamp>
            <span style={{ width: 1, height: 14, background: 'var(--border-on-dark)' }} />
            <Stamp tone="onDark" tick={false}>Licensed #LC-48217</Stamp>
            <span style={{ width: 1, height: 14, background: 'var(--border-on-dark)' }} />
            <Stamp tone="onDark" tick={false}>Same-Week</Stamp>
          </div>
          <h1 className="tp-hero__title" style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 64, lineHeight: 0.98, letterSpacing: '-0.03em', margin: '0 0 22px', color: '#fff' }}>
            Overgrown yard.<br />
            Broken sprinkler.<br />
            <span style={{ color: 'var(--blue-300)' }}>We show up fast.</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: 'var(--text-on-dark-muted)', maxWidth: 500, margin: '0 0 30px' }}>
            Local, licensed landscapers for Tampa lawns &mdash; mowing, design, irrigation, tree care, and hardscaping, with upfront flat-rate pricing. Built for St. Augustine grass and Florida storms, not a franchise script.
          </p>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', marginBottom: 28 }}>
            <Button variant="accent" size="lg" iconLeft={<Icon name="Phone" size={18} />} href="tel:8135550184">Call (813) 555-0184</Button>
            <Button variant="on-dark" size="lg" iconLeft={<Icon name="CalendarCheck" size={18} />} onClick={openBooking}>Get a free quote</Button>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ display: 'inline-flex', gap: 2 }}>
              {[0, 1, 2, 3, 4].map((i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#FFB400"><path d="M12 2.4l2.9 5.9 6.5.95-4.7 4.58 1.1 6.47L12 17.3l-5.8 3.06 1.1-6.47L2.6 9.25l6.5-.95z" /></svg>
              ))}
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13.5, color: '#fff', fontWeight: 600 }}>4.9</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-on-dark-muted)' }}>/ 1,834 Google reviews</span>
          </div>
        </div>

        <div style={{ background: '#fff', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-xl)', color: 'var(--text-body)', overflow: 'hidden' }}>
          <div style={{ background: 'var(--blue-900)', color: '#fff', padding: '14px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 6 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <Icon name="ClipboardList" size={15} color="var(--blue-300)" /> Quick Quote
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--blue-300)' }}>EST. REPLY &middot; 15 MIN</span>
          </div>
          <div style={{ height: 0, borderTop: '2px dashed var(--border-strong)' }} />
          <div style={{ padding: '24px 22px 26px' }}>
            <p style={{ margin: '0 0 18px', fontSize: 14.5, color: 'var(--text-muted)', lineHeight: 1.5 }}>Drop your ZIP and what your yard needs &mdash; a real crew lead texts back availability in minutes.</p>
            <Input label="ZIP code" icon={<Icon name="MapPin" size={18} />} placeholder="33602" style={{ marginBottom: 16 }} />
            <Button variant="primary" size="lg" block onClick={openBooking} iconRight={<Icon name="ArrowRight" size={18} />}>Check availability</Button>
            <div style={{ display: 'flex', gap: 18, marginTop: 18, paddingTop: 16, borderTop: '1px solid var(--border-soft)', justifyContent: 'space-between', flexWrap: 'wrap', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
              <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}><Icon name="ShieldCheck" size={14} color="var(--green-500)" /> No spam</span>
              <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}><Icon name="Tag" size={14} color="var(--green-500)" /> Flat-rate</span>
              <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}><Icon name="Clock" size={14} color="var(--green-500)" /> Same-week</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
