import Link from 'next/link';
import { PageShell } from '../../components/SiteChrome';
import media from '../../content/cms/media.json';
import seo from '../../content/cms/seo.json';
import about from '../../content/cms/about.json';

export const metadata = { title: seo.about.title, description: seo.about.description };

export default function AboutPage() {
  return <PageShell eyebrow={about.hero.eyebrow} title={about.hero.title} outline={about.hero.outline} intro={about.hero.intro}>
    <section className="story-grid subpage-section"><div className="story-image reveal-left"><img src={media.heroPhoto} alt={media.heroPhotoAlt} /><span>{about.story.imageTagLine1}<br />{about.story.imageTagLine2}</span></div><div className="story-copy reveal-right"><p className="eyebrow"><span /> {about.story.eyebrow}</p><h2>{about.story.headingLine1}<br />{about.story.headingLine2}</h2><p className="lead">{about.story.lead}</p><p>{about.story.paragraph1}</p><p>{about.story.paragraph2}</p><blockquote>“{about.story.quote}”</blockquote><Link className="button" href="/intake">{about.story.cta} <span>↗</span></Link></div></section>
    <section className="values">{about.values.map((value) => <article className="reveal-scale" key={value.number}><b>{value.number}</b><h3>{value.title}</h3><p>{value.text}</p></article>)}</section>
  </PageShell>;
}
