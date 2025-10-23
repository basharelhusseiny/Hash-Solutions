import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const PageHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative mt-4 mb-12 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative z-20"
      >
        <div className="flex flex-col items-center space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-xl md:text-2xl font-medium text-gray-200 max-w-2xl mx-auto leading-relaxed"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="block mb-2"
            >
              Media and audio productions that
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="relative inline-block font-medium"
            >
              <span className="text-[#bcfd5e]">clarify your message</span>
            </motion.span>{" "}
            &{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="relative inline-block font-medium"
            >
              <span className="text-[#bcfd5e]">
                tell your story
                <span className="font-bold bg-gradient-to-r from-[#bcfd5e] to-green-400 bg-clip-text text-transparent">
                  {" "}
                  Creatively
                </span>
              </span>
            </motion.span>
            <motion.span
              initial={{ width: 0 }}
              animate={isVisible ? { width: "40%" } : { width: 0 }}
              transition={{ delay: 1.5, duration: 1.2 }}
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-[#bcfd5e] to-transparent"
            />
          </motion.p>
        </div>
      </motion.div>

      {/* Enhanced Background Effects */}
      <div className="absolute -z-10 inset-0 ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-r from-[#bcfd5e]/10 via-green-400/5 to-[#bcfd5e]/10 blur-3xl"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-32 bg-[#bcfd5e]/5 rotate-45 blur-3xl" />
      </div>
    </div>
  );
};

export default PageHeader;
