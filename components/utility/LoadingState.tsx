/**
 * LoadingState Component
 * Displays loading spinner
 */

export function LoadingState({ message = 'Loading...' }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="w-12 h-12 border-4 border-mtn-grey-border border-t-mtn-yellow rounded-full animate-spin"></div>
      <p className="mt-4 text-mtn-grey-text">{message}</p>
    </div>
  );
}
