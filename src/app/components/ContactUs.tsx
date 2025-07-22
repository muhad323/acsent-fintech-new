'use client';

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); // clear form
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const whatsappNumber = "971544589936";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <section
      id="contact"
      className="bg-gray-100 py-20 px-6 md:px-12 lg:px-24 text-[#0a2540]"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Left: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 p-10 rounded-3xl shadow-lg border border-gray-200"
        >
          <h2 className="text-4xl font-extrabold mb-6">Let’s Connect</h2>
          <p className="text-gray-700 mb-10 max-w-md">
            Partner with <span className="font-semibold">Ascend Fintech</span> to elevate your operations and financial stewardship.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-semibold text-gray-800">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-semibold text-gray-800">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email address"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-semibold text-gray-800">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className={`w-full text-[#0a2540] font-semibold py-3 rounded-lg shadow-md transition 
                ${status === "sending" ? "bg-amber-300 cursor-not-allowed" : "bg-amber-400 hover:bg-amber-500"}`}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="mt-4 text-green-600 font-semibold text-center">
                Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-red-600 font-semibold text-center">
                Failed to send message. Try again.
              </p>
            )}
          </form>
        </motion.div>

        {/* Right: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center space-y-10 text-gray-700"
        >
          <div>
            <h3 className="font-semibold mb-3 text-lg text-gray-900">Email</h3>
            <a href="mailto:info@ascendfintech.com" className="text-blue-600 hover:underline break-words">
              info@ascendfintech.com
            </a>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-lg text-gray-900">Website</h3>
            <a href="https://www.ascendfintech.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-words">
              www.ascendfintech.com
            </a>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-lg text-gray-900">WhatsApp</h3>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-green-600 hover:underline font-medium text-lg"
              aria-label="Chat with us on WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.52 3.48a11.8 11.8 0 00-16.67 16.67l-1.72 5.9 6.07-1.6a11.8 11.8 0 0012.32-20.97zm-9.48 17.06a9.47 9.47 0 01-5.07-1.4l-.36-.22-3.02.8.8-3.01-.23-.37a9.52 9.52 0 1111.88 4.2 9.3 9.3 0 01-3 2.1z" />
                <path d="M16.25 14.4l-1.3-.6a.36.36 0 00-.5.17l-.6 1.3a.68.68 0 01-.54.38 6.08 6.08 0 01-2.96-1.33 6.05 6.05 0 01-1.83-2.46.68.68 0 01.37-.9l1.29-.6a.36.36 0 00.17-.5l-.6-1.29a.68.68 0 01.38-.9 4.06 4.06 0 013.15-.27c.68.22 1.3.6 1.83 1.13a4.05 4.05 0 01.94 1.69 4.1 4.1 0 01-.27 3.15.68.68 0 01-.91.38z" />
              </svg>
              +971 54 458 9936
            </a>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-lg text-gray-900">Countries</h3>
            <p className="text-lg font-medium">UAE | India | UK</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
