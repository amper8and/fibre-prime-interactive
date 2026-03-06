'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Wifi, Home, Zap, Shield } from 'lucide-react';

export default function HomePage() {
  const features = [
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'Ultra-Fast Fibre',
      description: 'Up to 500 Mbps speeds powering your entire connected home',
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Smart Home Ready',
      description: 'Connect all your devices seamlessly with premium reliability',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'All-in-One Platform',
      description: 'Devices, content, and services in one monthly package',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Premium Support',
      description: '24/7 customer service and technical assistance',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-yellow-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,203,0,0.5),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,203,0,0.3),transparent_50%)]"></div>
        </div>

        <div className="relative container-app py-20 md:py-32">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-12"
          >
            <div className="w-20 h-12 bg-mtn-yellow rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-mtn-black">MTN</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-mtn-grey-text">MTN</div>
              <div className="text-lg font-bold text-mtn-black">Fibre Prime</div>
            </div>
          </motion.div>

          {/* Hero Content */}
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-mtn-black mb-6 leading-tight"
            >
              Your Home,
              <br />
              <span className="text-mtn-grey-text">Reimagined</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-mtn-grey-text mb-8 leading-relaxed max-w-2xl"
            >
              Explore how MTN Fibre Prime transforms a 3-bedroom Lagos home into a seamlessly connected lifestyle ecosystem.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/experience"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-mtn-yellow text-mtn-black font-bold rounded-xl hover:bg-opacity-90 transition-all shadow-card hover:shadow-panel text-lg"
              >
                Enter the Home
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/marketplace"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-mtn-black font-semibold rounded-xl border-2 border-mtn-grey-border hover:border-mtn-yellow transition-all text-lg"
              >
                View Marketplace
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-20">
        <div className="container-app">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-mtn-black mb-4">
              More Than Just Internet
            </h2>
            <p className="text-lg text-mtn-grey-text max-w-2xl mx-auto">
              MTN Fibre Prime is the operating layer of your modern connected home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-mtn-yellow rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-mtn-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-mtn-grey-text">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-mtn-black py-20">
        <div className="container-app text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience Fibre Prime?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Step into the interactive home and discover how connected living works
          </p>
          <Link
            href="/experience"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-mtn-yellow text-mtn-black font-bold rounded-xl hover:bg-opacity-90 transition-all shadow-card hover:shadow-panel text-lg"
          >
            Start Exploring
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
