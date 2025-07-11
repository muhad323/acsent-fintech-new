"use client";

const services = [
  {
    title: "Software Implementation & Support",
    description:
      "End-to-end software solutions including setup, integration, training & maintenance for your business.",
    icon: "💻",
  },
  {
    title: "Complete Accounting Services",
    description:
      "Expert accounting, VAT filing, and corporate tax support with monthly financial supervision.",
    icon: "📊",
  },
  {
    title: "Combined Packages",
    description:
      "A bundled monthly plan combining accounting services with full software support for UAE businesses.",
    icon: "📦",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-4">
          Our Services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Ascend Fintech LLC provides expert services for accounting, taxation, and software
          implementation in the UAE.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#f9fafb] border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#0a2540] mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
