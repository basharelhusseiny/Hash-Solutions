import { motion } from "framer-motion";
import Image from "next/image";

const DesignImageDisplay = ({ activeDesignImage, isVisible }) => {
  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -5,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      variants={imageVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className="relative order-2 lg:order-1 hidden lg:block w-full aspect-[1/1] p-8"
    >
      <motion.div
        whileHover={{
          scale: 1.05,
          y: -15,
          transition: { duration: 0.4, ease: "easeOut" },
        }}
        transition={{ duration: 0.5 }}
        className="relative group w-full h-full"
      >
        {/* Outer Glow Effects */}
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [0.95, 1.05, 0.95],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -inset-12 bg-gradient-to-r from-purple-900/15 via-violet-900/15 to-fuchsia-900/15 rounded-3xl blur-3xl"
        />

        {/* Main Container with Dark Background */}
        <div
          className="relative z-10 w-full h-full rounded-2xl p-6 shadow-2xl"
          style={{
            background:
              "linear-gradient(135deg, #0b0113 0%, #1a0a2e 50%, #0b0113 100%)",
          }}
        >
          {/* Animated Gradient Border */}
          <motion.div
            animate={{
              background: [
                "linear-gradient(45deg, rgba(139,92,246,0.3), rgba(192,132,252,0.3), rgba(236,72,153,0.3))",
                "linear-gradient(135deg, rgba(192,132,252,0.3), rgba(236,72,153,0.3), rgba(139,92,246,0.3))",
                "linear-gradient(225deg, rgba(236,72,153,0.3), rgba(139,92,246,0.3), rgba(192,132,252,0.3))",
                "linear-gradient(315deg, rgba(139,92,246,0.3), rgba(192,132,252,0.3), rgba(236,72,153,0.3))",
              ],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 rounded-2xl opacity-50 blur-sm"
          />

          {/* Inner Shadow Effect */}
          <div
            className="absolute inset-0 rounded-2xl shadow-inner-xl"
            style={{
              boxShadow: "inset 0 2px 20px rgba(0, 0, 0, 0.5)",
            }}
          />

          {/* Image Container with Padding for Shadow Space */}
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-xl">
            <div className="relative w-full h-full overflow-hidden rounded-xl">
              <Image
                src={activeDesignImage}
                alt="Design & Branding Solutions"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain transition-transform duration-700 group-hover:scale-110"
                style={{
                  filter:
                    "drop-shadow(0 25px 50px rgba(139, 92, 246, 0.5)) drop-shadow(0 10px 30px rgba(192, 132, 252, 0.4))",
                  borderRadius: "0.75rem",
                }}
              />
            </div>

            {/* Interactive Shine Effect */}
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: "200%", opacity: [0, 0.8, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 5,
                ease: "easeInOut",
              }}
              className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 z-20 pointer-events-none"
            />
          </div>

          {/* Subtle Grid Pattern Overlay */}
          <div
            className="absolute inset-0 rounded-2xl opacity-5"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
        </div>

        {/* Corner Accents */}
        <div className="absolute -top-2 -right-2 w-20 h-20">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-violet-600/20 rounded-full blur-xl"
          />
        </div>

        <div className="absolute -bottom-2 -left-2 w-20 h-20">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
            className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 rounded-full blur-xl"
          />
        </div>

        {/* Floating Particles */}
        <motion.div
          animate={{
            y: [0, -12, 0],
            x: [0, 6, 0],
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-12 right-12 w-2 h-2 bg-purple-400 rounded-full blur-[1px]"
        />
        <motion.div
          animate={{
            y: [0, 12, 0],
            x: [0, -6, 0],
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5,
          }}
          className="absolute bottom-12 left-12 w-2 h-2 bg-violet-400 rounded-full blur-[1px]"
        />
      </motion.div>
    </motion.div>
  );
};

export default DesignImageDisplay;
