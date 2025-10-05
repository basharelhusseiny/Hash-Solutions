"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react"; // Add this import
import MagicBento from "@/ui/MagicBento";
import { FaBullseye, FaMapMarkedAlt, FaVideo, FaBolt } from "react-icons/fa";

const RubixPage = () => {
  // Add this at the top of the component
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div id="RUBiX" className="pt-40 sm:pt-30 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-5">
        {/* Floating Images */}
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
            className="absolute top-40 -left-3 md:top-20 md:left-20"
          >
            <Image
              src="/images/hash-camira.png"
              alt="Hash Camera"
              width={150}
              height={120}
              loading="lazy"
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
            className="absolute top-1/3 -right-5 md:top-1/3 md:right-16"
          >
            <Image
              src="/images/hash-chair.png"
              alt="Hash Chair"
              width={150}
              height={150}
              loading="lazy"
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
            className="absolute top-[60%] left-0 md:bottom-32 md:left-20"
          >
            <Image
              src="/images/hash-led.png"
              alt="Hash LED"
              width={150}
              height={70}
              loading="lazy"
            />
          </motion.div>

          <motion.div
            animate={{
              y: [0, 10, 0],
              rotate: [0, -5, 5, 0],
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
            className="absolute bottom-3 right-3 md:bottom-20 md:right-10"
          >
            <Image
              src="/images/hash-lens.png"
              alt="Hash Camera"
              width={170}
              height={100}
              loading="lazy"
            />
          </motion.div>
        </div>
        {/* Rubix Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center relative z-10"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            {/* Logo Container - Removed background and box */}
            <div className="relative p-6">
              <Image
                src="/images/Productions.png"
                alt="Rubix Logo"
                width={500} // Increased size
                height={110} // Increased size
                className="drop-shadow-2xl filter brightness-110" // Added brightness
                priority
                quality={100}
              />
            </div>
          </motion.div>
        </motion.div>
        <div className="relative mt-4 mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative z-20"
          >
            <div className="flex flex-col items-center space-y-4">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="text-xl md:text-2xl font-medium text-gray-200 max-w-2xl mx-auto leading-relaxed"
              >
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="block mb-2"
                >
                  Media and audio productions that
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4, duration: 0.8 }}
                  className="relative inline-block font-medium"
                >
                  <span className="text-[#bcfd5e]">clarify your message</span>
                </motion.span>{" "}
                &{" "}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8, duration: 0.8 }}
                  className="relative inline-block font-medium"
                >
                  <span className="text-[#bcfd5e]">
                    tell your story
                    <span className="font-bold bg-gradient-to-r from-[#bcfd5e] to-green-400 bg-clip-text text-transparent">
                      {" "}
                      Creatively
                    </span>
                  </span>
                </motion.span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={isVisible ? { width: "40%" } : { width: 0 }}
                  transition={{ delay: 1.5, duration: 1.2 }}
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-[#bcfd5e] to-transparent"
                />
              </motion.p>
            </div>
          </motion.div>

          {/* Enhanced Background Effects */}
          <div className="absolute -z-10 inset-0 ">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ delay: 1, duration: 1.5 }}
              className="absolute inset-0 bg-gradient-to-r from-[#bcfd5e]/10 via-green-400/5 to-[#bcfd5e]/10 blur-3xl"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-32 bg-[#bcfd5e]/5 rotate-45 blur-3xl" />
          </div>
        </div>
        <div className="flex items-center justify-center relative z-10">
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={600}
            particleCount={15}
            glowColor="0, 300, 0"
          />
        </div>
        {/* Here */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto mt-20 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-[#bcfd5e] to-green-400 bg-clip-text text-transparent">
              Why RUBiX?
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                title: "Strategic & Creative",
                icon: FaBullseye,
                delay: 0.2,
              },
              {
                title: "On-location expertise in Sudan / South Sudan",
                icon: FaMapMarkedAlt,
                delay: 0.4,
              },
              {
                title: "Broadcast-quality equipment",
                icon: FaVideo,
                delay: 0.6,
              },
              {
                title: "Fast, reliable delivery",
                icon: FaBolt,
                delay: 0.8,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: item.delay, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="group flex items-center relative p-4 rounded-xl bg-black/20 border border-[#bcfd5e]/20 hover:border-[#bcfd5e]/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="min-w-10 h-10 rounded-lg bg-gradient-to-br from-[#bcfd5e]/20 to-green-400/20 flex items-center justify-center">
                    <item.icon className="text-xl text-[#bcfd5e] group-hover:text-green-400 transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-0.5 group-hover:text-[#bcfd5e] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#bcfd5e]/50 to-green-400/50"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
        <div className="absolute top-50 left-20 w-96 h-96 bg-[#bcfd5e]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#bcfd5e]0/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-150 left-50 w-96 h-96 bg-[#bcfd5e]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#bcfd5e]/20 rounded-full blur-3xl animate-pulse" />
      </div>
    </div>
  );
};

export default RubixPage;
