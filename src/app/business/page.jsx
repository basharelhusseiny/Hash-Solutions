"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  FaChartLine,
  FaLightbulb,
  FaGlobe,
  FaCogs,
  FaHandshake,
  FaRocket,
  FaBuilding,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";
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

  const services = [
    {
      icon: FaCogs,
      title: "Business Process Management (BPM) Consultation",
      description:
        "Streamline your operations with expert BPM strategies that optimize efficiency and reduce costs.",
      features: [
        "Process Mapping & Analysis",
        "Workflow Optimization",
        "Performance Metrics Setup",
        "Quality Management Systems",
      ],
      color: "from-gray-700 to-gray-800",
    },
    {
      icon: FaChartLine,
      title: "Business Plans & Market Survey",
      description:
        "Comprehensive market analysis and strategic business planning to ensure your venture's success.",
      features: [
        "Market Research & Analysis",
        "Competitive Assessment",
        "Financial Projections",
        "Risk Analysis",
      ],
      color: "from-zinc-800 to-zinc-900",
    },
    {
      icon: FaLightbulb,
      title: "Business Development Strategies",
      description:
        "Innovative strategies tailored to accelerate your business growth and market penetration.",
      features: [
        "Growth Strategy Planning",
        "Sales Process Optimization",
        "Partnership Development",
        "Market Entry Strategy",
      ],
      color: "from-gray-800 to-gray-900",
    },
    {
      icon: FaBuilding,
      title: "Corporate Business Facilitation",
      description:
        "Professional corporate services and financial management to support your business operations.",
      features: [
        "Corporate Structure Setup",
        "Financial Management",
        "Compliance Services",
        "Business Advisory",
      ],
      color: "from-neutral-800 to-neutral-900",
    },
    {
      icon: FaGlobe,
      title: "Business Expansion Services",
      description:
        "Preparation and qualifying for local & international expansion opportunities.",
      features: [
        "Market Entry Analysis",
        "International Partnership",
        "Expansion Planning",
        "Cross-border Operations",
      ],
      color: "from-gray-800 to-gray-900",
    },
  ];

  const stats = [
    { icon: FaUsers, number: "500+", label: "Clients Served" },
    { icon: FaRocket, number: "12+", label: "Years Experience" },
    { icon: FiTarget, number: "95%", label: "Success Rate" },
    { icon: FaHandshake, number: "3", label: "Countries" },
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
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-block px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-medium border border-gray-700 mb-6">
              Professional Business Solutions
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gray-200">Business Development</span>
              <br />
              <span className="text-gray-400">Solutions</span>
            </h1>
            <div className="flex justify-center items-center gap-4 mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent w-24" />
              <span className="text-xl font-bold text-gray-400">
                Let's Hash It Up!
              </span>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent w-24" />
            </div>
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
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 shadow-2xl">
                <Image
                  src="/images/meetHash.png"
                  alt="Business Development"
                  width={400}
                  height={200}
                  className="rounded-2xl shadow-xl"
                  priority
                />
              </div>
            </motion.div>

            {/* Content Side */}
            <div className="text-left order-1 lg:order-2">
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                Empowering businesses with strategic solutions that drive
                growth, optimize operations, and unlock new opportunities in
                today's competitive landscape.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
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
            </div>
          </motion.div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-gray-300">Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive business solutions designed to accelerate your
              growth and success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                className={`group relative p-8 rounded-2xl bg-gradient-to-b ${service.color} border border-gray-700/50 transition-all duration-500 hover:border-gray-500`}
              >
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 mb-6 bg-gray-800 rounded-xl flex items-center justify-center text-gray-300 shadow-lg"
                  >
                    <service.icon className="text-2xl" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-200 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-gray-400"
                      >
                        <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-200 mb-6">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
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
