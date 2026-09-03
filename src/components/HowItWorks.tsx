import { useState } from 'react';
import { User, UserCheck, ShieldCheck, CreditCard, Users, Handshake, RefreshCw, Lock } from 'lucide-react';
import { BRAND } from '@/data/brand';

interface Step {
  icon: typeof ShieldCheck;
  title: string;
  desc: string;
}

const gentlemenSteps: Step[] = [
  { icon: ShieldCheck, title: 'Govt ID Verification', desc: 'Submit a valid government-issued photo ID. You must be strictly 21+ to proceed.' },
  { icon: CreditCard, title: 'Choose Your Plan', desc: '₹2,124 domestic (incl. GST) or $70.80 international (incl. GST) for 3 months.' },
  { icon: Users, title: 'Confidential Outreach', desc: 'We privately share 30–50 verified profiles matching your preferences within a 50–150 km radius.' },
  { icon: Handshake, title: 'Mutual Consent', desc: 'Contact details are exchanged only after both parties give explicit mutual consent.' },
  { icon: RefreshCw, title: 'Replacements', desc: '3-month validity with up to 4 replacements if a curated introduction does not progress.' },
];

const ladiesSteps: Step[] = [
  { icon: CreditCard, title: '100% Free Sponsored Membership', desc: 'Ladies receive full membership at no cost — sponsored to ensure a balanced, genuine community.' },
  { icon: ShieldCheck, title: 'Govt ID Verification', desc: 'Same strict 21+ government ID verification as gentlemen. No exceptions.' },
  { icon: Lock, title: 'Zero Public Catalog', desc: 'Your profile is never listed publicly. Shared privately only with matched, verified members.' },
  { icon: Users, title: 'Curated Private Matches', desc: 'Receive curated introductions from verified gentlemen within your 50–150 km radius.' },
  { icon: Handshake, title: 'Explicit Consent', desc: 'Your contact details are shared only after you give explicit consent. Full control, always.' },
  { icon: RefreshCw, title: '4 Replacements', desc: 'Same 3-month validity with up to 4 replacements included in your sponsored membership.' },
];

export default function HowItWorks() {
  const [tab, setTab] = useState<'gentlemen' | 'ladies'>('gentlemen');
  const steps = tab === 'gentlemen' ? gentlemenSteps : ladiesSteps;

  return (
    <section id="how-it-works" className="section-pad bg-cream-100">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-champagne-600">How It Works</p>
          <h2 className="font-serif text-3xl font-semibold text-maroon-800 sm:text-4xl">
            A Simple, Discreet Process
          </h2>
        </div>

        <div className="mx-auto mb-10 flex max-w-md items-center rounded-full bg-maroon-700/10 p-1.5">
          <button
            onClick={() => setTab('gentlemen')}
            className={`flex flex-1 items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold transition ${
              tab === 'gentlemen' ? 'bg-maroon-700 text-cream-50 shadow-md' : 'text-maroon-700'
            }`}
          >
            <User className="h-4 w-4" />
            Gentlemen
          </button>
          <button
            onClick={() => setTab('ladies')}
            className={`flex flex-1 items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold transition ${
              tab === 'ladies' ? 'bg-maroon-700 text-cream-50 shadow-md' : 'text-maroon-700'
            }`}
          >
            <UserCheck className="h-4 w-4" />
            Ladies
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-champagne-200 bg-cream-50 p-6 transition hover:shadow-lg hover:shadow-maroon-900/5 animate-fade-in-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-maroon-700 to-maroon-900 text-cream-50 shadow-sm transition group-hover:scale-110">
                  <step.icon className="h-5 w-5" />
                </span>
                <span className="font-serif text-3xl font-semibold text-champagne-300">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mb-2 font-serif text-lg font-semibold text-maroon-800">{step.title}</h3>
              <p className="text-sm leading-relaxed text-charcoal-700">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={BRAND.whatsappDirect}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-maroon-700 px-7 py-3.5 text-sm font-semibold text-cream-50 shadow-lg transition hover:scale-105 hover:bg-maroon-800"
          >
            Start Your Journey on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
