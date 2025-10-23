"use client";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const Slogan = ({ itemVariants }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="text-center p-8 rounded-2xl bg-gradient-to-r from-pink-600/20 to-purple-600/20 backdrop-blur-xl border border-pink-500/30 max-w-2xl mx-auto"
    >
      <motion.h3
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="text-3xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-violet-400 bg-clip-text text-transparent"
      >
        Let's HASH It Up!
      </motion.h3>
      <div className="flex justify-center mt-4 space-x-2">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          >
            <FaStar className="text-pink-400 text-sm" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Slogan;
