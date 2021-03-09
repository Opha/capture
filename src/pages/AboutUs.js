import { motion } from "framer-motion";

import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FAQ from "../components/FAQ";

//animation
import { pageAnimation } from "../animation";

function AboutUs() {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ServicesSection />
      <FAQ />
    </motion.div>
  );
}

export default AboutUs;
