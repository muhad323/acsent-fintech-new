"use client";

import React, { useState } from "react";
import Image from "next/image";

const NAV_BG = "bg-[#0a2540]";
const NAV_TEXT = "text-white";
const NAV_HOVER = "hover:text-amber-400";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Use internal section IDs here for smooth scrolling
  const menuItems = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact Us", href: "#contact" },
  ];

  // Smooth scroll handler with offset for fixed navbar
  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href")?.substring(1);
    if (!targetId) return;

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const yOffset = -64; // Adjust based on navbar height (e.g. 64px)
      const y =
        targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
      setIsOpen(false); // Close mobile menu on click
    }
  }

  return (
    <nav className={`${NAV_BG} ${NAV_TEXT} fixed w-full z-50`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#home"
          onClick={handleNavClick}
          className="flex items-center cursor-pointer select-none"
        >
          <Image src="/logo.jpg" alt="Ascend Fintech LLC Logo" width={40} height={40} />
          <span className="ml-3 text-2xl font-semibold tracking-wide">
            Ascend Fintech LLC
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {menuItems.map(({ name, href }) => (
            <li key={name}>
              <a
                href={href}
                onClick={handleNavClick}
                className={`transition-colors duration-300 ${NAV_HOVER}`}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          aria-label="Toggle menu"
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`${NAV_BG} md:hidden`}>
          <ul className="flex flex-col px-6 py-4 space-y-4 font-medium">
            {menuItems.map(({ name, href }) => (
              <li key={name}>
                <a
                  href={href}
                  onClick={handleNavClick}
                  className={`block ${NAV_HOVER}`}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
