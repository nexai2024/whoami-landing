import { GraduationCap, Gift, TrendingUp, CreditCard, Users, BarChart3 } from 'lucide-react';
import { features } from '../constants/content';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  GraduationCap,
  Gift,
  TrendingUp,
  CreditCard,
  Users,
  BarChart3
};

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0E0E12] to-[#151320]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Everything you need to convert
          </h2>
          <p className="text-lg text-[#B7B9C3] max-w-2xl mx-auto">
            Stop cobbling together tools. Get funnels, courses, lead capture, checkout, and CRM in one place.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#39FF88]/30 transition-all hover:scale-105"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3A2F6E] to-[#151320] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-[#39FF88]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-[#B7B9C3] leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
