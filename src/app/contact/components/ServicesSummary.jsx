"use client";
import { motion } from "framer-motion";
import {
  FaChartLine,
  FaPalette,
  FaHashtag,
  FaLaptopCode,
  FaHandshake,
  FaCalendarAlt,
  FaVideo,
} from "react-icons/fa";

const ServicesSummary = ({ itemVariants }) => {
  const servicesData = [
    {
      icon: FaChartLine,
      title: "Marketing Strategy & Campaigns",
      color: "from-pink-600 to-purple-600",
    },
    {
      icon: FaPalette,
      title: "Brand Identity & Design",
      color: "from-purple-600 to-pink-600",
    },
    {
      icon: FaHashtag,
      title: "Social Media Management",
      color: "from-pink-600 to-purple-600",
    },
    {
      icon: FaLaptopCode,
      title: "Web Design & Landing Pages",
      color: "from-purple-600 to-pink-600",
    },
    {
      icon: FaHandshake,
      title: "Business Development Consulting",
      color: "from-pink-600 to-purple-600",
    },
    {
      icon: FaCalendarAlt,
      title: "Events Management",
      color: "from-purple-600 to-pink-600",
    },
    {
      icon: FaVideo,
      title: "Media Production (RUBiX)",
      color: "from-pink-600 to-purple-600",
    },
  ];

  return (
    <motion.div variants={itemVariants} className="mt-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-pink-900/10 rounded-3xl" />

      <div className="relative">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Services Summary
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="cursor-target group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

              <div className="relative p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-500">
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex-shrink-0 flex items-center justify-center text-white shadow-lg group-hover:shadow-purple-500/50`}
                  >
                    <service.icon className="text-2xl" />
                  </motion.div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-200 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="w-2 h-2 rounded-full bg-purple-500" />
                      <div className="w-2 h-2 rounded-full bg-pink-500" />
                      <div className="w-2 h-2 rounded-full bg-purple-500" />
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"
                />
              </div>

              {/* Glowing corner accents */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl" />
    </motion.div>
  );
};

export default ServicesSummary;
