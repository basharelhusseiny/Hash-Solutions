"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import MagicBento from "@/ui/MagicBento";
import SplashCursor from "@/ui/SplashCursor";

const RubixPage = () => {
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
          className="flex justify-center mb-8 relative z-10"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#bcfd5e]/30 to-green-400/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse will-change-transform" />

            {/* Logo Container */}
            <div className="relative bg-black/50 backdrop-blur-sm border border-[#bcfd5e]/30 rounded-2xl p-6 shadow-2xl">
              <Image
                src="/images/Rubix-logo.png"
                alt="Rubix Logo"
                width={770}
                height={80}
                className="drop-shadow-2xl filter"
                priority
                quality={90}
              />
            </div>

            {/* Floating Particles */}
            {/* <div className="absolute -top-1 -left-1 w-5 h-5 bg-[#bcfd5e] rounded-full animate-ping opacity-75 will-change-transform" />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#bcfd5e] rounded-full animate-ping opacity-75 will-change-transform" /> */}
          </motion.div>
        </motion.div>
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
        <div className="absolute top-50 left-20 w-96 h-96 bg-[#bcfd5e]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#bcfd5e]0/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-150 left-50 w-96 h-96 bg-[#bcfd5e]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#bcfd5e]/20 rounded-full blur-3xl animate-pulse" />
      </div>
      <div className="hidden md:block">
        <SplashCursor />
      </div>
    </div>
  );
};

export default RubixPage;
