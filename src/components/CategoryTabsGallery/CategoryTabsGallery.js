"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./CategoryTabsGallery.module.css";

export default function CategoryTabsGallery() {
  const categories = {
    Wedding: [
      "https://i.pinimg.com/736x/f9/21/b3/f921b32ed85f1971bad0b5480ba2fb2c.jpg",
      "https://i.pinimg.com/736x/7d/4e/b5/7d4eb56684ed589224eb63752f22c33e.jpg",
      "https://i.pinimg.com/736x/76/77/99/767799e1603677d3bddee88e3089c88b.jpg",
      "https://i.pinimg.com/736x/27/91/56/2791561897980a13a1d81eaee23db512.jpg",
      "https://i.pinimg.com/736x/e0/b2/4e/e0b24e714b51ff7f1873817d567424b2.jpg",

      "https://i.pinimg.com/736x/1f/d8/65/1fd865aa3fbd7ca7f3c9098fd1b6689c.jpg",
      "https://i.pinimg.com/736x/57/ef/e0/57efe0c78a208adf4c346c40c73942ee.jpg",
    ],
    Prewedding: [
      "https://i.pinimg.com/736x/2f/54/7f/2f547f34a610119e851325261b5c6b7e.jpg",
      "https://i.pinimg.com/736x/31/68/b8/3168b8366b5fdc168b262603d2018024.jpg",
      "https://i.pinimg.com/736x/2d/f9/4d/2df94db13fd4ca3a01e9d208b837f76c.jpg",
      "https://i.pinimg.com/736x/a0/83/da/a083dae7e7aed69a7661645c90b33582.jpg",
      "https://i.pinimg.com/736x/a5/d2/82/a5d282664e07ad0b51e7fbb51897dadb.jpg",
      "https://i.pinimg.com/736x/bd/96/49/bd9649886956553263774f3f50681e2c.jpg",
      "https://i.pinimg.com/736x/73/d3/44/73d344e39266219250ac40e4bb651173.jpg",
      "https://i.pinimg.com/736x/27/f8/a7/27f8a7b76ce533f5f915a967fdc9421e.jpg",
      "https://i.pinimg.com/736x/a9/c6/24/a9c6242610b6ff9c120f3bfb6cf7e9d2.jpg",
      "https://i.pinimg.com/736x/8c/91/b3/8c91b388fe5426bac9bef642af384bcf.jpg",
    ],
    Engagement: [
      "https://i.pinimg.com/736x/78/72/43/7872436433a540e4706b69b3eb399bc8.jpg",
      "https://i.pinimg.com/736x/fe/59/c7/fe59c7c51fa01573049015cd9a59cea5.jpg",
      "https://i.pinimg.com/736x/f2/88/33/f28833d87f5b573f880c53cf9fdb6a66.jpg",
      "https://i.pinimg.com/736x/b8/83/9c/b8839c1c4628a659c350798ea2b6bfed.jpg",
      "https://i.pinimg.com/736x/1f/d8/65/1fd865aa3fbd7ca7f3c9098fd1b6689c.jpg",
      "https://i.pinimg.com/736x/3d/94/5a/3d945af286d9b63a8bb4f8c227a9a557.jpg",
      "https://i.pinimg.com/736x/9e/f9/ea/9ef9eac83253b73c68f62b0c791c9ec9.jpg",
    ],
    Haldi: [
      "https://i.pinimg.com/736x/3a/ba/e3/3abae3937d4c26db7fdc8a4482cdaa31.jpg",
      "https://i.pinimg.com/736x/0b/b6/b4/0bb6b4de1c1f41593327b8c7b33a7b4a.jpg",
      "https://i.pinimg.com/736x/71/d2/67/71d2672e132c9262d22491d13bb61352.jpg",
      "https://i.pinimg.com/736x/47/14/ff/4714ffa3165df1b7caca5910f52e1496.jpg",
      "https://i.pinimg.com/736x/b6/0f/e7/b60fe7edd487d3e8329a738472751436.jpg",
      "https://i.pinimg.com/736x/26/f2/36/26f23673b26505d7be32d4ee162cf500.jpg",
      "https://i.pinimg.com/736x/49/7b/01/497b015d9352f0ff6a41e7dc4059f130.jpg",
      "https://i.pinimg.com/736x/96/48/ef/9648ef2350ad0e1357497ec3ea1598ff.jpg",
      "https://i.pinimg.com/736x/c9/e5/13/c9e5137e05e42d2ffbaf6206d8c14ecb.jpg",
    ],
    Sangeet: [
      "https://i.pinimg.com/736x/b5/e4/9c/b5e49c4d9689d52af22b1138d495a1b9.jpg",
      "https://i.pinimg.com/736x/60/ed/b9/60edb9bd61299504e98ad37ce4fcad46.jpg",
      "https://i.pinimg.com/736x/51/33/30/51333013ae606638a23c9976323a0a97.jpg",
      "https://i.pinimg.com/736x/05/23/bc/0523bc8fb63887c1260ddb50cd5b39fb.jpg",
      "https://i.pinimg.com/736x/7e/af/75/7eaf75619e20497458dce4fa29570102.jpg",
      "https://i.pinimg.com/736x/16/9f/a4/169fa432626789d0d0801da3c166fcca.jpg",
    ],
    BabyShoot: [
      "https://i.pinimg.com/736x/c8/b2/26/c8b2266c8dc29b4e52c1b06162fd284d.jpg",
      "https://i.pinimg.com/736x/5f/75/32/5f75323094ae694e4f1aecae5d5ac7fa.jpg",
      "https://i.pinimg.com/736x/70/f7/85/70f785f74fb4f174c80ae2624fde120e.jpg",
      "https://i.pinimg.com/736x/e6/1f/72/e61f72e58a0b6b3336e950e776710fef.jpg",
      "https://i.pinimg.com/736x/4a/74/c1/4a74c19ef2598bb54d290c005333afb2.jpg",
      "https://i.pinimg.com/736x/61/f9/59/61f95994849bd71310bcedbdbe260900.jpg",
      "https://i.pinimg.com/736x/13/fb/bc/13fbbcbd9df338a1c57279e0f1b4bfde.jpg",
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
