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
        className="absolute inset-0 bg-charcoal-900/60 backdrop-blur-sm animate-fade-in"
        onClick={closeModal}
      />
      <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-t-3xl sm:rounded-3xl bg-cream-50 shadow-2xl animate-slide-up sm:animate-scale-in flex flex-col">
        <div className="sticky top-0 flex items-center justify-between gap-4 border-b border-champagne-200 bg-cream-50/95 backdrop-blur-md px-6 py-4">
          <div>
            <h2 id="legal-modal-title" className="font-serif text-xl font-semibold text-maroon-700 sm:text-2xl">
              {doc.title}
            </h2>
            <p className="text-xs text-charcoal-700/60">Last updated: {doc.lastUpdated}</p>
          </div>
          <button
            onClick={closeModal}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-maroon-700/10 text-maroon-700 transition hover:bg-maroon-700 hover:text-cream-50"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="overflow-y-auto px-6 py-6 space-y-6">
          {doc.sections.map((section, i) => (
            <div key={i}>
              <h3 className="font-serif text-lg font-semibold text-maroon-800 mb-2">{section.heading}</h3>
              <p className="text-sm leading-relaxed text-charcoal-800">{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
