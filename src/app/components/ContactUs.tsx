"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
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
      className="bg-gray-100 py-20 px-6 md:px-12 lg:px-24 font-inter text-black"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Left: Form */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white p-10 rounded-3xl shadow-xl border border-gray-200 h-full flex flex-col justify-between"
        >
          <div>
            <h2 className="text-4xl font-extrabold mb-4">Let’s Connect</h2>
            <p className="text-gray-800 mb-10 text-lg leading-relaxed max-w-lg">
              Partner with <span className="font-semibold">Ascend Fintech</span>{" "}
              to elevate your operations and financial stewardship.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none transition"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full font-semibold py-3 rounded-lg shadow-md text-white transition ${
                  status === "sending"
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-gray-400 hover:bg-gray-500"
                }`}
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
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>
        </motion.div>

        {/* Right: Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white p-10 rounded-3xl shadow-xl border border-gray-200 h-full flex flex-col justify-between text-black"
        >
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-1">Company</h3>
              <p className="text-base font-medium">Ascend Fintech LLC</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Email</h3>
              <a
                href="mailto:info@ascendfintech.com"
                className="text-gray-600 hover:underline break-words"
              >
                info@ascendfintech.com
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Phone</h3>
              <a
                href="tel:+971544589936"
                className="text-gray-800 font-medium hover:underline"
              >
                +971 54 458 9936
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Website</h3>
              <a
                href="https://www.ascendfintech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:underline break-words"
              >
                www.ascendfintech.com
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Address</h3>
              <p className="text-base font-medium leading-relaxed">
                SHAMS, Al Messaned,
                <br />
                Al Bataeh, Sharjah,
                <br />
                United Arab Emirates.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Countries</h3>
              <p className="text-base font-medium">UAE | India | UK</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className=" rounded-full shadow-xl hover:bg-green-600 transition"
          aria-label="Chat with us on WhatsApp"
        >
          <img
            src="Whatsapp.png"
            alt="Chat on WhatsApp"
            className="w-12 h-12"
          />
        </a>
        <span className="text-sm text-black bg-white-500 px-3 py-1 rounded-full shadow-md">
          Chat With Us
        </span>
      </div>
    </section>
  );
}
