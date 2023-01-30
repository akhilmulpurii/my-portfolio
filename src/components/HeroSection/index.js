import * as React from "react";
import { motion } from "framer-motion";

// markup
const HeroSection = () => {
  return (
    <motion.section
      className="hero-section"
      initial={{ opacity: 0, scale: 1.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      Akhil Mulpuri,
      <br />
      UI-UX Developer
    </motion.section>
  );
};

export default HeroSection;
