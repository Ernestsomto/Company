import React from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  as?: React.ElementType;
}

const sizeClasses: Record<NonNullable<ContainerProps['size']>, string> = {
  sm: 'max-w-[48rem]',
  md: 'max-w-[64rem]',
  lg: 'max-w-[76rem]',
  xl: 'max-w-[84rem]',
  full: 'max-w-none',
};

export const Container: React.FC<ContainerProps> = ({
  size = 'lg',
  as: Component = 'div',
  className = '',
  children,
  ...props
}) => {
  return (
    <Component
      className={`mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 ${sizeClasses[size]} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
};
