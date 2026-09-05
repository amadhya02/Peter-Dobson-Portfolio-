import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

const bars = [9, 14, 19, 14, 9];

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          background: '#e8a93d',
        }}
      >
        {bars.map((h, i) => (
          <div key={i} style={{ display: 'flex', width: i === 2 ? 4 : 2, height: h, background: '#15171a' }} />
        ))}
      </div>
    ),
    { ...size }
  );
}
