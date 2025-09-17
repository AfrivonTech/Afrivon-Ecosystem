import { forwardRef, HTMLAttributes } from 'react';

export interface ServiceCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export const ServiceCard = forwardRef<HTMLDivElement, ServiceCardProps>(
  ({ title, description, icon, className = '', ...props }, ref) => (
    <div
      ref={ref}
      className={`bg-white border border-secondary-100 rounded-lg shadow-sm p-6 flex flex-col items-center text-center ${className}`}
      {...props}
    >
      {icon && <div className="mb-4 text-primary-500">{icon}</div>}
      <h3 className="text-lg font-bold text-primary-900 mb-2">{title}</h3>
      <p className="text-secondary-700 text-sm">{description}</p>
    </div>
  )
);
ServiceCard.displayName = 'ServiceCard';
