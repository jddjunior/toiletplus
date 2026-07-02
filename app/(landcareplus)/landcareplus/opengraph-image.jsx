import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'LandcarePlus — Tampa Landscaping, Done Right';

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(165deg, #1D5C29 0%, #0F2E16 72%)',
          color: '#fff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 40 }}>
          <div
            style={{
              width: 84,
              height: 84,
              borderRadius: 20,
              background: 'linear-gradient(135deg, #3C9142, #1D5C29)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 56,
              fontWeight: 900,
              color: '#fff',
            }}
          >
            +
          </div>
          <div style={{ fontSize: 44, fontWeight: 900, letterSpacing: '-0.02em', display: 'flex' }}>
            Landcare<span style={{ color: '#F2762E' }}>+</span>
          </div>
        </div>
        <div style={{ fontSize: 58, fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.05, maxWidth: 900, display: 'flex' }}>
          Tampa landscaping, done right the first time.
        </div>
        <div style={{ fontSize: 28, color: '#C7DCC5', marginTop: 28, display: 'flex' }}>
          Licensed &amp; insured · Upfront flat-rate pricing · Same-week service
        </div>
      </div>
    ),
    { ...size }
  );
}
