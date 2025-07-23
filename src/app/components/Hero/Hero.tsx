"use client";

import { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import BackgroundVideo from "./BackgroundVideo.tsx";
import { motion } from "framer-motion";

export default function Hero() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000); // Show content after 1 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.hero}>
      <BackgroundVideo onLoop={() => {}} />

      {/* Overlay */}
      <div
        className={`${styles.overlay} ${
          showContent ? styles.fadeInBlack : ""
        }`}
      />

      {showContent && (
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className={styles.title}>
            Digitally Transform the Business with Technology and Finance
            Management.
          </h1>
          <p className={styles.subtitle}>
            Ascend provides expert solutions for managing the finance and
            technology automation of workflows within your business. We help
            businesses achieve the next level of growth with operational
            efficiency and automation.
          </p>
          <div className={styles.buttons}>
            <a href="#contact" className={styles.primaryBtn}>
              Get a Quote
            </a>
            <a href="#services" className={styles.secondaryBtn}>
              Learn More
            </a>
          </div>
        </motion.div>
      )}
    </section>
  );
}
