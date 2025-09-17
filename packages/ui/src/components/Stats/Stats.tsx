import { forwardRef, HTMLAttributes } from 'react';

export interface StatsProps extends HTMLAttributes<HTMLDivElement> {
  stats: { label: string; value: string | number }[];
}

export const Stats = forwardRef<HTMLDivElement, StatsProps>(
  ({ stats, className = '', ...props }, ref) => (
    <div ref={ref} className={`flex flex-wrap gap-8 ${className}`} {...props}>
      {stats.map((stat, i) => (
        <div key={i} className="flex flex-col items-center">
          <span className="text-2xl font-bold text-primary-700">{stat.value}</span>
          <span className="text-sm text-secondary-700">{stat.label}</span>
        </div>
      ))}
    </div>
  )
);
Stats.displayName = 'Stats';
