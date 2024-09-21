"use client";

import { motion } from "framer-motion";

const Marquee = ({ children, speed = 50 }) => {
  return (
    <div className="relative overflow-hidden whitespace-nowrap">
      <motion.div
        className="flex space-x-8"
        animate={{ x: ["100%", "0%"] }} // Smooth transition from 100% to -100%
        transition={{ repeat: Infinity, ease: "linear", duration: speed }}
      >
        {/* Render the content twice to make the animation seamless */}
        <div className="flex space-x-8">{children}</div>
        <div className="flex space-x-8">{children}</div>
      </motion.div>
    </div>
  );
};

export default Marquee;
