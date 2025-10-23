import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const CTASection = ({ itemVariants, isVisible }) => {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className="text-center bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8"
    >
      <h3 className="text-3xl md:text-4xl font-bold text-gray-200 mb-6">
        Ready to Transform Your Business?
      </h3>
      <p className="text-xl text-gray-400 mb-6 max-w-3xl mx-auto">
        Let's discuss how our business development solutions can drive your
        success
      </p>
      <motion.a
        href="mailto:info@hsmea.net"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="cursor-target block w-fit mx-auto group px-8 py-4 bg-gray-800 rounded-xl text-gray-200 font-bold text-lg shadow-2xl hover:bg-gray-700 transition-all duration-300"
      >
        <span className="relative z-10 flex items-center gap-3">
          Get Started Today
          <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
        </span>
      </motion.a>
    </motion.div>
  );
};

export default CTASection;
