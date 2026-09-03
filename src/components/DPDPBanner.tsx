import { ShieldAlert, Mail, Trash2 } from 'lucide-react';
import { BRAND } from '@/data/brand';

export default function DPDPBanner() {
  return (
    <section className="px-5 py-10 sm:px-8 sm:py-12 bg-gradient-to-r from-champagne-50 to-cream-200">
      <div className="mx-auto max-w-4xl rounded-2xl border border-champagne-300 bg-cream-50 p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-champagne-100 text-champagne-600">
            <ShieldAlert className="h-6 w-6" />
          </span>
          <div className="flex-1">
            <h2 className="mb-2 font-serif text-xl font-semibold text-maroon-800">
              Data Protection Notice — DPDP Act, 2023
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-charcoal-800">
              True Vibes collects your personal data (name, age, contact, government ID for verification) solely
              for the purpose of providing confidential introduction services. We act as your Data Fiduciary under
              the Digital Personal Data Protection Act, 2023.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
              <div className="flex items-center gap-2 text-sm text-charcoal-700">
                <Trash2 className="h-4 w-4 text-maroon-600" />
                <span>7-day data erasure on request</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-charcoal-700">
                <Mail className="h-4 w-4 text-maroon-600" />
                <a href={`mailto:${BRAND.email}`} className="underline hover:text-maroon-700">{BRAND.email}</a>
              </div>
            </div>
            <p className="mt-3 text-xs font-medium text-maroon-700">
              We do not sell, rent, or share your data with any third party. Ever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
