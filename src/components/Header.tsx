import { useState } from 'react';
import { User } from 'lucide-react';
import WaitlistModal from './WaitlistModal';

export default function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#0E0E12]/95 backdrop-blur-sm border-b border-white/5">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3A2F6E] to-[#151320] flex items-center justify-center">
                            <User className="w-5 h-5 text-[#39FF88]" />
                        </div>
                        <span className="text-xl font-bold text-white">WhoAmI</span>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        <a href="#features" className="text-[#B7B9C3] hover:text-white transition-colors text-sm font-medium">
                            Features
                        </a>
                        <a href="#pricing" className="text-[#B7B9C3] hover:text-white transition-colors text-sm font-medium">
                            Pricing
                        </a>
                        <a href="#faq" className="text-[#B7B9C3] hover:text-white transition-colors text-sm font-medium">
                            FAQ
                        </a>
                    </div>

                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-[#39FF88] text-[#0E0E12] px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-[#2de874] transition-all hover:scale-105 active:scale-95"
                    >
                        Claim Your WhoAmI URL
                    </button>
                </nav>
            </header>
            <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
