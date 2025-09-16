"use client";
import { motion } from "framer-motion";
import styles from "./teasers.module.css";

const teaserVideos = [
  "https://www.youtube.com/embed/ZTO4WQ-0d_s",
  "https://www.youtube.com/embed/2gwB5UbWaSQ",
  "https://www.youtube.com/embed/HFRRwuhWGe8",
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Teasers() {
  return (
    <section className={styles.teasersSection}>
      {/* Hero */}
      <motion.div
        className={styles.hero}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className={styles.heroContent}>
          <h1>Teasers</h1>
          <p>Creating timeless films from your most special moments</p>
        </div>
      </motion.div>

      {/* Text Section */}
      <motion.div
        className={styles.textBlock}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <h2>Forever Memories, Beautifully Crafted</h2>
        <p>
          Our teasers are not just videos, they are emotional journeys that
          reflect your story and the love shared in every moment.
        </p>
      </motion.div>

      {/* YouTube Videos */}
      <div className={styles.videoList}>
        {teaserVideos.map((link, index) => (
          <motion.div
            key={index}
            className={styles.videoWrapper}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + index * 0.2 }} // staggered appearance
          >
            <iframe
              src={link}
              title={`Teaser Video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
