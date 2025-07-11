"use client";

const testimonials = [
  {
    name: "Ayesha Rahman",
    role: "CEO, BrightTech UAE",
    quote:
      "Ascend Fintech transformed our accounting process and implemented the perfect software solution. We’re saving hours every week!",
  },
  {
    name: "Mohammed Saeed",
    role: "Founder, Gulf SME Solutions",
    quote:
      "Their monthly VAT and tax services are top-notch. Reliable, efficient, and proactive in every aspect of finance and compliance.",
  },
  {
    name: "Linda Mathews",
    role: "Operations Head, StartupHive",
    quote:
      "Bundling software support and accounts into one service was the best decision we made. Highly recommend Ascend Fintech!",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-white py-20 px-6 md:px-10 lg:px-20 text-[#0a2540]"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We’re proud to support businesses across the UAE. Here's what a few of our clients have to say about working with us.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#f9fafb] border border-gray-200 rounded-xl shadow-sm p-6 text-left hover:shadow-lg transition"
            >
              <p className="text-sm text-gray-700 italic mb-4">"{t.quote}"</p>
              <h4 className="font-semibold text-lg">{t.name}</h4>
              <span className="text-gray-500 text-sm">{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
