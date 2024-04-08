import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="nova blog" width={50} height={50} />
          <h1 className={styles.logoText}>Nova Blog</h1>
        </div>
        <p className={styles.desc}>
          This is NS Nova. Hope you liked my blog website.
        </p>
        <div className={styles.icons}>
        <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi9mpyBtt2EAxVSl1YBHZUoCJQQFnoECA8QAQ&url=https%3A%2F%2Fwww.facebook.com%2F&usg=AOvVaw2q27ov2cpCynr72DmuSqEz&opi=89978449" target="_blank"><Image src="/facebook.png" alt="facebook" width={28} height={28} /></a>
        <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiKufmNtt2EAxWcslYBHaGzBaEQFnoECAYQAQ&url=https%3A%2F%2Fin.linkedin.com%2F&usg=AOvVaw1HyOXdC-jXyHRjrwaB7Mnw&opi=89978449" target="_blank"><Image src="/linkedin.png" alt="linkedin" width={28} height={28} /></a>
        <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjgsKbBtt2EAxVaka8BHT8yCjgQFnoECAYQAQ&url=https%3A%2F%2Fwww.instagram.com%2F&usg=AOvVaw1cBeRoOpMhZ3-x5M1sA3Fm&opi=89978449" target="_blank"><Image src="/instagram.png" alt="instagram" width={28} height={28} /></a>
        <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjGn7HLtt2EAxXhb_UHHeDxDh4QFnoECAgQAQ&url=https%3A%2F%2Fwww.youtube.com%2F&usg=AOvVaw0usXxGa_x5y1xoI_LaL0-1&opi=89978449" target="_blank"><Image src="/youtube.png" alt="youtube" width={28} height={28} /></a>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi9mpyBtt2EAxVSl1YBHZUoCJQQFnoECA8QAQ&url=https%3A%2F%2Fwww.facebook.com%2F&usg=AOvVaw2q27ov2cpCynr72DmuSqEz&opi=89978449" target="_blank">Facebook</a>
          <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiKufmNtt2EAxWcslYBHaGzBaEQFnoECAYQAQ&url=https%3A%2F%2Fin.linkedin.com%2F&usg=AOvVaw1HyOXdC-jXyHRjrwaB7Mnw&opi=89978449" target="_blank">Linkedin</a>
          <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjgsKbBtt2EAxVaka8BHT8yCjgQFnoECAYQAQ&url=https%3A%2F%2Fwww.instagram.com%2F&usg=AOvVaw1cBeRoOpMhZ3-x5M1sA3Fm&opi=89978449" target="_blank">Instagram</a>
          <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjGn7HLtt2EAxXhb_UHHeDxDh4QFnoECAgQAQ&url=https%3A%2F%2Fwww.youtube.com%2F&usg=AOvVaw0usXxGa_x5y1xoI_LaL0-1&opi=89978449" target="_blank">Youtube</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;