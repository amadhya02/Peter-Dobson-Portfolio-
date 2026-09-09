import { PageShell } from '../../components/SiteChrome';
import shared from '../../content/cms/shared.json';
import seo from '../../content/cms/seo.json';
import legal from '../../content/cms/legal.json';

export const metadata = { title: seo.privacy.title, description: seo.privacy.description };

function renderParagraph(text, email) {
  const parts = text.split('{{email}}');
  if (parts.length === 1) return text;
  return <>{parts[0]}<a href={`mailto:${email}`}>{email}</a>{parts[1]}</>;
}

const { privacy } = legal;

export default function PrivacyPage() {
  return <PageShell eyebrow={privacy.hero.eyebrow} title={privacy.hero.title} outline={privacy.hero.outline} intro={privacy.hero.intro} variant="legal" cue="Privacy information">
    <article className="legal-document subpage-section">
      <nav className="legal-toc" aria-label="On this page"><b>On this page</b>{privacy.sections.map((section, i) => <a href={`#privacy-${i + 1}`} key={section.title}>{section.title}</a>)}</nav>
      <p className="legal-intro">{privacy.intro}</p>
      {privacy.sections.map((section, sectionIndex) => <section id={`privacy-${sectionIndex + 1}`} key={section.title}><h2>{section.title}</h2><div>{section.paragraphs.map((paragraph, i) => <p key={i}>{renderParagraph(paragraph, shared.footer.email)}</p>)}</div></section>)}
    </article>
  </PageShell>;
}
