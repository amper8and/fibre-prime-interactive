'use client';

import { Check, Zap } from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { BundleDrawer } from '@/components/bundle/BundleDrawer';
import { useAppStore } from '@/lib/store/app-store';
import { fibrePlans } from '@/lib/data/mock-data';
import { formatCurrency } from '@/lib/utils/helpers';
import { FibrePlan } from '@/types';

export default function PlansPage() {
  const selectedFibrePlan = useAppStore(state => state.selectedFibrePlan);
  const setFibrePlan = useAppStore(state => state.setFibrePlan);

  const handleSelectPlan = (plan: FibrePlan) => {
    setFibrePlan(plan);
  };

  return (
    <AppShell>
      <PageContainer>
        <SectionHeader
          title="Fibre Plans"
          subtitle="Choose the perfect plan for your household's connectivity needs"
        />

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {fibrePlans.map(plan => {
            const isSelected = selectedFibrePlan?.id === plan.id;
            return (
              <div
                key={plan.id}
                className={`bg-white rounded-2xl p-6 border-2 transition-all relative ${
                  isSelected
                    ? 'border-mtn-yellow shadow-panel'
                    : 'border-mtn-grey-border hover:border-mtn-yellow'
                } ${plan.recommended ? 'ring-2 ring-mtn-yellow ring-offset-4' : ''}`}
              >
                {/* Recommended Badge */}
                {plan.recommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-mtn-yellow text-mtn-black text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      RECOMMENDED
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-mtn-black mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-4xl font-bold text-mtn-black mb-1">
                    {plan.speed}
                  </div>
                  <div className="text-mtn-grey-text text-sm mb-4">
                    {plan.useCase}
                  </div>
                  <div className="text-3xl font-bold text-mtn-black">
                    {formatCurrency(plan.priceMonthly)}
                  </div>
                  <div className="text-sm text-mtn-grey-text">per month</div>
                </div>

                {/* Household Fit */}
                <div className="mb-6 p-3 bg-mtn-light-bg rounded-lg">
                  <div className="text-xs text-mtn-grey-text font-semibold mb-1 uppercase">
                    Best For
                  </div>
                  <div className="text-sm text-mtn-black">
                    {plan.householdFit}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-mtn-grey-text">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={() => handleSelectPlan(plan)}
                  className={`w-full py-3 rounded-xl font-bold transition-all ${
                    isSelected
                      ? 'bg-green-600 text-white'
                      : 'bg-mtn-yellow text-mtn-black hover:bg-opacity-90'
                  }`}
                >
                  {isSelected ? 'Selected' : 'Select Plan'}
                </button>
              </div>
            );
          })}
        </div>

        {/* Comparison Section */}
        <div className="bg-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-mtn-black mb-6">
            Why Choose MTN Fibre Prime?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="font-bold text-mtn-black mb-2">Lightning Fast</h3>
              <p className="text-sm text-mtn-grey-text">
                Speeds up to 500 Mbps for seamless streaming, gaming, and working from home
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="font-bold text-mtn-black mb-2">Reliable Connection</h3>
              <p className="text-sm text-mtn-grey-text">
                99.9% uptime guarantee with enterprise-grade infrastructure
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">💎</div>
              <h3 className="font-bold text-mtn-black mb-2">Premium Support</h3>
              <p className="text-sm text-mtn-grey-text">
                24/7 customer service with dedicated account managers for premium plans
              </p>
            </div>
          </div>
        </div>
      </PageContainer>

      {/* Bundle Drawer */}
      <BundleDrawer />
    </AppShell>
  );
}
