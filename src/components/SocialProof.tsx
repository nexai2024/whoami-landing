import { Quote } from 'lucide-react';
import { testimonials } from '../constants/content';

export default function SocialProof() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0E0E12]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 bg-[#39FF88]/10 backdrop-blur-sm border border-[#39FF88]/20 rounded-full px-6 py-3 mb-6">
            <span className="text-3xl font-bold text-white">3.2x</span>
            <span className="text-sm text-[#B7B9C3]">higher conversions vs. traditional link pages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Loved by creators who convert
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#39FF88]/30 transition-all"
            >
              <Quote className="w-8 h-8 text-[#39FF88]/40 mb-4" />
              <p className="text-white leading-relaxed mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3A2F6E] to-[#39FF88] flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-[#B7B9C3]">{testimonial.niche}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
