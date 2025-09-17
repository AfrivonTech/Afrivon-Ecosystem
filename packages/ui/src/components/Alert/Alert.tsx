import { forwardRef, HTMLAttributes } from 'react';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  type?: 'success' | 'warning' | 'error' | 'info';
  message: string;
}

const typeStyles = {
  success: 'bg-success text-white',
  warning: 'bg-warning text-white',
  error: 'bg-error text-white',
  info: 'bg-primary-500 text-white',
};

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ type = 'info', message, className = '', ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={`rounded px-4 py-3 font-medium ${typeStyles[type]} ${className}`}
      {...props}
    >
      {message}
    </div>
  )
);
Alert.displayName = 'Alert';
