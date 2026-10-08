import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { PRIMARY_NAVIGATION, PRIMARY_ACTION, CORPORATE_IDENTITY } from '../../data/siteArchitecture';
import { useRouter } from '../../router/RouterContext';
import { useTheme } from '../../context/ThemeContext';
import { Container } from '../ui/Container';
import { Link } from '../ui/Link';
import { Button } from '../ui/Button';
import { PiqqudimLogo } from '../ui/PiqqudimLogo';
import { MobileNav } from './MobileNav';

/**
 * Global Corporate Navigation Bar
 * Adheres strictly to the 3-Zone Top Bar Contract:
 * Zone 1: Brand mark & single text wordmark ("Piqqudim")
 * Zone 2: 6 single-word company navigation links
 * Zone 3: Theme switcher + primary action ("Contact")
 */
export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentPath } = useRouter();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPath]);

  return (
    <header className="sticky top-0 z-40 w-full bg-[var(--color-bg-primary)]/95 backdrop-blur-md border-b border-[var(--color-border)] transition-colors duration-150">
      <Container size="lg">
        <div className="h-16 flex items-center justify-between gap-6">
          {/* Zone 1: Brand Mark + Wordmark (no subtitle badges) */}
          <Link
            href="/"
            exact
            className="inline-flex items-center gap-2.5 text-lg font-bold tracking-[-0.03em] text-[var(--color-text-primary)] hover:text-[var(--color-accent)] hover:no-underline whitespace-nowrap shrink-0"
          >
            <PiqqudimLogo size="sm" ariaLabel="Piqqudim Emblem" />
            <span>{CORPORATE_IDENTITY.name}</span>
          </Link>

          {/* Zone 2: Desktop Primary Navigation */}
          <nav
            aria-label="Primary corporate navigation"
            className="hidden lg:flex items-center gap-7"
          >
            {PRIMARY_NAVIGATION.map((item) => (
              <Link key={item.href} href={item.href} variant="nav">
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Zone 3: Theme Switcher, Primary Action & Mobile Drawer Trigger */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'
              }
              title={theme === 'light' ? 'Switch to dark theme' : 'Switch to white theme'}
              className="inline-flex items-center gap-1.5 min-h-[2.5rem] px-3 py-1.5 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] text-xs font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-accent)] transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              {theme === 'light' ? (
                <>
                  <Moon className="w-3.5 h-3.5 text-[var(--color-accent)]" aria-hidden="true" />
                  <span className="hidden sm:inline">Dark Theme</span>
                </>
              ) : (
                <>
                  <Sun className="w-3.5 h-3.5 text-[var(--color-accent)]" aria-hidden="true" />
                  <span className="hidden sm:inline">White Theme</span>
                </>
              )}
            </button>

            <div className="hidden lg:block">
              <Button variant="primary" size="sm" href={PRIMARY_ACTION.href}>
                {PRIMARY_ACTION.label}
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="piqqudim-mobile-navigation"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="lg:hidden inline-flex items-center justify-center min-w-[2.75rem] min-h-[2.75rem] rounded-[var(--radius-md)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </Container>

      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
};
