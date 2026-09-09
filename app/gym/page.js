import Image from 'next/image';
import { PageShell } from '../../components/SiteChrome';
import media from '../../content/cms/media.json';
import { pageMetadata } from '../../lib/metadata';
import gym from '../../content/cms/gym.json';

export const metadata = pageMetadata('gym', '/gym');

export default function GymPage() {
  return <PageShell eyebrow={gym.hero.eyebrow} title={gym.hero.title} outline={gym.hero.outline} intro={gym.hero.intro} variant="gym" cue="TrueNorth Gym · Amsterdam">
    <section className="gym-feature subpage-section reveal"><div className="gym-feature-logo"><Image src={media.gymLogo} alt={`${media.gymLogoAlt} logo`} width={800} height={800} style={{ height: 'auto' }} /></div><div><p className="eyebrow light"><span /> {gym.feature.eyebrow}</p><h2>{gym.feature.headingLine1}<br />{gym.feature.headingLine2}</h2><p>{gym.feature.text}</p><div className="feature-list">{gym.feature.list.map((item) => <span key={item}>{item}</span>)}</div><div className="gym-actions"><a className="button button-light external-link" href="https://truenorthgym.nl/en" target="_blank" rel="noopener noreferrer">{gym.feature.primaryCta} <span>↗</span></a><a className="text-link light-link external-link" href="https://truenorthgym.nl/en/book" target="_blank" rel="noopener noreferrer">{gym.feature.secondaryCta}</a></div></div></section>
    <section className="location-strip reveal"><div><p className="eyebrow"><span /> {gym.location.eyebrow}</p><h2>{gym.location.headingLine1}<br /><em>{gym.location.headingEm}</em></h2></div><div><h3>{gym.location.visitTitle}</h3><p>{gym.location.visitText}</p><ul className="visit-notes">{gym.location.notes.map((note) => <li key={note}>{note}</li>)}</ul><a className="button external-link" href="https://truenorthgym.nl/en/book" target="_blank" rel="noopener noreferrer">{gym.location.cta} <span>↗</span></a></div></section>
  </PageShell>;
}
