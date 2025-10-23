"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import BackgroundEffects from "./components/BackgroundEffects";
import PageHeader from "./components/PageHeader";
import ContactForm from "./components/ContactForm";
import ServicesSummary from "./components/ServicesSummary";
import ContactInfo from "./components/ContactInfo";
import Slogan from "./components/Slogan";

const ContactUsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
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
        <PageHeader isVisible={isVisible} />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-16">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="space-y-8"
          >
            <ContactForm isVisible={isVisible} itemVariants={itemVariants} />
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="space-y-12"
          >
            <ServicesSummary itemVariants={itemVariants} />
            <ContactInfo itemVariants={itemVariants} />
            <Slogan itemVariants={itemVariants} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
