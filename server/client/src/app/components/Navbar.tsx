'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-wider text-amber-500">BINGWA</span>
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 block border-l border-slate-700 pl-2">
            Events & Media
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link href="/" className="hover:text-amber-400 transition">Home</Link>
          <Link href="/booking" className="bg-amber-500 text-slate-950 px-4 py-2 rounded-lg font-bold hover:bg-amber-400 transition">
            Book Service
          </Link>
        </nav>
      </div>
    </header>
  );
}