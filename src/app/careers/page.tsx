"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

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
          <h1 className="text-4xl md:text-5xl font-bold text-[#0a2540] mb-5 tracking-tight">
            Join Our Team
          </h1>
          <p>We&apos;re hiring</p> 

          <p className="text-md text-gray-500">
            Although we do not have open roles at the moment, feel free to reach out or check back soon. Stay connected through our Contact page!
          </p>
        </motion.div>
      </main>
    </>
  );
}
// --- IGNORE ---