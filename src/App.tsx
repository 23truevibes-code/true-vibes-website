import { LegalModalProvider } from '@/components/LegalModalContext';
import LegalModal from '@/components/LegalModal';
import AgeGate from '@/components/AgeGate';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProcessSection from '@/components/ProcessSection';
import PlansSection from '@/components/PlansSection';
import Safety from '@/components/Safety';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <LegalModalProvider>
      <AgeGate />
      <div className="min-h-screen bg-cream-100">
        <Header />
        <main>
          <Hero />
          <ProcessSection />
          <PlansSection />
          <Safety />
        </main>
        <Footer />
        <LegalModal />
      </div>
    </LegalModalProvider>
  );
}
