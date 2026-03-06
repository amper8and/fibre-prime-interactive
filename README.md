# MTN Fibre Prime - Interactive Home Experience

A modern, interactive web application showcasing how MTN Fibre Prime transforms a Lagos home into a connected lifestyle ecosystem.

## 🎯 Project Overview

**Product Type**: Interactive web experience demonstrating connected home ecosystem  
**Tech Stack**: Next.js 16, React, TypeScript, Tailwind CSS, Framer Motion, Three.js/React Three Fiber, Zustand  
**Deployment**: Optimized for Vercel/Netlify  
**Repository**: https://github.com/amper8and/fibre-prime-interactive

## ✨ Features

### Currently Implemented

1. **Landing Page**
   - Hero section with MTN branding
   - Feature highlights
   - Call-to-action flows

2. **Interactive Home Experience**
   - 7 explorable rooms (Living Room, Master Bedroom, Kids Bedroom, Kitchen, Home Office, Patio, Garage)
   - 25+ connected devices with interactive hotspots
   - Room navigation with visual indicators
   - Device detail panels with:
     - Product descriptions
     - Experience previews
     - What's included
     - Monthly pricing
     - Add to bundle functionality

3. **Marketplace**
   - Complete catalog of devices and services
   - Category filtering (Devices, Content, Home Services, Lifestyle)
   - Product cards with quick-add functionality
   - Consistent detail view system

4. **Fibre Plans**
   - 4 fibre plans (Lite, Basic, Prime, Ultra)
   - Speed and pricing comparisons
   - Household fit recommendations
   - Feature lists
   - Plan selection for bundle

5. **Bundle Builder**
   - Persistent floating bundle widget
   - Full bundle drawer with:
     - Fibre plan selector
     - Device/service line items
     - Monthly cost calculator
     - Remove items functionality
     - Continue exploring flow

6. **About Page**
   - Platform explanation
   - How it works guide
   - Key benefits showcase

### Functional Entry URIs

- **`/`** - Landing page with hero and feature overview
- **`/experience`** - Interactive home exploration (main feature)
- **`/marketplace`** - Full product catalog with filtering
- **`/plans`** - Fibre plan comparison and selection
- **`/about`** - Platform information and benefits

### Key Interactions

1. **Device Exploration Flow**:
   - Select room → Click device hotspot → View detail panel → Add to bundle → Continue exploring

2. **Bundle Building Flow**:
   - Add items from experience or marketplace → View bundle widget → Open full bundle → Select fibre plan → See total monthly cost

3. **Navigation Flow**:
   - Persistent top navigation with bundle indicator
   - Room-based navigation in experience
   - Category filtering in marketplace

## 📊 Data Models

### Current Data Structure

**Devices** (25+ items):
- Living Room: Smart TV, Gaming Console, Streaming Box, Smart Speaker, Robot Vacuum
- Master Bedroom: Smart Lighting, Smart Thermostat, Smart Curtains
- Kids Bedroom: Gaming Device, Kids Speaker, Study Setup
- Kitchen: Smart Fridge, Meal Delivery
- Home Office: Fibre Setup, Video Conferencing
- Patio: Outdoor Speakers, Baby Monitor
- Garage: Solar Installation, EV Charging, Security Camera

**Services** (3 categories):
- Streaming Bundle, Cloud Storage, Home Security

**Fibre Plans** (4 tiers):
- Lite (50 Mbps, ₦15,000/mo)
- Basic (100 Mbps, ₦25,000/mo, Recommended)
- Prime (250 Mbps, ₦45,000/mo)
- Ultra (500 Mbps, ₦75,000/mo)

### Storage Services

Currently using local mock data. Architecture supports:
- Cloudflare D1 (SQLite) for relational data
- Cloudflare KV for key-value storage
- Cloudflare R2 for media assets

## 🎨 Design System

### Brand Colors
- **Primary Yellow**: `#FFCB00`
- **Primary Black**: `#000000`
- **White**: `#FFFFFF`
- **Light Background**: `#F8F8F8`
- **Grey Border**: `#E5E5E5`
- **Grey Text**: `#666666`

### Typography
- **Font**: MTN Brighter Sans (Regular, Light, Bold)
- Fallback: Arial, Helvetica, sans-serif

### Component Library

**Layout Components**:
- `AppShell` - Main wrapper with navigation
- `TopNav` - Global navigation bar
- `PageContainer` - Standard page wrapper
- `SectionHeader` - Page/section headings

**Home Experience Components**:
- `RoomNavigator` - Room selection UI
- `RoomScene` - Device display for each room
- `DeviceHotspot` - Interactive device markers

**Device Components**:
- `DevicePanel` - Detailed device information
- `StatusIndicator` - Device status badges

**Bundle Components**:
- `BundleWidget` - Floating bundle summary
- `BundleDrawer` - Full bundle management
- `BundleLineItem` - Individual bundle items
- `FibrePlanSelector` - Plan selection UI

**Marketplace Components**:
- `ProductCard` - Reusable product cards
- `ProductGrid` - Responsive grid layout
- `CatalogFilterBar` - Category filtering

**Utility Components**:
- `ToastNotification` - Success messages
- `LoadingState` - Loading indicators
- `EmptyState` - Empty state messages
- `StatusIndicator` - Status badges

## 🚀 Development

### Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm start
```

### Environment

No environment variables required for current implementation. Mock data is used throughout.

### State Management

Using Zustand for global state:
- Room navigation
- Device selection
- Bundle management
- UI state (modals, toasts)

## 📦 Deployment Status

**Platform**: Ready for Vercel/Netlify deployment  
**Build Status**: ✅ Successful  
**Bundle Size**: Optimized with Next.js 16  
**Static Generation**: All pages pre-rendered

### Deployment Commands

```bash
# Vercel
vercel

# Netlify
netlify deploy --prod

# Manual build
npm run build && npm start
```

## 🎯 Recommended Next Steps

### Priority 1: Visual Enhancements
1. Add MTN logo SVG from hub files
2. Download and integrate MTN Brighter Sans font files
3. Add device images/icons for better visual appeal
4. Enhance room scenes with gradients or subtle backgrounds

### Priority 2: Experience Improvements
1. Add smooth transitions between rooms
2. Implement 3D room visualization (optional, using Three.js)
3. Add device animations on interaction
4. Create video/animation previews for experience simulation

### Priority 3: Data Integration
1. Set up Cloudflare D1 database for devices/services
2. Create API routes for dynamic data fetching
3. Implement user preference persistence
4. Add analytics tracking

### Priority 4: Advanced Features
1. Bundle comparison tool
2. Savings calculator
3. Installation availability checker
4. Quote generation and download
5. Social sharing functionality

### Priority 5: Mobile Optimization
1. Simplified room navigation for mobile
2. Touch-optimized device interactions
3. Bottom sheet device panels
4. Swipe gestures for room switching

## 📱 User Guide

### How to Use the Application

1. **Start at Home**: Land on the homepage to understand the platform
2. **Enter the Interactive Home**: Click "Enter the Home" to begin exploration
3. **Navigate Rooms**: Use the left sidebar to switch between 7 different rooms
4. **Explore Devices**: Click on device hotspots to see details, pricing, and features
5. **Build Your Bundle**: Add devices you like to your bundle using the "Add to Bundle" button
6. **Select a Plan**: Choose a fibre plan that fits your needs from the Plans page
7. **Review Bundle**: Click the floating bundle widget to see your total monthly cost
8. **Browse Marketplace**: Visit the marketplace to see all available products at once

## 🛠️ Technical Architecture

### File Structure

```
webapp/
├── app/
│   ├── page.tsx              # Landing page
│   ├── experience/page.tsx   # Interactive home
│   ├── marketplace/page.tsx  # Product catalog
│   ├── plans/page.tsx        # Fibre plans
│   ├── about/page.tsx        # About platform
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── layout/               # Layout components
│   ├── home/                 # Home experience components
│   ├── device/               # Device detail components
│   ├── bundle/               # Bundle management components
│   ├── marketplace/          # Marketplace components
│   └── utility/              # Utility components
├── lib/
│   ├── store/                # Zustand state management
│   ├── data/                 # Mock data
│   ├── utils/                # Helper functions
│   └── design-tokens.ts      # Design system tokens
└── types/
    └── index.ts              # TypeScript interfaces
```

### Performance

- Static generation for all pages
- Lazy loading for components
- Optimized bundle with code splitting
- Fast interaction with Framer Motion

## 📄 License

MTN Proprietary - Internal Product Demo

## 👥 Project Information

**Built for**: MTN Nigeria Fibre Prime  
**Purpose**: Interactive product demonstration  
**Target Audience**: Potential customers, stakeholders, partners  
**Last Updated**: March 2026
