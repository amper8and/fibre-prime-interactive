/**
 * CatalogFilterBar Component
 * Category filtering for marketplace
 */

'use client';

import { Category } from '@/types';
import { getCategoryDisplayName } from '@/lib/utils/helpers';

interface CatalogFilterBarProps {
  selectedCategory: Category | 'all';
  onSelectCategory: (category: Category | 'all') => void;
}

const categories: (Category | 'all')[] = [
  'all',
  'devices',
  'content',
  'home-services',
  'lifestyle',
];

export function CatalogFilterBar({ selectedCategory, onSelectCategory }: CatalogFilterBarProps) {
  return (
    <div className="flex items-center gap-3 overflow-x-auto pb-2">
      {categories.map(category => {
        const isSelected = selectedCategory === category;
        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
              isSelected
                ? 'bg-mtn-yellow text-mtn-black'
                : 'bg-white text-mtn-grey-text border border-mtn-grey-border hover:border-mtn-yellow'
            }`}
          >
            {category === 'all' ? 'All Products' : getCategoryDisplayName(category)}
          </button>
        );
      })}
    </div>
  );
}
