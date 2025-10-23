import { motion } from "framer-motion";
import Link from "next/link";
import { FaRocket } from "react-icons/fa";

const CTASection = ({ itemVariants }) => {
  return (
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
  );
};

export default CTASection;
