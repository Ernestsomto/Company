import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  surface?: 'primary' | 'secondary' | 'elevated' | 'inverse';
  padding?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  as?: 'div' | 'article' | 'section';
}

const surfaceClasses: Record<NonNullable<CardProps['surface']>, string> = {
  primary: 'bg-[var(--color-bg-primary)] border-[var(--color-border)] text-[var(--color-text-primary)]',
  secondary:
    'bg-[var(--color-bg-secondary)] border-[var(--color-border)] text-[var(--color-text-primary)]',
  elevated:
    'bg-[var(--color-bg-elevated)] border-[var(--color-accent-border)] text-[var(--color-text-primary)]',
  inverse:
    'bg-[var(--color-bg-inverse)] border-[var(--color-border-strong)] text-[var(--color-text-inverse)]',
};

const paddingClasses: Record<NonNullable<CardProps['padding']>, string> = {
  sm: 'p-5',
  md: 'p-6 md:p-8',
  lg: 'p-8 md:p-10',
};

export const Card: React.FC<CardProps> = ({
  surface = 'primary',
  padding = 'md',
  interactive = false,
  as: Component = 'div',
  className = '',
  children,
  ...props
}) => {
  const interactiveClass = interactive
    ? 'transition-colors duration-150 hover:border-[var(--color-accent)]'
    : '';

  return (
    <Component
      className={`border rounded-[var(--radius-lg)] ${surfaceClasses[surface]} ${paddingClasses[padding]} ${interactiveClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
};
