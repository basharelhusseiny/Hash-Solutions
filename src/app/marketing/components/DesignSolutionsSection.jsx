import { motion } from "framer-motion";
import DesignImageDisplay from "./DesignImageDisplay";
import ServiceCard from "./ServiceCard";

const DesignSolutionsSection = ({
  isVisible,
  designSolutions,
  hoveredItem,
  clickedItem,
  setHoveredItem,
  setClickedItem,
  activeDesignImage,
  setActiveDesignImage,
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

  return (
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <DesignImageDisplay
        activeDesignImage={activeDesignImage}
        isVisible={isVisible}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="space-y-8 order-1 lg:order-2"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Outcomes We{" "}
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              Focus On
            </span>
          </h2>
        </motion.div>

        <motion.div variants={containerVariants} className="space-y-6">
          {designSolutions.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              type="design"
              hoveredItem={hoveredItem}
              clickedItem={clickedItem}
              onHover={setHoveredItem}
              onHoverEnd={() => !clickedItem && setHoveredItem(null)}
              onClick={(itemId) => {
                if (clickedItem === itemId) {
                  setClickedItem(null);
                } else {
                  setClickedItem(itemId);
                  setHoveredItem(itemId);
                  setActiveDesignImage(service.image);
                }
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DesignSolutionsSection;
