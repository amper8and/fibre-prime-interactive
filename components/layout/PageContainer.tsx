/**
 * PageContainer Component
 * Standard width and padding wrapper for pages
 */

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function PageContainer({ children, className = '' }: PageContainerProps) {
  return (
    <div className={`container-app py-8 md:py-12 ${className}`}>
      {children}
    </div>
  );
}
