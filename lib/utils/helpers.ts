/**
 * Utility functions for MTN Fibre Prime app
 */

/**
 * Format currency in Nigerian Naira
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Get room display name
 */
export function getRoomDisplayName(roomId: string): string {
  const names: Record<string, string> = {
    'living-room': 'Living Room',
    'master-bedroom': 'Master Bedroom',
    'kids-bedroom': 'Kids Bedroom',
    'kitchen': 'Kitchen',
    'home-office': 'Home Office',
    'patio': 'Patio',
    'garage': 'Garage',
  };
  return names[roomId] || roomId;
}

/**
 * Get category display name
 */
export function getCategoryDisplayName(category: string): string {
  const names: Record<string, string> = {
    'devices': 'Devices',
    'content': 'Content & Entertainment',
    'home-services': 'Home Services',
    'lifestyle': 'Lifestyle',
  };
  return names[category] || category;
}

/**
 * Get status color
 */
export function getStatusColor(status: string): string {
  const colors: Record<string, string> = {
    'streaming': '#FFCB00',
    'ready': '#00D4AA',
    'active': '#00A8E8',
    'included': '#666666',
    'added': '#000000',
  };
  return colors[status] || '#666666';
}

/**
 * Truncate text with ellipsis
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length) + '...';
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Calculate bundle savings
 */
export function calculateSavings(items: { priceMonthly: number }[]): number {
  const total = items.reduce((sum, item) => sum + item.priceMonthly, 0);
  // Apply 10% bundle discount
  return Math.round(total * 0.1);
}

/**
 * Get room icon
 */
export function getRoomIcon(roomId: string): string {
  const icons: Record<string, string> = {
    'living-room': '🛋️',
    'master-bedroom': '🛏️',
    'kids-bedroom': '🧸',
    'kitchen': '🍳',
    'home-office': '💼',
    'patio': '🌳',
    'garage': '🚗',
  };
  return icons[roomId] || '🏠';
}
