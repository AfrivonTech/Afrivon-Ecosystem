import { forwardRef, InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className = '', ...props }, ref) => (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-secondary-700">{label}</label>
      )}
      <input
        ref={ref}
        className={`border border-secondary-100 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 ${className}`}
        aria-label={label}
        {...props}
      />
    </div>
  )
);
Input.displayName = 'Input';
