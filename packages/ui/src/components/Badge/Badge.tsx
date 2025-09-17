import { forwardRef, HTMLAttributes } from 'react';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  color?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error';
}

const colorMap = {
  primary: 'bg-primary-500 text-white',
  secondary: 'bg-secondary-500 text-white',
  accent: 'bg-accent-400 text-white',
  success: 'bg-success text-white',
  warning: 'bg-warning text-white',
  error: 'bg-error text-white',
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ color = 'primary', className = '', ...props }, ref) => (
    <span
      ref={ref}
      className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${colorMap[color]} ${className}`}
      {...props}
    />
  )
);
Badge.displayName = 'Badge';
