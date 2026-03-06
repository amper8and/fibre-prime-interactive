/**
 * RoomScene Component
 * Displays devices in a specific room
 */

'use client';

import { RoomType } from '@/types';
import { devices } from '@/lib/data/mock-data';
import { DeviceHotspot } from './DeviceHotspot';
import { getRoomDisplayName } from '@/lib/utils/helpers';

interface RoomSceneProps {
  roomId: RoomType;
}

export function RoomScene({ roomId }: RoomSceneProps) {
  const roomDevices = devices.filter(d => d.room === roomId);

  // Calculate grid positions for devices
  const getDevicePosition = (index: number, total: number) => {
    const cols = Math.ceil(Math.sqrt(total));
    const row = Math.floor(index / cols);
    const col = index % cols;
    const rows = Math.ceil(total / cols);

    return {
      x: 20 + (col * 60 / cols),
      y: 30 + (row * 40 / rows),
    };
  };

  return (
    <div className="relative w-full h-full min-h-[500px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden">
      {/* Room Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,203,0,0.3),transparent_50%)]"></div>
      </div>

      {/* Room Label */}
      <div className="absolute top-6 left-6 z-10">
        <h2 className="text-2xl font-bold text-mtn-black mb-1">
          {getRoomDisplayName(roomId)}
        </h2>
        <p className="text-sm text-mtn-grey-text">
          {roomDevices.length} device{roomDevices.length !== 1 ? 's' : ''} available
        </p>
      </div>

      {/* Device Hotspots */}
      <div className="absolute inset-0">
        {roomDevices.map((device, index) => (
          <DeviceHotspot
            key={device.id}
            device={device}
            position={getDevicePosition(index, roomDevices.length)}
          />
        ))}
      </div>

      {/* Instruction */}
      {roomDevices.length > 0 && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-white px-4 py-2 rounded-full shadow-card text-sm text-mtn-grey-text">
            Click on any device to explore
          </div>
        </div>
      )}
    </div>
  );
}
