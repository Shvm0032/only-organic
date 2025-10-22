import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-gray-100 ">
      {/* Top Section with Background Image and Overlay */}
      <div className="relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/Assets/only-organic.jpg')",
          }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80"></div>

        {/* Content */}
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Logo & About */}
            <div>
              <Link href="/">
                <Image
                  src="/Assets/logos/logo-main.png"
                  alt="Only Organics Logo"
                  width={230}
                  height={60}
                  className="object-contain cursor-pointer"
                />
              </Link>
              <p className="text-gray-200 mb-4 text-sm">
                Your trusted partner for pure, natural, and sustainably sourced
                organic products.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-gray-300 transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-gray-300 transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-gray-300 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-gray-300 transition-colors"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#what-we-do"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    What We Do
                  </a>
                </li>
                <li>
                  <a
                    href="#career"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Career
                  </a>
                </li>
                <li>
                  <a
                    href="#blogs"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Blogs
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Contact Info
              </h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>info@onlyorganic.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>+1 (234) 567-890</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t bg-[#1A5235] pt-5 pb-5 text-center">
        <p className="text-white text-sm">
          &copy; {new Date().getFullYear()} Only Organic. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
