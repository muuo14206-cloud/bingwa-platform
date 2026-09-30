import Link from 'next/link';
import Navbar from './components/Navbar';

export default function Home() {
  const pillars = [
    {
      title: 'Bingwa Event Production',
      desc: 'Live Sound Engineering, Stage Lighting, LED Displays & Event Management.',
      tag: 'Pillar 1',
    },
    {
      title: 'Bingwa Media Studio',
      desc: 'Multi-Camera Live Streaming, Multi-Track Audio & Podcasting.',
      tag: 'Pillar 2',
    },
    {
      title: 'Bingwa Gospel Ministry',
      desc: 'Live Worship Recordings featuring Pastor Joan Wandera & Pastor Silas.',
      tag: 'Pillar 3',
    },
    {
      title: 'Eikon Graphics Partnership',
      desc: 'Visual Identity, Software Systems & UI/UX Design by Emmanuel Muuo.',
      tag: 'Pillar 4',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      {/* Hero Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <span className="text-amber-500 font-bold uppercase tracking-widest text-sm">
          Excellence in Media, Event Production & Gospel Ministry
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold mt-4 mb-6 leading-tight">
          Integrating Faith, Creative Tech & Sound AV Production
        </h1>
        <p className="text-slate-400 text-lg max-w-3xl mx-auto mb-8">
          Delivering world-class event execution, live streaming, multi-track audio production, and uplifting gospel content.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/booking" className="bg-amber-500 text-slate-950 font-bold px-8 py-4 rounded-xl hover:bg-amber-400 transition">
            Book Event / Service
          </Link>
        </div>
      </section>

      {/* Pillars Grid */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our 4 Core Pillars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <span className="text-amber-500 text-xs font-bold uppercase">{p.tag}</span>
                <h3 className="text-xl font-bold mt-2 mb-3">{p.title}</h3>
                <p className="text-slate-400 text-sm">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}