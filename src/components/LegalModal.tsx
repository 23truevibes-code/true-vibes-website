import { useEffect } from 'react';
import { X } from 'lucide-react';
import { LEGAL_DOCS } from '@/data/legal';
import { useLegalModal } from './LegalModalContext';

export default function LegalModal() {
  const { activeModal, closeModal } = useLegalModal();
  const doc = activeModal ? LEGAL_DOCS[activeModal] : null;

  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeModal]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [closeModal]);

  if (!doc) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div
        className="absolute inset-0 bg-charcoal-900/70 backdrop-blur-md animate-fade-in"
        onClick={closeModal}
      />

      <div className="relative z-10 flex max-h-[100vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl bg-cream-50 shadow-2xl animate-slide-up sm:max-h-[90vh] sm:rounded-3xl sm:animate-scale-in">
        {/* Sticky header */}
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-champagne-200 bg-cream-50/95 px-5 py-4 backdrop-blur-md sm:px-7 sm:py-5">
          <div className="pr-2">
            <h2 id="legal-modal-title" className="font-serif text-lg font-semibold text-maroon-700 sm:text-2xl">
              {doc.title}
            </h2>
            <p className="mt-1 text-xs leading-relaxed text-charcoal-700/55">{doc.subtitle}</p>
            <p className="mt-1 text-[10px] text-charcoal-700/40">Last updated: {doc.lastUpdated}</p>
          </div>
          <button
            onClick={closeModal}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-maroon-700/10 text-maroon-700 transition hover:bg-maroon-700 hover:text-cream-50"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto px-5 py-6 sm:px-7 sm:py-8">
          <div className="space-y-6">
            {doc.sections.map((section, i) => (
              <div key={i} className="border-l-2 border-champagne-300 pl-4">
                <h3 className="mb-1.5 font-serif text-base font-semibold text-maroon-800 sm:text-lg">
                  {section.heading}
                </h3>
                <p className="text-sm leading-relaxed text-charcoal-800">{section.body}</p>
              </div>
            ))}
          </div>

          {/* Close button at bottom for mobile */}
          <button
            onClick={closeModal}
            className="mt-8 w-full rounded-full bg-maroon-700 py-3.5 text-sm font-semibold text-cream-50 transition hover:bg-maroon-800 sm:hidden"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
