import { ShieldCheck, BadgeCheck, Lock, ArrowDown } from 'lucide-react';

const BADGES = [
  { icon: ShieldCheck, label: 'Strictly 21+' },
  { icon: BadgeCheck, label: 'Govt ID Verified' },
  { icon: Lock, label: 'Zero Public Catalog' },
];

const COUPLE_IMG = 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-maroon-800 via-maroon-900 to-maroon-950 pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(212,175,55,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(212,175,55,0.15) 0%, transparent 40%)',
      }} />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Text column */}
          <div className="text-center lg:text-left">
            <p className="mb-4 animate-fade-in text-xs uppercase tracking-[0.25em] text-champagne-400">
              Verified Matchmaking &amp; Introductions
            </p>
            <h1 className="mb-6 animate-fade-in-up font-serif text-4xl font-semibold leading-[1.15] text-cream-50 sm:text-5xl lg:text-[3.25rem]">
              Meaningful Connections,
              <br />
              <span className="text-gradient-gold">Built on Mutual Trust &amp; Safety</span>
            </h1>
            <p className="mx-auto mb-8 max-w-xl animate-fade-in-up text-base leading-relaxed text-cream-200/80 sm:text-lg lg:mx-0">
              An exclusive, verified introduction service for individuals seeking genuine, long-term relationships. Government ID verified, strict mutual consent protocols, and complete data privacy.
            </p>

            <div className="mb-8 flex flex-wrap items-center justify-center gap-3 animate-fade-in lg:justify-start">
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

            <a
              href="#process-section"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-champagne-500 px-7 py-3.5 text-sm font-semibold text-maroon-950 shadow-lg transition hover:scale-105 hover:bg-champagne-400"
            >
              Explore Process &amp; Plans
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>

          {/* Image column */}
          <div className="animate-fade-in-up">
            <div className="relative overflow-hidden rounded-3xl border border-champagne-400/20 shadow-2xl">
              <img
                src={COUPLE_IMG}
                alt="A couple sitting at a cafe table enjoying coffee together"
                className="aspect-[4/3] w-full object-cover sm:aspect-video"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
