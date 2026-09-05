import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

const bars = [50, 80, 108, 80, 50];

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 12,
          background: '#e8a93d',
        }}
      >
        {bars.map((h, i) => (
          <div key={i} style={{ display: 'flex', width: i === 2 ? 22 : 12, height: h, background: '#15171a' }} />
        ))}
      </div>
    ),
    { ...size }
  );
}
