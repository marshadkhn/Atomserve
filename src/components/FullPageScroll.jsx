"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import Home from "../sections/Home";
import TestSection from "../sections/TestSection";
import Navbar from "./Navbar"; // Import the Navbar here

// Define your sections and their corresponding navbar themes
const sections = [
  { component: <Home />, theme: "light" }, // Light text/icons for the dark Home section
  { component: <TestSection />, theme: "dark" }, // Dark text/icons for the light TestSection
];

export default function FullPageScroll() {
  const [index, setIndex] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const touchStartY = useRef(null);

  const handleScroll = (deltaY) => {
    if (scrolling) return;
    setScrolling(true);
    // Increased timeout to better match the animation duration
    setTimeout(() => setScrolling(false), 800);

    if (deltaY > 0 && index < sections.length - 1) {
      setIndex((prev) => prev + 1);
    } else if (deltaY < 0 && index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  const onWheel = (e) => {
    handleScroll(e.deltaY);
  };

  const onTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e) => {
    if (touchStartY.current === null) return;
    const deltaY = touchStartY.current - e.changedTouches[0].clientY;
    handleScroll(deltaY);
    touchStartY.current = null;
  };

  useEffect(() => {
    window.addEventListener("wheel", onWheel);
    window.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [index, scrolling]);

  // Determine the current theme based on the active index
  const currentTheme = sections[index].theme;

  return (
    <div className="overflow-hidden h-screen w-full relative">
      {/* Render the Navbar here and pass the current theme */}
      <Navbar theme={currentTheme} />

      <motion.div
        className="h-full w-full"
        animate={{ y: `-${index * 100}vh` }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {sections.map((section, i) => (
          <div key={i} className="h-screen w-full">
            {section.component}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
