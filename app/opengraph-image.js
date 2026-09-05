import { ImageResponse } from 'next/og';
import shared from '../content/cms/shared.json';

export const alt = `${shared.brand.name} — ${shared.brand.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const bars = [42, 69, 93, 69, 42];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#eef0ec',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 36 }}>
          {bars.map((h, i) => (
            <div key={i} style={{ display: 'flex', width: i === 2 ? 15 : 9, height: h, background: '#15171a' }} />
          ))}
        </div>
        <div style={{ display: 'flex', fontSize: 72, fontWeight: 800, color: '#15171a', letterSpacing: '-0.02em' }}>
          {shared.brand.name}
        </div>
        <div style={{ display: 'flex', fontSize: 26, fontWeight: 600, color: '#5b5e5a', marginTop: 16, textTransform: 'uppercase', letterSpacing: '0.2em' }}>
          {shared.brand.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
