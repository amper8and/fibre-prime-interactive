'use client';

import { useState } from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { CatalogFilterBar } from '@/components/marketplace/CatalogFilterBar';
import { ProductGrid } from '@/components/marketplace/ProductGrid';
import { ProductCard } from '@/components/marketplace/ProductCard';
import { DevicePanel } from '@/components/device/DevicePanel';
import { BundleDrawer } from '@/components/bundle/BundleDrawer';
import { useAppStore } from '@/lib/store/app-store';
import { devices, services } from '@/lib/data/mock-data';
import { Category, Device } from '@/types';

export default function MarketplacePage() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const setSelectedDevice = useAppStore(state => state.setSelectedDevice);
  const selectedDevice = useAppStore(state => state.selectedDevice);

  // Combine devices and services
  const allProducts = [...devices, ...services];

  // Filter by category
  const filteredProducts = selectedCategory === 'all'
    ? allProducts
    : allProducts.filter(p => p.category === selectedCategory);

  const handleSelectProduct = (product: any) => {
    if ('room' in product) {
      // It's a device
      setSelectedDevice(product as Device);
    } else {
      // It's a service - for now, just add to bundle
      // Could implement a service detail modal here
      console.log('Service selected:', product);
    }
  };

  return (
    <AppShell>
      <PageContainer>
        <SectionHeader
          title="Marketplace"
          subtitle="Explore all available devices, services, and bundles for your Fibre Prime home"
        />

        {/* Filter Bar */}
        <div className="mb-8">
          <CatalogFilterBar
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-mtn-grey-text">
            Showing {filteredProducts.length} {selectedCategory === 'all' ? 'products' : 'items'}
          </p>
        </div>

        {/* Product Grid */}
        <ProductGrid>
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={() => handleSelectProduct(product)}
            />
          ))}
        </ProductGrid>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-mtn-grey-text">No products found in this category</p>
          </div>
        )}
      </PageContainer>

      {/* Device Detail Panel */}
      {selectedDevice && <DevicePanel device={selectedDevice} />}

      {/* Bundle Drawer */}
      <BundleDrawer />
    </AppShell>
  );
}
