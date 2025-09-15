"use client";
import { motion } from "framer-motion";
import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <section className={styles.banner}>
      <motion.h1
        className={styles.bannerTitle}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Capturing Life, One Frame at a Time
      </motion.h1>

      <motion.p
        className={styles.bannerSubtitle}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        Turning Moments into Art
      </motion.p>
    </section>
  );
}
