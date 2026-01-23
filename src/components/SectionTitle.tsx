import ScrollAnimationWrapper from './ScrollAnimationWrapper';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  label?: string;
  align?: 'left' | 'center';
}

export default function SectionTitle({
  title,
  subtitle,
  label,
  align = 'center',
}: SectionTitleProps) {
  return (
    <ScrollAnimationWrapper>
      <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : ''}`}>
        {label && (
          <p className="text-[var(--primary)] font-medium tracking-[0.3em] uppercase text-sm mb-4">
            {label}
          </p>
        )}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="gradient-text">{title}</span>
        </h2>
        {subtitle && (
          <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </ScrollAnimationWrapper>
  );
}
