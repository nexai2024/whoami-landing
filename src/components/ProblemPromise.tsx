import { XCircle, CheckCircle } from 'lucide-react';

export default function ProblemPromise() {
  const problems = [
    "Too many exits—followers click away and never come back",
    "Lost leads—no way to capture emails or follow up",
    "Low conversion—decision fatigue kills momentum",
    "Tool sprawl—juggling Zapier, Mailchimp, Teachable, and Stripe"
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0E0E12]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            The problem with link-in-bio?
            <span className="block mt-2 text-[#B7B9C3]">Decision fatigue and drop-offs.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <XCircle className="w-6 h-6 text-red-400" />
              What's breaking your funnel
            </h3>
            {problems.map((problem, index) => (
              <div key={index} className="flex gap-3 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                <p className="text-[#B7B9C3] leading-relaxed">{problem}</p>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#39FF88]/10 to-[#3A2F6E]/10 blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <CheckCircle className="w-12 h-12 text-[#39FF88] mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                WhoAmI keeps them on your page
              </h3>
              <p className="text-[#B7B9C3] leading-relaxed mb-6">
                Capture emails the moment they arrive. Deliver value with micro-courses and lead magnets.
                Nurture with built-in funnels. Sell with native checkout.
              </p>
              <p className="text-white font-semibold">
                All on one page. Zero redirects. Maximum conversions.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#3A2F6E]/20 to-[#39FF88]/20 rounded-2xl p-8 sm:p-12 text-center border border-white/10">
          <p className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Stop leaking clicks. Start converting followers.
          </p>
          <p className="text-lg text-[#B7B9C3] max-w-2xl mx-auto">
            Your bio link should be a destination, not a detour.
          </p>
        </div>
      </div>
    </section>
  );
}
