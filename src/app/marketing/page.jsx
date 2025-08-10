"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  FaBullhorn,
  FaPalette,
  FaRocket,
  FaStar,
  FaArrowRight,
  FaCheckCircle,
  FaLightbulb,
  FaChartLine,
  FaDiamond,
} from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";

const MarketingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
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
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const marketingSolutions = [
    {
      icon: FaBullhorn,
      title: "Brand Strategy & Brand Positioning",
      description: "Strategic brand development and market positioning",
      color: "from-purple-600 to-purple-800",
    },
    {
      icon: FaChartLine,
      title: "Marketing & Sales Strategy",
      description: "Comprehensive marketing and sales frameworks",
      color: "from-violet-500 to-purple-700",
    },
    {
      icon: FaRocket,
      title: "Campaign Creation & Execution",
      description: "End-to-end campaign management and optimization",
      color: "from-indigo-500 to-purple-600",
    },
    {
      icon: FaLightbulb,
      title: "Sales Training Workshops",
      description: "Professional sales training and skill development",
      color: "from-purple-500 to-indigo-600",
    },
  ];

  const designSolutions = [
    {
      icon: FaPalette,
      title: "Brand Identity & Logo Design",
      description: "Complete brand identity and visual design systems",
      color: "from-violet-600 to-purple-600",
    },
    {
      icon: FaStar,
      title: "Artwork & Visual Design",
      description: "Creative artwork and visual communication design",
      color: "from-purple-600 to-violet-700",
    },
    {
      icon: FaBullhorn,
      title: "Social Media Branding",
      description: "Social media visual identity and content design",
      color: "from-indigo-600 to-purple-600",
    },
    {
      icon: FaRocket,
      title: "Print Materials & Promotional Items",
      description:
        "Flyers, billboards, corporate gifts and promotional materials",
      color: "from-purple-500 to-violet-600",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="pt-38 sm:pt-34 pb-30 relative overflow-hidden bg-gradient-to-br from-black via-purple-950/20 to-black min-h-screen"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Animated Geometric Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(30deg, transparent 40%, rgba(147, 51, 234, 0.1) 40%, rgba(147, 51, 234, 0.1) 60%, transparent 60%),
                linear-gradient(-30deg, transparent 40%, rgba(139, 69, 219, 0.1) 40%, rgba(139, 69, 219, 0.1) 60%, transparent 60%)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Glowing Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-20 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl"
        />

        {/* Floating Diamonds */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
            className={`absolute ${
              i % 4 === 0
                ? "top-10"
                : i % 4 === 1
                ? "top-1/3"
                : i % 4 === 2
                ? "bottom-1/3"
                : "bottom-10"
            } ${
              i % 3 === 0 ? "left-10" : i % 3 === 1 ? "right-10" : "left-1/2"
            }`}
          >
            <IoDiamond
              className={`text-${2 + (i % 3)}xl text-purple-400/${15 + i * 3}`}
            />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            MARKETING &
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
              DESIGN
            </span>
            <br />
            SOLUTIONS
          </h1>

          <div className="flex items-center justify-center gap-3 text-purple-300 mb-8">
            <FaStar className="text-violet-400" />
            <span className="text-xl font-medium">
              Creative Excellence & Strategic Growth
            </span>
            <FaStar className="text-violet-400" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="relative"
          >
            <p className="text-[20px] text-gray-200 max-w-5xl mx-auto leading-relaxed font-light">
              At HASH Solutions, we provide a comprehensive range of marketing
              and business development services tailored to help businesses grow
              and succeed. We are specialized in the following areas:
            </p>
            {/* Underline Animation */}
            <motion.div
              initial={{ width: 0 }}
              animate={isVisible ? { width: "60%" } : { width: 0 }}
              transition={{ delay: 1.5, duration: 1.2 }}
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-purple-700 to-transparent"
            />
          </motion.div>
        </motion.div>

        {/* Marketing Solutions Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Content Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={
                isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
              }
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                  MARKETING
                </span>
                <br />
                SOLUTIONS
              </h2>
            </motion.div>

            {/* Marketing Services List */}
            <motion.div variants={containerVariants} className="space-y-6">
              {marketingSolutions.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  onHoverStart={() => setHoveredItem(`marketing-${index}`)}
                  onHoverEnd={() => setHoveredItem(null)}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="flex items-start p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white shadow-lg mr-5 relative overflow-hidden`}
                    >
                      <service.icon className="text-xl relative z-10" />
                      <motion.div
                        animate={{
                          scale: hoveredItem === `marketing-${index}` ? 1 : 0,
                          opacity:
                            hoveredItem === `marketing-${index}` ? 0.3 : 0,
                        }}
                        className="absolute inset-0 bg-white rounded-xl"
                      />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-white font-bold text-lg leading-tight group-hover:text-purple-200 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <motion.div
                          animate={{
                            rotate:
                              hoveredItem === `marketing-${index}` ? 45 : 0,
                          }}
                          className="text-purple-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300 ml-4"
                        >
                          <FaArrowRight className="text-lg" />
                        </motion.div>
                      </div>

                      <div className="flex items-center mb-2">
                        <FaCheckCircle className="text-violet-400 text-sm mr-2" />
                        <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: hoveredItem === `marketing-${index}` ? "100%" : 0,
                    }}
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.color} rounded-full`}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="relative"
          >
            {/* Main Image Container */}
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-violet-600/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse" />

              {/* Image */}
              <div className="relative bg-black/20 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8 shadow-2xl">
                <Image
                  src="/images/hash-marketing.png"
                  alt="Marketing Solutions"
                  width={600}
                  height={500}
                  className="w-full h-auto drop-shadow-2xl filter brightness-110 contrast-110"
                  priority
                  quality={95}
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full shadow-lg"
              />

              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -15, 15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full shadow-lg"
              />
            </motion.div>

            {/* Background Decoration */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
              <div className="w-full h-full border-2 border-purple-500/20 rounded-3xl transform rotate-6" />
              <div className="absolute inset-0 w-full h-full border-2 border-violet-500/20 rounded-3xl transform -rotate-3" />
            </div>
          </motion.div>
        </div>

        {/* Design Solutions Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="relative order-2 lg:order-1"
          >
            {/* Main Image Container */}
            <motion.div
              whileHover={{ scale: 1.05, rotateY: -5 }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/30 to-purple-600/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse" />

              {/* Image */}
              <div className="relative bg-black/20 backdrop-blur-sm border border-violet-500/30 rounded-3xl p-8 shadow-2xl">
                <Image
                  src="/images/meetHash.png"
                  alt="Design & Branding Solutions"
                  width={600}
                  height={500}
                  className="w-full h-auto drop-shadow-2xl filter brightness-110 contrast-110"
                  priority
                  quality={95}
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, -10, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full shadow-lg"
              />

              <motion.div
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, 15, -15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full shadow-lg"
              />
            </motion.div>

            {/* Background Decoration */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
              <div className="w-full h-full border-2 border-violet-500/20 rounded-3xl transform -rotate-6" />
              <div className="absolute inset-0 w-full h-full border-2 border-purple-500/20 rounded-3xl transform rotate-3" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="space-y-8 order-1 lg:order-2"
          >
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={
                isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
              }
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  DESIGN &
                </span>
                <br />
                BRANDING
              </h2>
            </motion.div>

            {/* Design Services List */}
            <motion.div variants={containerVariants} className="space-y-6">
              {designSolutions.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  onHoverStart={() => setHoveredItem(`design-${index}`)}
                  onHoverEnd={() => setHoveredItem(null)}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="flex items-start p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-violet-500/30 hover:border-violet-400/60 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/20">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white shadow-lg mr-5 relative overflow-hidden`}
                    >
                      <service.icon className="text-xl relative z-10" />
                      <motion.div
                        animate={{
                          scale: hoveredItem === `design-${index}` ? 1 : 0,
                          opacity: hoveredItem === `design-${index}` ? 0.3 : 0,
                        }}
                        className="absolute inset-0 bg-white rounded-xl"
                      />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-white font-bold text-lg leading-tight group-hover:text-violet-200 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <motion.div
                          animate={{
                            rotate: hoveredItem === `design-${index}` ? 45 : 0,
                          }}
                          className="text-violet-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300 ml-4"
                        >
                          <FaArrowRight className="text-lg" />
                        </motion.div>
                      </div>

                      <div className="flex items-center mb-2">
                        <FaCheckCircle className="text-purple-400 text-sm mr-2" />
                        <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: hoveredItem === `design-${index}` ? "100%" : 0,
                    }}
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.color} rounded-full`}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MarketingPage;
