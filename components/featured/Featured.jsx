import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <b>Hey, Nova here!</b> <br />
        Discover my stories and creative ideas.
      </h2>
      {/* <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>This is one of the most amazing blog websites.</h1>
          <p className={styles.postDesc}>
            Nova has created an amazing blog web app using NextJs , Mongodb Atlas , Prisma , GoofleAuth , Firebase and various other technologies.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div> */}
    </div>
  );
};

export default Featured;