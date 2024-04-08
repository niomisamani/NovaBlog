
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css"

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
           
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Coding</span>
          <h3 className={styles.postTitle}>
            This is developed in Next JS.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Niomi</span>
            <span className={styles.date}> - 10.03.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
           
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Coding</span>
          <h3 className={styles.postTitle}>
            The databases used are MongoDb and Prisma.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}> Niomi</span>
            <span className={styles.date}> - 10.03.2024</span>
          </div>
        </div>
      </Link> 
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
           
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Coding</span>
          <h3 className={styles.postTitle}>
            GoogleAuth , Firebase have also been used.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Niomi</span>
            <span className={styles.date}> - 10.03.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            Culture
          </span>
          <h3 className={styles.postTitle}>
            India has a diverse culture. Not just in terms of language and dressing but also in terms of food and folklore.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Sam Smith</span>
            <span className={styles.date}> - 15.02.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Food</span>
          <h3 className={styles.postTitle}>
          Virat Kohli loves Ram ke Chole Bhature. Great shop to visit in Delhi. 
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Anushka</span>
            <span className={styles.date}> - 10.02.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            Fashion
          </span>
          <h3 className={styles.postTitle}>
            Nykaa Fashion has been leading in terms of latest styles and trends.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Manish</span>
            <span className={styles.date}> - 30.01.2024</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;