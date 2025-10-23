import { motion, AnimatePresence } from "framer-motion";

const ServiceDetailsPanel = ({ service }) => {
  if (!service) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="hidden lg:flex items-center justify-center h-full" // Added hidden lg:flex
      >
        <p className="text-gray-400 text-xl text-center">
          Select a service to view details
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="hidden lg:block space-y-6" // Added hidden lg:block
    >
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-purple-200 mb-4">
          {service.title}
        </h3>
        <p className="text-gray-300 text-lg font-semibold tracking-wide leading-relaxed">
          {service.description}
        </p>
      </div>
      <div>
        <h4 className="text-xl font-semibold text-purple-400 mb-4">
          Deliverables:
        </h4>
        <AnimatePresence mode="wait">
          <div className="grid grid-cols-1 gap-4">
            {service.deliverables.map((item, index) => (
              <motion.div
                key={`${service.title}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.3,
                }}
                className="flex items-center gap-3 group"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.2,
                  }}
                  className="w-2 h-2 rounded-full bg-purple-500"
                />
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.3,
                  }}
                  className="text-gray-200 text-lg"
                >
                  {item}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ServiceDetailsPanel;
