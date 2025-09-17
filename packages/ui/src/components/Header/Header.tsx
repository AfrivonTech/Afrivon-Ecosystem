import { forwardRef, HTMLAttributes } from 'react';

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  title?: string;
}

export const Header = forwardRef<HTMLElement, HeaderProps>(
  ({ title, className = '', ...props }, ref) => (
    <header
      ref={ref}
      className={`w-full py-4 px-6 bg-primary-900 text-white flex items-center justify-between ${className}`}
      {...props}
    >
      {title && <h1 className="text-xl font-bold tracking-tight">{title}</h1>}
    </header>
  )
);
Header.displayName = 'Header';
