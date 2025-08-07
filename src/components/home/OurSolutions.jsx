"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaCube, FaBullhorn, FaPalette, FaGift, FaPrint } from "react-icons/fa";
import SectionHeader from "@/ui/SectionHeader";

const OurSolutions = () => {
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
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const solutions = [
    {
      title: "MARKETING SOLUTIONS",
      icon: FaBullhorn,
      items: [
        { name: "Brand Strategy & Brand Positioning", number: "1" },
        { name: "Marketing & Sales Strategy", number: "2" },
        { name: "Campaign Creation & Execution", number: "3" },
        { name: "Sales Training Workshops", number: "4" },
      ],
      color: "from-purple-600 to-pink-600",
      bgColor: "bg-purple-900/20",
      borderColor: "border-purple-500/30",
    },
    {
      title: "DESIGN & BRANDING",
      icon: FaPalette,
      items: [
        { name: "Brand Identity & Logo Design", number: "1" },
        { name: "Artwork & Visual Design", number: "2" },
        { name: "Social Media Branding", number: "3" },
        { name: "Print Materials (Flyers, Billboards, etc.)", number: "4" },
        { name: "Corporate Gift Items & Promotional Materials", number: "5" },
      ],
      color: "from-pink-600 to-purple-600",
      bgColor: "bg-pink-900/20",
      borderColor: "border-pink-500/30",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 relative overflow-hidden bg-gradient-to-b from-black via-purple-950/10 to-black"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-110 left-30 w-96 h-96 bg-purple-600/25 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-25 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Floating 3D Cubes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotateX: [0, 360],
            rotateY: [0, 180],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-40 left-10"
        >
          <FaCube className="text-6xl text-purple-400/30" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 15, 0],
            rotateX: [0, -180],
            rotateZ: [0, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-32 right-16"
        >
          <FaCube className="text-5xl text-pink-400/25" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -25, 0],
            rotateY: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute top-1/2 right-1/4"
        >
          <FaCube className="text-4xl text-purple-300/20" />
        </motion.div>
      </div>

      <div className="container mx-auto px-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <SectionHeader title="OUR SOLUTIONS" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="relative"
          >
            <p className="text-xl text-gray-200 max-w-5xl mx-auto leading-relaxed font-light">
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                y: -5,
              }}
              className={`group relative p-8 rounded-3xl ${solution.bgColor} backdrop-blur-lg ${solution.borderColor} border hover:border-opacity-60 transition-all duration-500 overflow-hidden`}
            >
              {/* Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${solution.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}
              />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center mb-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${solution.color} flex items-center justify-center shadow-lg mr-4`}
                  >
                    <solution.icon className="text-2xl text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-200 transition-colors duration-300">
                    {solution.title}
                  </h3>
                </div>

                {/* Services List */}
                <div className="space-y-4">
                  {solution.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isVisible
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: -20 }
                      }
                      transition={{
                        delay: 0.8 + itemIndex * 0.1,
                        duration: 0.5,
                      }}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="flex items-center p-3 rounded-xl bg-black/30 backdrop-blur-sm border border-white/10 hover:border-purple-400/30 transition-all duration-300 group/item"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        className={`w-8 h-8 rounded-full bg-gradient-to-r ${solution.color} flex items-center justify-center text-white font-bold text-sm mr-4 shadow-lg`}
                      >
                        {item.number}
                      </motion.div>
                      <span className="text-gray-200 group-hover/item:text-white transition-colors duration-300 font-medium">
                        {item.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <solution.icon className="text-6xl text-white" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurSolutions;
