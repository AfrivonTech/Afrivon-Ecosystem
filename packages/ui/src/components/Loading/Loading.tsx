import { forwardRef, HTMLAttributes } from 'react';

export interface LoadingProps extends HTMLAttributes<HTMLDivElement> {}

export const Loading = forwardRef<HTMLDivElement, LoadingProps>(
  ({ className = '', ...props }, ref) => (
    <div ref={ref} className={`flex items-center justify-center ${className}`} {...props}>
      <span className="inline-block w-6 h-6 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" aria-label="Loading" />
    </div>
  )
);
Loading.displayName = 'Loading';
