"use client";

import React, { useState } from "react";
import styles from "@/styles/servicecardvariant.module.css";
import DownArrow from "../icons/DownArrow";
import DownArrow2 from "../icons/DownArrow2";
import UpArrow from "../icons/UpArrow";
import UpArrow2 from "../icons/UpArrow2";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ServiceCardVariant = ({ image, title, services }) => {
  const [expanded, setExpanded] = useState(false);
  const [expandedService, setExpandedService] = useState(null);
  const [buttonStyle, setButtonStyle] = useState(styles.button);

  const router = useRouter();

  const toggleExpand = () => {
    setExpanded(!expanded);
    setButtonStyle(expanded ? styles.button : styles.buttonActive);
  };

  const toggleServiceExpand = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  const handleClick = () => {
    router.push("/pages/form");
  };

  return (
    <>
      <div className={styles.service}>
        <div className={styles.container}>
          <Image
            src={image}
            alt="Service"
            width={400}
            height={350}
            layout="intrinsic"
            quality={100}
            className={styles.image}
          />
          <div className={styles.description}>
            <h2>{title}</h2>
            <button className={buttonStyle} onClick={toggleExpand}>
              <span>Más información</span>{" "}
              {expanded ? <UpArrow2 /> : <DownArrow2 />}
            </button>
          </div>
        </div>

        <div
          className={
            expanded ? styles.extraContentExpanded : styles.extraContent
          }
        >
          <ul className={styles.serviceList}>
            {services.map((service, index) => (
              <li key={index} className={styles.serviceItem}>
                <div
                  className={styles.serviceHeader}
                  onClick={() => toggleServiceExpand(index)}
                >
                  <span className={styles.name}>
                    <span>-</span> {service.name}
                  </span>

                  <span className={styles.time}> {service.time}</span>
                  <span className={styles.icon}>
                    {expandedService === index ? <UpArrow /> : <DownArrow />}
                  </span>
                </div>
                <div
                  className={
                    expandedService === index
                      ? styles.serviceDescriptionExpanded
                      : styles.serviceDescription
                  }
                >
                  {service.description} {""}
                  <button
                    onClick={() => {
                      handleClick();
                    }}
                    className={styles.descriptionButton}
                  >
                    Obtener programa
                  </button>
                </div>
              </li>
            ))}

            <button
              className={styles.closeButton}
              onClick={() => setExpanded(false)}
            >
              Cerrar
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ServiceCardVariant;
