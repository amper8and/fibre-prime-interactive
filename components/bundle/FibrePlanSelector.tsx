/**
 * FibrePlanSelector Component
 * Allows selecting fibre plan in bundle
 */

'use client';

import { Check } from 'lucide-react';
import { useAppStore } from '@/lib/store/app-store';
import { fibrePlans } from '@/lib/data/mock-data';
import { formatCurrency } from '@/lib/utils/helpers';

export function FibrePlanSelector() {
  const selectedFibrePlan = useAppStore(state => state.selectedFibrePlan);
  const setFibrePlan = useAppStore(state => state.setFibrePlan);

  return (
    <div className="space-y-3">
      {fibrePlans.map(plan => {
        const isSelected = selectedFibrePlan?.id === plan.id;
        return (
          <button
            key={plan.id}
            onClick={() => setFibrePlan(plan)}
            className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
              isSelected
                ? 'border-mtn-yellow bg-yellow-50'
                : 'border-mtn-grey-border bg-white hover:border-mtn-yellow'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-mtn-black">{plan.name}</h4>
                  {plan.recommended && (
                    <span className="text-xs px-2 py-1 bg-mtn-yellow text-mtn-black font-semibold rounded-full">
                      Recommended
                    </span>
                  )}
                </div>
                <p className="text-sm text-mtn-grey-text mb-2">{plan.speed} • {plan.useCase}</p>
                <p className="text-lg font-bold text-mtn-black">{formatCurrency(plan.priceMonthly)}/mo</p>
              </div>
              {isSelected && (
                <div className="w-6 h-6 bg-mtn-yellow rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-mtn-black" />
                </div>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}
