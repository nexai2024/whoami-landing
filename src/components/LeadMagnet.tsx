import { Download, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function LeadMagnet() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0E0E12]">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#39FF88]/20 to-[#3A2F6E]/20 blur-3xl"></div>

          <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-white/10">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#39FF88] to-[#2de874] flex items-center justify-center mb-6 shadow-lg shadow-[#39FF88]/20">
                <Download className="w-8 h-8 text-[#0E0E12]" />
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Steal our top-performing micro-funnel templates
              </h2>
              <p className="text-lg text-[#B7B9C3] mb-8 max-w-2xl">
                Get 5 plug-and-play funnels for creators: coaching, fitness, design, finance, and mindset.
                Copy, customize, and convert.
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="w-full max-w-md">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="flex-1 px-6 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-[#39FF88]/50 transition-colors"
                    />
                    <button
                      type="submit"
                      className="bg-[#39FF88] text-[#0E0E12] px-8 py-4 rounded-xl font-bold text-base hover:bg-[#2de874] transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap"
                    >
                      Send Me the Templates
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-xs text-[#B7B9C3] mt-4">
                    By submitting, you agree to receive emails from WhoAmI. Unsubscribe anytime.
                  </p>
                </form>
              ) : (
                <div className="w-full max-w-md bg-[#39FF88]/10 backdrop-blur-sm border border-[#39FF88]/30 rounded-xl p-6">
                  <p className="text-white font-semibold mb-2">Check your inbox!</p>
                  <p className="text-[#B7B9C3] text-sm">
                    Your templates are on the way. Don't see them? Check your spam folder.
                  </p>
                </div>
              )}

              <div className="mt-8 flex flex-wrap gap-4 justify-center text-sm text-[#B7B9C3]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#39FF88]"></div>
                  <span>5 ready-to-use funnels</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#39FF88]"></div>
                  <span>Instant download</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#39FF88]"></div>
                  <span>No credit card</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
