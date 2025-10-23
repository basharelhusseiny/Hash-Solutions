"use client";
import { motion } from "framer-motion";

const PageHeader = ({ isVisible }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-20"
    >
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
        <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
          Let's Build Your Next Win
        </span>
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="relative"
      >
        <p className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light">
          Tell us your goals. We'll come back with a clear plan and timeline
        </p>
        {/* Underline Animation */}
        <motion.div
          initial={{ width: 0 }}
          animate={isVisible ? { width: "40%" } : { width: 0 }}
          transition={{ delay: 1.5, duration: 1.2 }}
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-pink-700 to-transparent"
        />
      </motion.div>
    </motion.div>
  );
};

export default PageHeader;
