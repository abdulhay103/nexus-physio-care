"use client";

import { motion } from "framer-motion";

const Marquee = ({ children, speed = 50 }) => {
  return (
    <div className="relative overflow-hidden whitespace-nowrap">
      <motion.div
        className="flex gap-8 lg:gap-12"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: speed }}
      >
        <div className="flex gap-8">{children}</div>
        <div className="flex gap-8">{children}</div>
      </motion.div>
    </div>
  );
};

export default Marquee;
