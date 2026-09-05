import { PageShell } from '../../components/SiteChrome';
import seo from '../../content/cms/seo.json';
import legal from '../../content/cms/legal.json';

export const metadata = { title: seo.terms.title, description: seo.terms.description };

const { terms } = legal;

export default function TermsPage() {
  return <PageShell eyebrow={terms.hero.eyebrow} title={terms.hero.title} outline={terms.hero.outline} intro={terms.hero.intro}>
    <article className="legal-document subpage-section">
      <div className="legal-meta">
        <p>{terms.metaLeftLines.map((line, i) => <span key={i}>{i > 0 && <br />}{i === 0 ? <b>{line}</b> : line}</span>)}</p>
        <p>{terms.metaRightLines.map((line, i) => <span key={i}>{i > 0 && <br />}{line}</span>)}</p>
      </div>
      <p className="legal-intro">{terms.intro}</p>
      {terms.sections.map((section) => <section key={section.title}><h2>{section.title}</h2><p>{section.text}</p></section>)}
      <p className="legal-closing">{terms.closing}</p>
    </article>
  </PageShell>;
}
