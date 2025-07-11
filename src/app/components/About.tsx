"use client";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#f7f8fa] py-20 px-6 md:px-10 lg:px-20 text-[#0a2540]"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Ascend Fintech LLC</h2>
          <p className="text-gray-700 mb-4">
            We are a Dubai-based team of software and accounting professionals
            dedicated to helping small, medium, and enterprise businesses
            streamline operations, ensure compliance, and grow with confidence.
          </p>
          <p className="text-gray-700 mb-4">
            Whether it’s full-scale software implementation, monthly financial
            supervision, or bundled solutions — we bring expertise, clarity, and
            results to your business.
          </p>
          <p className="text-gray-700">
            With a mission to empower UAE businesses through smart digital and
            financial services, we stand as your long-term technology and accounting
            partner.
          </p>
        </div>

        {/* Image */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src="/about-placeholder.jpg"
            alt="About Ascend Fintech Team"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
