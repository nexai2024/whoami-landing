import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '../constants/content';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0E0E12] to-[#151320]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Questions? Answered.
          </h2>
          <p className="text-lg text-[#B7B9C3]">
            Everything you need to know about WhoAmI
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-[#39FF88]/30 transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 sm:px-8 py-6 flex items-center justify-between gap-4 text-left"
              >
                <span className="text-white font-semibold text-base sm:text-lg pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#39FF88]/10 flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-[#39FF88]" />
                  ) : (
                    <Plus className="w-5 h-5 text-[#39FF88]" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 sm:px-8 pb-6">
                  <p className="text-[#B7B9C3] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
