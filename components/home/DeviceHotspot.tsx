/**
 * DeviceHotspot Component
 * Interactive device hotspot in 3D scene
 */

'use client';

import { motion } from 'framer-motion';
import { Device } from '@/types';
import { useAppStore } from '@/lib/store/app-store';

interface DeviceHotspotProps {
  device: Device;
  position?: { x: number; y: number };
}

export function DeviceHotspot({ device, position }: DeviceHotspotProps) {
  const selectedDevice = useAppStore(state => state.selectedDevice);
  const setSelectedDevice = useAppStore(state => state.setSelectedDevice);

  const isSelected = selectedDevice?.id === device.id;

  return (
    <motion.button
      onClick={() => setSelectedDevice(device)}
      className={`absolute flex flex-col items-center gap-2 group cursor-pointer ${
        isSelected ? 'z-20' : 'z-10'
      }`}
      style={{
        left: position ? `${position.x}%` : '50%',
        top: position ? `${position.y}%` : '50%',
        transform: 'translate(-50%, -50%)',
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Hotspot Circle */}
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
          isSelected
            ? 'bg-mtn-yellow ring-4 ring-mtn-yellow ring-opacity-30'
            : 'bg-white ring-2 ring-mtn-grey-border group-hover:ring-mtn-yellow'
        }`}
      >
        <div className="w-3 h-3 rounded-full bg-mtn-black animate-pulse"></div>
      </div>

      {/* Label */}
      <div
        className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
          isSelected
            ? 'bg-mtn-black text-white'
            : 'bg-white text-mtn-black border border-mtn-grey-border group-hover:border-mtn-yellow'
        }`}
      >
        {device.name}
      </div>

      {/* Pulse Animation */}
      {!isSelected && (
        <div className="absolute inset-0 rounded-full bg-mtn-yellow opacity-0 group-hover:opacity-20 animate-ping"></div>
      )}
    </motion.button>
  );
}
