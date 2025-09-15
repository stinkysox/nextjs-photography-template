"use client";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import styles from "./Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src="https://i.pinimg.com/736x/54/41/f5/5441f5eeb70c38b5f7226ebcb585d785.jpg"
          alt="Photography Logo"
          width={50} // specify width
          height={50} // specify height
        />
      </div>

      {/* Desktop Menu */}
      <ul className={styles.navLinks}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#teasers">Teasers</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>

      {/* Hamburger Button for opening */}
      <div className={styles.hamburger} onClick={() => setMenuOpen(true)}>
        <HiMenu size={28} color="black" />
      </div>

      {/* Mobile Menu */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.menuOpen : ""}`}
      >
        {/* Close Button inside the mobile menu */}
        <div className={styles.closeIcon} onClick={() => setMenuOpen(false)}>
          <HiX size={28} />
        </div>

        <ul>
          <li>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#gallery" onClick={() => setMenuOpen(false)}>
              Gallery
            </a>
          </li>
          <li>
            <a href="#teasers" onClick={() => setMenuOpen(false)}>
              Teasers
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={() => setMenuOpen(false)}>
              Testimonials
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
