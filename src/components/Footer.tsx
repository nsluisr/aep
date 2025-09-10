import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa';
import content from '../content.json';

const Footer: React.FC = () => {
  const { footer } = content;

  return (
    <footer className="Footer">
      
      <p>Desarrollado con Godot Engine en Arch Linux.</p>
      <p>{footer.copyright}</p>
    </footer>
  );
}

export default Footer;
