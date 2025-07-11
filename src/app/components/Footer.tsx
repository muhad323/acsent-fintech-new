"use client";

export default function Footer() {
  return (
    <footer className="bg-[#0a2540] text-white py-10 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 font-bold text-2xl">
          Ascend Fintech LLC
        </div>

        <nav className="flex space-x-6 mb-6 md:mb-0">
          <a href="#home" className="hover:underline">
            Home
          </a>
          <a href="#services" className="hover:underline">
            Services
          </a>
          <a href="#about" className="hover:underline">
            About Us
          </a>
          <a href="#case-studies" className="hover:underline">
            Case Studies
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>

        <div className="flex space-x-6">
          {/* Social Icons */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-amber-400 transition"
          >
            <svg
              fill="currentColor"
              stroke="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5C3.33 3.5 2 4.83 2 6.48c0 1.65 1.33 2.98 2.98 2.98 1.65 0 2.98-1.33 2.98-2.98 0-1.65-1.33-2.98-2.98-2.98zM2 21.5h6v-12h-6v12zm7.5-7.8c0-.55.45-1 1-1h.02c.55 0 1 .45 1 1v7.2h-2v-7.2zm10-1.2c-2.48 0-4.5 2.02-4.5 4.5v5h3v-5c0-.28.22-.5.5-.5s.5.22.5.5v5h3v-5c0-2.48-2.02-4.5-4.5-4.5z" />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-amber-400 transition"
          >
            <svg
              fill="currentColor"
              stroke="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.98-2.48 9.12 9.12 0 01-2.9 1.12 4.52 4.52 0 00-7.69 4.12A12.81 12.81 0 013 4.88a4.48 4.48 0 001.4 6.04 4.52 4.52 0 01-2.05-.56v.05a4.52 4.52 0 003.6 4.43 4.56 4.56 0 01-2.04.08 4.53 4.53 0 004.22 3.15 9.06 9.06 0 01-5.6 1.94A8.93 8.93 0 012 19.53a12.74 12.74 0 006.92 2.03c8.3 0 12.84-6.87 12.84-12.83 0-.2 0-.42-.02-.63A9.22 9.22 0 0023 3z" />
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-amber-400 transition"
          >
            <svg
              fill="currentColor"
              stroke="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
            >
              <path d="M22 12a10 10 0 10-11.54 9.87v-6.98H8.08v-2.89h2.38V9.75c0-2.36 1.4-3.67 3.56-3.67 1.03 0 2.1.18 2.1.18v2.3h-1.18c-1.16 0-1.52.72-1.52 1.46v1.76h2.6l-.42 2.89h-2.18v6.98A10 10 0 0022 12z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="text-center text-gray-400 text-sm mt-8">
        &copy; {new Date().getFullYear()} Ascend Fintech LLC. All rights reserved.
      </div>
    </footer>
  );
}
