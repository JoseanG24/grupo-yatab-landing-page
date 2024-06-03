import React from "react";
import styles from "@/styles/servicelist.module.css";

const services = [
  { name: "Estrategia y futuro de la empresa", link: "#estrategia" },
  { name: "Gestión en la empresa", link: "#gestion" },
  { name: "Habilidades blandas", link: "#habilidades" },
  { name: "IA y Big Data empresarial", link: "#ia" },
  { name: "IT Management", link: "#it" },
  { name: "Productividad", link: "#productividad" },
  { name: "Ventas y comercialización", link: "#ventas" },
];

const ServicesList = () => {
  return (
    <div className={styles.servicesList}>
      <ul className={styles.list}>
        {services.map((service) => (
          <li key={service.name} className={styles.listItem}>
            <a href={service.link} className={styles.link}>
              {service.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesList;
