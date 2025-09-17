import { forwardRef, HTMLAttributes } from 'react';

export interface FeatureListProps extends HTMLAttributes<HTMLUListElement> {
  features: string[];
}

export const FeatureList = forwardRef<HTMLUListElement, FeatureListProps>(
  ({ features, className = '', ...props }, ref) => (
    <ul ref={ref} className={`space-y-2 ${className}`} {...props}>
      {features.map((feature, i) => (
        <li key={i} className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-primary-500 rounded-full" aria-hidden="true" />
          <span className="text-secondary-900 text-sm">{feature}</span>
        </li>
      ))}
    </ul>
  )
);
FeatureList.displayName = 'FeatureList';
