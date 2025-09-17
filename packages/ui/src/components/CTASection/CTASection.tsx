import { forwardRef, HTMLAttributes } from 'react';

export interface CTASectionProps extends HTMLAttributes<HTMLElement> {
  headline: string;
  cta: React.ReactNode;
}

export const CTASection = forwardRef<HTMLElement, CTASectionProps>(
  ({ headline, cta, className = '', ...props }, ref) => (
    <section
      ref={ref}
      className={`py-12 px-4 text-center bg-accent-400 text-white rounded-lg ${className}`}
      {...props}
    >
      <h2 className="text-2xl font-bold mb-4">{headline}</h2>
      <div>{cta}</div>
    </section>
  )
);
CTASection.displayName = 'CTASection';
