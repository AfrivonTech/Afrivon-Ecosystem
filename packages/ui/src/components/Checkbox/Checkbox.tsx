import { forwardRef, InputHTMLAttributes } from 'react';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className = '', ...props }, ref) => (
    <label className="inline-flex items-center gap-2 cursor-pointer">
      <input
        ref={ref}
        type="checkbox"
        className={`form-checkbox h-4 w-4 text-primary-700 border-secondary-300 rounded focus:ring-primary-500 ${className}`}
        aria-label={label}
        {...props}
      />
      {label && <span className="text-secondary-900 text-sm">{label}</span>}
    </label>
  )
);
Checkbox.displayName = 'Checkbox';
