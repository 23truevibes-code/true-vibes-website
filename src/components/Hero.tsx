import { ShieldCheck, BadgeCheck, Lock, MessageCircle, ChevronDown } from 'lucide-react';
import { BRAND } from '@/data/brand';

const BADGES = [
  { icon: ShieldCheck, label: 'Strictly 21+' },
  { icon: BadgeCheck, label: 'Govt ID Verified' },
  { icon: Lock, label: 'Zero Public Catalog' },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-maroon-800 via-maroon-900 to-maroon-950 pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(212,175,55,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(212,175,55,0.15) 0%, transparent 40%)',
      }} />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <p className="mb-4 animate-fade-in text-xs uppercase tracking-[0.25em] text-champagne-400">
          {BRAND.tagline}
        </p>
        <h1 className="mb-6 animate-fade-in-up font-serif text-4xl font-semibold leading-[1.15] text-cream-50 sm:text-5xl lg:text-6xl">
          Meaningful Connections,
          <br />
          <span className="text-gradient-gold">Curated with Discretion</span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl animate-fade-in-up text-base leading-relaxed text-cream-200/80 sm:text-lg">
          A confidential introductions service for verified individuals seeking genuine companionship.
          Government ID verified, mutual consent guaranteed, and your privacy fiercely protected.
        </p>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-3 animate-fade-in">
          {BADGES.map((badge) => (
            <div
              key={badge.label}
              className="inline-flex items-center gap-2 rounded-full border border-champagne-400/30 bg-maroon-950/40 px-4 py-2 text-sm text-cream-100 backdrop-blur-sm"
            >
              <badge.icon className="h-4 w-4 text-champagne-400" />
              {badge.label}
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-3 animate-fade-in-up sm:flex-row">
          <a
            href={BRAND.whatsappDirect}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:scale-105 hover:shadow-xl sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" />
            Chat on WhatsApp
          </a>
          <a
            href={BRAND.whatsappChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-champagne-400/50 bg-transparent px-7 py-3.5 text-sm font-semibold text-champagne-300 transition hover:bg-champagne-400/10 sm:w-auto"
          >
            Join WhatsApp Channel
          </a>
        </div>

        <a href="#how-it-works" className="mt-16 inline-flex flex-col items-center gap-1 text-champagne-400/60 animate-fade-in">
          <span className="text-xs uppercase tracking-wider">Explore</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
