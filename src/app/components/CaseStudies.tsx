"use client";
import Image from "next/image";

const caseStudies = [
  {
    title: "Automated Accounting System for Retail Chain",
    description:
      "Implemented a fully automated accounting and VAT compliance system for a multi-branch retail chain across Dubai.",
    client: "Retail Corp UAE",
    industry: "Retail",
    image: "/case-study1.jpg",
  },
  {
    title: "Custom ERP Integration for Manufacturing Firm",
    description:
      "Developed and integrated a custom ERP solution to streamline manufacturing operations and financial reporting.",
    client: "ManufacturePro",
    industry: "Manufacturing",
    image: "/case-study2.jpg",
  },
  {
    title: "Cloud-Based Tax Filing Solution for SMEs",
    description:
      "Designed a cloud platform that simplified corporate tax filing and monthly supervision for SME clients.",
    client: "SME Solutions",
    industry: "Technology",
    image: "/case-study3.jpg",
  },
];

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="bg-white py-20 px-6 md:px-10 lg:px-20 text-[#0a2540]"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Case Studies</h2>
        <p className="mb-12 max-w-2xl mx-auto text-gray-600">
          Explore how we&apos;ve helped businesses across industries succeed with our tailored software and accounting solutions.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {caseStudies.map((caseStudy, i) => (
            <div
              key={i}
              className="rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition"
            >
              <Image
                src={caseStudy.image}
                alt={caseStudy.title}
                width={600}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2">{caseStudy.title}</h3>
                <p className="text-gray-700 mb-4">{caseStudy.description}</p>
                <p className="text-sm text-gray-500 italic">
                  Client: {caseStudy.client} | Industry: {caseStudy.industry}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
