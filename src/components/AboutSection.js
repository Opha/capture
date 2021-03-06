//packages
import React from "react";
import { motion } from "framer-motion";

//images
import home1 from "../img/home1.png";
import Wave from "./Wave";

//animation
import { titleAnim, fade, photoAnim } from "../animation";

//components
import {
  StyledAbout,
  StyledImage,
  StyledDescription,
  StyledHide,
} from "../styles";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div>
          <StyledHide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </StyledHide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </StyledDescription>
      <StyledImage>
        <motion.img variants={photoAnim} src={home1} alt="home" />
      </StyledImage>
      <Wave />
    </StyledAbout>
  );
};

export default AboutSection;
