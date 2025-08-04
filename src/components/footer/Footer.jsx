"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaArrowUp,
  FaGlobe,
  FaUsers,
  FaRocket,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="relative pt-16 pb-10 bg-gradient-to-b from-black via-purple-950/20 to-black border-t border-purple-500/50 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating HASH Images */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 left-10 opacity-30"
        >
          <Image
            src="/images/hash-main.png"
            alt="HASH"
            width={60}
            height={60}
          />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 10, 0],
            rotate: [0, -8, 8, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-20 right-20 opacity-40"
        >
          <Image src="/images/hash-cup.png" alt="HASH" width={80} height={80} />
        </motion.div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 left-50 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-50 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-5"
        >
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
            {/* Company Info */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="mb-6">
                <Image
                  src="/images/HASH-SOLUTIONS-LOGO-white-removebg-preview.png"
                  alt="HASH Solutions Logo"
                  width={200}
                  height={80}
                  className="mb-4"
                />
                <p className="text-gray-400 leading-relaxed max-w-md">
                  Empowering businesses across Africa with innovative solutions
                  and strategic growth opportunities. We focus on creating
                  sustainable business growth through cutting-edge technology
                  and ethical practices.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 rounded-lg bg-purple-900/20 border border-purple-500/20">
                  <FaUsers className="text-purple-400 text-xl mx-auto mb-1" />
                  <div className="text-lg font-bold text-white">100+</div>
                  <div className="text-xs text-gray-400">Projects</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-blue-900/20 border border-blue-500/20">
                  <FaGlobe className="text-blue-400 text-xl mx-auto mb-1" />
                  <div className="text-lg font-bold text-white">2+</div>
                  <div className="text-xs text-gray-400">Countries</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-green-900/20 border border-green-500/20">
                  <FaRocket className="text-green-400 text-xl mx-auto mb-1" />
                  <div className="text-lg font-bold text-white">12+</div>
                  <div className="text-xs text-gray-400">Years</div>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold text-white mb-6 relative">
                Quick Links
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"></div>
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "Marketing" },
                  { name: "Business" },
                  { name: "RUBiX" },
                  { name: "Contact Us" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      href={`#${link.name}`}
                      className="cursor-target text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold text-white mb-6 relative">
                Contact Info
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"></div>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <FaMapMarkerAlt className="text-purple-400 mt-1 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <p className="text-gray-400 leading-relaxed">
                      123 Business District
                      <br />
                      Cairo, Egypt
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 group">
                  <FaPhone className="text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                  <a
                    href="tel:+201234567890"
                    className="cursor-target text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    +20 123 456 7890
                  </a>
                </div>

                <div className="flex items-center space-x-3 group">
                  <FaEnvelope className="text-green-400 group-hover:scale-110 transition-transform duration-300" />
                  <a
                    href="mailto:info@HASHsolutions.com"
                    className="cursor-target text-gray-400 hover:text-green-400 transition-colors duration-300"
                  >
                    info@HASHsolutions.com
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6">
                <h4 className="text-white font-semibold mb-3">Follow Us</h4>
                <div className="flex space-x-3">
                  {[
                    {
                      icon: FaFacebookF,
                      color: "hover:text-blue-500",
                      bg: "hover:bg-blue-500/30",
                    },
                    {
                      icon: FaTwitter,
                      color: "hover:text-sky-400",
                      bg: "hover:bg-sky-400/30",
                    },
                    {
                      icon: FaLinkedinIn,
                      color: "hover:text-blue-600",
                      bg: "hover:bg-blue-600/30",
                    },
                    {
                      icon: FaInstagram,
                      color: "hover:text-pink-500",
                      bg: "hover:bg-pink-500/30",
                    },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`cursor-target w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color} ${social.bg}`}
                    >
                      <social.icon className="text-sm" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            variants={itemVariants}
            className="border-t border-purple-500/50 pt-9 flex flex-col md:flex-row mx-auto justify-center items-center"
          >
            <div className="text-gray-400 text-center text-sm mb-4 md:mb-0 w-full md:w-auto">
              <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
                <span>© 2024 HASH Solutions. All rights reserved.</span>
                <span className="hidden md:inline">|</span>
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-medium">
                  Developed by HASH Solutions
                </span>
                <span className="hidden md:inline">|</span>
                <span>Empowering Growth Across Africa</span>
              </div>
            </div>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-target w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300 md:absolute md:right-5"
            >
              <FaArrowUp className="text-sm" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
