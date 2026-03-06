'use client';

import Link from 'next/link';
import { ArrowRight, Home, Smartphone, Tv, Zap, Shield, Headphones } from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { PageContainer } from '@/components/layout/PageContainer';
import { BundleDrawer } from '@/components/bundle/BundleDrawer';

export default function AboutPage() {
  return (
    <AppShell>
      <PageContainer>
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-mtn-black mb-4">
            About MTN Fibre Prime
          </h1>
          <p className="text-xl text-mtn-grey-text max-w-3xl mx-auto">
            MTN Fibre Prime is not just internet. It's the operating layer of the modern connected home.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-mtn-black mb-6">
              The Connected Home Platform
            </h2>
            <div className="space-y-4 text-lg text-mtn-grey-text">
              <p>
                MTN Fibre Prime transforms your home into a seamlessly connected lifestyle ecosystem.
                Instead of explaining services individually, we show you how everything works together
                in a real home environment.
              </p>
              <p>
                Explore a 3-bedroom Lagos home and discover how Fibre Prime powers devices,
                entertainment, security, energy management, and daily conveniences—all through
                one reliable connection.
              </p>
              <p>
                From streaming your favorite shows in 4K to managing your home's climate remotely,
                from securing your property with smart cameras to powering your electric vehicle—
                Fibre Prime is the foundation that makes it all possible.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-mtn-black mb-8 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Explore the Home',
                description: 'Navigate through different rooms and discover connected devices and services in context',
                icon: <Home className="w-8 h-8" />,
              },
              {
                step: '2',
                title: 'Interact with Devices',
                description: 'Click on any device to see how it works, what\'s included, and monthly pricing',
                icon: <Smartphone className="w-8 h-8" />,
              },
              {
                step: '3',
                title: 'Build Your Bundle',
                description: 'Add devices and services to create your perfect monthly package',
                icon: <Tv className="w-8 h-8" />,
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-mtn-yellow rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <div className="text-sm font-bold text-mtn-grey-text mb-2">
                  STEP {item.step}
                </div>
                <h3 className="text-xl font-bold text-mtn-black mb-3">
                  {item.title}
                </h3>
                <p className="text-mtn-grey-text">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <div className="bg-mtn-black rounded-2xl p-8 md:p-12 mb-12 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Choose Fibre Prime?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Ultra-Fast Speeds',
                description: 'Up to 500 Mbps for seamless streaming, gaming, and working',
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: '99.9% Uptime',
                description: 'Enterprise-grade reliability you can count on',
              },
              {
                icon: <Headphones className="w-8 h-8" />,
                title: '24/7 Support',
                description: 'Premium customer service whenever you need it',
              },
              {
                icon: <Home className="w-8 h-8" />,
                title: 'All-in-One',
                description: 'Devices, content, and services in one package',
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: 'Easy Management',
                description: 'Control everything from your mobile device',
              },
              {
                icon: <Tv className="w-8 h-8" />,
                title: 'Premium Content',
                description: 'Access to Netflix, Showmax, YouTube Premium, and more',
              },
            ].map((benefit, index) => (
              <div key={index}>
                <div className="w-12 h-12 bg-mtn-yellow rounded-xl flex items-center justify-center mb-4">
                  <div className="text-mtn-black">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-mtn-black mb-4">
            Ready to Experience Fibre Prime?
          </h2>
          <p className="text-lg text-mtn-grey-text mb-8 max-w-2xl mx-auto">
            Step into the interactive home and see how connected living transforms everyday life
          </p>
          <Link
            href="/experience"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-mtn-yellow text-mtn-black font-bold rounded-xl hover:bg-opacity-90 transition-all shadow-card hover:shadow-panel text-lg"
          >
            Enter the Interactive Home
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </PageContainer>

      {/* Bundle Drawer */}
      <BundleDrawer />
    </AppShell>
  );
}
