"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaGlobe,
  FaFacebook,
  FaInstagram,
  FaPaperPlane,
  FaUser,
  FaBuilding,
  FaStar,
  FaHeart,
  FaChartLine,
  FaPalette,
  FaHashtag,
  FaLaptopCode,
  FaHandshake,
  FaCalendarAlt,
  FaVideo,
} from "react-icons/fa";

const ContactUsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    });
  };

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const contactInfo = [
    {
      icon: FaGlobe,
      label: "Website",
      value: "www.hsmea.net",
      link: "https://www.hsmea.net",
    },
    {
      icon: FaFacebook,
      label: "Facebook",
      value: "Hash Solutions SD",
      link: "#",
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      value: "@hash_solutions",
      link: "#",
    },
    {
      icon: FaEnvelope,
      label: "Email",
      value: "info@hsmea.net",
      link: "mailto:info@hsmea.net",
    },
  ];

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
    <div
      ref={sectionRef}
      className="pt-38 sm:pt-34 pb-30 relative overflow-hidden bg-gradient-to-br from-black via-purple-950/20 to-black min-h-screen"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Animated Geometric Pattern */}
        <div className="absolute inset-0 opacity-[0.5]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(30deg, transparent 40%, rgba(147, 51, 234, 0.1) 40%, rgba(147, 51, 234, 0.1) 60%, transparent 60%),
                linear-gradient(-30deg, transparent 40%, rgba(139, 69, 219, 0.1) 40%, rgba(139, 69, 219, 0.1) 60%, transparent 60%)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Glowing Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-5 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
              Let’s Build Your Next Win
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="relative"
          >
            <p className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light">
              Tell us your goals. We’ll come back with a clear plan and timeline
            </p>
            {/* Underline Animation */}
            <motion.div
              initial={{ width: 0 }}
              animate={isVisible ? { width: "40%" } : { width: 0 }}
              transition={{ delay: 1.5, duration: 1.2 }}
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-pink-700 to-transparent"
            />
          </motion.div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-16">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-bold text-white mb-8 text-center">
                <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Send us a Message
                </span>
              </h2>

              <form
                onSubmit={handleSubmit}
                className="max-w-4xl mx-auto space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="cursor-target w-full pl-12 pr-4 py-4 bg-black/40 backdrop-blur-xl border border-pink-500/30 rounded-xl text-white placeholder-gray-400 focus:border-pink-400 focus:outline-none transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="cursor-target w-full pl-12 pr-4 py-4 bg-black/40 backdrop-blur-xl border border-pink-500/30 rounded-xl text-white placeholder-gray-400 focus:border-pink-400 focus:outline-none transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Organization
                    </label>
                    <div className="relative">
                      <FaBuilding className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-400" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="cursor-target w-full pl-12 pr-4 py-4 bg-black/40 backdrop-blur-xl border border-pink-500/30 rounded-xl text-white placeholder-gray-400 focus:border-pink-400 focus:outline-none transition-all duration-300"
                        placeholder="Your Organization name"
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="cursor-target w-full pl-12 pr-4 py-4 bg-black/40 backdrop-blur-xl border border-pink-500/30 rounded-xl text-white placeholder-gray-400 focus:border-pink-400 focus:outline-none transition-all duration-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </motion.div>
                </div>

                <motion.div variants={itemVariants}>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="cursor-target w-full px-4 py-4 bg-black/40 backdrop-blur-xl border border-pink-500/30 rounded-xl text-white placeholder-gray-400 focus:border-pink-400 focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Tell us about your project or how we can help..."
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="cursor-target w-full group relative px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl text-white font-bold text-lg shadow-2xl hover:shadow-pink-500/30 transition-all duration-300 overflow-hidden disabled:opacity-70"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <FaPaperPlane className="group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="space-y-12"
          >
            {/* Services Summary Section */}
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

            {/* Contact Info Section */}
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Get Connected
                </span>
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="cursor-target group flex flex-col items-center text-center p-6 rounded-xl bg-black/30 backdrop-blur-xl border border-pink-500/20 hover:border-pink-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 flex items-center justify-center text-white shadow-lg mb-3"
                    >
                      <info.icon className="text-lg" />
                    </motion.div>
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">
                        {info.label}
                      </p>
                      <p className="text-white font-medium group-hover:text-pink-200 transition-colors duration-300 text-sm">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Slogan */}
            <motion.div
              variants={itemVariants}
              className="text-center p-8 rounded-2xl bg-gradient-to-r from-pink-600/20 to-purple-600/20 backdrop-blur-xl border border-pink-500/30 max-w-2xl mx-auto"
            >
              <motion.h3
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-3xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-violet-400 bg-clip-text text-transparent"
              >
                Let's Hash It Up!
              </motion.h3>
              <div className="flex justify-center mt-4 space-x-2">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.3, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  >
                    <FaStar className="text-pink-400 text-sm" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
