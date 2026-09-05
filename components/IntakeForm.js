'use client';

import { useState } from 'react';

export default function IntakeForm({ form }) {
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

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
        <p className="form-success">{form.successMessage}</p>
      </div>
    );
  }

  return (
    <form className="intake-form reveal-right" onSubmit={handleSubmit}>
      <div className="field"><label htmlFor="name">{form.nameLabel}</label><input id="name" name="name" required placeholder={form.namePlaceholder} /></div>
      <div className="field"><label htmlFor="email">{form.emailLabel}</label><input id="email" name="email" required type="email" placeholder={form.emailPlaceholder} /></div>
      <div className="field"><label htmlFor="phone">{form.phoneLabel} <span>{form.phoneOptional}</span></label><input id="phone" name="phone" type="tel" placeholder={form.phonePlaceholder} /></div>
      <div className="field"><label htmlFor="goal">{form.goalLabel}</label><textarea id="goal" name="goals" required rows="5" placeholder={form.goalPlaceholder} /></div>
      <div className="field"><label htmlFor="availability">{form.availabilityLabel}</label><input id="availability" name="availability" placeholder={form.availabilityPlaceholder} /></div>
      <input type="text" name="company" className="hp-field" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <label className="consent"><input type="checkbox" required /><span>{form.consentTextBefore} <a href="/privacy">{form.consentLinkText}</a>.</span></label>
      {status === 'error' && <p className="form-error">{errorMessage}</p>}
      <button className="button" type="submit" disabled={status === 'submitting'}>{status === 'submitting' ? form.submittingLabel : form.submitCta} <span>↗</span></button>
      <p className="form-note">{form.formNote}</p>
    </form>
  );
}
