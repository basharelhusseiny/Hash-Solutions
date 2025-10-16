"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  FaEye,
  FaBullseye,
  FaGem,
  FaRocket,
  FaStar,
  FaCalendarAlt,
  FaChartLine,
} from "react-icons/fa";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { FiTarget } from "react-icons/fi";
import SectionHeader from "@/ui/SectionHeader";
import Image from "next/image";
import Link from "next/link";
import StarBorder from "@/ui/StarBorderBtn/StarBorderBtn";

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
      className="pt-24 pb-10 relative overflow-hidden bg-gradient-to-b from-black via-purple-950/10 to-black"
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
              src="/images/Hash-box-new.png"
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
              src="/images/Hash-box-new.png"
              alt="Hash Main"
              width={90}
              height={80}
            />
          </motion.div>
        </div>
      </div>

      <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-120 left-120 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-5">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            className="relative inline-block"
          >
            <SectionHeader title="Why HASH SOLUTIONS?" />
          </motion.div>
        </div>

        {/* Enhanced Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
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
                <FaEye className="text-2xl text-white" />
              </motion.div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                Local insight
              </h3>
              <p className="text-gray-200 tracking-wide leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                regional experience Operating in South Sudan with a decade of
                cross-market experience. We know what works on the ground.
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
                className="w-16 h-16 mb-5 bg-gradient-to-br bg-[#771e73] to-pink-900 rounded-xl flex items-center justify-center shadow-lg"
              >
                <FiTarget className="text-2xl text-white" />
              </motion.div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                Strategy First
              </h3>
              <p className="text-gray-200 tracking-wide leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                execution always Clear plans tied to measurable goals—then
                disciplined delivery across channels.
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
            className="group relative p-6 rounded-2xl bg-gradient-to-br from-purple-900/50 to-purple-800/20 backdrop-blur-lg border border-purple-500/30 hover:border-purple-400/60 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-purple-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <motion.div
                variants={iconVariants}
                className="w-16 h-16 mb-5 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg"
              >
                <FaGem className="text-2xl text-white" />
              </motion.div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                Full-Service
              </h3>
              <p className="text-gray-200 tracking-wide leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                One accountable team Strategy, creative, media, events, and
                business development under one roof.
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
            className="group relative p-6 rounded-2xl bg-gradient-to-br from-pink-900/50 to-pink-800/20 backdrop-blur-lg border border-pink-500/30 hover:border-pink-400/60 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600/10 to-pink-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <motion.div
                variants={iconVariants}
                className="w-16 h-16 mb-5 bg-gradient-to-br bg-[#771e73] to-pink-900 rounded-xl flex items-center justify-center shadow-lg"
              >
                <FaBullseye className="text-2xl text-white" />
              </motion.div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                Measurable Outcomes
              </h3>
              <p className="text-gray-200 tracking-wide leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                We design work to be tracked—reach, leads, conversion, and
                impact.
              </p>
            </div>
          </motion.div>
        </motion.div>
        <Link href={"/contact"} className="w-[200px] block mx-auto mt-14">
          <StarBorder
            as="button"
            className="custom-class cursor-target"
            color="magenta"
            speed="5s"
          >
            Book a Strategy Call
          </StarBorder>
        </Link>
        {/* New Success Stories Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24"
        >
          <div className="text-center mb-16">
            <SectionHeader title="Our Success Stories" />
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {/* TECNO Story */}
            <motion.div whileHover={{ x: 10 }} className="relative group">
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-900/50 to-black border border-purple-500/30 hover:border-purple-400/60 transition-all duration-500">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-500 to-pink-500" />
                <div className="p-6 pl-8">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        TECNO COVID-19 Awareness Campaign
                      </h3>
                      <p className="text-purple-200 text-sm mb-3">
                        Khartoum, Sudan 2020
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 bg-purple-900/40 px-4 py-2 rounded-lg">
                      <FaStar className="text-purple-400" />
                      <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        1M+
                      </span>
                      <span className="text-purple-200 max-sm:text-sm">
                        Reach
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300">
                    Boosted engagement and visibility at a capital scale
                  </p>
                </div>
              </div>
            </motion.div>

            {/* SEERO Story */}
            <motion.div whileHover={{ x: 10 }} className="relative group">
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-pink-900/50 to-black border border-pink-500/30 hover:border-pink-400/60 transition-all duration-500">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-pink-500 to-purple-500" />
                <div className="p-6 pl-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">
                        SEERO Mobile Taxi Launch Campaign
                      </h3>
                      <p className="text-pink-200 text-sm mb-2">
                        Khartoum, Sudan 2023
                      </p>
                      <p className="text-gray-300">
                        Boosted engagement and visibility offline and online
                      </p>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center space-x-2 bg-pink-900/40 px-4 py-2 rounded-lg">
                        <FaRocket className="text-purple-400" />
                        <span className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                          500K
                        </span>
                        <span className="text-pink-200 max-sm:text-sm">
                          Reach
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 bg-purple-900/40 px-4 py-2 rounded-lg">
                        <PiDownloadSimpleBold className="text-purple-400 text-xl" />
                        <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                          40K
                        </span>
                        <span className="text-purple-200 max-sm:text-sm">
                          Downloads
                        </span>
                      </div>
                      <div className="flex items-center space-x-2  bg-rose-900/40 px-4 py-2 rounded-lg">
                        <FaCalendarAlt className="text-purple-400 text-xl" />
                        <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                          30
                        </span>
                        <span className="text-purple-200 max-sm:text-sm">
                          Days
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* H Brothers Story */}
            <motion.div whileHover={{ x: 10 }} className="relative group">
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-900/50 to-black border border-purple-500/30 hover:border-purple-400/60 transition-all duration-500">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-500 to-pink-500" />
                <div className="p-6 pl-8">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        H Brothers General Trading
                      </h3>
                      <p className="text-purple-200 text-sm mb-3">
                        Since Feb 2025
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 bg-purple-900/40 px-4 py-2 rounded-lg">
                      <FaChartLine className="text-purple-400" />
                      <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        15%
                      </span>
                      <span className="text-purple-200 max-sm:text-sm">
                        Increase
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300">
                    Sales volume increase after strategic marketing rollout and
                    business development planning
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurPhilosophy;
