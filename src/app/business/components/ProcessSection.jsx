import { motion } from "framer-motion";
import {
  FaChartLine,
  FaLightbulb,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa";
import { MdOutlineAssessment } from "react-icons/md";
import { BiTargetLock } from "react-icons/bi";
import { BsSpeedometer } from "react-icons/bs";
import { TbArrowsJoin } from "react-icons/tb";
import { FaClipboardCheck } from "react-icons/fa";

const ProcessSection = ({ containerVariants, itemVariants, isVisible }) => {
  const prosesData = [
    {
      icon: MdOutlineAssessment,
      title: "Assessment",
      description: "We map your current state and goals.",
      step: "01",
    },
    {
      icon: FaLightbulb,
      title: "Strategy",
      description: "We design a practical plan tailored to your market.",
      step: "02",
    },
    {
      icon: FaRocket,
      title: "Activation",
      description: "We implement and build capability with your team.",
      step: "03",
    },
    {
      icon: FaChartLine,
      title: "Review",
      description: "We measure impact and iterate.",
      step: "04",
    },
  ];

  const outcomesData = [
    {
      icon: BiTargetLock,
      title: "Clear growth plan",
      description: "By segment and channel",
      highlight: "Strategic",
    },
    {
      icon: FaClipboardCheck,
      title: "Better-qualified pipeline",
      description: "With improved lead quality",
      highlight: "Qualified",
    },
    {
      icon: BsSpeedometer,
      title: "Faster sales cycles",
      description: "And improved close rates",
      highlight: "Efficient",
    },
    {
      icon: TbArrowsJoin,
      title: "Repeatable process",
      description: "For sustainable growth",
      highlight: "Sustainable",
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className="my-20"
    >
      {/* Section Header */}
      <motion.div variants={itemVariants} className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="relative"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Process
          </h2>
          {/* Underline Animation */}
          <motion.div
            initial={{ width: 0 }}
            animate={isVisible ? { width: "30%" } : { width: 0 }}
            transition={{ delay: 1.5, duration: 1.2 }}
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-gray-500 to-transparent"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="flex justify-center md:mb-16"
      >
        <div className="w-full hidden md:flex justify-evenly items-center gap-12 px-12 py-6 rounded-2xl bg-gray-800/30 border border-gray-700/50 relative group">
          <div className="flex items-center gap-4">
            <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
              <FaRocket className="text-2xl text-gray-300 group-hover:text-gray-200 transition-colors" />
            </span>
            <span className="text-2xl text-gray-300 font-medium">
              How We Work!
            </span>
          </div>

          <motion.div
            animate={{
              x: [0, -35, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex items-center gap-2"
          >
            <motion.div
              className="h-14 flex items-center"
              animate={{ x: [0, 0, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <FaArrowRight className="text-3xl text-gray-500 group-hover:text-gray-400 transition-colors" />
            </motion.div>
          </motion.div>

          <div className="flex items-center gap-4">
            <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
              <BiTargetLock className="text-2xl text-gray-300 group-hover:text-gray-200 transition-colors" />
            </span>
            <span className="text-2xl text-gray-300 font-medium">Outcomes</span>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            whileHover={{ opacity: 0.3 }}
            className="absolute inset-0 bg-gradient-to-r from-gray-800/0 via-gray-700/5 to-gray-800/0 rounded-2xl transition-opacity duration-300"
          />
        </div>
      </motion.div>

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Process Column */}
        <motion.div
          variants={itemVariants}
          className="bg-gray-900/20 rounded-2xl p-8 border border-gray-800"
        >
          <h3 className="text-2xl font-bold text-gray-200 mb-8 flex items-center">
            <span className="w-10 h-10 rounded-lg bg-gradient-to-r from-gray-700 to-gray-800 flex items-center justify-center mr-3">
              <FaRocket className="text-gray-300" />
            </span>
            How We Work!
          </h3>

          <div className="space-y-6">
            {prosesData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="flex items-start gap-6 p-5 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                    <item.icon className="text-xl text-gray-300 group-hover:text-gray-200 transition-colors" />
                  </div>
                  <span className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-gray-800 text-gray-400 text-xs flex items-center justify-center border border-gray-700">
                    {item.step}
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-200 mb-2 group-hover:text-white transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Outcomes Column */}
        <motion.div
          variants={itemVariants}
          className="bg-gray-900/20 rounded-2xl p-8 border border-gray-800"
        >
          <h3 className="text-2xl font-bold text-gray-200 mb-8 flex items-center">
            <span className="w-10 h-10 rounded-lg bg-gradient-to-r from-gray-700 to-gray-800 flex items-center justify-center mr-3">
              <BiTargetLock className="text-gray-300" />
            </span>
            Outcomes
          </h3>
          <div className="space-y-6">
            {outcomesData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="flex items-start gap-6 p-5 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                    <item.icon className="text-xl text-gray-300 group-hover:text-gray-200 transition-colors" />
                  </div>
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 px-2 py-1 rounded-full bg-gray-800 text-gray-400 text-sm flex items-center justify-center border border-gray-700">
                    {item.highlight}
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-200 mb-2 group-hover:text-white transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProcessSection;
