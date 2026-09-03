import { Check, MessageCircle } from 'lucide-react';
import { BRAND } from '@/data/brand';

interface Plan {
  label: string;
  price: string;
  unit: string;
  breakdown: string;
  total: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}

const plans: Plan[] = [
  {
    label: 'Domestic Gentlemen',
    price: '₹2,124',
    unit: 'INR / 3 months',
    breakdown: '₹1,800 + 18% GST (₹324)',
    total: '₹2,124 INR Total',
    features: ['3-month membership validity', 'Up to 4 replacements', '30–50 verified profiles', 'Govt ID verified', 'Mutual consent guaranteed'],
    cta: 'Join on WhatsApp',
  },
  {
    label: 'International Gentlemen',
    price: '$70.80',
    unit: 'USD / 3 months',
    breakdown: '$60 + 18% GST ($10.80)',
    total: '$70.80 USD Total',
    features: ['3-month membership validity', 'Up to 4 replacements', '30–50 verified profiles', 'Govt ID verified', 'Mutual consent guaranteed'],
    cta: 'Join on WhatsApp',
    highlight: true,
  },
  {
    label: 'Ladies',
    price: '₹0 / $0',
    unit: 'Sponsored / 3 months',
    breakdown: '100% Free Sponsored Membership',
    total: 'No Cost — Fully Sponsored',
    features: ['3-month membership validity', 'Up to 4 replacements', 'Curated private matches', 'Govt ID verified', 'Zero public catalog'],
    cta: 'Join on WhatsApp',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-pad bg-gradient-to-b from-cream-100 to-cream-200">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-champagne-600">Transparent Pricing</p>
          <h2 className="font-serif text-3xl font-semibold text-maroon-800 sm:text-4xl">
            Clear, Upfront, No Surprises
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-charcoal-700">
            All prices include 18% GST. Ladies membership is 100% sponsored — always free, always verified.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.label}
              className={`relative flex flex-col rounded-3xl border p-7 transition hover:shadow-xl ${
                plan.highlight
                  ? 'border-champagne-400 bg-gradient-to-b from-cream-50 to-champagne-50 shadow-lg'
                  : 'border-champagne-200 bg-cream-50'
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-champagne-500 px-4 py-1 text-xs font-semibold text-maroon-900 shadow">
                  Popular
                </span>
              )}
              <h3 className="mb-1 font-serif text-xl font-semibold text-maroon-800">{plan.label}</h3>
              <p className="mb-4 text-xs text-charcoal-700/60">{plan.breakdown}</p>
              <div className="mb-1">
                <span className="font-serif text-4xl font-semibold text-maroon-700">{plan.price}</span>
              </div>
              <p className="mb-1 text-sm text-charcoal-700">{plan.unit}</p>
              <p className="mb-6 text-xs font-medium text-champagne-600">{plan.total}</p>

              <ul className="mb-6 space-y-2.5 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-charcoal-800">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-champagne-500" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={BRAND.whatsappDirect}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition hover:scale-105 ${
                  plan.highlight
                    ? 'bg-maroon-700 text-cream-50 shadow-lg'
                    : 'border border-maroon-700 text-maroon-700 hover:bg-maroon-700 hover:text-cream-50'
                }`}
              >
                <MessageCircle className="h-4 w-4" />
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
