"use client";

import { motion } from "framer-motion";

const Marquee = ({ children, speed = 50 }) => {
  return (
    <div className="relative overflow-hidden whitespace-nowrap">
      <motion.div
        className="flex space-x-8"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: speed }}
      >
        <div className="flex space-x-8 lg:space-x-10">{children}</div>
        <div className="flex space-x-8 lg:space-x-10">{children}</div>
      </motion.div>
    </div>
  );
};

export default Marquee;
