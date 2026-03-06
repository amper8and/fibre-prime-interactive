/**
 * DevicePanel Component
 * Side panel showing device details
 */

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Check } from 'lucide-react';
import { Device } from '@/types';
import { useAppStore } from '@/lib/store/app-store';
import { formatCurrency, getCategoryDisplayName } from '@/lib/utils/helpers';
import { StatusIndicator } from '../utility/StatusIndicator';

interface DevicePanelProps {
  device: Device;
}

export function DevicePanel({ device }: DevicePanelProps) {
  const setSelectedDevice = useAppStore(state => state.setSelectedDevice);
  const addToBundle = useAppStore(state => state.addToBundle);
  const bundleItems = useAppStore(state => state.bundleItems);

  const isInBundle = bundleItems.some(item => item.id === device.id);

  const handleAddToBundle = () => {
    if (!isInBundle && device.bundleEligible) {
      addToBundle({
        id: device.id,
        type: 'device',
        name: device.name,
        priceMonthly: device.priceMonthly,
      });
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25 }}
        className="fixed right-0 top-0 h-full w-full max-w-lg bg-white shadow-panel overflow-y-auto z-40"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-mtn-grey-border p-6 flex items-center justify-between">
          <div>
            <span className="text-sm text-mtn-grey-text">{getCategoryDisplayName(device.category)}</span>
            <h2 className="text-2xl font-bold text-mtn-black mt-1">{device.name}</h2>
          </div>
          <button
            onClick={() => setSelectedDevice(null)}
            className="p-2 hover:bg-mtn-light-bg rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Status */}
          <div className="mb-6">
            <StatusIndicator status={device.status} label={device.status} />
          </div>

          {/* Value Statement */}
          <div className="mb-6">
            <p className="text-lg text-mtn-black leading-relaxed">
              {device.valueStatement}
            </p>
          </div>

          {/* Experience Preview */}
          {device.experiencePreview && (
            <div className="mb-6 p-6 bg-mtn-light-bg rounded-xl">
              <h3 className="font-semibold text-mtn-black mb-3">Experience</h3>
              <p className="text-mtn-grey-text">{device.experiencePreview}</p>
            </div>
          )}

          {/* Description */}
          <div className="mb-6">
            <h3 className="font-semibold text-mtn-black mb-3">Description</h3>
            <p className="text-mtn-grey-text">{device.description}</p>
          </div>

          {/* What's Included */}
          {device.included.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold text-mtn-black mb-3">What's Included</h3>
              <ul className="space-y-2">
                {device.included.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-mtn-grey-text">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Pricing */}
          {device.priceMonthly > 0 && (
            <div className="mb-6 p-6 bg-gradient-to-br from-mtn-yellow to-yellow-300 rounded-xl">
              <div className="text-sm text-mtn-black font-medium mb-1">Monthly Payment</div>
              <div className="text-3xl font-bold text-mtn-black">
                {formatCurrency(device.priceMonthly)}
              </div>
              <div className="text-sm text-mtn-black mt-1">per month with Fibre Prime</div>
            </div>
          )}

          {/* CTAs */}
          <div className="space-y-3">
            {device.bundleEligible && (
              <button
                onClick={handleAddToBundle}
                disabled={isInBundle}
                className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
                  isInBundle
                    ? 'bg-green-600 text-white cursor-default'
                    : 'bg-mtn-yellow text-mtn-black hover:bg-opacity-90'
                }`}
              >
                {isInBundle ? (
                  <>
                    <Check className="w-5 h-5" />
                    Added to Bundle
                  </>
                ) : (
                  <>
                    <Plus className="w-5 h-5" />
                    Add to Bundle
                  </>
                )}
              </button>
            )}
            <button
              onClick={() => setSelectedDevice(null)}
              className="w-full py-4 bg-transparent text-mtn-black font-semibold rounded-xl border-2 border-mtn-grey-border hover:bg-mtn-light-bg transition-all"
            >
              Continue Exploring
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
