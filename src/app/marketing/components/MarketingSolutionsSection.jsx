import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import ServiceDetailsPanel from "./ServiceDetailsPanel";

const MarketingSolutionsSection = ({
  isVisible,
  marketingSolutions,
  clickedItem,
  setClickedItem,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const getActiveService = () => {
    if (!clickedItem) return null;
    if (!clickedItem.startsWith("marketing-")) return null;
    const index = parseInt(clickedItem.split("-")[1]);
    return marketingSolutions[index];
  };

  return (
    <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="space-y-8 order-2 lg:order-1"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Core{" "}
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
        </motion.div>

        <motion.div variants={containerVariants} className="space-y-6">
          {marketingSolutions.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              type="marketing"
              clickedItem={clickedItem}
              onClick={(itemId) => {
                setClickedItem(clickedItem === itemId ? null : itemId);
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="relative order-1 lg:order-2"
      >
        <motion.div className="relative group h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-violet-600/30 rounded-3xl blur-2xl transition-all duration-500" />
          <div className="relative bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8 shadow-2xl h-full">
            <ServiceDetailsPanel
              service={getActiveService()}
              isVisible={isVisible}
            />
          </div>
        </motion.div>
        <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="w-full h-full border-2 border-purple-500/20 rounded-3xl transform rotate-6" />
          <div className="absolute inset-0 w-full h-full border-2 border-violet-500/20 rounded-3xl transform -rotate-3" />
        </div>
      </motion.div>
    </div>
  );
};

export default MarketingSolutionsSection;
