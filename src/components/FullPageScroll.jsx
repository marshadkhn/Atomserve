"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import Home from "../sections/Home";
import TestSection from "../sections/TestSection";

const sections = [<Home />, <TestSection />];

export default function FullPageScroll() {
  const [index, setIndex] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const touchStartY = useRef(null);

  const handleScroll = (deltaY) => {
    if (scrolling) return;
    setScrolling(true);
    setTimeout(() => setScrolling(false), 400);

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
