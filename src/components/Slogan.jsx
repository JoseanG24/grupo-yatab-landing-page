// components/Hero.js
import React from "react";
import Head from "next/head";
import styles from "@/styles/images.module.css";

const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.slides}>
          <div className={styles.slide}>
            <h2 className={styles.title}>
              <span className={styles.highlight}>Todos</span> nuestros programas
              son hechos <span className={styles.highlight}>a medida</span>
            </h2>
          </div>
          <div className={styles.slide}>
            <h3 className={styles.subtitle}>
              Porque ninguna <span className={styles.highlight}>empresa</span>{" "}
              es igual a otra
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
