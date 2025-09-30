"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  FaChartLine,
  FaLightbulb,
  FaGlobe,
  FaProjectDiagram,
  FaHandshake,
  FaRocket,
  FaBuilding,
  FaUsers,
  FaArrowRight,
  FaClipboardCheck,
} from "react-icons/fa";
import { MdOutlineAssessment } from "react-icons/md";
import { BiTargetLock } from "react-icons/bi";
import { BsSpeedometer } from "react-icons/bs";
import { TbArrowsJoin } from "react-icons/tb";
import { FiTarget } from "react-icons/fi";

const BusinessPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

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

  const businessOffersData = [
    {
      title: "Business Process Management consultation",
      description:
        "Streamline organizations operations by analyzing, improving, and automating workflows. BPM service ensures your business runs more efficiently, reduces costs, and delivers better results through well-structured processes.",
      icon: FaProjectDiagram,
    },
    {
      title: "Go-to-Market Planning",
      description:
        "Prioritize segments, define value propositions, and map acquisition channels.",
      icon: FaChartLine,
    },
    {
      title: "Pipeline & Partnerships",
      description:
        "Prospecting frameworks, outreach, and partnership structuring.",
      icon: FaHandshake,
    },
    {
      title: "Sales Enablement",
      description: "Offers, proposals, pitch materials.",
      icon: FaRocket,
    },
    {
      title: "Pricing & Packaging",
      description: "Design service tiers.",
      icon: FaBuilding,
    },
    {
      title: "Sales & Customer Service",
      description: "Training and development programs.",
      icon: FaUsers,
    },
  ];
  const stats = [
    { icon: FaUsers, number: "500+", label: "Clients Served" },
    { icon: FaRocket, number: "14+", label: "Years Experience" },
    { icon: FiTarget, number: "95%", label: "Success Rate" },
    { icon: FaHandshake, number: "2", label: "Countries" },
  ];

  return (
    <div
      ref={sectionRef}
      className="pt-32 pb-16 relative overflow-hidden bg-gradient-to-b from-gray-900 to-black"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gray-800/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-800/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-5 relative z-10">
        {/* Hero Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants} className="mb-20">
            <span className="inline-block px-6 py-2 bg-gray-800 text-gray-300 rounded-full font-medium border border-gray-700 mb-6">
              Business Development Solutions
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gray-100">Strategically Expanding </span>
              <span className="text-gray-200">Businesses </span>
              <span className="text-gray-300">& </span>
              <span className="text-gray-400"> Driving</span>
              <span className="text-gray-500"> Growth</span>
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="relative"
            >
              <p className="text-[20px] text-gray-200 max-w-5xl mx-auto leading-relaxed font-semibold">
                We help you identify opportunities, build partnerships, and
                streamline your commercial engine to grow revenue.
              </p>
              {/* Underline Animation */}
              <motion.div
                initial={{ width: 0 }}
                animate={isVisible ? { width: "70%" } : { width: 0 }}
                transition={{ delay: 1.5, duration: 1.2 }}
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-gray-500 to-transparent"
              />
            </motion.div>
          </motion.div>

          {/* Hero Image and Content */}
          <motion.div
            variants={itemVariants}
            className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
          >
            {/* Image Side */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative group order-2 lg:order-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 to-gray-700/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <div className="relative flex items-center justify-center bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 shadow-2xl">
                <Image
                  src="/images/meetHash.png"
                  alt="Business Development"
                  width={370}
                  height={200}
                  className="rounded-2xl shadow-xl"
                  priority
                />
              </div>
            </motion.div>

            {/* Content Side */}
            {/* Content Side */}
            <div className="text-left order-1 lg:order-2">
              <motion.div variants={itemVariants} className="text-center mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="relative"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6">
                    Our The Service
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

              <div className="space-y-6">
                {businessOffersData.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="group flex items-start gap-4 p-4 rounded-xl bg-gray-800/20 border border-gray-700/50 hover:border-gray-600 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-xl text-gray-300 group-hover:text-gray-200 transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-100 mb-1 group-hover:text-white transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-300 leading-relaxed group-hover:text-gray-300 transition-colors">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
        {/* ============================= Grid ============================= */}
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
        {/* Services Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="mb-20"
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
          {/* ================== */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center mb-16"
          >
            <div className=" flex items-center gap-12 px-12 py-6 rounded-2xl bg-gray-800/30 border border-gray-700/50 relative group">
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
                  x: [0, 15, 0],
                  scale: [1, 1.1, 1],
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
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <FaArrowRight className="text-3xl text-gray-500 group-hover:text-gray-400 transition-colors" />
                </motion.div>
              </motion.div>

              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <BiTargetLock className="text-2xl text-gray-300 group-hover:text-gray-200 transition-colors" />
                </span>
                <span className="text-2xl text-gray-300 font-medium">
                  Outcomes
                </span>
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

        {/* Add this between the Process title and the two columns */}

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-200 mb-6">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-gray-400 mb-6 max-w-3xl mx-auto">
            Let's discuss how our business development solutions can drive your
            success
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-target group px-8 py-4 bg-gray-800 rounded-xl text-gray-200 font-bold text-lg shadow-2xl hover:bg-gray-700 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-3">
              Get Started Today
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default BusinessPage;
