import { forwardRef, ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', className = '', ...props }, ref) => {
    const base =
      'font-bold rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-400 transition-colors duration-150';
    const variants = {
      primary:
        'bg-primary-700 text-white hover:bg-primary-900',
      secondary:
        'border border-secondary-500 text-secondary-900 bg-white hover:bg-secondary-100',
    };
    return (
      <button
        ref={ref}
        className={`${base} ${variants[variant]} ${className}`}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
