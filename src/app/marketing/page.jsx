"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  FaBullhorn,
  FaChartLine,
  FaPalette,
  FaRocket,
  FaArrowRight,
  FaLightbulb,
  FaUsers,
  FaHandshake,
  FaChartBar,
  FaRegBuilding,
  FaCogs,
  FaGlobe,
  FaRegComments,
  FaSearchDollar,
  FaUserFriends,
} from "react-icons/fa";

const MarketingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeImage, setActiveImage] = useState("/images/hash-marketing.png");
  const [activeDesignImage, setActiveDesignImage] = useState(
    "/images/meetHash.png"
  );
  const [clickedItem, setClickedItem] = useState(null);
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
      icon: FaChartLine,
      title: "Marketing Strategy",
      description:
        "Market Research, Positioning, Audience Segmentation, Messaging, and Channel Planning.",
      deliverables: ["Strategy Document", "Content Plan", "KPI Framework"],
      color: "from-purple-600 to-purple-800",
    },
    {
      icon: FaCogs,
      title: "Campaign Management",
      description:
        "End-to-end Campaign Execution Across Digital and Offline Channels.",
      deliverables: [
        "Creative Concepts",
        "Assets",
        "Media Plan",
        "Weekly Performance Reports",
      ],
      color: "from-violet-500 to-purple-700",
    },
    {
      icon: FaPalette,
      title: "Brand & Design",
      description: "Identity Systems, Guidelines, and Visual Mockups.",
      deliverables: ["Logo", "Brand Kit", "Templates", "Stationery", "Signage"],
      color: "from-indigo-500 to-purple-600",
    },
    {
      icon: FaRegComments,
      title: "Social Media Management",
      description: "Media Strategy, Content, Design, and Community Management.",
      deliverables: [
        "Monthly Action Plan Calendar",
        "Campaigning",
        "Monthly Performance Dashboard Report",
      ],
      color: "from-purple-500 to-indigo-600",
    },
    {
      icon: FaGlobe,
      title: "Web & Landing Pages",
      description:
        "Conversion-focused Websites That Communicates Clearly and Generates Business Leads",
      deliverables: [
        "Content Copywriters",
        "UX Copy",
        "Design",
        "Build",
        "Analytics Setup",
      ],
      color: "from-purple-500 to-indigo-600",
    },
  ];

  const designSolutions = [
    {
      icon: FaBullhorn,
      title: "Clear Market Positioning",
      color: "from-violet-600 to-purple-600",
      image: "/images/clear market positioning 1.png",
    },
    {
      icon: FaHandshake,
      title: "Consistent Brand Presence",
      color: "from-purple-600 to-violet-700",
      image: "/images/consistant brand.png",
    },
    {
      icon: FaSearchDollar,
      title: "Qualified Leads Generation",
      color: "from-indigo-600 to-purple-600",
      image: "/images/qualified lead generation.png",
    },
    {
      icon: FaChartBar,
      title: "Lower Cost per Acquisition",
      color: "from-purple-500 to-violet-600",
      image: "/images/Lower cost.png",
    },
    {
      icon: FaUserFriends,
      title: "Stronger Customer Engagement Process",
      color: "from-purple-500 to-violet-600",
      image: "/images/strong cosutumer.png",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="pt-38 sm:pt-34 pb-30 relative overflow-hidden bg-gradient-to-br from-black via-purple-950/20 to-black min-h-screen"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0">
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
            Strategic
            <span className="text-purple-200"> Marketing </span>
            <span className="text-purple-300"> The </span>
            <span className="text-purple-400"> Gets </span>
            <span className="text-purple-500">Results </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent"></span>
          </h1>
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
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="space-y-8 order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={
                isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
              }
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Core{" "}
                <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                  Services
                </span>
              </h2>
            </motion.div>

            <motion.div variants={containerVariants} className="space-y-6">
              {marketingSolutions.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  onHoverStart={() => setHoveredItem(`marketing-${index}`)}
                  onHoverEnd={() => !clickedItem && setHoveredItem(null)}
                  onClick={() => {
                    if (clickedItem === `marketing-${index}`) {
                      setClickedItem(null);
                    } else {
                      setClickedItem(`marketing-${index}`);
                      setHoveredItem(`marketing-${index}`);
                    }
                  }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className={`group relative cursor-pointer ${
                    clickedItem === `marketing-${index}`
                      ? "ring-2 ring-purple-500 ring-opacity-50 rounded-2xl"
                      : ""
                  }`}
                >
                  <div className="flex items-center p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                    <motion.div
                      animate={{
                        scale:
                          hoveredItem === `marketing-${index}` ||
                          clickedItem === `marketing-${index}`
                            ? 1.2
                            : 1,
                        rotate:
                          hoveredItem === `marketing-${index}` ||
                          clickedItem === `marketing-${index}`
                            ? 360
                            : 0,
                      }}
                      transition={{ duration: 0.6 }}
                      className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white shadow-lg mr-5 relative overflow-hidden`}
                    >
                      <service.icon className="text-xl relative z-10" />
                      <motion.div
                        animate={{
                          scale:
                            hoveredItem === `marketing-${index}` ||
                            clickedItem === `marketing-${index}`
                              ? 1
                              : 0,
                          opacity:
                            hoveredItem === `marketing-${index}` ||
                            clickedItem === `marketing-${index}`
                              ? 0.3
                              : 0,
                        }}
                        className="absolute inset-0 bg-white rounded-xl"
                      />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3
                          className={`text-white font-bold text-2xl leading-tight transition-colors duration-300 ${
                            hoveredItem === `marketing-${index}` ||
                            clickedItem === `marketing-${index}`
                              ? "text-purple-300"
                              : ""
                          }`}
                        >
                          {service.title}
                        </h3>
                        <motion.div
                          animate={{
                            rotate:
                              hoveredItem === `marketing-${index}` ||
                              clickedItem === `marketing-${index}`
                                ? 45
                                : 0,
                          }}
                          className={`text-purple-400 transition-opacity duration-300 ml-4 ${
                            hoveredItem === `marketing-${index}` ||
                            clickedItem === `marketing-${index}`
                              ? "opacity-100"
                              : "opacity-60"
                          }`}
                        >
                          <FaArrowRight className="text-lg" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width:
                        hoveredItem === `marketing-${index}` ||
                        clickedItem === `marketing-${index}`
                          ? "100%"
                          : 0,
                    }}
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.color} rounded-full`}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="relative order-1 lg:order-2"
          >
            <motion.div className="relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-violet-600/30 rounded-3xl blur-2xl transition-all duration-500" />
              <div className="relative bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8 shadow-2xl h-full">
                {hoveredItem || clickedItem ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-purple-200 mb-4">
                        {
                          marketingSolutions[
                            parseInt((hoveredItem || clickedItem).split("-")[1])
                          ].title
                        }
                      </h3>
                      <p className="text-gray-300 text-lg font-semibold tracking-wide leading-relaxed">
                        {
                          marketingSolutions[
                            parseInt((hoveredItem || clickedItem).split("-")[1])
                          ].description
                        }
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-purple-400 mb-4">
                        Deliverables:
                      </h4>
                      <div className="grid grid-cols-1 gap-4">
                        {marketingSolutions[
                          parseInt((hoveredItem || clickedItem).split("-")[1])
                        ].deliverables.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: index * 0.1,
                              duration: 0.3,
                              type: "spring",
                              stiffness: 100,
                            }}
                            className="flex items-center gap-3 group"
                          >
                            <motion.span
                              className="w-2 h-2 rounded-full bg-purple-500"
                              animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.7, 1, 0.7],
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                            />
                            <motion.span
                              className="text-gray-200 text-lg"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                delay: index * 0.1 + 0.2,
                                duration: 0.3,
                              }}
                            >
                              {item}
                            </motion.span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center justify-center h-full"
                  >
                    <p className="text-gray-400 text-xl text-center">
                      Select a service to view details
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
              <div className="w-full h-full border-2 border-purple-500/20 rounded-3xl transform rotate-6" />
              <div className="absolute inset-0 w-full h-full border-2 border-violet-500/20 rounded-3xl transform -rotate-3" />
            </div>
          </motion.div>
        </div>

        {/* Design Solutions Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="relative order-2 lg:order-1 h-full hidden lg:block"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotateY: -5 }}
              transition={{ duration: 0.6 }}
              className="relative group h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/30 to-purple-600/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse" />
              <div className="relative bg-black/20 backdrop-blur-sm border border-violet-500/30 rounded-3xl p-8 shadow-2xl h-full flex items-center">
                <Image
                  src={activeDesignImage}
                  alt="Design & Branding Solutions"
                  width={600}
                  height={500}
                  className="w-full h-[600px] rounded-2xl lg:mx-0 xl:mx-24 drop-shadow-2xl filter brightness-110 contrast-110"
                  priority
                  quality={95}
                />
              </div>
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
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
              <div className="w-full h-full border-2 border-violet-500/20 rounded-3xl transform -rotate-6" />
              <div className="absolute inset-0 w-full h-full border-2 border-purple-500/20 rounded-3xl transform rotate-3" />
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="space-y-8 order-1 lg:order-2"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={
                isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
              }
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Outcomes We{" "}
                <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  Focus On
                </span>
              </h2>
            </motion.div>

            <motion.div variants={containerVariants} className="space-y-6">
              {designSolutions.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  onHoverStart={() => setHoveredItem(`design-${index}`)}
                  onHoverEnd={() => !clickedItem && setHoveredItem(null)}
                  onClick={() => {
                    if (clickedItem === `design-${index}`) {
                      setClickedItem(null);
                    } else {
                      setClickedItem(`design-${index}`);
                      setHoveredItem(`design-${index}`);
                      setActiveDesignImage(service.image);
                    }
                  }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className={`group relative cursor-pointer ${
                    clickedItem === `design-${index}`
                      ? "ring-2 ring-violet-500 ring-opacity-50 rounded-2xl"
                      : ""
                  }`}
                >
                  <div className="flex items-center p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-violet-500/30 hover:border-violet-400/60 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/20">
                    <motion.div
                      animate={{
                        scale:
                          hoveredItem === `design-${index}` ||
                          clickedItem === `design-${index}`
                            ? 1.2
                            : 1,
                        rotate:
                          hoveredItem === `design-${index}` ||
                          clickedItem === `design-${index}`
                            ? 360
                            : 0,
                      }}
                      transition={{ duration: 0.6 }}
                      className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white shadow-lg mr-5 relative overflow-hidden`}
                    >
                      <service.icon className="text-xl relative z-10" />
                      <motion.div
                        animate={{
                          scale:
                            hoveredItem === `design-${index}` ||
                            clickedItem === `design-${index}`
                              ? 1
                              : 0,
                          opacity:
                            hoveredItem === `design-${index}` ||
                            clickedItem === `design-${index}`
                              ? 0.3
                              : 0,
                        }}
                        className="absolute inset-0 bg-white rounded-xl"
                      />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <h3
                          className={`text-white font-bold text-2xl leading-tight transition-colors duration-300 ${
                            hoveredItem === `design-${index}` ||
                            clickedItem === `design-${index}`
                              ? "text-violet-200"
                              : ""
                          }`}
                        >
                          {service.title}
                        </h3>
                        <motion.div
                          animate={{
                            rotate:
                              hoveredItem === `design-${index}` ||
                              clickedItem === `design-${index}`
                                ? 45
                                : 0,
                          }}
                          className={`text-violet-400 transition-opacity duration-300 ml-4 ${
                            hoveredItem === `design-${index}` ||
                            clickedItem === `design-${index}`
                              ? "opacity-100"
                              : "opacity-60"
                          }`}
                        >
                          <FaArrowRight className="text-lg hidden lg:block" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width:
                        hoveredItem === `design-${index}` ||
                        clickedItem === `design-${index}`
                          ? "100%"
                          : 0,
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
