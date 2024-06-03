import React from "react";
import styles from "@/styles/About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Sobre Nuestra Empresa</h2>
      <div className={styles.content}>
        <p className={styles.description}>
          Desde nuestra fundación en Guatemala en el año 2020, nos hemos
          destacado como una firma líder en consultoría de capacitación
          empresarial en toda Centroamérica. Nos complace ofrecer programas de
          formación totalmente personalizados, diseñados específicamente para
          satisfacer las necesidades únicas de cada empresa. Creemos firmemente
          en la importancia de la adaptabilidad, y es por eso que nunca
          entregamos un programa idéntico a otro.
        </p>
        <p className={styles.description}>
          Entendemos que cada organización tiene su propia esencia y lógica de
          negocio, y trabajamos estrechamente con nuestros clientes para
          desarrollar soluciones que generen el mayor retorno de inversión
          posible y promuevan la satisfacción tanto de los empleados como de los
          líderes de la empresa. Nuestro compromiso va más allá de la simple
          capacitación; nuestras soluciones están diseñadas para que los
          participantes puedan aplicar de manera inmediata los conocimientos
          adquiridos, aumentando así su eficiencia y productividad en sus roles
          y contribuyendo al logro de las metas organizacionales. Nuestro equipo
          está formado por especialistas altamente capacitados y experimentados
          en una variedad de áreas empresariales, incluyendo productividad,
          tecnología, desarrollo de habilidades personales, inteligencia
          artificial, liderazgo, modelos de negocios y gestión de equipos y
          proyectos.
        </p>
        <p className={styles.description}>
          Hemos tenido el privilegio de trabajar con clientes de diversos
          sectores, y nos enorgullece haber contribuido al aumento de la
          productividad y la satisfacción del cliente en cada uno de ellos.
          Nuestro objetivo es expandirnos a toda Centroamérica como un solo
          mercado integrado, satisfaciendo las necesidades propias de cada país.
          Nos dedicamos a buscar el mejor conocimiento disponible, estableciendo
          relaciones sólidas con la academia, universidades, el mundo
          empresarial y otros consultores expertos, todo con el objetivo de
          ofrecer la solución más avanzada y efectiva disponible en el mercado
        </p>
      </div>
    </div>
  );
};

export default About;
