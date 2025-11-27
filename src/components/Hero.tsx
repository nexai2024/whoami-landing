import { useState } from 'react';
import { Play, Sparkles } from 'lucide-react';
import { trustLogos } from '../constants/content';
import WaitlistModal from './WaitlistModal';

export default function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="relative min-h-[90vh] lg:min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#151320] via-[#0E0E12] to-[#3A2F6E] opacity-90"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(57,255,136,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(58,47,110,0.3),transparent_50%)]"></div>

            <div className="relative max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
                            <Sparkles className="w-4 h-4 text-[#39FF88]" />
                            <span className="text-sm text-[#B7B9C3] font-medium">Trusted by 1,000+ creators</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Don't just share links.
                            <span className="block mt-2 bg-gradient-to-r from-[#39FF88] to-[#2de874] bg-clip-text text-transparent">
                                Define WhoAmI.
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-[#B7B9C3] mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Turn your bio into a sales machine with built-in funnels, micro-courses, lead magnets, and checkout—without sending followers away.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="bg-[#39FF88] text-[#0E0E12] px-8 py-4 rounded-xl font-bold text-base hover:bg-[#2de874] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#39FF88]/20"
                            >
                                Claim Your WhoAmI URL
                            </button>
                            <button className="bg-white/5 backdrop-blur-sm border-2 border-white/20 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                                <Play className="w-5 h-5" />
                                Watch Demo
                            </button>
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/10">
                            <p className="text-sm text-[#B7B9C3] mb-4 font-medium">Trusted by creators at</p>
                            <div className="flex flex-wrap gap-6 justify-center lg:justify-start items-center">
                                {trustLogos.map((logo, index) => (
                                    <div key={index} className="text-white/40 font-semibold text-sm hover:text-white/60 transition-colors">
                                        {logo}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#39FF88]/20 to-[#3A2F6E]/20 blur-3xl rounded-full"></div>

                            <div className="relative w-[280px] sm:w-[320px] h-[560px] sm:h-[640px] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-[3rem] p-3 shadow-2xl border border-white/10">
                                <div className="w-full h-full bg-gradient-to-br from-[#151320] to-[#0E0E12] rounded-[2.5rem] overflow-hidden">
                                    <div className="h-full flex flex-col p-6">
                                        <div className="flex items-center justify-center gap-2 mb-8">
                                            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#3A2F6E] to-[#151320] flex items-center justify-center">
                                                <div className="w-3 h-3 rounded-full bg-[#39FF88]"></div>
                                            </div>
                                            <span className="text-white font-bold text-lg">WhoAmI</span>
                                        </div>

                                        <div className="flex-1 space-y-4">
                                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                                                <div className="aspect-video bg-gradient-to-br from-[#3A2F6E]/30 to-[#151320]/30 rounded-xl mb-3 flex items-center justify-center">
                                                    <Play className="w-12 h-12 text-white/60" />
                                                </div>
                                                <h3 className="text-white font-semibold text-sm mb-1">Watch Masterclass</h3>
                                                <p className="text-[#B7B9C3] text-xs">Free 5-part series</p>
                                            </div>

                                            <button
                                                onClick={() => setIsModalOpen(true)}
                                                className="w-full bg-[#39FF88] text-[#0E0E12] py-4 rounded-xl font-bold text-sm hover:bg-[#2de874] transition-all"
                                            >
                                                Join Now
                                            </button>

                                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                                                <p className="text-white text-xs font-medium mb-2">Latest from me</p>
                                                <div className="space-y-2">
                                                    <div className="h-2 bg-white/10 rounded-full w-3/4"></div>
                                                    <div className="h-2 bg-white/10 rounded-full w-1/2"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-24 h-24 bg-[#39FF88]/10 rounded-full blur-2xl"></div>
                                <div className="absolute -left-4 bottom-1/4 w-32 h-32 bg-[#3A2F6E]/10 rounded-full blur-2xl"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}
