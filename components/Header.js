"use client";
import Image from "next/image";
import { useState } from "react";
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Menu,
  X,
  Heart,
  ShoppingBag,
} from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "About Us", href: "/about-us" },
    { name: "What We Do", href: "/what-we-do" },
    { name: "Career", href: "/careers" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="bg-[#1A5235] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center py-2 text-sm">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 mb-2 sm:mb-0">
              <a
                href="mailto:info@onlyorganic.com"
                className="flex items-center gap-2 hover:text-emerald-100 transition-colors"
              >
                <Mail size={16} />
                <span>info@onlyorganic.com</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 hover:text-emerald-100 transition-colors"
              >
                <Phone size={16} />
                <span>+1 (234) 567-890</span>
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-100 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-100 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-100 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-100 transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full relative">
          {/* Logo Left */}
          <div className="flex-shrink-0">
            <a href="/">
              <Image
                src="/Assets/logos/logo-main.png"
                alt="Only Organic"
                width={320}
                height={50}
              />
            </a>
          </div>

          {/* Menu Center */}
          <nav className="hidden lg:flex flex-1 justify-center items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[#1A5235] font-medium transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1A5235] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right Side Icons / Login */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="#"
              className="text-gray-700 hover:text-[#1A5235] font-medium transition-colors"
            >
              Login
            </a>
            <button className="text-gray-700 hover:text-[#1A5235] transition-colors">
              <Heart size={22} />
            </button>
            <button className="text-gray-700 hover:text-[#1A5235] transition-colors">
              <ShoppingBag size={22} />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-gray-700 hover:text-[#1A5235] transition-colors ml-auto"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[#1A5235] font-medium py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
