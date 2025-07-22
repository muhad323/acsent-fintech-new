"use client";

import Image from "next/image";

const caseStudies = [
  {
    title: "Retail VAT Automation & Financial Reporting",
    description:
      "Deployed a VAT-compliant accounting system with real-time inventory and sales reporting across 12 UAE branches.",
    client: "Al Madina Supermarket Group",
    industry: "Retail & FMCG",
    image: "/case-study-1.jpg",
  },
  {
    title: "ERP Modernization for Manufacturing Process",
    description:
      "Redesigned ERP to automate production tracking, material planning, and financial modules.",
    client: "Emirates Metal Works",
    industry: "Manufacturing",
    image: "/case-study-2.jpg",
  },
  {
    title: "AI-Powered Tax Filing for Startups",
    description:
      "Built a cloud-native platform to simplify corporate tax filing using AI and monthly oversight reporting.",
    client: "FinTech Startup Hub",
    industry: "Technology & Finance",
    image: "/case-study-3.jpg",
  },
];

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-20 text-[#0a2540]"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Case Studies</h2>
        <p className="mb-10 max-w-2xl mx-auto text-gray-600 text-sm sm:text-base">
          Real success stories of how we’ve helped businesses streamline operations, meet compliance, and grow.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-52 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
              </div>
              <div className="p-5 text-left flex-1 flex flex-col">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">{item.description}</p>
                <div className="text-sm text-gray-500 space-y-1">
                  <p><span className="font-medium">Client:</span> {item.client}</p>
                  <p><span className="font-medium">Industry:</span> {item.industry}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
