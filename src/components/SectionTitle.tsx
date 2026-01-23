import ScrollAnimationWrapper from './ScrollAnimationWrapper';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionTitle({
  title,
  subtitle,
  align = 'center',
}: SectionTitleProps) {
  return (
    <ScrollAnimationWrapper>
      <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : ''}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
          {title}
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
