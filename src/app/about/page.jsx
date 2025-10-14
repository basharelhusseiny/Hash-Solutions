"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  FaRocket,
  FaLightbulb,
  FaHandshake,
  FaChartLine,
  FaUsers,
  FaRegSmile,
} from "react-icons/fa";
import { MdPsychology } from "react-icons/md";

import Link from "next/link";

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div
      ref={sectionRef}
      className="pt-38 sm:pt-34 pb-30 relative overflow-hidden bg-gradient-to-br from-black via-purple-950/20 to-black min-h-screen"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Animated Geometric Pattern */}
        <div className="absolute inset-0 opacity-[0.5]">
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
          className="absolute top-20 left-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
        />
      </div>

      {/* Rest of the content */}
      <div className="container mx-auto px-5 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="mb-24">
            <div className="relative">
              <span className="inline-block px-6 py-2 bg-purple-900/30 text-purple-200 rounded-full font-medium border border-purple-700/30 mb-6">
                About HASH SOLUTIONS
              </span>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent leading-tight">
                Built for Impact,{" "}
                <span className="bg-gradient-to-r from-purple-200 via-pink-300 to-purple-400 bg-clip-text text-transparent">
                  Grounded in Integrity
                </span>
              </h1>
              {/* Add the underline effect */}
              <motion.div
                initial={{ width: 0 }}
                animate={isVisible ? { width: "60%" } : { width: 0 }}
                transition={{ delay: 1.5, duration: 1.2 }}
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-purple-700 to-transparent"
              />
              <p className="text-2xl text-purple-100/90 max-w-5xl mx-auto leading-relaxed font-medium mt-8">
                We combine strategy, creativity, and disciplined execution to
                help organizations grow.
              </p>
            </div>
          </motion.div>

          {/* Our Story */}
          <motion.div variants={itemVariants} className="mb-24">
            <div className="bg-gradient-to-br from-purple-950/30 via-black/40 to-pink-950/30 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-12 max-w-4xl mx-auto relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-purple-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
              <h2 className="text-4xl font-bold text-white mb-10 inline-block relative">
                Our Story
                <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-3" />
              </h2>
              <div className="space-y-8 text-2xl text-purple-100/90 relative z-10 leading-relaxed">
                <p className="leading-relaxed">
                  Founded in 2018 in Khartoum, Sudan, and proudly expanded to
                  Juba, South Sudan in 2023—where we now call home— HASH
                  SOLUTIONS is a creative marketing and business development
                  company dedicated to driving business growth across the
                  region. With a talented, results-driven team, we deliver
                  advanced marketing solutions and strategic consulting tailored
                  to the unique needs of organizations in Sudan, Juba, South
                  Sudan and the region. Our expertise spans brand identity,
                  digital marketing, media production, and business consulting,
                  making us the trusted partner for companies seeking
                  innovative, measurable results. We combine local insight with
                  forward-thinking creativity to help our clients achieve
                  sustainable success in today’s dynamic markets.
                </p>
                <p className="leading-relaxed">
                  We bring regional experience and local execution to every
                  engagement.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mission, Vision, Values */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-8 mb-24"
          >
            {[
              {
                title: "Mission",
                content:
                  "Inspire businesses to be more productive and successful.",
                icon: FaRocket,
                gradient: "from-purple-500 to-pink-600",
                borderGlow: "group-hover:shadow-purple-500/20",
              },
              {
                title: "Vision",
                content:
                  "A highly ethical and quality service house for vibrant private and public sectors.",
                icon: FaLightbulb,
                gradient: "from-pink-500 to-purple-600",
                borderGlow: "group-hover:shadow-pink-500/20",
              },
              {
                title: "Values",
                content:
                  "Practical innovation, client respect, measurable results, and Integrity.",
                icon: MdPsychology,
                gradient: "from-purple-500 to-pink-600",
                borderGlow: "group-hover:shadow-purple-500/20",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div
                  className={`relative p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 h-full shadow-lg transition-all duration-500 ${item.borderGlow}`}
                >
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-500`}
                  >
                    <item.icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6">
                    {item.title}
                  </h3>
                  <p className="text-xl text-purple-100/80 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Success Metrics */}
          <motion.div variants={itemVariants} className="mb-24">
            <h2 className="text-4xl font-bold text-white mb-12 inline-block relative">
              How We Measure Success?
              <div className="h-1 w-1/4 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-3" />
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: FaUsers, text: "Reach and engagement" },
                { icon: FaChartLine, text: "Leads and conversions" },
                { icon: FaHandshake, text: "Campaign ROI" },
                { icon: FaRegSmile, text: "Client satisfaction" },
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-purple-950/30 via-black/40 to-pink-950/30 backdrop-blur-sm border border-purple-500/20 group hover:border-purple-500/40 transition-all duration-500"
                >
                  <metric.icon className="text-4xl text-purple-400 mb-4 mx-auto group-hover:text-purple-300 transition-colors duration-300" />
                  <p className="text-xl text-white font-medium group-hover:text-purple-200 transition-colors duration-300">
                    {metric.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants}>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-bold text-xl shadow-xl hover:shadow-purple-500/25 transition-all duration-300 relative group overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Work With Us Now
                  <FaRocket className="text-xl group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
