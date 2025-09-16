"use client";
import styles from "./Footer.module.css";
import Image from "next/image";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.tagline}>
          <h2 className={styles.footerHeading}>
            Capturing Moments, Creating Memories
          </h2>
        </div>

        {/* Quick Links */}
        <div className={styles.quickLinks}>
          <h3 className={styles.quickLinksTag}>Quick Links</h3>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/teasers">Teasers</Link>
            </li>
            <li>
              <Link href="/testimonials">Testimonials</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className={styles.socialLinks}>
          <div className={styles.icons}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
            <a href="mailto:example@gmail.com">
              <HiOutlineMail size={24} />
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p className={styles.footerBottomText}>
          © {new Date().getFullYear()} Elegant Photography. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
