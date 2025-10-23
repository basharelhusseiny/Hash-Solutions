import { motion } from "framer-motion";
import { FaBullseye, FaMapMarkedAlt, FaVideo, FaBolt } from "react-icons/fa";

const WhyRubix = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-6xl mx-auto mt-20 mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        <span className="bg-gradient-to-r from-[#bcfd5e] to-green-400 bg-clip-text text-transparent">
          Why RUBiX?
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {[
          {
            title: "Strategic & Creative",
            icon: FaBullseye,
            delay: 0.2,
          },
          {
            title: "On-location expertise in Sudan / South Sudan",
            icon: FaMapMarkedAlt,
            delay: 0.4,
          },
          {
            title: "Broadcast-quality equipment",
            icon: FaVideo,
            delay: 0.6,
          },
          {
            title: "Fast, reliable delivery",
            icon: FaBolt,
            delay: 0.8,
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: item.delay, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="group flex items-center relative p-4 rounded-xl bg-black/20 border border-[#bcfd5e]/20 hover:border-[#bcfd5e]/40 transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <div className="min-w-10 h-10 rounded-lg bg-gradient-to-br from-[#bcfd5e]/20 to-green-400/20 flex items-center justify-center">
                <item.icon className="text-xl text-[#bcfd5e] group-hover:text-green-400 transition-colors" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-0.5 group-hover:text-[#bcfd5e] transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "0%" }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#bcfd5e]/50 to-green-400/50"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default WhyRubix;
