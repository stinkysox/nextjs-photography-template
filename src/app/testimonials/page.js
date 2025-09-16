"use client";
import { useState } from "react";
import styles from "./testimonials.module.css";
import { FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import FormSection from "@/components/FormSection/FormSection";

const testimonialsData = [
  {
    name: "Aarav Sharma",
    review:
      "Absolutely loved their work! They captured every detail beautifully and turned our special day into a timeless memory.",
    rating: 5,
  },
  {
    name: "Priya Verma",
    review:
      "The videos and pictures are stunning. The team is highly professional and creative. Totally recommend them!",
    rating: 4,
  },
  {
    name: "Rahul Mehta",
    review:
      "Very cooperative and friendly. The quality of editing and storytelling is beyond expectations.",
    rating: 5,
  },
  {
    name: "Sneha Kapoor",
    review:
      "We're absolutely thrilled with the photos! Every moment was captured perfectly, and the experience was seamless.",
    rating: 5,
  },
  {
    name: "Rohan Desai",
    review:
      "Can't recommend them enough! Their attention to detail and creativity made our event unforgettable.",
    rating: 4,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((prev) => (prev + 1) % testimonialsData.length);
  const prev = () =>
    setIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));

  return (
    <section className={styles.testimonialsSection}>
      {/* Hero */}
      <motion.div
        className={styles.hero}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1>Testimonials</h1>
      </motion.div>

      {/* Text */}
      <motion.div
        className={styles.textBlock}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <h2>What Our Clients Say</h2>
        <p>
          Our clients&rsquo; stories inspire us to deliver heartfelt films and
          photos. Here&rsquo;s what they have to say about their experience with
          us.
        </p>
      </motion.div>

      {/* Slider */}
      <div className={styles.slider}>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className={styles.reviewCard}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3>{testimonialsData[index].name}</h3>
            <p>{testimonialsData[index].review}</p>
            <div className={styles.stars}>
              {Array(testimonialsData[index].rating)
                .fill()
                .map((_, i) => (
                  <FaStar key={i} className={styles.star} />
                ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className={styles.controls}>
          <button onClick={prev}>&#60;</button>
          <button onClick={next}>&#62;</button>
        </div>
      </div>

      {/* Form Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <FormSection />
      </motion.div>
    </section>
  );
}
