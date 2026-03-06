/**
 * BundleWidget Component
 * Persistent floating bundle summary
 */

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ChevronUp } from 'lucide-react';
import { useAppStore } from '@/lib/store/app-store';
import { formatCurrency } from '@/lib/utils/helpers';

export function BundleWidget() {
  const bundleItems = useAppStore(state => state.bundleItems);
  const setIsBundleOpen = useAppStore(state => state.setIsBundleOpen);
  const getTotalMonthly = useAppStore(state => state.getTotalMonthly);

  if (bundleItems.length === 0) return null;

  const total = getTotalMonthly();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-8 right-8 z-40"
      >
        <button
          onClick={() => setIsBundleOpen(true)}
          className="bg-mtn-black text-white px-6 py-4 rounded-2xl shadow-panel hover:shadow-lg transition-all flex items-center gap-4"
        >
          <div className="relative">
            <ShoppingBag className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 w-5 h-5 bg-mtn-yellow text-mtn-black text-xs font-bold rounded-full flex items-center justify-center">
              {bundleItems.length}
            </span>
          </div>
          <div className="text-left">
            <div className="text-xs text-gray-400">Your Bundle</div>
            <div className="text-lg font-bold">{formatCurrency(total)}/mo</div>
          </div>
          <ChevronUp className="w-5 h-5" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
