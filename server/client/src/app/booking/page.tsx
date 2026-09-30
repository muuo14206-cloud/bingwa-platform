'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    pillar: 'Bingwa Event Production',
    service: 'Live Sound & PA System Setup',
    date: '',
    notes: '',
  });

  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === 'date' && value) {
      const selected = new Date(`${value}T00:00:00`);
      const day = selected.getDay();
      if (day === 1 || day === 5) {
        setError('❌ Mondays and Fridays are unavailable for bookings.');
        setFormData((prev) => ({ ...prev, date: '' }));
        return;
      } else {
        setError('');
      }
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    setError('');

    try {
      const response = await fetch('https://bingwa-platform.onrender.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit booking.');
      }

      setStatus(`✅ Success! Booking registered under Ref #${data.bookingId}`);
      setFormData({
        name: '',
        email: '',
        pillar: 'Bingwa Event Production',
        service: 'Live Sound & PA System Setup',
        date: '',
        notes: '',
      });
    } catch (err: any) {
      setError(err.message || 'Error connecting to server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <div className="flex items-center justify-center p-6 my-12">
        <div className="w-full max-w-xl bg-slate-900 border border-slate-800 p-8 rounded-2xl">
          <h1 className="text-3xl font-bold text-center mb-2">Book a Service</h1>
          <p className="text-slate-400 text-center text-sm mb-6">Select your required Bingwa pillar and schedule your date.</p>

          {status && <div className="bg-emerald-900/50 border border-emerald-600 text-emerald-200 p-4 rounded-lg text-sm mb-4">{status}</div>}
          {error && <div className="bg-rose-900/50 border border-rose-600 text-rose-200 p-4 rounded-lg text-sm mb-4">{error}</div>}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Full Name</label>
              <input name="name" type="text" value={formData.name} onChange={handleChange} required className="w-full bg-slate-950 border border-slate-700 p-3 rounded-lg text-sm" />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Email</label>
              <input name="email" type="email" value={formData.email} onChange={handleChange} required className="w-full bg-slate-950 border border-slate-700 p-3 rounded-lg text-sm" />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Pillar</label>
              <select name="pillar" value={formData.pillar} onChange={handleChange} className="w-full bg-slate-950 border border-slate-700 p-3 rounded-lg text-sm">
                <option value="Bingwa Event Production">Pillar 1: Event Production & Management</option>
                <option value="Bingwa Media Studio">Pillar 2: Media & Content Studio</option>
                <option value="Bingwa Gospel Ministry">Pillar 3: Gospel Ministry & Worship</option>
                <option value="Eikon Graphics Partnership">Pillar 4: Visual Identity & Software Systems</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Preferred Date (Mondays & Fridays Blocked)</label>
              <input name="date" type="date" value={formData.date} onChange={handleChange} required className="w-full bg-slate-950 border border-slate-700 p-3 rounded-lg text-sm" />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Additional Notes</label>
              <textarea name="notes" rows={3} value={formData.notes} onChange={handleChange} className="w-full bg-slate-950 border border-slate-700 p-3 rounded-lg text-sm" />
            </div>

            <button type="submit" disabled={loading} className="bg-amber-500 text-slate-950 font-bold p-3 rounded-lg hover:bg-amber-400 transition mt-2">
              {loading ? 'Submitting...' : 'Confirm Booking'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}