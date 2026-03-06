/**
 * ToastNotification Component
 * Displays success/info messages
 */

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

interface ToastNotificationProps {
  message: string;
}

export function ToastNotification({ message }: ToastNotificationProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <div className="bg-mtn-black text-white px-6 py-4 rounded-lg shadow-panel flex items-center gap-3">
          <CheckCircle className="w-5 h-5 text-mtn-yellow" />
          <span className="font-medium">{message}</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
