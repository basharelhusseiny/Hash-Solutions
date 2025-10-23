import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service, index, type, clickedItem, onClick }) => {
  const itemId = `${type}-${index}`;
  const isActive = clickedItem === itemId;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: -50, scale: 0.9 },
        visible: {
          opacity: 1,
          x: 0,
          scale: 1,
          transition: { duration: 0.8, ease: "easeOut" },
        },
      }}
      onClick={() => onClick(itemId)}
      whileHover={{ x: 10, scale: 1.02 }}
      className={`group cursor-target relative cursor-pointer ${
        isActive
          ? `ring-2 ${
              type === "marketing" ? "ring-purple-500" : "ring-violet-500"
            } ring-opacity-50 rounded-2xl`
          : ""
      }`}
    >
      <div
        className={`flex items-center p-6 rounded-2xl bg-black/40 backdrop-blur-xl border ${
          type === "marketing"
            ? "border-purple-500/30 hover:border-purple-400/60 hover:shadow-purple-500/20"
            : "border-violet-500/30 hover:border-violet-400/60 hover:shadow-violet-500/20"
        } transition-all duration-500 hover:shadow-2xl`}
      >
        <motion.div
          animate={{
            scale: isActive ? 1.2 : 1,
            rotate: isActive ? 360 : 0,
          }}
          transition={{ duration: 0.6 }}
          className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white shadow-lg mr-5 relative overflow-hidden`}
        >
          <service.icon className="text-xl relative z-10" />
          <motion.div
            animate={{
              scale: isActive ? 1 : 0,
              opacity: isActive ? 0.3 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-white rounded-xl"
          />
        </motion.div>
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <h3
              className={`text-white font-bold text-2xl leading-tight transition-colors duration-300 ${
                isActive
                  ? type === "marketing"
                    ? "text-purple-300"
                    : "text-violet-200"
                  : ""
              }`}
            >
              {service.title}
            </h3>
            <motion.div
              animate={{
                rotate: isActive ? 45 : 0,
              }}
              transition={{ duration: 0.3 }}
              className={`${
                type === "marketing" ? "text-purple-400" : "text-violet-400"
              } transition-opacity duration-300 ml-4 ${
                isActive ? "opacity-100" : "opacity-60"
              }`}
            >
              <FaArrowRight
                className={`text-lg ${
                  type === "design" ? "hidden lg:block" : ""
                }`}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile expanded panel: show full data (title, description, deliverables) */}
      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.36 }}
            className="overflow-hidden lg:hidden"
          >
            <div className="mt-4 px-6 pb-6 bg-black/20 rounded-b-2xl border-t border-purple-500/20">
              {/* Title (mobile) */}
              <motion.h4
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-white font-semibold text-lg mb-2"
              >
                {service.title}
              </motion.h4>

              {/* Description */}
              {service.description && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05, duration: 0.35 }}
                  className="text-gray-300 text-sm leading-relaxed mb-3"
                >
                  {service.description}
                </motion.p>
              )}

              {/* Deliverables header */}
              {service.deliverables && service.deliverables.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08, duration: 0.35 }}
                  className="mb-2"
                >
                  <h5 className="text-purple-300 font-medium">Deliverables</h5>
                </motion.div>
              )}

              {/* Deliverables list with consistent staggered animation */}
              <div className="space-y-3">
                {service.deliverables?.map((deliverable, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.12 + i * 0.08,
                      duration: 0.32,
                      ease: "easeOut",
                    }}
                    className="flex items-start gap-3"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.12 + i * 0.08,
                        duration: 0.28,
                      }}
                      className="mt-1 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0"
                    />
                    <span className="text-gray-300 text-sm">{deliverable}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: isActive ? "100%" : 0 }}
        transition={{ duration: 0.3 }}
        className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.color} rounded-full`}
      />
    </motion.div>
  );
};

export default ServiceCard;
