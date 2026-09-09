import { PageShell } from '../../components/SiteChrome';
import { pageMetadata } from '../../lib/metadata';
import legal from '../../content/cms/legal.json';

export const metadata = pageMetadata('terms', '/terms', 'nl_NL');

const { terms } = legal;

export default function TermsPage() {
  return <PageShell eyebrow={terms.hero.eyebrow} title={terms.hero.title} outline={terms.hero.outline} intro={terms.hero.intro} variant="legal" cue="Service terms">
    <article className="legal-document subpage-section" lang="nl">
      <p className="language-note">NL · Deze pagina is in het Nederlands</p>
      <div className="legal-meta">
        <p>{terms.metaLeftLines.map((line, i) => <span key={i}>{i > 0 && <br />}{i === 0 ? <b>{line}</b> : line}</span>)}</p>
        <p>{terms.metaRightLines.map((line, i) => <span key={i}>{i > 0 && <br />}{line}</span>)}</p>
      </div>
      <nav className="legal-toc" aria-label="On this page"><b>On this page</b>{terms.sections.map((section, i) => <a href={`#terms-${i + 1}`} key={section.title}>{section.title}</a>)}</nav>
      <p className="legal-intro">{terms.intro}</p>
      {terms.sections.map((section, i) => <section id={`terms-${i + 1}`} key={section.title}><h2>{section.title}</h2><p>{section.text}</p></section>)}
      <p className="legal-closing">{terms.closing}</p>
    </article>
  </PageShell>;
}
