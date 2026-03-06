/**
 * StatusIndicator Component
 * Small status badge for devices
 */

import { getStatusColor } from '@/lib/utils/helpers';

interface StatusIndicatorProps {
  status: string;
  label?: string;
}

export function StatusIndicator({ status, label }: StatusIndicatorProps) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mtn-light-bg">
      <div
        className="w-2 h-2 rounded-full"
        style={{ backgroundColor: getStatusColor(status) }}
      />
      {label && <span className="text-xs font-medium text-mtn-black">{label}</span>}
    </div>
  );
}
