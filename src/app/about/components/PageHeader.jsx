import { motion } from "framer-motion";

const PageHeader = ({ itemVariants, isVisible }) => {
  return (
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
          We combine strategy, creativity, and disciplined execution to help
          organizations grow.
        </p>
      </div>
    </motion.div>
  );
};

export default PageHeader;
