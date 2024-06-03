"use client";
import React, { useState, useEffect } from "react";
import styles from "@/styles/navbar.module.css";
import MenuClosed from "@/icons/MenuClosed";
import MenuOpen from "@/icons/MenuOpen";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);
    setShow(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (window.scrollY === scrollY) {
        setShow(false);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [scrollY]);

  const navbarStyle = {
    backgroundColor: scrollY ? "rgba(0,0,0,0.6)" : "rgb(0, 0, 0)",
    transform: show ? "translateY(0)" : "translateY(-100%)",
    transition: "all 0.3s ease-in-out",
  };

  const listItemStyle = {
    margin: scrollY ? "0 1rem" : "0 3rem",
    transition: "margin 0.3s ease-in-out",
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav style={navbarStyle} className={styles.navbar}>
      <img src="/logo grupo yatab-03 - copia.png" alt="Grupo Yatab" />
      <div className={styles.menuIcon} onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <MenuClosed /> : <MenuOpen />}
      </div>
      <ul className={isMobileMenuOpen ? styles.active : ""}>
        <li style={listItemStyle}>
          <a href="#home">Inicio</a>
        </li>
        <li style={listItemStyle}>
          <a href="#about">Acerca de</a>
        </li>
        <li style={listItemStyle}>
          <a href="#services">Servicios</a>
        </li>
        <li style={listItemStyle}>
          <a href="#footer">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
