import React from 'react';
import { motion } from 'framer-motion';
import content from '../content.json';

const Hero: React.FC = () => {
  const { hero } = content;

  return (
    <section className="Hero">
      <motion.div 
        className="Hero-logo-container"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 10, duration: 0.8, delay: 0.1 }}
      >
        <motion.img 
          src={hero.schoolLogo} 
          alt="Logo de la Escuela" 
          className="Hero-school-logo-img"
          whileTap={{ rotate: 360, scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 15, duration: 0.8 }}
        />
      </motion.div>
      <motion.h1 
        className="Hero-headline animated-gradient-text"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 10, duration: 0.8, delay: 0.3 }}
      >
        {hero.headline}
      </motion.h1>
      <motion.p 
        className="Hero-subheadline"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 10, duration: 0.8, delay: 0.6 }}
      >
        {hero.subheadline}
      </motion.p>
      <motion.a 
        href="#temas" 
        className="Hero-cta"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 10, duration: 0.5, delay: 0.9 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {hero.cta}
      </motion.a>
    </section>
  );
};

export default Hero;
