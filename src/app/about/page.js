"use client";

import Masonry from "react-masonry-css";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./about.module.css";
import Services from "@/components/Services/Services";
import FormSection from "@/components/FormSection/FormSection";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut", delay: i * 0.2 },
  }),
};

export default function AboutPage() {
  return (
    <main className={styles.aboutPage}>
      {/* ===== Hero Section ===== */}
      <motion.section
        className={styles.heroSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        custom={0}
        variants={fadeUp}
      >
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroTitle}>About Us</h1>
          <h2 className={styles.heroSubtitle}>
            Capturing Your Moments, Preserving Your Memories
          </h2>
        </div>
      </motion.section>

      {/* ===== Alt Section ===== */}
      <motion.section
        className={styles.altSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={1}
        variants={fadeUp}
      >
        <h2>Hello</h2>
        <p>
          &ldquo;We believe every moment tells a story worth remembering. From
          weddings and pre-weddings to portraits and corporate shoots, our
          photography captures emotions, details, and memories that last a
          lifetime. With creativity, passion, and precision, we turn fleeting
          moments into timeless art.&rdquo;
        </p>

        <Image
          src="https://i.pinimg.com/736x/14/34/1f/14341f13c2ccb228bcef3bb02ab62b8f.jpg"
          alt="Profile"
          width={600}
          height={500}
          className={styles.centerImg}
        />
      </motion.section>

      {/* ===== Services Section ===== */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        custom={2}
        variants={fadeUp}
      >
        <Services />
      </motion.div>

      {/* ===== Final Section ===== */}
      <motion.section
        className={styles.finalSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={3}
        variants={fadeUp}
      >
        <h2>We Are A Perfect Match If You...</h2>
        <ul>
          <li>&#10003; Love timeless, cinematic photography</li>
          <li>&#10003; Value emotional storytelling</li>
          <li>&#10003; Want an elegant experience</li>
          <li>&#10003; Appreciate fine art aesthetics</li>
        </ul>
      </motion.section>

      {/* ===== Form Section ===== */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={4}
        variants={fadeUp}
      >
        <FormSection />
      </motion.div>
    </main>
  );
}
