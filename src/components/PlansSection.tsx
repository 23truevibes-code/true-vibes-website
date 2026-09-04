import { ShieldCheck, BadgeCheck, MapPin, Globe2, CheckCircle2 } from 'lucide-react';

const eligibilityPoints = [
  {
    icon: ShieldCheck,
    title: 'Strict Age Verification (21+)',
    desc: 'Mandatory government-issued photo ID verification. Participation is strictly restricted to verified adults aged 21 and above across all membership tiers.',
  },
  {
    icon: BadgeCheck,
    title: 'Confidential Verification',
    desc: 'ID documents are cross-checked strictly for authentication and safety protocols; no credentials are ever displayed publicly.',
  },
];

const plans = [
  {
    icon: MapPin,
    label: 'Domestic Matchmaking (India)',
    price: '₹2,124',
    tax: 'incl. 18% GST',
    scope: 'Covers curated profiles from your selected primary city and nearby communities',
    duration: '3-month access with up to 4 personalized introduction cycles',
  },
  {
    icon: Globe2,
    label: 'International Matchmaking',
    price: '$70.80',
    tax: 'incl. applicable tax',
    scope: 'Covers curated profiles across your selected primary locations and regional communities',
    duration: '3-month access with up to 4 personalized introduction cycles',
  },
];

export default function PlansSection() {
  return (
    <section className="section-pad bg-gradient-to-b from-cream-100 to-cream-200">
      <div className="mx-auto max-w-5xl">
        {/* Eligibility Protocol Card */}
        <div className="mb-10 rounded-3xl border border-champagne-400/30 bg-gradient-to-br from-maroon-800 to-maroon-950 p-6 shadow-lg sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-champagne-400/15 text-champagne-400">
              <ShieldCheck className="h-6 w-6" />
            </span>
            <h2 className="font-serif text-xl font-semibold text-cream-50 sm:text-2xl">
              Eligibility & Trust Protocols
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {eligibilityPoints.map((point) => (
              <div key={point.title} className="flex items-start gap-3.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-champagne-400/15 text-champagne-400">
                  <point.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="mb-1 font-serif text-sm font-semibold text-cream-50">{point.title}</h3>
                  <p className="text-sm leading-relaxed text-cream-200/65">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.label}
              className="group rounded-3xl border border-maroon-200/60 bg-white p-6 shadow-sm transition hover:shadow-lg sm:p-8"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-maroon-700/10 text-maroon-700 transition group-hover:bg-maroon-700 group-hover:text-cream-50">
                  <plan.icon className="h-5 w-5" />
                </span>
                <h3 className="font-serif text-base font-semibold text-maroon-800">{plan.label}</h3>
              </div>

              <div className="mb-5 flex items-baseline gap-2">
                <span className="font-serif text-4xl font-semibold text-maroon-800">{plan.price}</span>
                <span className="text-xs text-charcoal-600/60">{plan.tax}</span>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-sm leading-relaxed text-charcoal-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-champagne-600" />
                  {plan.scope}
                </li>
                <li className="flex items-start gap-2.5 text-sm leading-relaxed text-charcoal-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-champagne-600" />
                  {plan.duration}
                </li>
              </ul>
            </div>
          ))}
        </div>

        {/* Fair Pricing Note */}
        <div className="mt-6 rounded-2xl border border-champagne-300/40 bg-champagne-50/50 p-5">
          <p className="text-sm leading-relaxed text-charcoal-700">
            <span className="font-semibold text-maroon-700">Fair Pricing Assurance:</span> Same onboarding fee applies for all eligible adult members (21+) irrespective of gender. There is no separate male/female pricing. All members receive the same level of verification, curation, and support.
          </p>
        </div>
      </div>
    </section>
  );
}
