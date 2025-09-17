import { forwardRef, HTMLAttributes } from 'react';

export interface HeroSectionProps extends HTMLAttributes<HTMLElement> {
  headline: string;
  subheadline?: string;
  cta?: React.ReactNode;
}

export const HeroSection = forwardRef<HTMLElement, HeroSectionProps>(
  ({ headline, subheadline, cta, className = '', ...props }, ref) => (
    <section
      ref={ref}
      className={`py-16 text-center bg-primary-50 ${className}`}
      {...props}
    >
      <h2 className="text-4xl font-extrabold text-primary-900 mb-4">{headline}</h2>
      {subheadline && <p className="text-lg text-secondary-700 mb-6">{subheadline}</p>}
      {cta}
    </section>
  )
);
HeroSection.displayName = 'HeroSection';
