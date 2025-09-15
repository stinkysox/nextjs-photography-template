"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./gallery.module.css";
import CategoryTabsGallery from "@/components/CategoryTabsGallery/CategoryTabsGallery";

const carouselImagesTop = [
  "https://i.pinimg.com/736x/50/cf/c0/50cfc0f6da2be7aff01f2fda880c9787.jpg",
  "https://i.pinimg.com/736x/bd/94/d3/bd94d3f1551ed1b685859ac76425c523.jpg",
  "https://i.pinimg.com/736x/3c/2e/3c/3c2e3c20a8befa7fcb748680e84ea183.jpg",
  "https://i.pinimg.com/736x/f2/88/33/f28833d87f5b573f880c53cf9fdb6a66.jpg",
];
const carouselImagesBottom = [
  "https://i.pinimg.com/736x/b8/83/9c/b8839c1c4628a659c350798ea2b6bfed.jpg",
  "https://i.pinimg.com/1200x/7f/ac/39/7fac39ab29f2092ec7aae2cbb42578a0.jpg",
  "https://i.pinimg.com/1200x/10/34/43/103443b385a48efd93de049d16d53cd4.jpg",
  "https://i.pinimg.com/736x/fd/75/1a/fd751a75691c6a8df9be010dabb302a3.jpg",
];

export default function CarouselSection() {
  return (
    <>
      <section className={styles.carouselSection}>
        <motion.div
          className={styles.marqueeRow}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {carouselImagesTop.concat(carouselImagesTop).map((src, i) => (
            <div key={i} className={styles.carouselItem}>
              <Image
                src={src}
                alt={`Top ${i}`}
                width={250}
                height={150}
                className={styles.carouselImg}
              />
            </div>
          ))}
        </motion.div>

        {/* Bottom Row (opposite direction) */}
        <motion.div
          className={styles.marqueeRow}
          animate={{ x: ["-50%", "0%"] }} // swap direction properly
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {carouselImagesBottom.concat(carouselImagesBottom).map((src, i) => (
            <div key={i} className={styles.carouselItem}>
              <Image
                src={src}
                alt={`Bottom ${i}`}
                width={250}
                height={150}
                className={styles.carouselImg}
              />
            </div>
          ))}
        </motion.div>
      </section>
      <CategoryTabsGallery />
    </>
  );
}
