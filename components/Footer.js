import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 border border-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-5">
          <div>
            <h3 className="text-2xl font-bold text-[[#1A5235]] mb-4">Only Organic</h3>
            <p className="text-gray-500 mb-4">
              Your trusted partner for pure, natural, and sustainably sourced organic products.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1A5235] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1A5235] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1A5235] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1A5235] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-500 hover:text-[#1A5235] transition-colors">About Us</a></li>
              <li><a href="#what-we-do" className="text-gray-500 hover:text-[#1A5235] transition-colors">What We Do</a></li>
              <li><a href="#career" className="text-gray-500 hover:text-[#1A5235] transition-colors">Career</a></li>
              <li><a href="#blogs" className="text-gray-500 hover:text-[#1A5235] transition-colors">Blogs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#contact" className="text-gray-500 hover:text-[#1A5235] transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#1A5235] transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#1A5235] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#1A5235] transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-500">
                <Mail size={16} />
                <span>info@onlyorganic.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-500">
                <Phone size={16} />
                <span>+1 (234) 567-890</span>
              </li>
            </ul>
          </div>
        </div>

        
      </div>
      <div className="border-t bg-[#1A5235]  pt-5 pb-5 text-center">
          <p className="text-white text-sm">
            &copy; {new Date().getFullYear()} Only Organic. All rights reserved.
          </p>
        </div>
    </footer>
  );
}
