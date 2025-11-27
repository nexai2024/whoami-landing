import { User, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  const links = {
    product: ['Features', 'Pricing', 'Templates', 'Changelog'],
    resources: ['Support', 'Docs', 'Blog', 'Community'],
    legal: ['Privacy', 'Terms', 'Security']
  };

  return (
    <footer className="bg-[#0E0E12] border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3A2F6E] to-[#151320] flex items-center justify-center">
                <User className="w-6 h-6 text-[#39FF88]" />
              </div>
              <span className="text-2xl font-bold text-white">WhoAmI</span>
            </div>
            <p className="text-[#B7B9C3] mb-6 max-w-xs">
              Turn your bio link into a sales machine with built-in funnels, micro-courses, and checkout.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-[#39FF88]/30 transition-all">
                <Twitter className="w-5 h-5 text-[#B7B9C3]" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-[#39FF88]/30 transition-all">
                <Instagram className="w-5 h-5 text-[#B7B9C3]" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-[#39FF88]/30 transition-all">
                <Linkedin className="w-5 h-5 text-[#B7B9C3]" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-[#39FF88]/30 transition-all">
                <Youtube className="w-5 h-5 text-[#B7B9C3]" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Product</h3>
            <ul className="space-y-3">
              {links.product.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-[#B7B9C3] hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Resources</h3>
            <ul className="space-y-3">
              {links.resources.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-[#B7B9C3] hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-3">
              {links.legal.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-[#B7B9C3] hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#B7B9C3] text-sm">
            © 2025 WhoAmI. All rights reserved.
          </p>
          <p className="text-[#B7B9C3] text-sm">
            Built for creators who convert.
          </p>
        </div>
      </div>
    </footer>
  );
}
