"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Description.module.css";

export default function Description() {
  return (
    <section className={styles.description}>
      {/* Animated Image */}
      <motion.div
        className={styles.imageContainer}
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image
          src="https://i.pinimg.com/564x/2f/54/7f/2f547f34a610119e851325261b5c6b7e.jpg"
          alt="Photography Description"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </motion.div>

      {/* Animated Text */}
      <motion.div
        className={styles.textContainer}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        <h2>Moments Frozen in Time</h2>
        <p>
          Every photograph captures a story, a feeling, a memory that lasts
          forever. Our passion is turning fleeting moments into timeless art
          through the lens.
        </p>
      </motion.div>
    </section>
  );
}
