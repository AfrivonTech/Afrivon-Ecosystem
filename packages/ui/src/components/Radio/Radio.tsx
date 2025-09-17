import { forwardRef, InputHTMLAttributes } from 'react';

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, className = '', ...props }, ref) => (
    <label className="inline-flex items-center gap-2 cursor-pointer">
      <input
        ref={ref}
        type="radio"
        className={`form-radio h-4 w-4 text-primary-700 border-secondary-300 focus:ring-primary-500 ${className}`}
        aria-label={label}
        {...props}
      />
      {label && <span className="text-secondary-900 text-sm">{label}</span>}
    </label>
  )
);
Radio.displayName = 'Radio';
