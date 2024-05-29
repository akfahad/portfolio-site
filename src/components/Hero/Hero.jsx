import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Abdul. </h1>
        <p className={styles.description}>
        I'm a software engineering student at Centennial College. I am experienced with multiple programming languages, such as C#, Java, JavaScript, and Python. My Centennial student id is 301358013. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:mkader4@my.centennialcollege.ca" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};