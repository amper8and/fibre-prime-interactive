/**
 * ProductCard Component
 * Reusable card for devices and services
 */

'use client';

import { Plus, Check } from 'lucide-react';
import { Device, Service } from '@/types';
import { useAppStore } from '@/lib/store/app-store';
import { formatCurrency, getCategoryDisplayName } from '@/lib/utils/helpers';
import { StatusIndicator } from '../utility/StatusIndicator';

interface ProductCardProps {
  product: Device | Service;
  onSelect: () => void;
}

export function ProductCard({ product, onSelect }: ProductCardProps) {
  const bundleItems = useAppStore(state => state.bundleItems);
  const addToBundle = useAppStore(state => state.addToBundle);

  const isInBundle = bundleItems.some(item => item.id === product.id);
  const isDevice = 'room' in product;

  const handleAddToBundle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isInBundle && product.bundleEligible) {
      addToBundle({
        id: product.id,
        type: isDevice ? 'device' : 'service',
        name: product.name,
        priceMonthly: product.priceMonthly,
      });
    }
  };

  return (
    <div
      onClick={onSelect}
      className="bg-white rounded-xl border border-mtn-grey-border hover:border-mtn-yellow transition-all cursor-pointer group overflow-hidden"
    >
      {/* Image Placeholder */}
      <div className="aspect-video bg-gradient-to-br from-mtn-light-bg to-gray-200 flex items-center justify-center">
        <div className="text-4xl">{isDevice ? '📱' : '⭐'}</div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-medium text-mtn-grey-text uppercase tracking-wide">
            {getCategoryDisplayName(product.category)}
          </span>
          {isDevice && 'status' in product && (
            <StatusIndicator status={product.status} />
          )}
        </div>

        {/* Name */}
        <h3 className="text-lg font-bold text-mtn-black mb-2 group-hover:text-mtn-grey-text transition-colors">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-mtn-grey-text mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <div>
            {product.priceMonthly > 0 ? (
              <>
                <div className="text-xl font-bold text-mtn-black">
                  {formatCurrency(product.priceMonthly)}
                </div>
                <div className="text-xs text-mtn-grey-text">per month</div>
              </>
            ) : (
              <div className="text-sm font-semibold text-green-600">Included</div>
            )}
          </div>

          {product.bundleEligible && (
            <button
              onClick={handleAddToBundle}
              disabled={isInBundle}
              className={`p-2 rounded-lg transition-all ${
                isInBundle
                  ? 'bg-green-600 text-white'
                  : 'bg-mtn-yellow text-mtn-black hover:bg-opacity-90'
              }`}
            >
              {isInBundle ? (
                <Check className="w-5 h-5" />
              ) : (
                <Plus className="w-5 h-5" />
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
