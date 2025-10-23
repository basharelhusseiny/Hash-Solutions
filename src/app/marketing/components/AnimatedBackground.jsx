import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
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
  );
};

export default AnimatedBackground;
