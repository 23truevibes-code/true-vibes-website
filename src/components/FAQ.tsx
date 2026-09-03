import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '@/data/faqs';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad bg-cream-100">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-champagne-600">FAQ</p>
          <h2 className="font-serif text-3xl font-semibold text-maroon-800 sm:text-4xl">
            Questions, Answered
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-champagne-200 bg-cream-50 transition hover:shadow-md"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={open === i}
              >
                <span className="font-serif text-base font-semibold text-maroon-800 sm:text-lg">{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-champagne-600 transition-transform duration-300 ${
                    open === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm leading-relaxed text-charcoal-700">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
