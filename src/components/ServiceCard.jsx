"use client";

import React, { useState } from "react";
import styles from "@/styles/servicecardvariant.module.css";
import DownArrow from "../icons/DownArrow";
import DownArrow2 from "../icons/DownArrow2";
import UpArrow from "../icons/UpArrow";
import UpArrow2 from "../icons/UpArrow2";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ServiceCardVariant = ({ image, title, services, definition }) => {
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
          <div className={styles.description}>
            <h2>{title} </h2>
            <button className={buttonStyle} onClick={toggleExpand}>
              <span>Más información</span>{" "}
              {expanded ? <UpArrow2 /> : <DownArrow2 />}
            </button>
          </div>
          <Image
            src={image}
            alt="Service"
            width={400}
            height={350}
            layout="intrinsic"
            quality={100}
            className={styles.image}

            // src={image}
            // alt="Service"
            // width={790}
            // height={790}
            // layout="intrinsic"
            // quality={100}
            // className={styles.image}
          />
        </div>

        <div
          className={
            expanded ? styles.extraContentExpanded : styles.extraContent
          }
        >
          <ul className={styles.serviceList}>
            {/* <p className={styles.definition}>{definition}</p> */}
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

/*
  
.serviceList {
  list-style: none;
  padding: 0;
  margin: 0;
}

.serviceItem {
  margin: 0.5rem 0;
  cursor: pointer;
}

.serviceHeader {
  display: flex;
  justify-content: center;
  align-items: center;
}

.name {
  font-weight: bold;
  font-size: 1.3rem;
  color: #ffffff;
  transition: all 0.3s ease, transform 0.3s ease;
}

.name:hover {
  color: #bebebe;
  transform: scale(1.05);

}

.time {
  font-style: italic;
  color: #bebebe;
  margin-left: 1rem;
}

.icon {
  margin-left: 0.5rem;
}

.serviceDescription,
.serviceDescriptionExpanded {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.2s ease-in, padding 0.4s ease-out;
  padding: 0 1rem;
  color: #bebebe;
  background-color: #242424;
  margin: 1rem;
  border-radius: 12px;
  text-align: left;
  transition: all 0.4s ease-in-out;
}

.serviceDescription,
.serviceDescriptionExpanded:hover {
  color: #ffffff;
}

.serviceDescriptionExpanded {
  max-height: 10rem;
  padding: 1rem;
}

 */
