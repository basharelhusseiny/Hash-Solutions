import { motion } from "framer-motion";
import { FaRocket, FaHandshake, FaUsers } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";

const StatsGrid = ({ itemVariants }) => {
  const stats = [
    { icon: FaUsers, number: "500+", label: "Clients Served" },
    { icon: FaRocket, number: "14+", label: "Years Experience" },
    { icon: FiTarget, number: "95%", label: "Success Rate" },
    { icon: FaHandshake, number: "2", label: "Countries" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          className="p-4 cursor-target rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-center transition-all duration-300 hover:border-gray-600"
        >
          <stat.icon className="text-3xl text-gray-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-200 mb-1">
            {stat.number}
          </div>
          <div className="text-gray-400">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsGrid;
