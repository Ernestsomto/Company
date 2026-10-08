import React from 'react';

export type HeadingVariant = 'display' | 'h1' | 'h2' | 'h3' | 'h4';
export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div' | 'span';

export interface HeadingProps extends React.HTMLAttributes<HTMLElement> {
  as?: HeadingTag;
  variant?: HeadingVariant;
  tone?: 'primary' | 'secondary' | 'inverse' | 'accent';
  balance?: boolean;
}

const variantClasses: Record<HeadingVariant, string> = {
  display:
    'text-[length:var(--text-display-size)] leading-[var(--text-display-lh)] tracking-[var(--text-display-tracking)] font-semibold',
  h1: 'text-[length:var(--text-h1-size)] leading-[var(--text-h1-lh)] tracking-[var(--text-h1-tracking)] font-semibold',
  h2: 'text-[length:var(--text-h2-size)] leading-[var(--text-h2-lh)] tracking-[var(--text-h2-tracking)] font-semibold',
  h3: 'text-[length:var(--text-h3-size)] leading-[var(--text-h3-lh)] tracking-[var(--text-h3-tracking)] font-semibold',
  h4: 'text-[length:var(--text-h4-size)] leading-[var(--text-h4-lh)] tracking-[var(--text-h4-tracking)] font-semibold',
};

const toneClasses: Record<NonNullable<HeadingProps['tone']>, string> = {
  primary: 'text-[var(--color-text-primary)]',
  secondary: 'text-[var(--color-text-secondary)]',
  inverse: 'text-[var(--color-text-inverse)]',
  accent: 'text-[var(--color-accent)]',
};

const defaultTagMap: Record<HeadingVariant, HeadingTag> = {
  display: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
};

export const Heading: React.FC<HeadingProps> = ({
  as,
  variant = 'h2',
  tone = 'primary',
  balance = true,
  className = '',
  children,
  ...props
}) => {
  const Tag = as || defaultTagMap[variant];
  const balanceClass = balance ? '[text-wrap:balance]' : '';

  return (
    <Tag
      className={`${variantClasses[variant]} ${toneClasses[tone]} ${balanceClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </Tag>
  );
};
