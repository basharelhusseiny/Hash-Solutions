"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import BackgroundElements from "./components/BackgroundElements";
import PartnersSection from "./components/PartnersSection";
import ProcessSection from "./components/ProcessSection";
import StatsGrid from "./components/StatsGrid";
import CTASection from "./components/CTASection";
import HeroSection from "./components/HeroSection";

const BusinessPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayImage, setDisplayImage] = useState("/images/meetHash.png");
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div
      ref={sectionRef}
      className="pt-32 pb-16 relative overflow-hidden bg-gradient-to-b from-gray-900 to-black"
    >
      <BackgroundElements />

      <div className="container mx-auto px-5 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center mb-8"
        >
          <HeroSection
            itemVariants={itemVariants}
            isVisible={isVisible}
            displayImage={displayImage}
            setDisplayImage={setDisplayImage}
          />
        </motion.div>

        <PartnersSection />
        <ProcessSection
          containerVariants={containerVariants}
          itemVariants={itemVariants}
          isVisible={isVisible}
        />
        <StatsGrid itemVariants={itemVariants} />
        <CTASection itemVariants={itemVariants} isVisible={isVisible} />
      </div>
    </div>
  );
};

export default BusinessPage;
