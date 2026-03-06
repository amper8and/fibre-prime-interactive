/**
 * Type definitions for MTN Fibre Prime Interactive App
 */

export type Category = 
  | 'devices'
  | 'content'
  | 'home-services'
  | 'lifestyle';

export type RoomType = 
  | 'living-room'
  | 'master-bedroom'
  | 'kids-bedroom'
  | 'kitchen'
  | 'home-office'
  | 'patio'
  | 'garage';

export type DeviceStatus = 
  | 'streaming'
  | 'ready'
  | 'active'
  | 'included'
  | 'added';

export interface Device {
  id: string;
  name: string;
  category: Category;
  room: RoomType;
  description: string;
  valueStatement: string;
  priceMonthly: number;
  status: DeviceStatus;
  image?: string;
  bundleEligible: boolean;
  relatedItems?: string[];
  included: string[];
  experiencePreview?: string;
  position?: {
    x: number;
    y: number;
    z: number;
  };
}

export interface Service {
  id: string;
  name: string;
  category: Category;
  description: string;
  priceMonthly: number;
  bundleEligible: boolean;
  features: string[];
}

export interface FibrePlan {
  id: string;
  name: string;
  speed: string;
  priceMonthly: number;
  useCase: string;
  householdFit: string;
  features: string[];
  recommended?: boolean;
}

export interface Room {
  id: RoomType;
  name: string;
  description: string;
  devices: string[];
  icon?: string;
}

export interface BundleItem {
  id: string;
  type: 'device' | 'service';
  name: string;
  priceMonthly: number;
}

export interface Bundle {
  items: BundleItem[];
  fibrePlan: FibrePlan | null;
  totalMonthly: number;
}
