'use client';

import { useState, useEffect } from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { RoomNavigator } from '@/components/home/RoomNavigator';
import { RoomScene } from '@/components/home/RoomScene';
import { DevicePanel } from '@/components/device/DevicePanel';
import { BundleDrawer } from '@/components/bundle/BundleDrawer';
import { useAppStore } from '@/lib/store/app-store';
import { rooms } from '@/lib/data/mock-data';

export default function ExperiencePage() {
  const currentRoom = useAppStore(state => state.currentRoom);
  const setCurrentRoom = useAppStore(state => state.setCurrentRoom);
  const selectedDevice = useAppStore(state => state.selectedDevice);

  // Set default room on mount
  useEffect(() => {
    if (!currentRoom) {
      setCurrentRoom('living-room');
    }
  }, [currentRoom, setCurrentRoom]);

  return (
    <AppShell>
      <div className="min-h-screen bg-mtn-light-bg">
        <div className="container-app py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-mtn-black mb-2">
              Interactive Home Experience
            </h1>
            <p className="text-lg text-mtn-grey-text">
              Explore every room and discover how MTN Fibre Prime powers your connected lifestyle
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Room Navigator */}
            <div className="lg:col-span-1">
              <RoomNavigator />
            </div>

            {/* Room Scene */}
            <div className="lg:col-span-3">
              {currentRoom ? (
                <RoomScene roomId={currentRoom} />
              ) : (
                <div className="bg-white rounded-2xl p-12 text-center">
                  <p className="text-mtn-grey-text">Select a room to begin exploring</p>
                </div>
              )}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-mtn-black mb-2">{rooms.length}</div>
              <div className="text-sm text-mtn-grey-text">Rooms to Explore</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-mtn-black mb-2">25+</div>
              <div className="text-sm text-mtn-grey-text">Connected Devices</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-mtn-black mb-2">1</div>
              <div className="text-sm text-mtn-grey-text">Seamless Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Device Detail Panel */}
      {selectedDevice && <DevicePanel device={selectedDevice} />}

      {/* Bundle Drawer */}
      <BundleDrawer />
    </AppShell>
  );
}
