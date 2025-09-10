import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import content from '../content.json';
import { FiGithub, FiX } from 'react-icons/fi';

// Definimos el tipo para un miembro del equipo para mejorar la seguridad del código
interface Member {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  github: string;
}

const Team: React.FC = () => {
  const { team } = content;
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  // Efecto para bloquear el scroll del body cuando el modal está abierto
  useEffect(() => {
    if (selectedMember) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '';
    }
    // Función de limpieza para reestablecer el scroll
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '';
    };
  }, [selectedMember]);

  const containerVariants: Variants = {
    offscreen: { opacity: 0 },
    onscreen: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants: Variants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: { y: 0, opacity: 1, transition: { type: "spring", bounce: 0.4, duration: 1 } }
  };

  const modalBackdropVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalContentVariants: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { type: "tween", ease: "easeOut", duration: 0.3 } 
    }
  };

  return (
    <section id="integrantes" className="Pricing">
      <h2 className="Pricing-title">{team.title}</h2>
      <p className="Pricing-subtitle">{team.subtitle}</p>
      <motion.div 
        className="Pricing-table"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {team.members.map((member: Member, index) => (
          <motion.div 
            key={index} 
            variants={cardVariants} 
            className="perspective-container"
            onClick={() => setSelectedMember(member)}
          >
            <motion.div className="TeamCard" whileHover={{ scale: 1.05, rotateY: 10, rotateX: 5, transition: { type: 'spring', stiffness: 200 } }}>
              <div className="TeamCard-avatar">
                <img src={member.avatar} alt={`Foto de ${member.name}`} />
              </div>
              <h3 className="TeamCard-name">{member.name}</h3>
              <p className="TeamCard-role">{member.role}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedMember && (
          <motion.div
            className="Modal-backdrop"
            onClick={() => setSelectedMember(null)}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={modalBackdropVariants}
          >
            <motion.div
              className="Modal-content"
              onClick={(e) => e.stopPropagation()} // Evita que el clic en el contenido cierre el modal
              variants={modalContentVariants}
            >
              <button className="Modal-close-btn" onClick={() => setSelectedMember(null)}><FiX /></button>
              <div className="Modal-avatar">
                <img src={selectedMember.avatar} alt={`Foto de ${selectedMember.name}`} />
              </div>
              <h2 className="Modal-name">{selectedMember.name}</h2>
              <h4 className="Modal-role">{selectedMember.role}</h4>
              <p className="Modal-bio">{selectedMember.bio}</p>
              {selectedMember.github && selectedMember.github !== '#' ? (
                <a href={selectedMember.github} target="_blank" rel="noopener noreferrer" className="Modal-github-link">
                  <FiGithub />
                  Ver en GitHub
                </a>
              ) : (
                <div style={{ height: '40px' }}></div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Team;