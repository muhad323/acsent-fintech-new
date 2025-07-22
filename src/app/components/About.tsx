'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section
      id="about"
      className="bg-gray-50 py-24 text-[#0a2540] min-h-screen"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 sm:px-4">
        {/* Left: Animated Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            About Ascend Fintech LLC
          </h2>

          <p className="mb-5 text-base sm:text-lg leading-relaxed text-gray-700">
            Ascend Fintech LLC is a Dubai-based technology and accounting firm with over 8 years of experience delivering transformative solutions to businesses across the UAE.
          </p>

          <p className="mb-5 text-base sm:text-lg leading-relaxed text-gray-700">
            We specialize in integrating advanced workflows with comprehensive financial management. Our team partners with businesses to automate operations, implement ERP, manage payroll, and provide financial advisory services.
          </p>

          <p className="mb-5 text-base sm:text-lg leading-relaxed text-gray-700">
            Whether you're a startup or a large enterprise, we help you navigate compliance, optimize tech investments, and unlock growth opportunities.
          </p>

          <p className="text-base sm:text-lg font-semibold text-[#0a2540]">
            Partner with us to digitally transform your business and accelerate sustainable growth.
          </p>
        </motion.div>

        {/* Right: Animated Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/about-pic.jpg"
            alt="Ascend Fintech Office View"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0a2540]/70 to-black/20 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
