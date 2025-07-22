"use client";

const services = [
  {
    title: "Financial & Advisory Services",
    description: (
      <>
        Financial advisory, sophisticated accounts management, bookkeeping, and CFO service.
      </>
    ),
    icon: "💼",
  },
  {
    title: "Software & Workflow Solutions",
    description: (
      <>
        ERP software implementation, workflow automation, human resource management, project management, CRM, payroll management, and custom solution development.
      </>
    ),
    icon: "🖥️",
  },
  {
    title: "Combined Service Packages",
    description: (
      <>
        Combined service as a package with flexible pricing. Providing complete accounts management support by strongly partnering with companies to achieve business growth.
      </>
    ),
    icon: "🤝",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-gradient-to-tr from-blue-50 to-gray-100 py-20 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-[#0a2540] mb-6">Our Services</h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-14 text-lg leading-relaxed">
          Ascend Fintech LLC offers a range of expert financial, accounting, and software services tailored to help your business thrive in the UAE.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map(({ title, description, icon }, index) => (
            <div key={index} className="relative bg-white bg-opacity-60 border border-gray-300 rounded-2xl p-8 shadow-md overflow-hidden cursor-pointer
              transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
              
              {/* Liquid hover effect */}
              <span className="absolute -top-20 -left-20 w-60 h-60 bg-indigo-400 rounded-full opacity-0 blur-3xl transition-opacity duration-700 hover:opacity-70 pointer-events-none"></span>

              <div className="relative z-10">
                <div className="text-5xl mb-6">{icon}</div>
                <h3 className="text-2xl font-semibold text-[#0a2540] mb-4">{title}</h3>
                <p className="text-gray-700 text-base leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
