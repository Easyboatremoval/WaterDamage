'use client';

import { useState } from 'react';
import { SITE } from '@/lib/site';

const DAMAGE_TYPES = [
  'Water damage / leak',
  'Flood or hurricane damage',
  'Fire & smoke damage',
  'Mold',
  'Water-damaged floors',
  'Sewage backup',
  'Other',
];

export default function QuoteForm() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [error, setError] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    setError('');
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || 'Something went wrong.');
      setStatus('sent');
    } catch (err) {
      setError(err.message);
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="form-card form-done" role="status">
        <h2 className="form-title">Request received</h2>
        <p>We will call you back shortly. For active water or fire damage, call now so we can dispatch a crew right away:</p>
        <a href={SITE.phoneHref} className="btn btn-call btn-block">{SITE.phone}</a>
      </div>
    );
  }

  return (
    <form className="form-card" id="estimate" onSubmit={onSubmit}>
      <h2 className="form-title">Request an Inspection</h2>
      <p className="form-sub">Tell us what happened — we call back fast, day or night.</p>
      <label>
        <span>Name</span>
        <input name="name" type="text" autoComplete="name" required />
      </label>
      <label>
        <span>Phone</span>
        <input name="phone" type="tel" autoComplete="tel" inputMode="tel" required />
      </label>
      <label>
        <span>City</span>
        <input name="city" type="text" autoComplete="address-level2" placeholder="e.g. Fort Lauderdale" required />
      </label>
      <label>
        <span>Type of damage</span>
        <select name="damage" defaultValue={DAMAGE_TYPES[0]}>
          {DAMAGE_TYPES.map((d) => (
            <option key={d}>{d}</option>
          ))}
        </select>
      </label>
      <label>
        <span>Details (optional)</span>
        <textarea name="message" rows={3} />
      </label>
      {/* Honeypot — hidden from people, filled in by spam bots */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />
      <button type="submit" className="btn btn-primary btn-block" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Get Help Now'}
      </button>
      {status === 'error' && <p className="form-error" role="alert">{error} Please call {SITE.phone}.</p>}
      <p className="form-note">Emergency? Skip the form and call <a href={SITE.phoneHref}>{SITE.phone}</a></p>
    </form>
  );
}
