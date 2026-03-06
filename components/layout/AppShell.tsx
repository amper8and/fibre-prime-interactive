/**
 * AppShell Component
 * Main layout wrapper for the entire application
 */

'use client';

import { TopNav } from './TopNav';
import { BundleWidget } from '../bundle/BundleWidget';
import { ToastNotification } from '../utility/ToastNotification';
import { useAppStore } from '@/lib/store/app-store';

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const showToast = useAppStore(state => state.showToast);
  const toastMessage = useAppStore(state => state.toastMessage);

  return (
    <div className="min-h-screen bg-mtn-light-bg">
      <TopNav />
      <main className="relative">
        {children}
      </main>
      <BundleWidget />
      {showToast && <ToastNotification message={toastMessage} />}
    </div>
  );
}
