"use client";

import React, { useState } from "react";
import styles from "@/styles/formpage.module.css";
import axios from "axios";
import { useRouter } from "next/navigation";

const FormPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [program, setProgram] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = { name, company, email, phone, program };

    try {
      const response = await axios.post("/api/get-program", formData);
      if (response.status === 200) {
        alert("¡Gracias por contactarnos! Te estaremos enviando la información por correo electrónico");
        setName("");
        setEmail("");
        setPhone("");
        setCompany("");
        setProgram("");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Error al enviar el formulario.");
    }
    setIsSubmitting(false);
  };

  const handleBackToHome = () => {
    router.push("/");
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Obtén nuestro programa</h2>
        <p className={styles.description}>Te enviaremos toda la información por medio de tu correo electrónico</p>
        <label>
          Nombre*
          <input
            type="text"
            name="name"
            placeholder="Nombre Completo"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Nombre de empresa*
          <input
            type="text"
            name="company"
            placeholder="Nombre de tu empresa"
            required
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </label>
        <label>
          Email*
          <input
            type="email"
            name="email"
            placeholder="Correo Electrónico"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Número Telefónico*
          <input
            type="tel"
            name="phone"
            placeholder="1111 2222"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <label>
          Nombre del programa*
          <input
            type="text"
            name="program"
            placeholder="Nombre del programa que desea obtener"
            required
            value={program}
            onChange={(e) => setProgram(e.target.value)}
          />
        </label>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? <div className={styles.spinner}></div> : "Enviar"}
        </button>
        <button type="button" className={styles.backButton} onClick={handleBackToHome}>
          Regresar al inicio
        </button>
      </form>
    </div>
  );
};

export default FormPage;
