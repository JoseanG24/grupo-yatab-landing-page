import React from "react";
import Image from "next/image";
import styles from "@/styles/home.module.css";

const Home = () => {
  return (
    <section class={styles.hero}>
      <div class={styles.content}>
        <img
          src="/logo grupo yatab_Mesa de trabajo 1.png"
          alt="Grupo Yatab"
          className={styles.heroImage}
        />
        <h1 className={styles.title}>Consultorías Empresariales</h1>
        <p className={styles.description}>
          Nuestros expertos te ayudan a optimizar estrategias y a maximizar
          resultados.
        </p>
        <a href="#about">
          <button className={styles.button}>Descubre más</button>
        </a>
      </div>
    </section>
  );
};

export default Home;
