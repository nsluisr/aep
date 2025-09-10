import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaCode, FaInfinity, FaRocket } from 'react-icons/fa';
import content from '../content.json';

const iconMap: { [key: string]: React.ReactElement } = {
  "Complejidad Temporal y Espacial": <FaBook />,
  "Notación Big O": <FaInfinity />,
  "Algoritmos de Búsqueda y Ordenamiento": <FaCode />,
  "Optimización de Código": <FaRocket />
};

const Topics: React.FC = () => {
  const { topics } = content;
  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 1 }
    }
  };

  const iconHover = { scale: 1.2, rotate: 5 };

  return (
    <section id="temas" className="Projects">
      <h2 className="Projects-title">{topics.title}</h2>
      <motion.div 
        className="ProjectCard"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        variants={cardVariants}
      >
        <div className="ProjectCard-header">
          <h3 className="ProjectCard-name">{topics.card.name}</h3>
          <span className="ProjectCard-status">{topics.card.status}</span>
        </div>
        <p className="ProjectCard-description">
          {topics.card.description}
        </p>
        <ul className="ProjectCard-features">
          {topics.card.features.map((feature, index) => (
            <li key={index}>
              <motion.span whileHover={iconHover}>{iconMap[feature] || <FaBook />}</motion.span> {feature}
            </li>
          ))}
        </ul>
      </motion.div>
      <div className="Technical-details">
        <p>Este proyecto representa un esfuerzo de desarrollo no convencional, forjado con la potencia y flexibilidad de Godot Engine sobre la robusta plataforma de Arch Linux. Cada línea de código y cada pixel han sido trabajados con una dedicación profesional, buscando trascender los límites de un proyecto escolar convencional para entregar una experiencia de juego única y de alta calidad.</p>
      </div>
    </section>
  );
}

export default Topics;
