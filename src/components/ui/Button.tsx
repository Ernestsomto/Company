import React from 'react';
import { useRouter } from '../../router/RouterContext';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'inverse';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  fullWidth?: boolean;
  iconRight?: React.ReactNode;
}

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-[var(--color-accent)] text-[var(--color-button-text)] hover:bg-[var(--color-accent-hover)] border border-transparent',
  secondary:
    'bg-[var(--color-bg-elevated)] text-[var(--color-text-primary)] hover:bg-[var(--color-accent-subtle)] hover:border-[var(--color-accent-border)] border border-[var(--color-border)]',
  outline:
    'bg-transparent text-[var(--color-text-primary)] border border-[var(--color-border-strong)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]',
  ghost:
    'bg-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] border border-transparent',
  inverse:
    'bg-[var(--color-bg-inverse)] text-[var(--color-text-inverse)] hover:bg-[var(--color-accent-subtle)] border border-[var(--color-border-strong)]',
};

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'min-h-[2.5rem] px-4 py-2 text-xs',
  md: 'min-h-[2.75rem] px-5 py-2.5 text-sm',
  lg: 'min-h-[3rem] px-6 py-3 text-sm',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  fullWidth = false,
  iconRight,
  className = '',
  children,
  onClick,
  type = 'button',
  ...props
}) => {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }
    if (href && !e.defaultPrevented) {
      navigate(href);
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] font-semibold tracking-[-0.005em] whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer disabled:opacity-50 disabled:pointer-events-none ${
        variantClasses[variant]
      } ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''} ${className}`.trim()}
      {...props}
    >
      <span className="truncate">{children}</span>
      {iconRight ? <span className="shrink-0">{iconRight}</span> : null}
    </button>
  );
};
