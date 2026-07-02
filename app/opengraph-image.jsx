import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Toilet Plus — Tampa Plumbers, Done Right';

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
          background: 'linear-gradient(165deg, #0B3D7E 0%, #071E3D 72%)',
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
              background: 'linear-gradient(135deg, #1466CC, #0B3D7E)',
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
            Toilet<span style={{ color: '#FF4D4D' }}>+</span>
          </div>
        </div>
        <div style={{ fontSize: 60, fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.05, maxWidth: 900, display: 'flex' }}>
          Tampa's plumbers, done right the first time.
        </div>
        <div style={{ fontSize: 28, color: '#AFC2DC', marginTop: 28, display: 'flex' }}>
          Licensed · Upfront flat-rate pricing · 24/7 emergency service
        </div>
      </div>
    ),
    { ...size }
  );
}
