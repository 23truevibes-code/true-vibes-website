import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export type LegalDocId = 'terms' | 'privacy' | 'refund' | 'cookie' | 'contact';

interface LegalModalContextValue {
  openModal: (id: LegalDocId) => void;
  closeModal: () => void;
  activeModal: LegalDocId | null;
}

const LegalModalContext = createContext<LegalModalContextValue | undefined>(undefined);

export function useLegalModal() {
  const ctx = useContext(LegalModalContext);
  if (!ctx) throw new Error('useLegalModal must be used within LegalModalProvider');
  return ctx;
}

export function LegalModalProvider({ children }: { children: ReactNode }) {
  const [activeModal, setActiveModal] = useState<LegalDocId | null>(null);

  const openModal = useCallback((id: LegalDocId) => setActiveModal(id), []);
  const closeModal = useCallback(() => setActiveModal(null), []);

  return (
    <LegalModalContext.Provider value={{ openModal, closeModal, activeModal }}>
      {children}
    </LegalModalContext.Provider>
  );
}
