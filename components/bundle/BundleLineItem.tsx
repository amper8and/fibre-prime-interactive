/**
 * BundleLineItem Component
 * Single bundle item row
 */

'use client';

import { Trash2 } from 'lucide-react';
import { BundleItem } from '@/types';
import { useAppStore } from '@/lib/store/app-store';
import { formatCurrency } from '@/lib/utils/helpers';

interface BundleLineItemProps {
  item: BundleItem;
}

export function BundleLineItem({ item }: BundleLineItemProps) {
  const removeFromBundle = useAppStore(state => state.removeFromBundle);

  return (
    <div className="bg-white border border-mtn-grey-border rounded-lg p-4 flex items-center justify-between group hover:border-mtn-yellow transition-colors">
      <div className="flex-1">
        <h4 className="font-semibold text-mtn-black">{item.name}</h4>
        <p className="text-sm text-mtn-grey-text capitalize">{item.type}</p>
      </div>
      <div className="flex items-center gap-4">
        <span className="font-bold text-mtn-black">{formatCurrency(item.priceMonthly)}/mo</span>
        <button
          onClick={() => removeFromBundle(item.id)}
          className="p-2 text-mtn-grey-text hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
