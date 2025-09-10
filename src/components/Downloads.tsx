import React from 'react';
import { motion, type Variants } from 'framer-motion';
import content from '../content.json';
import { FaWindows, FaAndroid, FaLinux } from 'react-icons/fa';

// Mapeo de iconos de sistema operativo a componentes de React
const OS_ICONS: { [key: string]: React.ElementType } = {
  windows: FaWindows,
  android: FaAndroid,
  linux: FaLinux,
};

const Downloads: React.FC = () => {
  const { downloads } = content;

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

  return (
    <section id="descargas" className="Pricing">
      <h2 className="Pricing-title">{downloads.title}</h2>
      <p className="Pricing-subtitle">{downloads.subtitle}</p>
      <motion.div 
        className="Pricing-table"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {downloads.platforms.map((platform, index) => {
          const IconComponent = OS_ICONS[platform.icon] || 'div'; // Fallback a un div si no hay icono
          return (
            <motion.div key={index} variants={cardVariants} className="perspective-container">
              <motion.div className="DownloadCard" whileHover={{ scale: 1.05, transition: { type: 'spring', stiffness: 300 } }}>
                <div className="DownloadCard-icon">
                  <IconComponent />
                </div>
                <h3 className="DownloadCard-name">{platform.name}</h3>
                <a 
                  href={platform.status === 'disponible' ? platform.link : undefined}
                  className={`DownloadCard-button ${platform.status !== 'disponible' ? 'disabled' : ''}`}
                >
                  {platform.status === 'disponible' ? 'Descargar' : 'Pendiente'}
                </a>
              </motion.div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  );
}

export default Downloads;