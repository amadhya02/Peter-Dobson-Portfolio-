'use client';

import { useState } from 'react';

export default function IntakeForm({ form }) {
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [progress, setProgress] = useState(0);

  function handleProgress(event) {
    const data = new FormData(event.currentTarget);
    const completed = ['name', 'email', 'goals', 'contactMethod'].filter((field) => String(data.get(field) || '').trim()).length
      + (data.get('consent') ? 1 : 0);
    setProgress(completed * 20);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const data = Object.fromEntries(new FormData(event.currentTarget).entries());

    try {
      const response = await fetch('/api/intake', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.success) {
        setStatus('success');
        event.currentTarget.reset();
      } else {
        setStatus('error');
        setErrorMessage(result.message || form.errorFallback);
      }
    } catch {
      setStatus('error');
      setErrorMessage(form.errorFallback);
    }
  }

  if (status === 'success') {
    return (
      <div className="intake-form reveal-right">
        <div className="form-success"><span>✓</span><h2>Request sent</h2><p>{form.successMessage}</p><a className="text-link" href="/coaching">Explore coaching <span>→</span></a></div>
      </div>
    );
  }

  return (
    <form className={`intake-form reveal-right${status === 'error' ? ' form-has-error' : ''}`} onSubmit={handleSubmit} onChange={handleProgress}>
      <div className="form-progress" aria-live="polite"><div><span>{form.progressLabel || 'Required fields completed'}</span><strong>{progress}%</strong></div><div className="form-progress-track"><i style={{ transform: `scaleX(${progress / 100})` }} /></div></div>
      <div className="field"><label htmlFor="name">{form.nameLabel}</label><input id="name" name="name" required placeholder={form.namePlaceholder} /></div>
      <div className="field"><label htmlFor="email">{form.emailLabel}</label><input id="email" name="email" required type="email" placeholder={form.emailPlaceholder} /></div>
      <div className="field"><label htmlFor="phone">{form.phoneLabel} <span>{form.phoneOptional}</span></label><input id="phone" name="phone" type="tel" placeholder={form.phonePlaceholder} /></div>
      <div className="field"><label htmlFor="goal">{form.goalLabel}</label><textarea id="goal" name="goals" required rows="5" placeholder={form.goalPlaceholder} /></div>
      <div className="field"><label htmlFor="availability">{form.availabilityLabel} <span>{form.phoneOptional}</span></label><select id="availability" name="availability" defaultValue=""><option value="" disabled>{form.availabilityPlaceholder}</option>{form.availabilityOptions.map((option) => <option value={option} key={option}>{option}</option>)}</select></div>
      <fieldset className="contact-method"><legend>{form.contactLabel}</legend><div>{form.contactOptions.map((option) => <label key={option}><input type="radio" name="contactMethod" value={option} required /><span>{option}</span></label>)}</div></fieldset>
      <input type="text" name="company" className="hp-field" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <label className="consent"><input type="checkbox" name="consent" value="accepted" required /><span>{form.consentTextBefore} <a href="/privacy">{form.consentLinkText}</a>.</span></label>
      {status === 'error' && <p className="form-error">{errorMessage}</p>}
      <button className="button" type="submit" disabled={status === 'submitting'}>{status === 'submitting' ? form.submittingLabel : form.submitCta} <span>↗</span></button>
      <p className="form-note">{form.formNote}</p>
    </form>
  );
}
