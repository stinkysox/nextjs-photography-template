"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./PhotoGrid.module.css";

export default function PhotoGrid() {
  const images = [
    "https://i.pinimg.com/736x/ec/de/74/ecde746dedc23410debbdded7bd67c18.jpg",
    "https://i.pinimg.com/736x/2c/79/49/2c7949bb2d7c00a4bb6e3864e92431c4.jpg",
    "https://i.pinimg.com/736x/12/45/70/124570cb15e2fa0215ba74111f7b6685.jpg",
    "https://i.pinimg.com/736x/42/64/2f/42642f306fe0fc380e5b3e6402f8b348.jpg",
    "https://i.pinimg.com/736x/92/35/bd/9235bd4352c62d72340e4ff4a274ecaf.jpg",
    "https://i.pinimg.com/736x/f7/59/1e/f7591ef2ba6eb343b1c2e5ae97c95fb9.jpg",
    "https://i.pinimg.com/736x/b0/1a/89/b01a8984521e619cfe7dac85d41a5b71.jpg",
    "https://i.pinimg.com/736x/ee/f5/15/eef5154f0542014e9fcb030895e4d616.jpg",
    "https://i.pinimg.com/736x/78/72/43/7872436433a540e4706b69b3eb399bc8.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <section className={styles.photoGrid}>
        {images.map((src, index) => (
          <motion.div
            key={index}
            className={styles.gridItem}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            onClick={() => setSelectedImage(src)}
            whileHover={{ scale: 1.05 }}
            style={{ cursor: "pointer" }}
          >
            <Image
              src={src}
              alt={`Photo ${index + 1}`}
              fill
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        ))}
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className={styles.lightboxOverlay}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className={styles.lightboxContent}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <Image
              src={selectedImage}
              alt="Enlarged Photo"
              width={800}
              height={600}
              style={{ objectFit: "contain" }}
            />
          </motion.div>
        </div>
      )}
    </>
  );
}
