import React from 'react';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 12;
  gap?: 'sm' | 'md' | 'lg';
  align?: 'start' | 'center' | 'stretch';
}

const colClasses: Record<NonNullable<GridProps['cols']>, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  12: 'grid-cols-1 md:grid-cols-12',
};

const gapClasses: Record<NonNullable<GridProps['gap']>, string> = {
  sm: 'gap-4 md:gap-6',
  md: 'gap-6 md:gap-8',
  lg: 'gap-8 md:gap-12',
};

const alignClasses: Record<NonNullable<GridProps['align']>, string> = {
  start: 'items-start',
  center: 'items-center',
  stretch: 'items-stretch',
};

export const Grid: React.FC<GridProps> = ({
  cols = 3,
  gap = 'md',
  align = 'stretch',
  className = '',
  children,
  ...props
}) => {
  return (
    <div
      className={`grid ${colClasses[cols]} ${gapClasses[gap]} ${alignClasses[align]} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
};
