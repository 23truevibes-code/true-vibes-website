import { Heart, Mail, Phone, MessageCircle, MapPin, FileText, Shield, RotateCcw, Cookie } from 'lucide-react';
import { BRAND } from '@/data/brand';
import { useLegalModal, type LegalDocId } from './LegalModalContext';

const LEGAL_LINKS: { id: LegalDocId; label: string; icon: typeof FileText }[] = [
  { id: 'terms', label: 'Terms & Conditions', icon: FileText },
  { id: 'privacy', label: 'Privacy Policy', icon: Shield },
  { id: 'refund', label: 'Refund & Cancellation', icon: RotateCcw },
  { id: 'cookie', label: 'Cookie Policy', icon: Cookie },
];

export default function Footer() {
  const { openModal } = useLegalModal();

  return (
    <footer id="contact" className="bg-maroon-950 pt-16 pb-8">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
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
              <li>
                <a href={BRAND.whatsappDirect} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2.5 transition hover:text-champagne-300">
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-champagne-500" />
                  WhatsApp Helpline
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-champagne-500" />
                {BRAND.address}
              </li>
            </ul>
          </div>

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

        <div className="mt-12 border-t border-champagne-400/15 pt-6">
          <div className="flex flex-col gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-xs text-cream-200/50">
              CIN: {BRAND.cin} | PAN: {BRAND.pan} | TAN: {BRAND.tan}
            </p>
            <p className="text-xs text-cream-200/50">
              © {new Date().getFullYear()} {BRAND.shortName}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
