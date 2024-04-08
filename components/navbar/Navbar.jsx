// components/navbar/Navbar.jsx
import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <a href="https://www.facebook.com/" target="_blank"><Image src="/facebook.png" alt="facebook" width={28} height={28} /></a>
        <a href="https://www.linkedin.com/" target="_blank"><Image src="/linkedin.png" alt="linkedin" width={28} height={28} /></a>
        <a href="https://www.instagram.com/" target="_blank"><Image src="/instagram.png" alt="instagram" width={28} height={28} /></a>
        <a href="https://www.youtube.com/" target="_blank"><Image src="/youtube.png" alt="youtube" width={28} height={28} /></a>
      </div>
      <div className={styles.logo}>Nova Blogs</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>Homepage</Link>
        <Link href="/about" className={styles.link}>About</Link> 
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
