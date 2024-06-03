import React from "react";
import styles from "@/styles/copy.module.css";

const CopyRight = () => {
  return (
    <div class={styles.copy}>
      <p>
        © {new Date().getFullYear()} Grupo Yatab. Todos los derechos reservados.
      </p>
    </div>
  );
};

export default CopyRight;
