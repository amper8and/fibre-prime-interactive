/**
 * MTN Fibre Prime Design System Tokens
 * Centralized design tokens for consistent styling
 */

export const colors = {
  primary: {
    yellow: '#FFCB00',
    black: '#000000',
  },
  neutral: {
    white: '#FFFFFF',
    lightBg: '#F8F8F8',
    greyBorder: '#E5E5E5',
    greyText: '#666666',
  },
} as const;

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  '2xl': '32px',
  '3xl': '48px',
  '4xl': '64px',
} as const;

export const radius = {
  small: '8px',
  medium: '12px',
  large: '16px',
  xlarge: '24px',
} as const;

export const shadows = {
  subtle: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
  card: '0 2px 8px 0 rgba(0, 0, 0, 0.08)',
  panel: '0 4px 12px 0 rgba(0, 0, 0, 0.1)',
} as const;

export const typography = {
  display: {
    fontSize: '3rem',
    fontWeight: '700',
    lineHeight: '1.2',
  },
  h1: {
    fontSize: '2.5rem',
    fontWeight: '700',
    lineHeight: '1.2',
  },
  h2: {
    fontSize: '2rem',
    fontWeight: '700',
    lineHeight: '1.3',
  },
  h3: {
    fontSize: '1.5rem',
    fontWeight: '600',
    lineHeight: '1.4',
  },
  body: {
    fontSize: '1rem',
    fontWeight: '400',
    lineHeight: '1.6',
  },
  caption: {
    fontSize: '0.875rem',
    fontWeight: '300',
    lineHeight: '1.5',
  },
} as const;

export const breakpoints = {
  mobile: '640px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1280px',
} as const;

export const animation = {
  duration: {
    fast: '150ms',
    normal: '250ms',
    slow: '350ms',
  },
  easing: {
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
    spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
} as const;
