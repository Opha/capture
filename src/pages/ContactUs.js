import React from "react";
import { motion } from "framer-motion";

//animation
import { pageAnimation } from "../animation";

const ContactUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h1>This is Contact Us page</h1>
    </motion.div>
  );
};

export default ContactUs;
