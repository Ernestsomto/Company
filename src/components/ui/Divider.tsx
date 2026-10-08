import React from 'react';

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  tone?: 'subtle' | 'strong' | 'accent';
  spacing?: 'none' | 'sm' | 'md' | 'lg';
}

const toneClasses: Record<NonNullable<DividerProps['tone']>, string> = {
  subtle: 'border-[var(--color-border)]',
  strong: 'border-[var(--color-border-strong)]',
  accent: 'border-[var(--color-accent)]',
};

const spacingClasses: Record<NonNullable<DividerProps['spacing']>, string> = {
  none: 'my-0',
  sm: 'my-4',
  md: 'my-8',
  lg: 'my-12',
};

export const Divider: React.FC<DividerProps> = ({
  tone = 'subtle',
  spacing = 'none',
  className = '',
  ...props
}) => {
  return (
    <hr
      className={`border-0 border-t ${toneClasses[tone]} ${spacingClasses[spacing]} ${className}`.trim()}
      {...props}
    />
  );
};
