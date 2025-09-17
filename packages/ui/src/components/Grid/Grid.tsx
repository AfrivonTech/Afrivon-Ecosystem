import { forwardRef, HTMLAttributes } from 'react';

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  cols?: number;
}

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ cols = 3, className = '', ...props }, ref) => (
    <div
      ref={ref}
      className={`grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-${cols} ${className}`}
      {...props}
    />
  )
);
Grid.displayName = 'Grid';
