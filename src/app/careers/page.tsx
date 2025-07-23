"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Link from "next/link"; // ✅ FIXED: Import next/link

export default function CareerPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 px-4 md:px-12 lg:px-24 bg-gradient-to-br from-white via-blue-50 to-blue-100">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg border border-blue-100 p-10 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#0a2540] mb-4 tracking-tight">
            Join Our Team
          </h1>

          <p className="text-lg text-blue-600 font-medium mb-2">
            We’re hiring!
          </p>

          <p className="text-md text-gray-600 leading-relaxed">
            While there are no open roles currently, we encourage you to stay connected and check back soon.
            In the meantime, feel free to reach out to us via our{" "}
            <Link href="/" className="text-blue-500 underline">Contact page</Link>.
          </p>
        </motion.div>
      </main>
    </>
  );
}
