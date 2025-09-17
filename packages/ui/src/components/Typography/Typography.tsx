import { forwardRef, HTMLAttributes } from 'react';

export interface TypographyProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ as = 'p', className = '', ...props }, ref) => {
    const Tag = as;
    return (
      <Tag
        ref={ref as any}
        className={`font-sans text-secondary-900 ${className}`}
        {...props}
      />
    );
  }
);
Typography.displayName = 'Typography';
