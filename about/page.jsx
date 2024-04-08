// components/about/About.jsx
import React from "react";
import styles from "./about.module.css"; // Ensure you have the appropriate CSS module imported

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Nova here!</b> <br /> </h1> <br /> <hr /><hr /><hr /><br />
        <p className="para">
          I am currently a third-year student pursuing a B.Tech in Computer Science and Engineering. Throughout my academic journey, I have developed a strong foundation in programming languages such as Java, Python, JavaScript, PHP, and C, as well as markup languages like HTML and CSS. Alongside my technical pursuits, I possess anchoring skills and a deep passion for literature. <br /><br />
          In my spare time, I find solace and inspiration in literature, which has broadened my horizons and enhanced my understanding of diverse cultures. Additionally, I have actively participated in public speaking events, honing my communication and presentation abilities. <br /><br />
          I am eager to channel my technical expertise, literary passion, and anchoring skills into impactful endeavors. Contributing to the development of innovative software solutions while fostering effective communication and promoting the appreciation of literature is my ultimate goal. <br /><br />
      </p>
      <hr />
      <hr />
      <hr />
     
    </div>
  );
};

export default About;
