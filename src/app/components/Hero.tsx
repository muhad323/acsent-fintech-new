"use client";

import { useState, useEffect } from "react";

const images = [
  "/AdobeStock_706751988_Preview.jpeg",
  "/AdobeStock_1313753071_Preview.jpeg",
  "/AdobeStock_1541825033_Preview.jpeg",
  "/AdobeStock_1551535187_Preview.jpeg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[80vh] overflow-hidden text-white flex items-center justify-center">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-0" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 md:px-10 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Ascend Fintech LLC
        </h1>
        <p className="text-lg md:text-xl mt-4 text-gray-200">
          Powering UAE Businesses with Smart Accounting & Software
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="bg-amber-400 text-[#0a2540] font-semibold px-6 py-3 rounded-md shadow-lg hover:bg-amber-500 transition"
          >
            Get a Quote
          </a>
          <a
            href="#services"
            className="border border-amber-400 text-amber-400 font-semibold px-6 py-3 rounded-md hover:bg-amber-400 hover:text-[#0a2540] transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
