import { PageShell } from '../../components/SiteChrome';
import IntakeForm from '../../components/IntakeForm';
import shared from '../../content/cms/shared.json';
import { pageMetadata } from '../../lib/metadata';
import intake from '../../content/cms/intake.json';
import TrainingIcon from '../../components/TrainingIcon';

export const metadata = pageMetadata('intake', '/intake');

export default function IntakePage() {
  return <PageShell eyebrow={intake.hero.eyebrow} title={intake.hero.title} outline={intake.hero.outline} intro={intake.hero.intro} variant="intake" cue="Free initial conversation">
    <section className="intake-layout subpage-section">
      <div className="intake-aside reveal-left">
        <p className="eyebrow"><span /> {intake.steps.eyebrow}</p>
        <ol>{intake.steps.items.map((step, i) => <li key={step.number}><b>{step.number}</b><TrainingIcon name={['message', 'meet', 'programme'][i]} /><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol>
        <a href={`mailto:${shared.footer.email}`}>{intake.steps.emailPrompt}</a>
      </div>
      <IntakeForm form={intake.form} />
    </section>
  </PageShell>;
}
