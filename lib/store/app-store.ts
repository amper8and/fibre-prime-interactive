/**
 * Global state management for MTN Fibre Prime Interactive App
 * Using Zustand for clean, predictable state
 */

import { create } from 'zustand';
import { Device, FibrePlan, BundleItem, RoomType } from '@/types';

interface AppState {
  // Navigation
  currentRoom: RoomType | null;
  setCurrentRoom: (room: RoomType | null) => void;

  // Device interaction
  selectedDevice: Device | null;
  setSelectedDevice: (device: Device | null) => void;

  // Bundle
  bundleItems: BundleItem[];
  selectedFibrePlan: FibrePlan | null;
  addToBund le: (item: BundleItem) => void;
  removeFromBundle: (itemId: string) => void;
  setFibrePlan: (plan: FibrePlan) => void;
  getTotalMonthly: () => number;

  // UI state
  isBundleOpen: boolean;
  setIsBundleOpen: (isOpen: boolean) => void;
  showToast: boolean;
  toastMessage: string;
  triggerToast: (message: string) => void;
}

export const useAppStore = create<AppState>((set, get) => ({
  // Navigation
  currentRoom: null,
  setCurrentRoom: (room) => set({ currentRoom: room }),

  // Device interaction
  selectedDevice: null,
  setSelectedDevice: (device) => set({ selectedDevice: device }),

  // Bundle
  bundleItems: [],
  selectedFibrePlan: null,
  
  addToBundle: (item) => {
    const { bundleItems } = get();
    // Check if item already exists
    const exists = bundleItems.some(i => i.id === item.id);
    if (!exists) {
      set({ bundleItems: [...bundleItems, item] });
      get().triggerToast(`${item.name} added to bundle`);
    }
  },

  removeFromBundle: (itemId) => {
    const { bundleItems } = get();
    set({ bundleItems: bundleItems.filter(item => item.id !== itemId) });
  },

  setFibrePlan: (plan) => set({ selectedFibrePlan: plan }),

  getTotalMonthly: () => {
    const { bundleItems, selectedFibrePlan } = get();
    const itemsTotal = bundleItems.reduce((sum, item) => sum + item.priceMonthly, 0);
    const fibreTotal = selectedFibrePlan?.priceMonthly || 0;
    return itemsTotal + fibreTotal;
  },

  // UI state
  isBundleOpen: false,
  setIsBundleOpen: (isOpen) => set({ isBundleOpen: isOpen }),
  
  showToast: false,
  toastMessage: '',
  triggerToast: (message) => {
    set({ showToast: true, toastMessage: message });
    setTimeout(() => set({ showToast: false, toastMessage: '' }), 3000);
  },
}));
