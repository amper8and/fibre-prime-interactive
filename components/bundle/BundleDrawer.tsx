/**
 * BundleDrawer Component
 * Full bundle management panel
 */

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Package } from 'lucide-react';
import { useAppStore } from '@/lib/store/app-store';
import { formatCurrency } from '@/lib/utils/helpers';
import { BundleLineItem } from './BundleLineItem';
import { FibrePlanSelector } from './FibrePlanSelector';
import { EmptyState } from '../utility/EmptyState';

export function BundleDrawer() {
  const isBundleOpen = useAppStore(state => state.isBundleOpen);
  const setIsBundleOpen = useAppStore(state => state.setIsBundleOpen);
  const bundleItems = useAppStore(state => state.bundleItems);
  const selectedFibrePlan = useAppStore(state => state.selectedFibrePlan);
  const getTotalMonthly = useAppStore(state => state.getTotalMonthly);

  if (!isBundleOpen) return null;

  const total = getTotalMonthly();
  const itemsSubtotal = bundleItems.reduce((sum, item) => sum + item.priceMonthly, 0);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={() => setIsBundleOpen(false)}
      >
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25 }}
          className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-panel overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-mtn-grey-border p-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-mtn-black">Your Bundle</h2>
              <p className="text-sm text-mtn-grey-text mt-1">
                {bundleItems.length} item{bundleItems.length !== 1 ? 's' : ''} selected
              </p>
            </div>
            <button
              onClick={() => setIsBundleOpen(false)}
              className="p-2 hover:bg-mtn-light-bg rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {bundleItems.length === 0 ? (
              <EmptyState
                icon={<Package />}
                title="Your bundle is empty"
                message="Explore devices and services to build your perfect MTN Fibre Prime package"
              />
            ) : (
              <>
                {/* Fibre Plan Selector */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-mtn-black mb-4">
                    Select Your Fibre Plan
                  </h3>
                  <FibrePlanSelector />
                </div>

                {/* Bundle Items */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-mtn-black mb-4">
                    Devices & Services
                  </h3>
                  <div className="space-y-3">
                    {bundleItems.map(item => (
                      <BundleLineItem key={item.id} item={item} />
                    ))}
                  </div>
                </div>

                {/* Summary */}
                <div className="bg-mtn-light-bg rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-semibold text-mtn-black mb-4">
                    Monthly Summary
                  </h3>
                  <div className="space-y-2 text-sm">
                    {selectedFibrePlan && (
                      <div className="flex justify-between">
                        <span className="text-mtn-grey-text">{selectedFibrePlan.name}</span>
                        <span className="font-medium">{formatCurrency(selectedFibrePlan.priceMonthly)}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-mtn-grey-text">Devices & Services</span>
                      <span className="font-medium">{formatCurrency(itemsSubtotal)}</span>
                    </div>
                    <div className="border-t border-mtn-grey-border pt-2 mt-2">
                      <div className="flex justify-between text-lg">
                        <span className="font-bold text-mtn-black">Total Monthly</span>
                        <span className="font-bold text-mtn-black">{formatCurrency(total)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <button className="w-full py-4 bg-mtn-yellow text-mtn-black font-bold rounded-xl hover:bg-opacity-90 transition-all">
                    Check Availability
                  </button>
                  <button 
                    onClick={() => setIsBundleOpen(false)}
                    className="w-full py-4 bg-transparent text-mtn-black font-semibold rounded-xl border-2 border-mtn-grey-border hover:bg-mtn-light-bg transition-all"
                  >
                    Continue Exploring
                  </button>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
