import { useEffect, useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { BRAND, NAV_LINKS } from '@/data/brand';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream-50/95 backdrop-blur-md shadow-lg shadow-maroon-900/5' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-maroon-700 to-maroon-900 shadow-md">
            <Heart className="h-5 w-5 text-champagne-400" fill="currentColor" />
          </span>
          <div className="leading-tight">
            <span className="block font-serif text-lg font-semibold text-maroon-700">True Vibes</span>
            <span className="block text-[10px] uppercase tracking-[0.15em] text-champagne-600">
              {BRAND.tagline}
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-charcoal-800 transition hover:text-maroon-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-maroon-700/10 text-maroon-700 lg:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden animate-fade-in border-t border-champagne-200 bg-cream-50/98 backdrop-blur-md">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-charcoal-800 transition hover:bg-maroon-700/5 hover:text-maroon-700"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
