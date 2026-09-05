import { ImageResponse } from 'next/og';
import shared from '../content/cms/shared.json';
import seo from '../content/cms/seo.json';

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
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0f1012',
        }}
      >
        <img
          src={`${seo.siteUrl}/assets/truenorth-logo.png`}
          width={560}
          height={560}
          style={{ borderRadius: '50%' }}
        />
      </div>
    ),
    { ...size }
  );
}
