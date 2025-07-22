'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Mail, Phone } from 'lucide-react';

const footerLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Careers', href: '/careers' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollTo = (e: any, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const yOffset = -90;
        const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="w-full bg-[#0a0a0a] text-gray-300 py-16 px-4 sm:px-8 lg:px-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo & About */}
        <div>
          <h2 className="text-white text-3xl font-bold mb-4 tracking-wide">
            Ascend Fintech
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            Pioneering intelligent solutions for a smarter digital financial future.
            Connect with us to transform your business with technology and insight.
          </p>
        </div>

        {/* Navigation */}
        <nav aria-label="Footer Navigation">
          <h3 className="text-white font-semibold text-xl mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {footerLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="hover:text-amber-400 transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact & Social */}
        <div>
          <h3 className="text-white font-semibold text-xl mb-4">Contact</h3>
          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-2">
              <Mail size={18} />
              <a href="mailto:info@ascendfintech.com" className="hover:text-amber-400 transition">
                info@ascendfintech.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Phone size={18} />
              <a href="tel:+971544589936" className="hover:text-amber-400 transition">
                +971 54 458 9936
              </a>
            </p>
          </div>

          <div className="flex gap-6 mt-6">
            <Link
              href="https://facebook.com"
              target="_blank"
              aria-label="Facebook"
              className="hover:text-blue-600 transition"
            >
              <Facebook size={24} />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              aria-label="Twitter"
              className="hover:text-sky-400 transition"
            >
              <Twitter size={24} />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              aria-label="LinkedIn"
              className="hover:text-blue-500 transition"
            >
              <Linkedin size={24} />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Ascend Fintech LLC. All rights reserved.
      </div>
    </motion.footer>
  );
}
