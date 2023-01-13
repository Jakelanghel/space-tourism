import React from "react";
import { motion } from "framer-motion";

const MotionDiv = ({ children, ...props }) => {
  return (
    <motion.div
      variants={props.variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
