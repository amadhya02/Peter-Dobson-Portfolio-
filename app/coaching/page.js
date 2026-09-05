import Link from 'next/link';
import { PageShell } from '../../components/SiteChrome';
import seo from '../../content/cms/seo.json';
import coaching from '../../content/cms/coaching.json';

export const metadata = { title: seo.coaching.title, description: seo.coaching.description };

const offerLinks = [
  { type: 'link', href: '/intake', arrow: '↗', className: 'button' },
  { type: 'a', href: 'https://truenorthgym.nl/en', arrow: '↗', className: 'button button-light' },
  { type: 'link', href: '/pricing', arrow: '→', className: 'button' },
];

export default function CoachingPage() {
  return <PageShell eyebrow={coaching.hero.eyebrow} title={coaching.hero.title} outline={coaching.hero.outline} intro={coaching.hero.intro}>
    <section className="subpage-section offer-stack">
      {coaching.offers.map((offer, i) => {
        const link = offerLinks[i];
        const cta = link.type === 'link'
          ? <Link className={link.className} href={link.href}>{offer.cta} <span>{link.arrow}</span></Link>
          : <a className={link.className} href={link.href}>{offer.cta} <span>{link.arrow}</span></a>;
        return (
          <article className={`offer reveal-scale${i === 1 ? ' offer-dark' : ''}`} key={offer.number}>
            <span className="offer-no">{offer.number}</span>
            <div>
              <p className={`eyebrow${i === 1 ? ' light' : ''}`}><span /> {offer.eyebrow}</p>
              <h2>{offer.headingLine1}<br />{offer.headingLine2}</h2>
              <p>{offer.text}</p>
              <ul>{offer.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              {cta}
            </div>
          </article>
        );
      })}
    </section>
    <section className="band-cta"><h2>{coaching.bandCta.headingLine1}<br /><em>{coaching.bandCta.headingEm}</em></h2><Link className="button" href="/intake">{coaching.bandCta.cta} <span>↗</span></Link></section>
  </PageShell>;
}
