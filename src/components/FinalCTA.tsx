import { useState } from 'react';
import { Play, Shield, CreditCard, X } from 'lucide-react';
import WaitlistModal from './WaitlistModal';

export default function FinalCTA() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0E0E12]">
            <div className="max-w-5xl mx-auto">
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#39FF88]/20 to-[#3A2F6E]/20 blur-3xl"></div>

                    <div className="relative bg-gradient-to-br from-[#3A2F6E]/20 to-[#151320]/20 backdrop-blur-sm rounded-3xl p-8 sm:p-16 border border-white/10 text-center">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                            Your audience is ready.
                            <span className="block mt-2 bg-gradient-to-r from-[#39FF88] to-[#2de874] bg-clip-text text-transparent">
                                Turn attention into income.
                            </span>
                        </h2>

                        <p className="text-lg text-[#B7B9C3] mb-10 max-w-2xl mx-auto">
                            Join 1,000+ creators who stopped leaking clicks and started converting followers into customers.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="bg-[#39FF88] text-[#0E0E12] px-10 py-5 rounded-xl font-bold text-lg hover:bg-[#2de874] transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#39FF88]/20"
                            >
                                Claim Your WhoAmI URL
                            </button>
                            <button className="bg-white/5 backdrop-blur-sm border-2 border-white/20 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                                <Play className="w-6 h-6" />
                                Watch Demo
                            </button>
                        </div>

                        <div className="flex flex-wrap gap-6 justify-center items-center text-sm text-[#B7B9C3]">
                            <div className="flex items-center gap-2">
                                <Shield className="w-5 h-5 text-[#39FF88]" />
                                <span>14-day money-back guarantee</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <X className="w-5 h-5 text-[#39FF88]" />
                                <span>No credit card on free plan</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CreditCard className="w-5 h-5 text-[#39FF88]" />
                                <span>Cancel anytime</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}
