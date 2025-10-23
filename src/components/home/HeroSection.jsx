"use client";

import ShinyText from "@/ui/ShinyText/ShinyText";
import TrueFocus from "@/ui/TrueFocus";
import StarBorder from "@/ui/StarBorderBtn/StarBorderBtn";
import Link from "next/link";
import Beams from "@/ui/Beams";
import RotatingText from "../../ui/RotatingText";
import Image from "next/image";
import { motion } from "framer-motion";
import HashModal from "../HashModal";
import { useState } from "react";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="relative w-full min-h-screen h-screen overflow-hidden">
      <HashModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      {/* Beams Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Beams
          beamWidth={2}
          beamHeight={20}
          beamNumber={25}
          lightColor="#ed8bf4"
          speed={2.5}
          noiseIntensity={1.5}
          scale={0.25}
          rotation={25}
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 container mx-auto px-5 h-full flex items-center justify-center py-10">
        <div className="flex flex-col items-center justify-center gap-6 sm:gap-6 w-full max-w-6xl">
          {/* Logo */}
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
              delay: 0.5,
            }}
            className="w-full max-w-xs sm:max-w-[550px] -mt-8 sm:mt-2"
          >
            <Image
              src="/images/new-full-wh.png"
              alt="Logo"
              width={700}
              height={500}
              className="w-full h-auto opacity-80"
              priority
            />
          </motion.div>

          {/* Main Focus Text */}
          <div className="w-full">
            <div className="flex gap-3 sm:gap-4 justify-center items-center flex-wrap text-xl sm:text-2xl md:text-4xl font-black text-white -mt-8 sm:-mt-16">
              <TrueFocus
                sentence="EMPOWERING BUSINESS GROWTH IN AFRICA & BEYOND."
                manualMode={false}
                blurAmount={3}
                borderColor="blueviolet"
                animationDuration={0.3}
                pauseBetweenAnimations={1}
              />
            </div>
          </div>

          {/* Description Text */}
          <div className="w-full max-w-5xl px-2 sm:-mt-6">
            <div className="text-center text-base md:text-lg text-white/90 leading-relaxed">
              <ShinyText
                text="We guide organizations and businesses develop, enhance marketing, strengthen brands, and accelerate growth with strategic marketing, business development, and media production solutions."
                disabled={false}
                speed={3}
              />
            </div>
          </div>

          {/* Rotating Text Section */}
          <div className="flex items-center justify-center w-full my-2">
            <div className="flex items-center text-2xl md:text-3xl font-bold gap-2 sm:gap-3 flex-wrap justify-center">
              <p className="text-white">Creative</p>
              <RotatingText
                texts={["Campaigning", "Marketing", "Service", "Tools"]}
                mainClassName="w-[150px] sm:w-[170px] md:w-[200px] text-white bg-fuchsia-950 px-2 sm:px-3 py-1.5 sm:py-2 justify-center rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>
          </div>

          {/* CTA Button */}
          {/* <div onClick={() => setIsModalOpen(true)}>
            <StarBorder
              as="button"
              className="cursor-target px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold text-white hover:scale-105 transition-transform"
              color="magenta"
              speed="5s"
            >
              Get My HASH Business Boost!
            </StarBorder>
          </div> */}
        </div>
      </div>

      {/* Hash Solutions Image - Added Section */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
          delay: 0.8, // Slightly delayed after the first logo
        }}
        className="absolute bottom-0 left-0 w-48 sm:w-64 md:w-72"
      >
        <Image
          src="/images/hash-main.png"
          alt="Hash Solutions"
          width={300}
          height={300}
          className="w-full h-auto opacity-70"
          priority
        />
      </motion.div>

      {/* Global CSS Override */}
      <style jsx global>{`
        .shiny-text {
          position: static !important;
          top: auto !important;
          transform: none !important;
        }

        /* Override TrueFocus positioning */
        section [class*="relative"] {
          top: auto !important;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
