import React, { useEffect } from 'react';
import { ArrowRight, Moon, Sun } from 'lucide-react';
import { PRIMARY_NAVIGATION, PRIMARY_ACTION, CORPORATE_IDENTITY } from '../../data/siteArchitecture';
import { useRouter } from '../../router/RouterContext';
import { useTheme } from '../../context/ThemeContext';
import { Button } from '../ui/Button';

export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Accessible Mobile Navigation Drawer
 * Designed intentionally for touch viewports (minimum 44px touch targets),
 * keyboard Escape handling, and clear active route indicators.
 */
export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const { navigate, isActive } = useRouter();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleLinkSelect = (href: string) => {
    navigate(href);
    onClose();
  };

  return (
    <div
      id="piqqudim-mobile-navigation"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile corporate navigation"
      className="lg:hidden border-b border-[var(--color-border)] bg-[var(--color-bg-primary)] shadow-sm"
    >
      <div className="mx-auto max-w-[76rem] px-4 sm:px-6 py-6 space-y-6">
        <nav aria-label="Mobile primary navigation" className="divide-y divide-[var(--color-border)]">
          {PRIMARY_NAVIGATION.map((item) => {
            const active = isActive(item.href);
            return (
              <button
                key={item.href}
                type="button"
                onClick={() => handleLinkSelect(item.href)}
                aria-current={active ? 'page' : undefined}
                className={`w-full min-h-[3.25rem] py-3 flex items-center justify-between text-left transition-colors cursor-pointer ${
                  active
                    ? 'text-[var(--color-accent)] font-semibold'
                    : 'text-[var(--color-text-primary)] hover:text-[var(--color-accent)]'
                }`}
              >
                <div>
                  <div className="text-base leading-snug">{item.label}</div>
                  <div className="text-xs text-[var(--color-text-muted)] font-normal mt-0.5">
                    {item.description}
                  </div>
                </div>
                <ArrowRight
                  className={`w-4 h-4 shrink-0 transition-transform ${
                    active ? 'text-[var(--color-accent)] translate-x-0.5' : 'text-[var(--color-text-muted)]'
                  }`}
                  aria-hidden="true"
                />
              </button>
            );
          })}
        </nav>

        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center justify-between sm:justify-start gap-4">
            <p className="text-xs text-[var(--color-text-muted)]">
              {CORPORATE_IDENTITY.positioning}
            </p>
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] text-xs font-medium text-[var(--color-text-primary)] cursor-pointer whitespace-nowrap"
            >
              {theme === 'light' ? (
                <>
                  <Moon className="w-3.5 h-3.5 text-[var(--color-accent)]" aria-hidden="true" />
                  <span>Dark Theme</span>
                </>
              ) : (
                <>
                  <Sun className="w-3.5 h-3.5 text-[var(--color-accent)]" aria-hidden="true" />
                  <span>White Theme</span>
                </>
              )}
            </button>
          </div>
          <Button
            variant="primary"
            size="md"
            onClick={() => handleLinkSelect(PRIMARY_ACTION.href)}
            className="w-full sm:w-auto"
          >
            {PRIMARY_ACTION.label}
          </Button>
        </div>
      </div>
    </div>
  );
};
