import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <>
      <div className={styles.categoryList}>
        <Link
          href="/blog?cat=sports"
          className={`${styles.categoryItem} ${styles.sports} ${styles.offset}`}
        >
          Sports
        </Link>
        <Link
          href="/blog?cat=fashion"
          className={`${styles.categoryItem} ${styles.fashion} ${styles.offset}`}
        >
          Fashion
        </Link>
        <Link
          href="/blog?cat=food"
          className={`${styles.categoryItem} ${styles.food} ${styles.offset}`}
        >
          Food
        </Link>
        <Link
          href="/blog?cat=travel"
          className={`${styles.categoryItem} ${styles.travel} ${styles.offset}`}
        >
          Travel
        </Link>
        <Link
          href="/blog?cat=culture"
          className={`${styles.categoryItem} ${styles.culture} ${styles.offset}`}
        >
          Culture
        </Link>
        <Link
          href="/blog?cat=coding"
          className={`${styles.categoryItem} ${styles.coding} ${styles.offset}`}
        >
          Coding
        </Link>
      </div>
      <br />
      <hr />
      <hr />
      <hr />
    </>
  );
};

export default MenuCategories;
