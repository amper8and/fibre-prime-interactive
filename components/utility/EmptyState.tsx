/**
 * EmptyState Component
 * Displays empty state message
 */

interface EmptyStateProps {
  title: string;
  message: string;
  icon?: React.ReactNode;
}

export function EmptyState({ title, message, icon }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      {icon && <div className="mb-4 text-4xl">{icon}</div>}
      <h3 className="text-xl font-bold text-mtn-black mb-2">{title}</h3>
      <p className="text-mtn-grey-text max-w-md">{message}</p>
    </div>
  );
}
