"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SectionHeader from "@/ui/SectionHeader";

const FloatingImage = ({
  src,
  alt,
  delay = 0,
  size = 80,
  position = { top: "10%", left: "5%" },
  animationType = "float",
}) => {
  const animations = {
    float: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.1, 1],
    },
    spin: {
      rotate: [0, 360],
      scale: [0.8, 1.2, 0.8],
      opacity: [0.3, 0.7, 0.3],
    },
    pulse: {
      scale: [1, 1.3, 1],
      opacity: [0.4, 0.8, 0.4],
      rotate: [0, 10, -10, 0],
    },
  };

  return (
    <motion.div
      className="absolute pointer-events-none z-10"
      style={position}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        ...animations[animationType],
      }}
      transition={{
        opacity: { duration: 1, delay },
        scale: { duration: 1, delay },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
        rotate: { duration: 6, repeat: Infinity, ease: "easeInOut", delay },
      }}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse" />
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="relative z-10 drop-shadow-2xl filter brightness-110 contrast-110"
        />
      </div>
    </motion.div>
  );
};

const CompanyOverview = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="pt-24 pb-10 relative overflow-hidden bg-gradient-to-b from-black via-purple-950/10 to-black"
    >
      <div className="container mx-auto px-5">
        {/* Floating Animated Images */}
        <div className="absolute inset-0 pointer-events-none">
          <FloatingImage
            src="/images/hash-cup.png"
            alt="Hash Cup"
            delay={2}
            size={80}
            position={{ bottom: "25%", left: "8%" }}
            animationType="pulse"
          />
          <FloatingImage
            src="/images/hash-cup.png"
            alt="Hash Main"
            delay={3}
            size={90}
            position={{ top: "45%", right: "12%" }}
            animationType="float"
          />
          <FloatingImage
            src="/images/hash-main.png"
            alt="Hash Cup"
            delay={4}
            size={70}
            position={{ bottom: "10%", right: "25%" }}
            animationType="spin"
          />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-120 left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="container mx-auto px-5 relative z-20">
          <SectionHeader title="A Brief Story About The Company" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {/* First Card */}
            <motion.div
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(132, 0, 255, 0.3)",
              }}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-purple-900/20 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/60 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card Icon */}
              <div className="absolute -top-4 -right-4 transition-opacity duration-300">
                <Image
                  src="/images/hash-cup.png"
                  alt="Hash Main"
                  width={60}
                  height={60}
                  className="filter brightness-150"
                />
              </div>

              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3 animate-pulse" />
                  <span className="text-purple-300 text-sm font-medium">
                    Our Journey
                  </span>
                </div>

                <p className="text-gray-300 leading-relaxed text-lg group-hover:text-white transition-colors duration-300">
                  HASH Solutions is a dynamic marketing and business development
                  Company with operations in Khartoum, Sudan and Juba, South
                  Sudan. Since our inception in 2011, we've been committed to
                  delivering tailored solutions that drive business growth and
                  innovation. In 2023, we expanded to South Sudan to better
                  serve a growing demand in the region, with plans to expand
                  further into Nairobi in the near future.
                </p>
              </div>
            </motion.div>

            {/* Second Card */}
            <motion.div
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(188, 148, 199, 0.3)",
              }}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-blue-900/20 backdrop-blur-sm border border-blue-500/30 hover:border-blue-400/60 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card Icon */}
              <div className="absolute -top-4 -right-4  transition-opacity duration-300">
                <Image
                  src="/images/hash-cup.png"
                  alt="Hash Cup"
                  width={60}
                  height={60}
                  className="filter brightness-150"
                />
              </div>

              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-pulse delay-500" />
                  <span className="text-blue-300 text-sm font-medium">
                    Our Expertise
                  </span>
                </div>

                <p className="text-gray-300 leading-relaxed text-lg group-hover:text-white transition-colors duration-300">
                  Our creative, results-driven team specializes in providing
                  strategic marketing solutions, business development
                  consulting, design services, media production, and event
                  management. We pride ourselves on our ability to craft
                  impactful strategies that align with our clients' business
                  goals and deliver measurable success.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { number: "2011", label: "Founded" },
              { number: "2+", label: "Countries" },
              { number: "12+", label: "Years Experience" },
              { number: "100+", label: "Projects Delivered" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 rounded-xl bg-gradient-to-b from-purple-900/30 to-transparent border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
              >
                <div className="text-2xl md:text-3xl font-bold text-purple-300 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
