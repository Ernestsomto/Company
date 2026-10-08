import React from 'react';

export type TextVariant = 'body-lg' | 'body' | 'small' | 'label' | 'code';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: 'p' | 'span' | 'div' | 'code' | 'label';
  variant?: TextVariant;
  tone?: 'primary' | 'secondary' | 'muted' | 'inverse' | 'accent';
  measure?: boolean;
}

const variantClasses: Record<TextVariant, string> = {
  'body-lg': 'text-[length:var(--text-body-lg-size)] leading-[var(--text-body-lg-lh)] font-normal',
  body: 'text-[length:var(--text-body-size)] leading-[var(--text-body-lh)] font-normal',
  small: 'text-[length:var(--text-sm-size)] leading-[var(--text-sm-lh)] font-normal',
  label: 'text-[length:var(--text-xs-size)] leading-[var(--text-xs-lh)] font-medium tracking-[0.02em]',
  code: 'font-mono text-[0.8125rem] leading-[1.5] tabular-nums',
};

const toneClasses: Record<NonNullable<TextProps['tone']>, string> = {
  primary: 'text-[var(--color-text-primary)]',
  secondary: 'text-[var(--color-text-secondary)]',
  muted: 'text-[var(--color-text-muted)]',
  inverse: 'text-[var(--color-text-inverse)]',
  accent: 'text-[var(--color-accent)]',
};

export const Text: React.FC<TextProps> = ({
  as: Component = 'p',
  variant = 'body',
  tone = 'secondary',
  measure = false,
  className = '',
  children,
  ...props
}) => {
  const measureClass = measure ? 'max-w-[68ch]' : '';

  return (
    <Component
      className={`${variantClasses[variant]} ${toneClasses[tone]} ${measureClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
};
