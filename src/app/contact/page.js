"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";
import styles from "./contact.module.css";
import FormSection from "@/components/FormSection/FormSection";

export default function ContactPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <main className={styles.contactPage}>
      {/* Hero Section */}
      <motion.section
        className={styles.heroSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <div className={styles.heroOverlay}>
          <h1>Contact Us</h1>
          <p>
            We&apos;d love to hear from you! Let&apos;s create something
            beautiful together.
          </p>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        className={styles.whyChoose}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <h2>Why Choose Us?</h2>
        <div className={styles.choices}>
          <div className={styles.choiceCard}>
            <h3>Professional Quality</h3>
            <p>Top-notch photography and videography capturing every detail.</p>
          </div>
          <div className={styles.choiceCard}>
            <h3>Creative Storytelling</h3>
            <p>
              We turn your moments into cinematic stories that last forever.
            </p>
          </div>
          <div className={styles.choiceCard}>
            <h3>Personalized Experience</h3>
            <p>Every shoot is tailored to your style, theme, and vision.</p>
          </div>
        </div>
      </motion.section>

      {/* Contact Form */}
      <FormSection />

      {/* Social Media */}
      <motion.section
        className={styles.socialSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <h2>Reach Out On</h2>
        <div className={styles.socialIcons}>
          <a href="https://wa.me/your-number" target="_blank" rel="noreferrer">
            <FaWhatsapp className={styles.icon} />
          </a>
          <a
            href="https://instagram.com/your-profile"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className={styles.icon} />
          </a>
          <a
            href="mailto:youremail@example.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaEnvelope className={styles.icon} />
          </a>
        </div>
      </motion.section>
    </main>
  );
}
