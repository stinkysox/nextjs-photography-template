"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./FormSection.module.css";
import Footer from "../Footer/Footer";

const eventOptions = [
  { value: "wedding", label: "Wedding" },
  { value: "prewedding", label: "PreWedding" },
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
            src="https://i.pinimg.com/736x/15/7c/41/157c4193953156c29c314cc87f694946.jpg"
            alt="Sample 1"
            width={200}
            height={200}
          />
        </div>
        <div className={styles.squareImage}>
          <Image
            src="https://i.pinimg.com/736x/3e/5b/ad/3e5bad397c709814ae3be095a30a6038.jpg"
            alt="Sample 2"
            width={200}
            height={200}
          />
        </div>
        <div className={styles.squareImage}>
          <Image
            src="https://i.pinimg.com/736x/2d/ac/b1/2dacb16e39d5553ba2fd73e60e175f3b.jpg"
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
