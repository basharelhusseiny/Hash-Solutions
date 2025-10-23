import { motion } from "framer-motion";
import Image from "next/image";

const RubixLogo = () => {
  return (
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
        <div className="relative p-6">
          <Image
            src="/images/Productions.png"
            alt="Rubix Logo"
            width={500}
            height={110}
            className="drop-shadow-2xl filter brightness-110"
            priority
            quality={100}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RubixLogo;
