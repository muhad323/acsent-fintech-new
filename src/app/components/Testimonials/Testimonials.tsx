"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Two Fold Marketing Solution LLC",
    role: "",
    quote:
      "Two Fold Marketing unified their CRM, HR, and finance through our integrated tech and accounting services, halving admin workload, ensuring seamless tax compliance, and unlocking clear campaign-level profitability.",
  },
  {
    name: "iMagix Productions LLC",
    role: "",
    quote:
      "iMagix streamlined project billing and cost tracking with our ERPNext and expert-managed accounting, cutting invoice cycles from 15 to 3 days and gaining real-time profitability insights—all while staying fully VAT compliant.",
  },
  {
    name: "Ecofab Fiberglass LLC",
    role: "",
    quote:
      "Ecofab automated inventory and financial operations with our ERP and accounting bundle, reducing stock-outs by 80%, securing audit-ready books, and achieving total visibility into costs to drive confident expansion.",
  },
  {
    name: "GlobalTech Solutions",
    role: "",
    quote:
      "GlobalTech saw a 40% reduction in overhead after implementing Ascend's integrated financial and software solutions.",
  },
  {
    name: "Future Innovators LLC",
    role: "",
    quote:
      "Thanks to Ascend, our workflow automation is seamless and our finance team is more productive than ever.",
  },
  {
    name: "Pioneer Enterprises",
    role: "",
    quote:
      "The combined service package gave us peace of mind with complete accounts and software management support.",
  },
];

const mod = (n: number, length: number) => ((n % length) + length) % length;

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((i) => mod(i - 1, testimonials.length));
  };

  const next = () => {
    setActiveIndex((i) => mod(i + 1, testimonials.length));
  };

  return (
    <section
      id="testimonials"
      className="bg-gradient-to-tr from-white to-gray-50 py-20 px-4 sm:px-8 lg:px-20 text-[#0a2540]"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
          What Our Clients Say
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-base sm:text-lg">
          We&apos;re proud to support businesses across the UAE. Here&apos;s what a few of our clients have to say about working with us.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 items-stretch">
        <Card
          testimonial={testimonials[mod(activeIndex - 1, testimonials.length)]}
          position="left"
          onClick={prev}
        />
        <Card
          testimonial={testimonials[activeIndex]}
          position="center"
          onClick={() => {}}
        />
        <Card
          testimonial={testimonials[mod(activeIndex + 1, testimonials.length)]}
          position="right"
          onClick={next}
        />
      </div>

      <div className="flex justify-center mt-10 gap-6">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="bg-indigo-600 text-white rounded-full p-4 hover:bg-indigo-700 transition"
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="Next testimonial"
          className="bg-indigo-600 text-white rounded-full p-4 hover:bg-indigo-700 transition"
        >
          ›
        </button>
      </div>
    </section>
  );
}

function Card({
  testimonial,
  position,
  onClick,
}: {
  testimonial: { name: string; role: string; quote: string };
  position: "left" | "center" | "right";
  onClick: () => void;
}) {
  let scale = 0.95;
  let zIndex = 10;
  let opacity = 0.8;

  if (position === "center") {
    scale = 1;
    zIndex = 20;
    opacity = 1;
  }

  return (
    <motion.div
      onClick={onClick}
      className="bg-white border border-gray-300 rounded-3xl shadow-lg p-6 sm:p-8 w-full sm:w-[280px] md:w-[320px] transition-all duration-500 cursor-pointer"
      style={{
        scale,
        zIndex,
        opacity,
      }}
      whileHover={{
        scale: 1.05,
        y: -8,
        boxShadow: "0 25px 35px rgba(0,0,0,0.25)",
      }}
    >
      <p className="italic text-base sm:text-lg mb-6 leading-relaxed">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <h4 className="font-semibold text-lg sm:text-xl">
        {testimonial.name}
      </h4>
      {testimonial.role && (
        <p className="text-gray-500 text-sm mt-1">{testimonial.role}</p>
      )}
    </motion.div>
  );
}
