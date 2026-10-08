import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export interface SiteLayoutProps {
  children: React.ReactNode;
}

/**
 * Global Site Layout Wrapper
 * Includes keyboard skip-link, persistent Navbar, semantic main landmark, and Footer.
 */
export const SiteLayout: React.FC<SiteLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      {/* Accessibility Skip Navigation Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--color-accent)] focus:text-white focus:rounded-[var(--radius-md)] focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
};
