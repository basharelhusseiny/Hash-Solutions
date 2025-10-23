import { motion } from "framer-motion";
import { FaChartLine, FaHandshake, FaUsers, FaRegSmile } from "react-icons/fa";

const SuccessMetrics = ({ itemVariants }) => {
  const metrics = [
    { icon: FaUsers, text: "Reach and engagement" },
    { icon: FaChartLine, text: "Leads and conversions" },
    { icon: FaHandshake, text: "Campaign ROI" },
    { icon: FaRegSmile, text: "Client satisfaction" },
  ];

  return (
    <motion.div variants={itemVariants} className="mb-24">
      <h2 className="text-4xl font-bold text-white mb-12 inline-block relative">
        How We Measure Success?
        <div className="h-1 w-1/4 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-3" />
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-purple-950/30 via-black/40 to-pink-950/30 backdrop-blur-sm border border-purple-500/20 group hover:border-purple-500/40 transition-all duration-500"
          >
            <metric.icon className="text-4xl text-purple-400 mb-4 mx-auto group-hover:text-purple-300 transition-colors duration-300" />
            <p className="text-xl text-white font-medium group-hover:text-purple-200 transition-colors duration-300">
              {metric.text}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SuccessMetrics;
