import { motion } from "framer-motion";
import Image from "next/image";

const FloatingImages = () => {
  return (
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
  );
};

export default FloatingImages;
