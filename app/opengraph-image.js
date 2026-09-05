import { ImageResponse } from 'next/og';
import shared from '../content/cms/shared.json';
import home from '../content/cms/home.json';

export const alt = `${shared.brand.name} — ${shared.brand.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#eef0ec',
          padding: '80px 96px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', width: 64, height: 8, background: '#e8a93d', marginBottom: 40 }} />
        <div style={{ display: 'flex', fontSize: 88, fontWeight: 800, color: '#15171a', letterSpacing: '-0.03em', lineHeight: 1 }}>
          {shared.brand.name}
        </div>
        <div style={{ display: 'flex', fontSize: 34, fontWeight: 600, color: '#5b5e5a', marginTop: 28, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          {shared.brand.tagline} · {home.hero.eyebrow.split('·')[1]?.trim() || 'Amsterdam'}
        </div>
      </div>
    ),
    { ...size }
  );
}
