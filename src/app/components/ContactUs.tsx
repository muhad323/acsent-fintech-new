"use client";

import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const phoneNumber = "+971 54 458 9936"; // Your WhatsApp number (without + or 0)
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    // TODO: Replace this with your backend API call or email service integration
    await new Promise((r) => setTimeout(r, 1500));

    // Simulate success
    setStatus("success");

    setFormData({ name: "", email: "", message: "" });
  }

  return (
    <section
      id="contact"
      className="bg-white py-20 px-6 md:px-10 lg:px-20 text-[#0a2540]"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-1 font-semibold">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-amber-400 focus:ring-2 focus:ring-amber-400 transition"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-semibold">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-amber-400 focus:ring-2 focus:ring-amber-400 transition"
                placeholder="Your email address"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-amber-400 focus:ring-2 focus:ring-amber-400 transition"
                placeholder="Write your message here..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-amber-400 hover:bg-amber-500 text-[#0a2540] font-semibold px-6 py-3 rounded-md shadow-md transition"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="mt-4 text-green-600 font-semibold">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="mt-4 text-red-600 font-semibold">Failed to send message. Try again.</p>
            )}
          </form>
        </div>

        {/* Contact Info & WhatsApp */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-3xl font-bold mb-6">Contact Info</h2>

          <div>
            <h3 className="font-semibold mb-1">Phone / WhatsApp</h3>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-600 hover:underline"
              aria-label="Chat with us on WhatsApp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.52 3.48a11.8 11.8 0 00-16.67 16.67l-1.72 5.9 6.07-1.6a11.8 11.8 0 0012.32-20.97zm-9.48 17.06a9.47 9.47 0 01-5.07-1.4l-.36-.22-3.02.8.8-3.01-.23-.37a9.52 9.52 0 1111.88 4.2 9.3 9.3 0 01-3 2.1z" />
                <path d="M16.25 14.4l-1.3-.6a.36.36 0 00-.5.17l-.6 1.3a.68.68 0 01-.54.38 6.08 6.08 0 01-2.96-1.33 6.05 6.05 0 01-1.83-2.46.68.68 0 01.37-.9l1.29-.6a.36.36 0 00.17-.5l-.6-1.29a.68.68 0 01.38-.9 4.06 4.06 0 013.15-.27c.68.22 1.3.6 1.83 1.13a4.05 4.05 0 01.94 1.69 4.1 4.1 0 01-.27 3.15.68.68 0 01-.91.38z" />
              </svg>
              +971 50 123 4567
            </a>
          </div>

          <div>
            <h3 className="font-semibold mb-1">Email</h3>
            <a
              href="mailto:contact@ascendfintech.ae"
              className="text-[#0a2540] hover:underline"
            >
              contact@ascendfintech.ae
            </a>
          </div>

          <div>
            <h3 className="font-semibold mb-1">Address</h3>
            <p>Dubai, United Arab Emirates</p>
          </div>
        </div>
      </div>
    </section>
  );
}
