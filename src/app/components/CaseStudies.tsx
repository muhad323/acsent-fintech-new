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
      className="bg-gray-50 py-20 px-6 md:px-12 lg:px-24 text-[#0a2540]"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Case Studies</h2>
        <p className="mb-12 max-w-2xl mx-auto text-gray-600">
          Real success stories of how we’ve helped businesses streamline operations, meet compliance, and grow.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
            >
              <div className="overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="w-full h-52 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
              </div>
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold mb-2 text-[#0a2540]">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <div className="text-sm text-gray-500">
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
