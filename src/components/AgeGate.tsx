import { useState } from 'react';
import { ShieldCheck, ArrowRight, X } from 'lucide-react';

const SESSION_KEY = 'truevibes-age-verified';

export default function AgeGate() {
  const [verified, setVerified] = useState(() => sessionStorage.getItem(SESSION_KEY) === 'true');

  if (verified) return null;

  const handleEnter = () => {
    sessionStorage.setItem(SESSION_KEY, 'true');
    setVerified(true);
  };

  const handleExit = () => {
    window.location.href = 'https://www.google.com';
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-5">
      <div className="absolute inset-0 bg-maroon-950/95 backdrop-blur-xl" />

      <div className="relative z-10 w-full max-w-md animate-scale-in rounded-3xl border border-champagne-400/30 bg-gradient-to-b from-maroon-900 to-maroon-950 p-8 text-center shadow-2xl sm:p-10">
        <div className="mb-6 flex justify-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-champagne-400/15 text-champagne-400">
            <ShieldCheck className="h-8 w-8" />
          </span>
        </div>

        <h2 className="mb-4 font-serif text-2xl font-semibold text-cream-50 sm:text-3xl">
          21+ Verification Mandate
        </h2>
        <p className="mb-8 text-sm leading-relaxed text-cream-200/70">
          You must be strictly 21 years of age or older to enter True Vibes.
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={handleEnter}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-champagne-500 px-6 py-3.5 text-sm font-semibold text-maroon-950 shadow-lg transition hover:scale-105 hover:bg-champagne-400"
          >
            I am 21 or Older (Enter)
            <ArrowRight className="h-4 w-4" />
          </button>
          <button
            onClick={handleExit}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-200/20 px-6 py-3.5 text-sm font-semibold text-cream-200/60 transition hover:border-cream-200/40 hover:text-cream-200"
          >
            <X className="h-4 w-4" />
            I am Under 21 (Exit)
          </button>
        </div>
      </div>
    </div>
  );
}
