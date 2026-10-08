import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'neutral' | 'accent' | 'success' | 'warning' | 'error';
  prefix?: string;
}

/**
 * Reusable Metadata Label / Technical Tag Component
 * Follows strict Zero-Pill discipline: renders clean, unboxed or hairline-accented
 * typographic metadata with explicit text context (never rounded-full candy capsules).
 */
export const Badge: React.FC<BadgeProps> = ({
  tone = 'neutral',
  prefix,
  className = '',
  children,
  ...props
}) => {
  const toneClasses: Record<NonNullable<BadgeProps['tone']>, string> = {
    neutral: 'text-[var(--color-text-muted)]',
    accent: 'text-[var(--color-accent)] font-semibold',
    success: 'text-[var(--color-success)] font-medium',
    warning: 'text-[var(--color-warning)] font-medium',
    error: 'text-[var(--color-error)] font-medium',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs leading-snug tracking-[0.01em] whitespace-nowrap shrink-0 ${toneClasses[tone]} ${className}`.trim()}
      {...props}
    >
      {prefix ? (
        <>
          <span className="font-mono text-[var(--color-text-muted)]">{prefix}</span>
          <span aria-hidden="true" className="text-[var(--color-border-strong)]">
            ·
          </span>
        </>
      ) : null}
      <span>{children}</span>
    </span>
  );
};
