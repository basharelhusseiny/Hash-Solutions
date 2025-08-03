"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import BlurText from "@/ui/BlurText";
import { FaEye, FaBullseye, FaGem, FaRocket, FaStar } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import SectionHeader from "@/ui/SectionHeader";
import Image from "next/image";

const OurPhilosophy = () => {
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
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180, opacity: 0 },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: 0.2,
      },
    },
  };

  const glowVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 relative overflow-hidden bg-gradient-to-b from-black via-purple-950/10 to-black"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Floating Hash Images */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-40 left-10"
          >
            <Image
              src="/images/hash-main.png"
              alt="Hash Main"
              width={100}
              height={100}
            />
          </motion.div>

          <motion.div
            animate={{
              y: [0, 15, 0],
              rotate: [0, -10, 10, 0],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-1/3 right-16"
          >
            <Image
              src="/images/hash-cup.png"
              alt="Hash Main"
              width={80}
              height={80}
            />
          </motion.div>

          <motion.div
            animate={{
              y: [0, -25, 0],
              rotate: [0, 15, -15, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-32 left-20"
          >
            <Image
              src="/images/hash-cup.png"
              alt="Hash Main"
              width={90}
              height={90}
            />
          </motion.div>

          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 8, -8, 0],
              scale: [1.1, 0.9, 1.1],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
            className="absolute bottom-20 right-1/4"
          >
            <Image
              src="/images/hash-main.png"
              alt="Hash Main"
              width={85}
              height={85}
            />
          </motion.div>
        </div>
      </div>

      <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-120 left-120 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            className="relative inline-block"
          >
            <SectionHeader title="Our Philosophy" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="relative"
          >
            <p className="text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed font-light">
              To re-invent how people share knowledge, tell stories, & inspire
              their audience, and to put clients at the center of their business
              by providing a range of creative high quality technical assistance
              & professional service essentials to business enterprises at a
              timely & cost effective manner.
            </p>
            {/* Underline Animation */}
            <motion.div
              initial={{ width: 0 }}
              animate={isVisible ? { width: "60%" } : { width: 0 }}
              transition={{ delay: 1.5, duration: 1.2 }}
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-purple-700 to-transparent"
            />
          </motion.div>
        </div>

        {/* Enhanced Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {/* Mission Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              scale: 1.03,
              y: -5,
              boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)",
            }}
            className="group relative p-6 rounded-2xl bg-gradient-to-br from-purple-900/50 to-purple-800/20 backdrop-blur-lg border border-purple-500/30 hover:border-purple-400/60 transition-all duration-500 overflow-hidden"
          >
            {/* Subtle Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-purple-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <motion.div
                variants={iconVariants}
                className="w-16 h-16 mb-5 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg"
              >
                <FiTarget className="text-2xl text-white" />
              </motion.div>

              <h3 className="text-xl font-bold text-purple-300 mb-3 group-hover:text-white transition-colors duration-300">
                OUR MISSION
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 text-sm">
                To inspire businesses & to help them become more productive &
                successful.
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              scale: 1.03,
              y: -5,
              boxShadow: "0 20px 40px rgba(236, 72, 153, 0.3)",
            }}
            className="group relative p-6 rounded-2xl bg-gradient-to-br from-pink-900/50 to-pink-800/20 backdrop-blur-lg border border-pink-500/30 hover:border-pink-400/60 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600/10 to-pink-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <motion.div
                variants={iconVariants}
                className="w-16 h-16 mb-5 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg"
              >
                <FaEye className="text-2xl text-white" />
              </motion.div>

              <h3 className="text-xl font-bold text-pink-300 mb-3 group-hover:text-white transition-colors duration-300">
                VISION
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 text-sm">
                To be a highly ethical & quality service house to vibrant privet
                & governmental establishments.
              </p>
            </div>
          </motion.div>

          {/* Goals Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              scale: 1.03,
              y: -5,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
            }}
            className="group relative p-6 rounded-2xl bg-gradient-to-br from-blue-900/50 to-blue-800/20 backdrop-blur-lg border border-blue-500/30 hover:border-blue-400/60 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <motion.div
                variants={iconVariants}
                className="w-16 h-16 mb-5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg"
              >
                <FaBullseye className="text-2xl text-white" />
              </motion.div>

              <h3 className="text-xl font-bold text-blue-300 mb-3 group-hover:text-white transition-colors duration-300">
                OUR GOALS
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 text-sm">
                To create business growth by focusing on current & absent market
                opportunities.
              </p>
            </div>
          </motion.div>

          {/* Values Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              scale: 1.03,
              y: -5,
              boxShadow: "0 20px 40px rgba(168, 85, 247, 0.3)",
            }}
            className="group relative p-6 rounded-2xl bg-gradient-to-br from-violet-900/50 to-violet-800/20 backdrop-blur-lg border border-violet-500/30 hover:border-violet-400/60 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-violet-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <motion.div
                variants={iconVariants}
                className="w-16 h-16 mb-5 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg"
              >
                <FaGem className="text-2xl text-white" />
              </motion.div>

              <h3 className="text-xl font-bold text-violet-300 mb-3 group-hover:text-white transition-colors duration-300">
                VALUES
              </h3>
              <ul className="text-gray-400 space-y-2 group-hover:text-gray-200 transition-colors duration-300 text-sm">
                <li className="flex items-center">
                  <FaStar className="text-violet-400 mr-2 text-xs" />
                  Focus on innovative business ideas
                </li>
                <li className="flex items-center">
                  <FaStar className="text-violet-400 mr-2 text-xs" />
                  Practice high ethical standards
                </li>
                <li className="flex items-center">
                  <FaStar className="text-violet-400 mr-2 text-xs" />
                  Respect and protect business
                </li>
                <li className="flex items-center">
                  <FaStar className="text-violet-400 mr-2 text-xs" />
                  Meet client needs and desires
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Perks Card - Spans 2 columns */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              scale: 1.02,
              y: -5,
              boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)",
            }}
            className="group relative p-6 rounded-2xl bg-gradient-to-br from-green-900/50 to-green-800/20 backdrop-blur-lg border border-green-500/30 hover:border-green-400/60 transition-all duration-500 overflow-hidden md:col-span-2"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-green-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <motion.div
                variants={iconVariants}
                className="w-16 h-16 mb-5 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg"
              >
                <FaRocket className="text-2xl text-white" />
              </motion.div>

              <h3 className="text-xl font-bold text-green-300 mb-4 group-hover:text-white transition-colors duration-300">
                OUR PERKS
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="text-gray-400 space-y-2 group-hover:text-gray-200 transition-colors duration-300 text-sm">
                  <li className="flex items-center">
                    <FaStar className="text-green-400 mr-2 text-xs" />
                    Create new business opportunities
                  </li>
                  <li className="flex items-center">
                    <FaStar className="text-green-400 mr-2 text-xs" />
                    Increase productivity margin
                  </li>
                  <li className="flex items-center">
                    <FaStar className="text-green-400 mr-2 text-xs" />
                    Increase efficiency
                  </li>
                </ul>
                <ul className="text-gray-400 space-y-2 group-hover:text-gray-200 transition-colors duration-300 text-sm">
                  <li className="flex items-center">
                    <FaStar className="text-green-400 mr-2 text-xs" />
                    Capture bigger market share
                  </li>
                  <li className="flex items-center">
                    <FaStar className="text-green-400 mr-2 text-xs" />
                    Provide better client service
                  </li>
                  <li className="flex items-center">
                    <FaStar className="text-green-400 mr-2 text-xs" />
                    Improving the business
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurPhilosophy;
