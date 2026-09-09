import Link from 'next/link';
import { PageShell } from '../../components/SiteChrome';
import seo from '../../content/cms/seo.json';
import pricing from '../../content/cms/pricing.json';
import TrainingIcon from '../../components/TrainingIcon';

export const metadata = { title: seo.pricing.title, description: seo.pricing.description };

export default function PricingPage() {
  return <PageShell eyebrow={pricing.hero.eyebrow} title={pricing.hero.title} outline={pricing.hero.outline} intro={pricing.hero.intro} variant="pricing" cue="From €54 / session">
    <section className="price-grid subpage-section">{pricing.plans.map((plan, i) => <article className={`price-card reveal-scale${plan.featured ? ' price-featured' : ''}`} key={plan.title}>{plan.featured && <span className="popular-badge">Most popular</span>}<span className="plan-number">0{i + 1}</span><TrainingIcon name={['calendar', 'commitment', 'monthly', 'single'][i]} className="price-icon" /><p className="card-label">{plan.tag}</p><h2>{plan.title}</h2><div className="price"><strong>{plan.price}</strong><span>{plan.suffix}</span></div><p>{plan.text}</p><ul className="plan-includes">{plan.includes.map((item) => <li key={item}>{item}</li>)}</ul><Link href="/intake">{pricing.planCta} <span>→</span></Link></article>)}</section>
    <section className="pricing-note"><p>{pricing.note}</p><Link className="button" href="/intake">{pricing.noteCta} <span>↗</span></Link></section>
    <section className="pricing-faq subpage-section"><div className="section-heading compact"><p className="eyebrow"><span /> {pricing.faq.eyebrow}</p><h2>{pricing.faq.heading}</h2></div><div className="faq-list">{pricing.faq.items.map((item) => <details key={item.question}><summary>{item.question}<span>＋</span></summary><p>{item.answer}</p></details>)}</div><Link className="text-link" href="/terms">Read the full terms <span>→</span></Link></section>
  </PageShell>;
}
