/**
 * TopNav Component
 * Global navigation bar with MTN branding
 */

'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useAppStore } from '@/lib/store/app-store';

export function TopNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const bundleItems = useAppStore(state => state.bundleItems);
  const setIsBundleOpen = useAppStore(state => state.setIsBundleOpen);

  const navLinks = [
    { href: '/experience', label: 'Interactive Home' },
    { href: '/marketplace', label: 'Marketplace' },
    { href: '/plans', label: 'Fibre Plans' },
    { href: '/about', label: 'About' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-mtn-grey-border">
      <div className="container-app">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-16 h-10 bg-mtn-yellow rounded-full flex items-center justify-center">
              <span className="text-xl font-bold text-mtn-black">MTN</span>
            </div>
            <span className="text-sm font-semibold text-mtn-black hidden md:block">
              Fibre Prime
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-mtn-black hover:text-mtn-grey-text transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA and Bundle */}
          <div className="flex items-center gap-4">
            {/* Bundle Icon */}
            <button
              onClick={() => setIsBundleOpen(true)}
              className="relative p-2 hover:bg-mtn-light-bg rounded-lg transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              {bundleItems.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-mtn-yellow text-mtn-black text-xs font-bold rounded-full flex items-center justify-center">
                  {bundleItems.length}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-mtn-light-bg rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Desktop CTA */}
            <Link
              href="/experience"
              className="hidden md:block px-6 py-2 bg-mtn-yellow text-mtn-black font-semibold rounded-lg hover:bg-opacity-90 transition-all"
            >
              Enter the Home
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-mtn-grey-border">
            <div className="flex flex-col gap-4">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-mtn-black hover:text-mtn-grey-text transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/experience"
                className="px-6 py-3 bg-mtn-yellow text-mtn-black font-semibold rounded-lg hover:bg-opacity-90 transition-all text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Enter the Home
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
