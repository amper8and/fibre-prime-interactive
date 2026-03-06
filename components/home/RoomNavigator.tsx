/**
 * RoomNavigator Component
 * UI for switching between rooms
 */

'use client';

import { RoomType } from '@/types';
import { useAppStore } from '@/lib/store/app-store';
import { getRoomDisplayName, getRoomIcon } from '@/lib/utils/helpers';
import { rooms } from '@/lib/data/mock-data';

export function RoomNavigator() {
  const currentRoom = useAppStore(state => state.currentRoom);
  const setCurrentRoom = useAppStore(state => state.setCurrentRoom);

  return (
    <div className="bg-white rounded-xl shadow-card p-4">
      <h3 className="text-sm font-semibold text-mtn-grey-text mb-3 uppercase tracking-wide">
        Explore Rooms
      </h3>
      <div className="space-y-2">
        {rooms.map(room => {
          const isActive = currentRoom === room.id;
          return (
            <button
              key={room.id}
              onClick={() => setCurrentRoom(room.id)}
              className={`w-full text-left p-3 rounded-lg transition-all flex items-center gap-3 ${
                isActive
                  ? 'bg-mtn-yellow text-mtn-black font-semibold'
                  : 'bg-white hover:bg-mtn-light-bg text-mtn-black'
              }`}
            >
              <span className="text-2xl">{getRoomIcon(room.id)}</span>
              <div className="flex-1">
                <div className="font-medium">{room.name}</div>
                <div className={`text-xs ${isActive ? 'text-mtn-black' : 'text-mtn-grey-text'}`}>
                  {room.devices.length} devices
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
