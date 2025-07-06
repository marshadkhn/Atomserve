"use client";
import { motion } from "framer-motion";

export default function Section({ children }) {
  return (
    <motion.div
      className="w-full h-screen flex items-center justify-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{
        duration: 0.6,
        // ease: [0.25, 0.46, 0.45, 0.94], // smooth easeOut
      }}
    >
      {children}
    </motion.div>
  );
}
