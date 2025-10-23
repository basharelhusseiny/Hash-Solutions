import { motion } from "framer-motion";

const PageHeader = ({ isVisible }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-20"
    >
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
        Strategic
        <span className="text-purple-200"> Marketing </span>
        <span className="text-purple-300"> The </span>
        <span className="text-purple-400"> Gets </span>
        <span className="text-purple-500">Results </span>
        <br />
        <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent"></span>
      </h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="relative"
      >
        <p className="text-[20px] text-gray-200 max-w-5xl mx-auto leading-relaxed font-light">
          At HASH Solutions, we provide a comprehensive range of marketing and
          business development services tailored to help businesses grow and
          succeed. We are specialized in the following areas:
        </p>
        <motion.div
          initial={{ width: 0 }}
          animate={isVisible ? { width: "60%" } : { width: 0 }}
          transition={{ delay: 1.5, duration: 1.2 }}
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-purple-700 to-transparent"
        />
      </motion.div>
    </motion.div>
  );
};

export default PageHeader;
