"use client";

import React, { useState } from "react";
import ServicesList from "@/components/ServicesList";
import ServiceCardVariant from "@/components/ServiceCardVariant";
import ServiceCard from "@/components/ServiceCard";
import Ejes from "@/components/Ejes";
import styles from "@/styles/services.module.css";
import { servicesData } from "@/utils/servicesData.js";
import ChevronRight from "@/icons/ChevronRight";
import ChevronLeft from "@/icons/ChevronLeft";

const Services = () => {
  const [currentContent, setCurrentContent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const handleContentToggle = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentContent((prevContent) => (prevContent + 1) % 2);
      setTransitioning(false);
    }, 500); // Duration should match the CSS transition duration
  };

  const buttonText =
    currentContent === 0
      ? "Explora a fondo cada uno de nuestros ejes"
      : "Explora cada uno de nuestros servicios";
  const sectionClassName =
    currentContent === 0 ? styles.services : styles.servicesAlt;
  const ChevronIcon = currentContent === 0 ? ChevronRight : ChevronLeft;

  return (
    <section className={sectionClassName}>
      <h2 className={styles.title}>Nuestros Servicios</h2>
      <div className={styles.buttonContainer}>
        <button className={styles.exploreButton} onClick={handleContentToggle}>
          {buttonText}
          <ChevronIcon className={styles.chevronIcon} />
        </button>
      </div>
      <div className={`${styles.content} ${transitioning ? styles.fade : ''}`}>
        {currentContent === 0 ? (
          <div>
            <ServicesList />
            <div className={styles.cardsContainer}>
              {servicesData.map((service, index) => (
                <React.Fragment key={index}>
                  <div id={service.id}></div>
                  <div className={styles.border}></div>
                  {index % 2 === 0 ? (
                    <ServiceCardVariant
                      image={service.image}
                      title={service.title}
                      services={service.services}
                      definition={service.definition}
                    />
                  ) : (
                    <ServiceCard
                      image={service.image}
                      title={service.title}
                      services={service.services}
                      definition={service.definition}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        ) : (
          <Ejes />
        )}
      </div>
    </section>
  );
};

export default Services;
