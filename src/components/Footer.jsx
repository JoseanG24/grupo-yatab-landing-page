"use client";
import React, { useState } from "react";
import styles from "@/styles/footer.module.css";
import axios from "axios";

function Footer() {
  // Estados para cada campo del formulario
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true); // Activar el estado de envío

    const formData = { name, email, phone, comment };

    try {
      const response = await axios.post("/api/send-data", formData);
      if (response.status === 200) {
        alert("¡Gracias por contactarnos!");
        // Limpia el formulario restableciendo los estados
        setName("");
        setEmail("");
        setPhone("");
        setComment("");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Error al enviar el formulario.");
    }
    setIsSubmitting(false); // Desactivar el estado de envío tras recibir la respuesta o un error
  };

  return (
    <div className={styles.footer}>
      <div className={styles.leftSection}>
        <h2>Hablemos sobre tu negocio.</h2>
        <div className={styles.contactInfo}>
          <div className={styles.infoItem}></div>
          <div className={styles.infoItem}>
            <div>
              <span className={styles.icon}>📧</span>
              <p>Nuestros Contactos</p>
              <h3 className={styles.name}>Oscar Rojas</h3>
              <p>orojas@yatabgt.com</p>
              <h3 className={styles.name}>Glenda Hernandez</h3>
              <p>ghernandez@yatabgt.com</p>
              <h3 className={styles.name}>General</h3>
              <p>info@yatabgt.com</p>
            </div>
          </div>
          <div className={styles.infoItem}>
            <div>
              <span className={styles.icon}>👥</span>
              <p>Síguenos en nuestras redes</p>
              <h3 className={styles.link}>
                <a href="https://www.linkedin.com/company/grupo-yatab-guatemala/" target="blank_">
                  LinkedIn
                </a>
              </h3>
              <h3 className={styles.link}>
                <a href="https://www.instagram.com/yatabgt/" target="blank_">
                  Instagram
                </a>
              </h3>
              <h3 className={styles.link}>
                <a
                  href="https://www.facebook.com/profile.php?id=61552782488866&locale=es_LA"
                  target="blank_"
                >
                  Facebook
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rightSection}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label>
            Nombre Completo / Nombre de tu empresa*
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Correo*
            <input
              type="email"
              name="email"
              placeholder="Tu Correo Electrónico"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Número telefónico*
            <input
              type="tel"
              name="phone"
              placeholder="No. de Tel."
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <label>
            ¿Cómo podemos ayudarte?*
            <textarea
              name="comment"
              placeholder="Mensaje"
              required
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </label>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? <div className={styles.spinner}></div> : "Enviar"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Footer;
