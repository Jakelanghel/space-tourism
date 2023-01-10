import React from "react";
import { motion } from "framer-motion";
import { pageVariants } from "../../../variants/pageVariants";

const PageAnimation = ({ children }) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default PageAnimation;
