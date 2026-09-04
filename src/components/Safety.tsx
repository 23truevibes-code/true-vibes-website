import { ShieldCheck, UserX, Gavel, Ban, Users2, CreditCard, MapPin, RotateCcw, Plane, Landmark } from 'lucide-react';

interface Item {
  icon: typeof ShieldCheck;
  title: string;
  desc: string;
}

const eligibility: Item[] = [
  { icon: ShieldCheck, title: 'Strictly 21+ Mandate', desc: 'No exceptions. A valid government-issued photo ID is mandatory for every member before onboarding.' },
  { icon: UserX, title: 'Marital Status Warranty', desc: 'Members must be unmarried, legally divorced, or widowed. False declarations result in immediate termination.' },
  { icon: Gavel, title: 'Zero Criminal Record', desc: 'All members warrant they have no criminal convictions or pending cases. True Vibes reserves the right to verify and reject.' },
  { icon: Ban, title: 'Anti-Escort & Anti-Commercial', desc: 'Strictly genuine matchmaking only. Zero escort services, commercial sex work, or paid companionship of any kind.' },
  { icon: Users2, title: 'Staff Protection Policy', desc: 'Zero tolerance for harassment, threats, or abuse toward True Vibes staff. Violations result in immediate termination and legal action.' },
];

const financial: Item[] = [
  { icon: CreditCard, title: 'Zero Money Transfer Rule', desc: 'Never transfer money or loans to any member or individual claiming association with True Vibes. Report immediately.' },
  { icon: MapPin, title: 'Mandatory Public First Meetings', desc: 'First meetings must take place in daylight public venues only. Exercise self-diligence before meeting privately.' },
  { icon: RotateCcw, title: 'Strict Non-Refundable Policy', desc: '₹2,124 / $70.80 is non-refundable once onboarding is initiated. Chargeback initiators are blacklisted permanently.' },
  { icon: Plane, title: 'No Visa or Immigration Assistance', desc: 'True Vibes provides introductions only. We do not offer visa, immigration, or travel support of any kind.' },
  { icon: Landmark, title: 'Exclusive Mumbai Jurisdiction', desc: 'All legal matters and disputes are subject exclusively to the jurisdiction of competent courts in Mumbai, Maharashtra, India.' },
];

function Box({ title, subtitle, items }: { title: string; subtitle: string; items: Item[] }) {
  return (
    <div className="rounded-3xl border border-champagne-400/20 bg-maroon-900/40 p-6 sm:p-8">
      <h3 className="mb-1 font-serif text-xl font-semibold text-champagne-400">{title}</h3>
      <p className="mb-6 text-xs text-cream-200/50">{subtitle}</p>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.title} className="flex items-start gap-3.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-champagne-400/15 text-champagne-400">
              <item.icon className="h-5 w-5" />
            </span>
            <div>
              <h4 className="font-serif text-sm font-semibold text-cream-50">{item.title}</h4>
              <p className="mt-0.5 text-sm leading-relaxed text-cream-200/65">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

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

        <div id="for-members" className="grid gap-6 lg:grid-cols-2">
          <Box
            title="Eligibility & Decorum"
            subtitle="Who may join and how members must conduct themselves"
            items={eligibility}
          />
          <Box
            title="Financial Safety & Legal Covenants"
            subtitle="Money, meetings, refunds, and jurisdiction"
            items={financial}
          />
        </div>
      </div>
    </section>
  );
}
