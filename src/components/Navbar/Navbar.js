"use client";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src="https://i.pinimg.com/736x/54/41/f5/5441f5eeb70c38b5f7226ebcb585d785.jpg"
          alt="Photography Logo"
          width={50}
          height={50}
        />
      </div>

      {/* Desktop Menu */}
      <ul className={styles.navLinks}>
        <li>
          <Link href="/" legacyBehavior>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about" legacyBehavior>
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/gallery" legacyBehavior>
            <a>Gallery</a>
          </Link>
        </li>
        <li>
          <Link href="/teasers" legacyBehavior>
            <a>Teasers</a>
          </Link>
        </li>
        <li>
          <Link href="/testimonials" legacyBehavior>
            <a>Testimonials</a>
          </Link>
        </li>
        <li>
          <Link href="/contact" legacyBehavior>
            <a>Contact Us</a>
          </Link>
        </li>
      </ul>

      {/* Hamburger Button */}
      <div className={styles.hamburger} onClick={() => setMenuOpen(true)}>
        <HiMenu size={28} color="white" />
      </div>

      {/* Mobile Menu */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.menuOpen : ""}`}
      >
        {/* Close Button */}
        <div className={styles.closeIcon} onClick={() => setMenuOpen(false)}>
          <HiX size={28} />
        </div>

        <ul>
          <li>
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/gallery" onClick={() => setMenuOpen(false)}>
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/teasers" onClick={() => setMenuOpen(false)}>
              Teasers
            </Link>
          </li>
          <li>
            <Link href="/testimonials" onClick={() => setMenuOpen(false)}>
              Testimonials
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
