"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./FormSection.module.css";
import Footer from "../Footer/Footer";

const eventOptions = [
  { value: "wedding", label: "Wedding" },
  { value: "prewedding", label: "Pre-Wedding" },
  { value: "maternity", label: "Maternity" },
  { value: "other", label: "Other" },
];

const FormSection = () => {
  const [activeOption, setActiveOption] = useState("");

  return (
    <section className={styles.formSection}>
      {/* Top Images */}
      <div className={styles.imageRow}>
        <div className={styles.squareImage}>
          <Image
            src="https://picsum.photos/200/200?random=1"
            alt="Sample 1"
            width={200}
            height={200}
          />
        </div>
        <div className={styles.squareImage}>
          <Image
            src="https://picsum.photos/200/200?random=2"
            alt="Sample 2"
            width={200}
            height={200}
          />
        </div>
        <div className={styles.squareImage}>
          <Image
            src="https://picsum.photos/200/200?random=3"
            alt="Sample 3"
            width={200}
            height={200}
          />
        </div>
      </div>

      {/* Form */}
      <div className={styles.formWrapper}>
        <h2 className={styles.formTitle}>Book Your Shoot</h2>
        <form className={styles.form}>
          <input type="text" placeholder="Your Name" required />
          <input type="tel" placeholder="Phone Number" required />

          {/* Floating Tabs */}
          <div className={styles.optionsRow}>
            {eventOptions.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => setActiveOption(opt.value)}
                className={`${styles.optionButton} ${
                  activeOption === opt.value ? styles.active : ""
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormSection;
