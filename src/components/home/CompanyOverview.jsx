"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SectionHeader from "@/ui/SectionHeader";
import StarBorder from "@/ui/StarBorderBtn/StarBorderBtn";
import Link from "next/link";

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
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-120 left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
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
              y: [0, -25, 0],
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-20 right-10"
          >
            <Image
              src="/images/Hash-box-new.png"
              alt="Hash Main"
              width={90}
              height={80}
            />
          </motion.div>

          <motion.div
            animate={{
              y: [0, -25, 0],
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-10 right-70"
          >
            <Image
              src="/images/Hash-box-new.png"
              alt="Hash Main"
              width={90}
              height={80}
            />
          </motion.div>
        </div>

        <div className="container mx-auto px-5 relative z-20">
          <SectionHeader title="What We Do?" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto"
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

              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3 animate-pulse" />
                  <span className="text-purple-300 text-xl md:text-[22px] font-bold tracking-wide">
                    Strategic Marketing
                  </span>
                </div>

                <p className="text-gray-300 leading-relaxed text-lg group-hover:text-white transition-colors duration-300">
                  Drive awareness, demand, and measurable ROI through
                  research-led strategy, campaigns, and content.
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

              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-pulse delay-500" />
                  <span className="text-blue-300 text-xl md:text-[22px] font-bold tracking-wide">
                    Business Development
                  </span>
                </div>

                <p className="text-gray-300 leading-relaxed text-lg group-hover:text-white transition-colors duration-300">
                  Open new markets, build partnerships, and improve sales
                  processes to convert opportunities into revenue.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(188, 148, 199, 0.3)",
              }}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-fuchsia-900/20 backdrop-blur-sm border border-fuchsia-500/30 hover:border-fuchsia-400/60 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card Icon */}

              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-fuchsia-500 rounded-full mr-3 animate-pulse delay-500" />
                  <span className="text-fuchsia-300 text-xl md:text-[22px] font-bold tracking-wide">
                    Creative & Media
                  </span>
                </div>

                <p className="text-gray-300 leading-relaxed text-lg group-hover:text-white transition-colors duration-300">
                  Brand identity, design, photography, and high quality video
                  production that clarify your value and inspire action.
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
              { number: "14+", label: "Years Experience" },
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
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
          <Link href={""} className="w-[200px] block mx-auto mt-14">
            <StarBorder
              as="button"
              className="custom-class cursor-target"
              color="magenta"
              speed="5s"
            >
              Explore Services
            </StarBorder>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
