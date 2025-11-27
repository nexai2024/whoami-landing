import { useState } from 'react';
import { Check, X } from 'lucide-react';
import { comparisonData } from '../constants/content';
import WaitlistModal from './WaitlistModal';

export default function Comparison() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0E0E12]">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Why WhoAmI beats link lists
                    </h2>
                    <p className="text-lg text-[#B7B9C3] max-w-2xl mx-auto">
                        Stop sending followers away. Start converting on your page.
                    </p>
                </div>

                <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
                    <div className="grid grid-cols-3 gap-px bg-white/5">
                        <div className="bg-[#0E0E12] p-4 sm:p-6">
                            <p className="text-[#B7B9C3] font-semibold text-sm sm:text-base">Feature</p>
                        </div>
                        <div className="bg-[#0E0E12] p-4 sm:p-6 text-center">
                            <p className="text-white/60 font-semibold text-sm sm:text-base">Typical Link Tool</p>
                        </div>
                        <div className="bg-[#0E0E12] p-4 sm:p-6 text-center">
                            <p className="text-[#39FF88] font-bold text-sm sm:text-base">WhoAmI</p>
                        </div>
                    </div>

                    {comparisonData.map((row, index) => (
                        <div key={index} className="grid grid-cols-3 gap-px bg-white/5 border-t border-white/5">
                            <div className="bg-[#0E0E12] p-4 sm:p-6">
                                <p className="text-white text-sm sm:text-base">{row.feature}</p>
                            </div>
                            <div className="bg-[#0E0E12] p-4 sm:p-6 flex items-center justify-center">
                                {typeof row.typical === 'boolean' ? (
                                    row.typical ? (
                                        <Check className="w-5 h-5 text-white/40" />
                                    ) : (
                                        <X className="w-5 h-5 text-red-400" />
                                    )
                                ) : (
                                    <p className="text-white/60 text-sm text-center">{row.typical}</p>
                                )}
                            </div>
                            <div className="bg-[#0E0E12] p-4 sm:p-6 flex items-center justify-center">
                                {typeof row.whoami === 'boolean' ? (
                                    row.whoami ? (
                                        <Check className="w-5 h-5 text-[#39FF88]" />
                                    ) : (
                                        <X className="w-5 h-5 text-red-400" />
                                    )
                                ) : (
                                    <p className="text-[#39FF88] font-semibold text-sm text-center">{row.whoami}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-8">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-[#39FF88] text-[#0E0E12] px-8 py-4 rounded-xl font-bold text-base hover:bg-[#2de874] transition-all hover:scale-105 active:scale-95"
                    >
                        Join Waitlist
                    </button>
                </div>
            </div>

            <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}
