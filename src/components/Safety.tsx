import { ShieldCheck, UserX, Gavel, Ban, Users2, CreditCard, MapPin } from 'lucide-react';

const guidelines = [
  { icon: ShieldCheck, title: 'Strictly 21+', desc: 'No exceptions. Valid government-issued photo ID is mandatory for every member.' },
  { icon: UserX, title: 'Marital Status Warranty', desc: 'Members must be unmarried, legally divorced, or widowed. False declarations result in immediate termination.' },
  { icon: Gavel, title: 'Zero Criminal Record', desc: 'All members warrant they have no criminal record. True Vibes reserves the right to verify and reject.' },
  { icon: Ban, title: 'Anti-Escort & Anti-Commercial', desc: 'Strictly no escort services, commercial sex work, or paid companionship. This is an introductions service only.' },
  { icon: Users2, title: 'Staff Protection', desc: 'Harassment, threats, or abuse toward True Vibes staff will result in immediate termination and legal action.' },
  { icon: CreditCard, title: 'Zero Money Transfer Rule', desc: 'Never transfer money to any member or individual claiming association with True Vibes. Report immediately.' },
  { icon: MapPin, title: 'Mandatory Public First Meetings', desc: 'First meetings must always take place in public spaces. Never meet privately until mutual trust is established.' },
];

export default function Safety() {
  return (
    <section id="safety" className="section-pad bg-maroon-950">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-champagne-400">Safety & Eligibility</p>
          <h2 className="font-serif text-3xl font-semibold text-cream-50 sm:text-4xl">
            Safety First, Always
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-cream-200/70">
            Our guidelines exist to protect every member. Violation of any guideline results in immediate termination.
          </p>
        </div>

        <div id="for-members" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guidelines.map((g) => (
            <div
              key={g.title}
              className="group rounded-2xl border border-champagne-400/20 bg-maroon-900/40 p-6 transition hover:border-champagne-400/50 hover:bg-maroon-900/60"
            >
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-champagne-400/15 text-champagne-400 transition group-hover:scale-110 group-hover:bg-champagne-400/25">
                <g.icon className="h-5 w-5" />
              </span>
              <h3 className="mb-2 font-serif text-base font-semibold text-cream-50">{g.title}</h3>
              <p className="text-sm leading-relaxed text-cream-200/70">{g.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
