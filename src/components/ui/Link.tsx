import React from 'react';
import { useRouter } from '../../router/RouterContext';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: 'default' | 'nav' | 'accent' | 'muted' | 'inverse';
  external?: boolean;
  exact?: boolean;
}

export const Link: React.FC<LinkProps> = ({
  href,
  variant = 'default',
  external = false,
  exact = false,
  className = '',
  children,
  onClick,
  ...props
}) => {
  const { navigate, isActive } = useRouter();
  const active = !external && isActive(href, exact);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }
    if (
      !external &&
      !e.defaultPrevented &&
      e.button === 0 &&
      !e.metaKey &&
      !e.ctrlKey &&
      !e.shiftKey &&
      !e.altKey &&
      href.startsWith('/')
    ) {
      e.preventDefault();
      navigate(href);
    }
  };

  const variantClassMap: Record<NonNullable<LinkProps['variant']>, string> = {
    default:
      'text-[var(--color-text-primary)] underline-offset-4 hover:text-[var(--color-accent)] hover:underline',
    nav: `text-sm font-medium whitespace-nowrap transition-colors duration-150 py-1 border-b-2 ${
      active
        ? 'text-[var(--color-accent)] border-[var(--color-accent)] font-semibold'
        : 'text-[var(--color-text-secondary)] border-transparent hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-strong)]'
    }`,
    accent:
      'text-[var(--color-accent)] font-medium underline-offset-4 hover:text-[var(--color-accent-hover)] hover:underline',
    muted:
      'text-[var(--color-text-muted)] underline-offset-4 hover:text-[var(--color-text-primary)] hover:underline',
    inverse:
      'text-[var(--color-text-inverse)] opacity-85 hover:opacity-100 underline-offset-4 hover:underline',
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      aria-current={active ? 'page' : undefined}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`inline-flex items-center gap-1.5 transition-colors duration-150 ${variantClassMap[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </a>
  );
};
