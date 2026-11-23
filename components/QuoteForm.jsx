'use client';

import { useEffect, useRef, useState } from 'react';
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

const MAX_PHOTOS = 5;
const MAX_SIDE = 1600; // px — plenty for an inspection photo, keeps uploads small on mobile data

// Shrink a phone photo to a ~200–500 KB JPEG before upload.
// Falls back to the original file if the browser can't decode it.
async function shrinkImage(file) {
  try {
    const bitmap = await createImageBitmap(file);
    const scale = Math.min(1, MAX_SIDE / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(bitmap.width * scale);
    canvas.height = Math.round(bitmap.height * scale);
    canvas.getContext('2d').drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    bitmap.close?.();
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/jpeg', 0.82));
    if (!blob) return file;
    const name = file.name.replace(/\.[^.]+$/, '') + '.jpg';
    return new File([blob], name, { type: 'image/jpeg' });
  } catch {
    return file;
  }
}

export default function QuoteForm() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [error, setError] = useState('');
  const [photos, setPhotos] = useState([]); // [{ file, url }]
  const [preparing, setPreparing] = useState(false);
  const fileInput = useRef(null);

  // Free preview URLs when the form unmounts.
  const photosRef = useRef(photos);
  photosRef.current = photos;
  useEffect(() => () => photosRef.current.forEach((p) => URL.revokeObjectURL(p.url)), []);

  async function onPickPhotos(e) {
    const picked = Array.from(e.target.files || []).filter((f) => f.type.startsWith('image/'));
    e.target.value = '';
    if (!picked.length) return;
    const room = MAX_PHOTOS - photos.length;
    setPreparing(true);
    const shrunk = await Promise.all(picked.slice(0, room).map(shrinkImage));
    setPreparing(false);
    setPhotos((prev) => [...prev, ...shrunk.map((file) => ({ file, url: URL.createObjectURL(file) }))]);
  }

  function removePhoto(i) {
    URL.revokeObjectURL(photos[i].url);
    setPhotos((prev) => prev.filter((_, idx) => idx !== i));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    setError('');
    const data = new FormData(e.currentTarget);
    data.delete('photos');
    photos.forEach((p) => data.append('photos', p.file, p.file.name));
    try {
      const res = await fetch('/api/contact', { method: 'POST', body: data });
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
      <div className="form-card form-done" id="estimate" role="status">
        <h2 className="form-title">Request received</h2>
        <p>We will call you back shortly. For active water or fire damage, call now so we can dispatch a crew right away:</p>
        <a href={SITE.phoneHref} className="btn btn-call btn-block">{SITE.phone}</a>
      </div>
    );
  }

  return (
    <form className="form-card" id="estimate" onSubmit={onSubmit}>
      <h2 className="form-title">Request FREE Estimate</h2>
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

      <div className="photo-field">
        <span className="photo-label">Photos of the damage (optional)</span>
        {photos.length > 0 && (
          <ul className="photo-list">
            {photos.map((p, i) => (
              <li key={p.url}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.url} alt={`Damage photo ${i + 1}`} />
                <button type="button" onClick={() => removePhoto(i)} aria-label={`Remove photo ${i + 1}`}>×</button>
              </li>
            ))}
          </ul>
        )}
        {photos.length < MAX_PHOTOS && (
          <button type="button" className="photo-add" onClick={() => fileInput.current?.click()} disabled={preparing}>
            {preparing ? 'Preparing photos…' : photos.length ? '+ Add more photos' : '📷 Add photos'}
          </button>
        )}
        <input
          ref={fileInput}
          type="file"
          name="photos"
          accept="image/*"
          multiple
          hidden
          onChange={onPickPhotos}
        />
        <small>Up to {MAX_PHOTOS} photos — helps us bring the right equipment.</small>
      </div>

      {/* Honeypot — hidden from people, filled in by spam bots */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />
      <button type="submit" className="btn btn-primary btn-block" disabled={status === 'sending' || preparing}>
        {status === 'sending' ? 'Sending…' : 'Get Help Now'}
      </button>
      {status === 'error' && <p className="form-error" role="alert">{error} Please call {SITE.phone}.</p>}
      <p className="form-note">Emergency? Skip the form and call <a href={SITE.phoneHref}>{SITE.phone}</a></p>
    </form>
  );
}
