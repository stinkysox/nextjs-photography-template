"use client";

import Masonry from "react-masonry-css";
import Image from "next/image";
import styles from "./about.module.css";
import Services from "@/components/Services/Services";
import FormSection from "@/components/FormSection/FormSection";

const breakpointColumns = {
  default: 3,
  1100: 2,
  700: 1,
};

export default function AboutPage() {
  return (
    <main className={styles.aboutPage}>
      {/* ===== Hero Section ===== */}
      <section className={styles.heroSection}>
        <Image
          src="https://i.pinimg.com/736x/63/23/28/632328d4643f0b06d585e0c62ab1d11e.jpg"
          alt="About Hero"
          fill
          priority
          className={styles.heroImg}
        />
      </section>

      <section className={styles.altSection}>
        <h2>Hello</h2>
        <p>
          “We believe every moment tells a story worth remembering. From
          weddings and pre-weddings to portraits and corporate shoots, our
          photography captures emotions, details, and memories that last a
          lifetime. With creativity, passion, and precision, we turn fleeting
          moments into timeless art.”
        </p>
        <Image
          src="https://i.pinimg.com/736x/14/34/1f/14341f13c2ccb228bcef3bb02ab62b8f.jpg"
          alt="Profile"
          width={600}
          height={500}
          className={styles.centerImg}
        />
      </section>
      <>
        <Services />
      </>

      <section className={styles.finalSection}>
        <h2>We Are A Perfect Match If You...</h2>
        <ul>
          <li>✓ Love timeless, cinematic photography</li>
          <li>✓ Value emotional storytelling</li>
          <li>✓ Want an elegant experience</li>
          <li>✓ Appreciate fine art aesthetics</li>
        </ul>
      </section>
      <FormSection />
    </main>
  );
}
