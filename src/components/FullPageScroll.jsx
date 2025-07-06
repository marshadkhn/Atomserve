"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Home from "../sections/Home";
import TestSection from "../sections/TestSection"; // Import your sections here
const sections = [<Home />, <TestSection />];

export default function FullPageScroll() {
  const [index, setIndex] = useState(0);
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = (e) => {
    if (scrolling) return;
    setScrolling(true);
    setTimeout(() => setScrolling(false), 400);

    if (e.deltaY > 0 && index < sections.length - 1) {
      setIndex((prev) => prev + 1);
    } else if (e.deltaY < 0 && index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [index, scrolling]);

  return (
    <div className="overflow-hidden h-screen w-full relative">
      <motion.div
        className="h-full w-full"
        animate={{ y: `-${index * 100}vh` }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {sections.map((Section, i) => (
          <div key={i} className="h-screen w-full">
            {Section}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
