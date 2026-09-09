import { ImageResponse } from 'next/og';
import shared from '../content/cms/shared.json';

export const alt = `${shared.brand.name} — Personal Training in Amsterdam`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

function Plate({ side, offset, width, height, opacity = 1 }) {
  return <div style={{ display: 'flex', position: 'absolute', [side]: offset, top: (126 - height) / 2, width, height, borderRadius: 4, background: '#171914', opacity }} />;
}

function Barbell() {
  return <div style={{ width: 430, height: 126, display: 'flex', alignItems: 'center', position: 'relative' }}>
    <div style={{ display: 'flex', position: 'absolute', left: 8, right: 8, top: 59, height: 7, borderRadius: 4, background: '#171914' }} />
    <Plate side="left" offset={4} width={11} height={38} opacity={0.65} />
    <Plate side="left" offset={20} width={18} height={78} opacity={0.82} />
    <Plate side="left" offset={44} width={24} height={112} />
    <Plate side="left" offset={75} width={13} height={58} />
    <Plate side="right" offset={4} width={11} height={38} opacity={0.65} />
    <Plate side="right" offset={20} width={18} height={78} opacity={0.82} />
    <Plate side="right" offset={44} width={24} height={112} />
    <Plate side="right" offset={75} width={13} height={58} />
    <div style={{ display: 'flex', position: 'absolute', left: 91, top: 44, width: 11, height: 38, borderRadius: 3, background: '#b58742' }} />
    <div style={{ display: 'flex', position: 'absolute', right: 91, top: 44, width: 11, height: 38, borderRadius: 3, background: '#b58742' }} />
    <div style={{ display: 'flex', position: 'absolute', left: 155, top: 55, width: 120, height: 15, borderTop: '2px solid #77766f', borderBottom: '2px solid #77766f' }} />
    {[166, 184, 202, 220, 238, 256].map((left) => <div key={left} style={{ display: 'flex', position: 'absolute', left, top: 55, width: 2, height: 15, background: '#77766f', transform: 'rotate(-25deg)' }} />)}
  </div>;
}

export default function SocialImage() {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', background: '#f5f1e8', color: '#171914', fontFamily: 'Arial, sans-serif', position: 'relative', overflow: 'hidden' }}>
      <div style={{ display: 'flex', position: 'absolute', width: 520, height: 520, borderRadius: 260, background: '#e5e0d5', right: -155, top: -235 }} />
      <div style={{ display: 'flex', position: 'absolute', width: 250, height: 250, borderRadius: 125, background: '#d3ae70', right: 70, bottom: -205 }} />
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '50px 70px', width: '100%', height: '100%', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
          <Barbell />
          <div style={{ display: 'flex', width: 1, height: 82, background: '#c9c4b9' }} />
          <div style={{ display: 'flex', flexDirection: 'column' }}><div style={{ display: 'flex', fontSize: 35, fontWeight: 800, letterSpacing: 1 }}>{shared.brand.name.toUpperCase()}</div><div style={{ display: 'flex', color: '#67675f', fontSize: 16, fontWeight: 600, letterSpacing: 5, marginTop: 10 }}>PERSONAL TRAINING</div></div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}><div style={{ display: 'flex', color: '#9b7138', fontSize: 19, fontWeight: 700, letterSpacing: 4, marginBottom: 18 }}>PERSONAL TRAINING · AMSTERDAM</div><div style={{ display: 'flex', flexDirection: 'column', fontSize: 86, lineHeight: .88, fontWeight: 900, letterSpacing: -5 }}><span>STRONGER</span><span>STARTS HERE.</span></div></div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #c9c4b9', paddingTop: 22, color: '#67675f', fontSize: 20 }}><span>Personalised coaching for real life.</span><span style={{ color: '#805a29', fontWeight: 700 }}>peterdobsonfitness.nl</span></div>
      </div>
    </div>,
    { ...size }
  );
}
