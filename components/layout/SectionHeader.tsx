/**
 * SectionHeader Component
 * Reusable heading block for pages and sections
 */

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ title, subtitle, className = '' }: SectionHeaderProps) {
  return (
    <div className={`mb-8 ${className}`}>
      <h1 className="text-3xl md:text-4xl font-bold text-mtn-black mb-2">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg text-mtn-grey-text">
          {subtitle}
        </p>
      )}
    </div>
  );
}
