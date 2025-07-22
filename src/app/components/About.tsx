'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section
      id="about"
      className="bg-gray-50 py-24 text-[#0a2540] min-h-[600px]"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6">
        {/* Left: Animated Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-4xl font-extrabold mb-8 leading-tight text-[#0a2540]">
            About Ascend Fintech LLC
          </h2>

          <p className="mb-6 text-lg leading-relaxed text-gray-700">
            Ascend Fintech LLC is a Dubai-based technology and accounting firm with over 8 years of experience delivering transformative solutions to businesses across the UAE. We specialize in empowering companies to streamline their operations by integrating advanced technological workflows with comprehensive financial management.
          </p>

          <p className="mb-6 text-lg leading-relaxed text-gray-700">
            Our team of visionary professionals partners deeply with business owners to automate workflows, improve operational efficiency, and ensure compliance with local regulations. We understand the unique challenges faced by enterprises and tailor bespoke solutions including ERP implementations, payroll management, CRM, and financial advisory services.
          </p>

          <p className="mb-6 text-lg leading-relaxed text-gray-700">
            At Ascend, we combine technology and finance expertise to unlock growth opportunities and drive business success. Whether you are a startup, SME, or large corporation, our dedicated consultants provide ongoing support, helping you navigate complex financial landscapes while optimizing your technology investments.
          </p>

          <p className="text-lg leading-relaxed font-semibold text-[#0a2540]">
            Partner with Ascend Fintech LLC to digitally transform your business, achieve operational excellence, and accelerate sustainable growth.
          </p>
        </motion.div>

        {/* Right: Animated Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="relative w-full h-[600px] rounded-xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/about-pic.jpg"
            alt="Ascend Fintech office view"
           width={100} height={100}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0a2540]/70 to-black/20 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
