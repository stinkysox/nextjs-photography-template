"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./CategoryTabsGallery.module.css";

export default function CategoryTabsGallery() {
  const categories = {
    Wedding: [
      "https://i.pinimg.com/736x/w1.jpg",
      "https://i.pinimg.com/736x/w2.jpg",
      "https://i.pinimg.com/736x/w3.jpg",
    ],
    Prewedding: [
      "https://i.pinimg.com/736x/p1.jpg",
      "https://i.pinimg.com/736x/p2.jpg",
    ],
    Engagement: [
      "https://i.pinimg.com/736x/e1.jpg",
      "https://i.pinimg.com/736x/e2.jpg",
    ],
    Haldi: [
      "https://i.pinimg.com/736x/h1.jpg",
      "https://i.pinimg.com/736x/h2.jpg",
    ],
    Sangeet: [
      "https://i.pinimg.com/736x/s1.jpg",
      "https://i.pinimg.com/736x/s2.jpg",
    ],
    BabyShoot: [
      "https://i.pinimg.com/736x/b1.jpg",
      "https://i.pinimg.com/736x/b2.jpg",
    ],
  };

  const [activeCategory, setActiveCategory] = useState("Wedding");

  return (
    <section className={styles.categoryTabsGallery}>
      <h2>Explore Our Photos</h2>

      {/* Tabs */}
      <div className={styles.tabs}>
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            className={`${styles.tabButton} ${
              activeCategory === category ? styles.active : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Images Grid */}
      <motion.div
        className={styles.grid}
        key={activeCategory} // ensures animation triggers on change
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {categories[activeCategory].map((img, idx) => (
          <motion.div
            className={styles.gridItem}
            key={idx}
            whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
          >
            <Image
              src={img}
              alt={`${activeCategory} ${idx}`}
              width={400} // adjust width as needed
              height={300} // adjust height as needed
            />{" "}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
