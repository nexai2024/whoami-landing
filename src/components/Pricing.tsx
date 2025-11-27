import { Check, Zap } from 'lucide-react';
import { pricingTiers } from '../constants/content';

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#151320] to-[#0E0E12]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#39FF88]/10 backdrop-blur-sm border border-[#39FF88]/20 rounded-full px-6 py-3 mb-6">
            <Zap className="w-4 h-4 text-[#39FF88]" />
            <span className="text-sm text-white font-semibold">Early Access — Founders price locked for life</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-[#B7B9C3] max-w-2xl mx-auto">
            Start free. Scale when you're ready. No credit card required.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 border transition-all hover:scale-105 ${
                tier.isPopular
                  ? 'bg-gradient-to-br from-[#39FF88]/10 to-[#3A2F6E]/10 border-[#39FF88]/50 shadow-xl shadow-[#39FF88]/10'
                  : 'bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border-white/10'
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-[#39FF88] to-[#2de874] px-4 py-1.5 rounded-full text-[#0E0E12] text-xs font-bold shadow-lg">
                    {tier.badge}
                  </div>
                </div>
              )}

              <div className="mb-8 pt-4">
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-[#B7B9C3]">{tier.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex gap-3 items-start">
                    <Check className="w-5 h-5 text-[#39FF88] flex-shrink-0 mt-0.5" />
                    <span className="text-[#B7B9C3]">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-bold text-base transition-all ${
                  tier.isPopular
                    ? 'bg-[#39FF88] text-[#0E0E12] hover:bg-[#2de874] hover:scale-105 active:scale-95'
                    : 'bg-white/5 backdrop-blur-sm border-2 border-white/20 text-white hover:bg-white/10'
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-[#B7B9C3]">
            First 100 users lock in Founders pricing forever · 14-day money-back guarantee · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
