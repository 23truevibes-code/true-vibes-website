import { LegalModalProvider } from '@/components/LegalModalContext';
import LegalModal from '@/components/LegalModal';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import Safety from '@/components/Safety';
import FAQ from '@/components/FAQ';
import DPDPBanner from '@/components/DPDPBanner';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <LegalModalProvider>
      <div className="min-h-screen bg-cream-100">
        <Header />
        <main>
          <Hero />
          <HowItWorks />
          <Pricing />
          <Safety />
          <FAQ />
          <DPDPBanner />
        </main>
        <Footer />
        <LegalModal />
      </div>
    </LegalModalProvider>
  );
}
