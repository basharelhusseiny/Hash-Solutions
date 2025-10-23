"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import BackgroundEffects from "./components/BackgroundEffects";
import OurStory from "./components/OurStory";
import MissionVisionValues from "./components/MissionVisionValues";
import SuccessMetrics from "./components/SuccessMetric";
import CTASection from "./components/CTASection";
import PageHeader from "./components/PageHeader";

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div
      ref={sectionRef}
      className="pt-38 sm:pt-34 pb-30 relative overflow-hidden bg-gradient-to-br from-black via-purple-950/20 to-black min-h-screen"
    >
      <BackgroundEffects />

      <div className="container mx-auto px-5 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <PageHeader itemVariants={itemVariants} isVisible={isVisible} />
          <OurStory itemVariants={itemVariants} />
          <MissionVisionValues itemVariants={itemVariants} />
          <SuccessMetrics itemVariants={itemVariants} />
          <CTASection itemVariants={itemVariants} />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
