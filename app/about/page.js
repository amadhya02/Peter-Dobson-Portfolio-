import Link from 'next/link';
import { PageShell } from '../../components/SiteChrome';
import media from '../../content/cms/media.json';
import seo from '../../content/cms/seo.json';
import about from '../../content/cms/about.json';
import TrainingIcon from '../../components/TrainingIcon';

export const metadata = { title: seo.about.title, description: seo.about.description };

export default function AboutPage() {
  return <PageShell eyebrow={about.hero.eyebrow} title={about.hero.title} outline={about.hero.outline} intro={about.hero.intro} variant="about" cue="Personal · Practical · Progressive">
    <section className="story-grid subpage-section"><div className="story-image reveal-left"><img src={media.heroPhoto} alt={media.heroPhotoAlt} /><span>{about.story.imageTagLine1}<br />{about.story.imageTagLine2}</span></div><div className="story-copy reveal-right"><p className="eyebrow"><span /> {about.story.eyebrow}</p><h2>{about.story.headingLine1}<br />{about.story.headingLine2}</h2><p className="lead">{about.story.lead}</p><p>{about.story.paragraph1}</p><p>{about.story.paragraph2}</p><blockquote>“{about.story.quote}”</blockquote><Link className="button" href="/intake">{about.story.cta} <span>↗</span></Link></div></section>
    <section className="values">{about.values.map((value, i) => <article className="reveal-scale" key={value.number}><b>{value.number}</b><TrainingIcon name={['personalValue', 'practical', 'progressive', 'positive'][i]} /><h3>{value.title}</h3><p>{value.text}</p></article>)}</section>
    <section className="approach-section subpage-section"><div className="section-heading compact"><p className="eyebrow"><span /> {about.approach.eyebrow}</p><h2>{about.approach.heading}</h2></div><div className="approach-grid">{about.approach.items.map((item, i) => <article className="reveal-scale" key={item.title}><b>0{i + 1}</b><h3>{item.title}</h3><p>{item.text}</p></article>)}</div><Link className="button" href="/intake">Start a conversation <span>↗</span></Link></section>
  </PageShell>;
}
