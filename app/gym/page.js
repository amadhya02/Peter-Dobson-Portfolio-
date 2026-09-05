import Link from 'next/link';
import { PageShell } from '../../components/SiteChrome';
import media from '../../content/cms/media.json';
import seo from '../../content/cms/seo.json';
import gym from '../../content/cms/gym.json';

export const metadata = { title: seo.gym.title, description: seo.gym.description };

export default function GymPage() {
  return <PageShell eyebrow={gym.hero.eyebrow} title={gym.hero.title} outline={gym.hero.outline} intro={gym.hero.intro}>
    <section className="gym-feature subpage-section"><div className="gym-feature-logo"><img src={media.gymLogo} alt={`${media.gymLogoAlt} logo`} /></div><div><p className="eyebrow light"><span /> {gym.feature.eyebrow}</p><h2>{gym.feature.headingLine1}<br />{gym.feature.headingLine2}</h2><p>{gym.feature.text}</p><div className="feature-list">{gym.feature.list.map((item) => <span key={item}>{item}</span>)}</div><div className="gym-actions"><a className="button button-light" href="https://truenorthgym.nl/en">{gym.feature.primaryCta} <span>↗</span></a><Link className="text-link light-link" href="/intake">{gym.feature.secondaryCta}</Link></div></div></section>
    <section className="location-strip"><div><p className="eyebrow"><span /> {gym.location.eyebrow}</p><h2>{gym.location.headingLine1}<br /><em>{gym.location.headingEm}</em></h2></div><div><h3>{gym.location.visitTitle}</h3><p>{gym.location.visitText}</p><Link className="button" href="/intake">{gym.location.cta} <span>↗</span></Link></div></section>
  </PageShell>;
}
