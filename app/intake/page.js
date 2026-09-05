import { PageShell } from '../../components/SiteChrome';
import shared from '../../content/cms/shared.json';
import seo from '../../content/cms/seo.json';
import intake from '../../content/cms/intake.json';

export const metadata = { title: seo.intake.title, description: seo.intake.description };

export default function IntakePage() {
  return <PageShell eyebrow={intake.hero.eyebrow} title={intake.hero.title} outline={intake.hero.outline} intro={intake.hero.intro}>
    <section className="intake-layout subpage-section">
      <div className="intake-aside">
        <p className="eyebrow"><span /> {intake.steps.eyebrow}</p>
        <ol>{intake.steps.items.map((step) => <li key={step.number}><b>{step.number}</b><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol>
        <a href={`mailto:${shared.footer.email}`}>{intake.steps.emailPrompt}</a>
      </div>
      <form className="intake-form" action={`mailto:${shared.footer.email}`} method="post" encType="text/plain">
        <div className="field"><label htmlFor="name">{intake.form.nameLabel}</label><input id="name" name="name" required placeholder={intake.form.namePlaceholder} /></div>
        <div className="field"><label htmlFor="email">{intake.form.emailLabel}</label><input id="email" name="email" required type="email" placeholder={intake.form.emailPlaceholder} /></div>
        <div className="field"><label htmlFor="phone">{intake.form.phoneLabel} <span>{intake.form.phoneOptional}</span></label><input id="phone" name="phone" type="tel" placeholder={intake.form.phonePlaceholder} /></div>
        <div className="field"><label htmlFor="goal">{intake.form.goalLabel}</label><textarea id="goal" name="goals" required rows="5" placeholder={intake.form.goalPlaceholder} /></div>
        <div className="field"><label htmlFor="availability">{intake.form.availabilityLabel}</label><input id="availability" name="availability" placeholder={intake.form.availabilityPlaceholder} /></div>
        <label className="consent"><input type="checkbox" required /><span>{intake.form.consentTextBefore} <a href="/privacy">{intake.form.consentLinkText}</a>.</span></label>
        <button className="button" type="submit">{intake.form.submitCta} <span>↗</span></button>
        <p className="form-note">{intake.form.formNote}</p>
      </form>
    </section>
  </PageShell>;
}
