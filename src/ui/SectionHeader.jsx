"use client";

import { useState, useEffect, useRef } from "react";
import BlurText from "./BlurText";
import { motion } from "framer-motion";

const SectionHeader = ({title}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="flex items-center justify-center mb-16">
      <div className="relative">
        <BlurText
          text={title}
          delay={200}
          animateBy="words"
          direction="top"
          className="text-4xl font-bold md:text-5xl mb-5 text-center text-purple-300"
        />
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={
            isVisible ? { width: "100%", opacity: 1 } : { width: 0, opacity: 0 }
          }
          transition={{ delay: 1.5, duration: 1.2, ease: "easeOut" }}
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-purple-800 via-pink-800 to-purple-800 rounded-full"
        />
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={
            isVisible
              ? { x: "100%", opacity: [0, 1, 0] }
              : { x: "-100%", opacity: 0 }
          }
          transition={{
            delay: 3,
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut",
          }}
          className="absolute -bottom-1 left-0 w-3 h-3 bg-white rounded-full shadow-lg"
        />
      </div>
    </div>
  );
};

export default SectionHeader;
