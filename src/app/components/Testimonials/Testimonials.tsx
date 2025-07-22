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
  // 3 dummy testimonials
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

// Helper to wrap index in range [0, length)
const mod = (n: number, length: number) => ((n % length) + length) % length;

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((i) => mod(i - 1, testimonials.length));
  };

  const next = () => {
    setActiveIndex((i) => mod(i + 1, testimonials.length));
  };

  // Fixed width for the carousel container and cards
  return (
    <section
      id="testimonials"
      className="bg-gradient-to-tr from-white-100 to-gray-50 py-24 px-6 md:px-10 lg:px-20 text-[#0a2540]"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-6">What Our Clients Say</h2>
        <p className="text-gray-700 max-w-4xl mx-auto text-lg leading-relaxed">
          We’re proud to support businesses across the UAE. Here’s what a few of our clients have to say about working with us.
        </p>
      </div>

      <div
        className="relative flex justify-center items-center mx-auto"
        style={{
          width: "960px", // 3 cards * 320px each
          minHeight: "420px",
          maxWidth: "100%",
        }}
      >
        {/* Previous Card */}
        <Card
          testimonial={testimonials[mod(activeIndex - 1, testimonials.length)]}
          position="left"
          onClick={prev}
        />
        {/* Active Card */}
        <Card
          testimonial={testimonials[activeIndex]}
          position="center"
          onClick={() => {}}
          isActive
        />
        {/* Next Card */}
        <Card
          testimonial={testimonials[mod(activeIndex + 1, testimonials.length)]}
          position="right"
          onClick={next}
        />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center mt-12 gap-6">
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
  isActive = false,
}: {
  testimonial: { name: string; role: string; quote: string };
  position: "left" | "center" | "right";
  onClick: () => void;
  isActive?: boolean;
}) {
  // Fixed width for each card
  const baseStyle =
    "cursor-pointer rounded-3xl bg-white bg-opacity-80 border border-gray-300 shadow-lg p-10 w-[280px] md:w-[320px] flex-shrink-0";

  let transformStyle = "";
  let scale = 0.8;
  let zIndex = 10;
  let opacity = 0.6;

  if (position === "center") {
    scale = 1;
    zIndex = 20;
    opacity = 1;
    transformStyle = "translateY(-20px)";
  } else if (position === "left") {
    transformStyle = "translateX(-50px) rotateY(15deg)";
  } else if (position === "right") {
    transformStyle = "translateX(50px) rotateY(-15deg)";
  }

  return (
    <motion.div
      onClick={onClick}
      className={baseStyle}
      style={{
        scale,
        zIndex,
        opacity,
        boxShadow: isActive ? "0 20px 30px rgba(0,0,0,0.3)" : undefined,
        transform: transformStyle,
        transition: "transform 0.5s ease, scale 0.5s ease",
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 25px 35px rgba(0,0,0,0.35)",
        y: -10,
      }}
      transition={{ duration: 0.5 }}
    >
      <>
        <p className="italic text-lg mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
        <h4 className="font-semibold text-xl">{testimonial.name}</h4>
      </>
      {testimonial.role && <p className="text-gray-500">{testimonial.role}</p>}
    </motion.div>
  );
}