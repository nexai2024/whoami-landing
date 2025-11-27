import { Layers, Zap, DollarSign } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Layers,
      number: "01",
      title: "Build your WhoAmI page",
      description: "Pick a template, connect your socials, add your avatar. Go live in minutes."
    },
    {
      icon: Zap,
      number: "02",
      title: "Add value",
      description: "Upload a micro-course or lead magnet. Set unlock rules—email capture, purchase, or both."
    },
    {
      icon: DollarSign,
      number: "03",
      title: "Convert",
      description: "Capture emails, trigger campaigns, sell with native checkout. Watch your funnel work."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#151320] to-[#0E0E12]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            How it works
          </h2>
          <p className="text-lg text-[#B7B9C3] max-w-2xl mx-auto">
            From setup to first sale in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[#39FF88]/30 to-transparent -translate-x-1/2"></div>
                )}
                <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#39FF88]/30 transition-all">
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-[#39FF88] to-[#2de874] flex items-center justify-center text-[#0E0E12] font-bold text-lg shadow-lg shadow-[#39FF88]/20">
                    {step.number}
                  </div>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#3A2F6E] to-[#151320] flex items-center justify-center mb-6 mt-4">
                    <Icon className="w-7 h-7 text-[#39FF88]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-[#B7B9C3] leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
