import React from "react";
import styles from "@/styles/ejes.module.css";
import { servicesData } from "@/utils/servicesData.js";

const Ejes = () => {
  return (
    <div className={styles.descriptions}>
      <h2 className={styles.title2}>
        Sumérgete aún más en cada uno de nuestros ejes y servicios
      </h2>
      {servicesData.map((service, index) => (
        <div key={index} className={styles.description}>
          <h3 className={styles.serviceTitle}>{service.title}</h3>
          <p className={styles.definition}>{service.definition}</p>
        </div>
      ))}
    </div>
  );
};

export default Ejes;
