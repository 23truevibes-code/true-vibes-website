import { Heart, Mail, Phone, MapPin, FileText, Shield, RotateCcw, Cookie, MessageSquare } from 'lucide-react';
import { BRAND } from '@/data/brand';
import { useLegalModal, type LegalDocId } from './LegalModalContext';

const LEGAL_LINKS: { id: LegalDocId; label: string; icon: typeof FileText }[] = [
  { id: 'terms', label: 'Terms and Conditions', icon: FileText },
  { id: 'privacy', label: 'Privacy Policy', icon: Shield },
  { id: 'refund', label: 'Refund Policy', icon: RotateCcw },
  { id: 'cookie', label: 'Cookie Policy', icon: Cookie },
  { id: 'contact', label: 'Contact Us', icon: MessageSquare },
];

export default function Footer() {
  const { openModal } = useLegalModal();

  return (
    <footer id="contact-footer" className="bg-maroon-950 pt-16 pb-8">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Company info */}
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-maroon-700 to-maroon-900">
                <Heart className="h-5 w-5 text-champagne-400" fill="currentColor" />
              </span>
              <div className="leading-tight">
                <span className="block font-serif text-lg font-semibold text-cream-50">True Vibes</span>
                <span className="block text-[10px] uppercase tracking-[0.15em] text-champagne-400">
                  {BRAND.tagline}
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-cream-200/60">
              {BRAND.legalName}
            </p>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="mb-4 font-serif text-base font-semibold text-champagne-400">Get in Touch</h3>
            <ul className="space-y-3 text-sm text-cream-200/70">
              <li>
                <a href={`mailto:${BRAND.email}`} className="flex items-start gap-2.5 transition hover:text-champagne-300">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-champagne-500" />
                  {BRAND.email}
                </a>
              </li>
              <li>
                <a href={`tel:${BRAND.phoneRaw}`} className="flex items-start gap-2.5 transition hover:text-champagne-300">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-champagne-500" />
                  {BRAND.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-champagne-500" />
                {BRAND.address}
              </li>
            </ul>
          </div>

          {/* Legal links — strict vertical stack */}
          <div>
            <h3 className="mb-4 font-serif text-base font-semibold text-champagne-400">Legal</h3>
            <ul className="space-y-3 text-sm text-cream-200/70">
              {LEGAL_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => openModal(link.id)}
                    className="flex items-center gap-2.5 transition hover:text-champagne-300"
                  >
                    <link.icon className="h-4 w-4 shrink-0 text-champagne-500" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Grievance */}
        <div className="mt-10 rounded-2xl border border-champagne-400/15 bg-maroon-900/30 p-5">
          <p className="text-xs leading-relaxed text-cream-200/60">
            <span className="font-semibold text-champagne-400">Grievance Redressal:</span> DPDP data deletion & requests resolved within 7 business days via{' '}
            <a href={`mailto:${BRAND.email}`} className="underline hover:text-champagne-300">{BRAND.email}</a>.
          </p>
        </div>

        {/* Statutory Disclaimer */}
        <div className="mt-6 rounded-2xl border border-champagne-400/15 bg-maroon-900/30 p-5">
          <p className="text-xs leading-relaxed text-cream-200/60">
            <span className="font-semibold text-champagne-400">Statutory Disclaimer:</span> Strictly 21+ Only. True Vibes provides curated matchmaking and verified introduction services. We do not guarantee marriage, mutual response, or specific relational outcomes. All legal matters and disputes are subject exclusively to the jurisdiction of competent courts in Mumbai, Maharashtra, India.
          </p>
        </div>

        {/* Corporate details */}
        <div className="mt-8 border-t border-champagne-400/15 pt-6">
          <div className="flex flex-col gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-xs text-cream-200/50">
              CIN: {BRAND.cin} | PAN: {BRAND.pan} | TAN: {BRAND.tan}
            </p>
            <p className="text-xs text-cream-200/50">
              © 2026 {BRAND.shortName}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
