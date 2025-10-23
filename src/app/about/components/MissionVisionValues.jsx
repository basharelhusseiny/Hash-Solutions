import { motion } from "framer-motion";
import { FaRocket, FaLightbulb } from "react-icons/fa";
import { MdPsychology } from "react-icons/md";

const MissionVisionValues = ({ itemVariants }) => {
  const items = [
    {
      title: "Mission",
      content: "Inspire businesses to be more productive and successful.",
      icon: FaRocket,
      gradient: "from-purple-500 to-pink-600",
      borderGlow: "group-hover:shadow-purple-500/20",
    },
    {
      title: "Vision",
      content:
        "A highly ethical and quality service house for vibrant private and public sectors.",
      icon: FaLightbulb,
      gradient: "from-pink-500 to-purple-600",
      borderGlow: "group-hover:shadow-pink-500/20",
    },
    {
      title: "Values",
      content:
        "Practical innovation, client respect, measurable results, and Integrity.",
      icon: MdPsychology,
      gradient: "from-purple-500 to-pink-600",
      borderGlow: "group-hover:shadow-purple-500/20",
    },
  ];

  return (
    <motion.div
      variants={itemVariants}
      className="grid md:grid-cols-3 gap-8 mb-24"
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -5, scale: 1.02 }}
          className="group relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
          <div
            className={`relative p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 h-full shadow-lg transition-all duration-500 ${item.borderGlow}`}
          >
            <div
              className={`w-16 h-16 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-500`}
            >
              <item.icon className="text-2xl text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">{item.title}</h3>
            <p className="text-lg text-purple-100/80 leading-relaxed">
              {item.content}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default MissionVisionValues;
