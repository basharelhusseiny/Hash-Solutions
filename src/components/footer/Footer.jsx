"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaArrowUp,
  FaGlobe,
  FaUsers,
  FaRocket,
} from "react-icons/fa";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  const getThemeColors = () => {
    switch (pathname) {
      case "/business":
        return {
          gradient: "from-black via-gray-900/20 to-black",
          border: "border-gray-500/50",
          primary: "text-gray-400",
          highlight: "from-gray-500 to-gray-700",
          statsBg: "bg-gray-900/20",
          statsIcon: "text-gray-400",
          statsBorder: "border-gray-500/20",
          linkHover: "hover:text-gray-200",
          socialHover: {
            facebook: "hover:bg-gray-700/30 hover:text-gray-300",
            twitter: "hover:bg-gray-700/30 hover:text-gray-300",
            linkedin: "hover:bg-gray-700/30 hover:text-gray-300",
            instagram: "hover:bg-gray-700/30 hover:text-gray-300",
          },
          buttonGradient: "from-gray-400 to-gray-700",
          orbs: {
            first: "bg-gray-600/45",
            second: "bg-gray-600/45",
          },
          dotIndicator: "bg-gray-500",
          developedBy: "from-gray-200 to-gray-500",
          contactIcons: "text-gray-400",
          contactHover: "hover:text-gray-200",
          bottomBorder: "border-gray-500/50",
          images: {
            floatingTop: "/images/new-cup-mo-wh.png",
            floatingBottom: "/images/new-cup-mo-wh.png",
            mainLogo: "/images/new-full-white.png",
          },
        };
      case "/rubix":
        return {
          gradient: "from-black via-green-900/20 to-black",
          border: "border-green-500/50",
          primary: "text-green-400",
          highlight: "from-green-500 to-green-700",
          statsBg: "bg-green-900/20",
          statsIcon: "text-green-400",
          statsBorder: "border-green-500/20",
          linkHover: "hover:text-green-400",
          socialHover: {
            facebook: "hover:bg-green-700/30 hover:text-green-300",
            twitter: "hover:bg-green-700/30 hover:text-green-300",
            linkedin: "hover:bg-green-700/30 hover:text-green-300",
            instagram: "hover:bg-green-700/30 hover:text-green-300",
          },
          buttonGradient: "from-green-300 to-green-800",
          orbs: {
            first: "bg-green-600/25",
            second: "bg-green-600/25",
          },
          dotIndicator: "bg-green-500",
          developedBy: "from-green-300 to-green-600",
          contactIcons: "text-green-400",
          contactHover: "hover:text-green-400",
          bottomBorder: "border-green-500/50",
          images: {
            floatingTop: "/images/new-cup-mo-wh.png",
            floatingBottom: "/images/new-cup-mo-wh.png",
            mainLogo: "/images/new-full-white.png",
          },
        };
      default:
        return {
          gradient: "from-black via-purple-950/20 to-black",
          border: "border-purple-500/50",
          primary: "text-purple-400",
          highlight: "from-purple-500 to-blue-500",
          statsBg: "bg-purple-900/20",
          statsIcon: "text-purple-400",
          statsBorder: "border-purple-500/20",
          linkHover: "hover:text-purple-400",
          socialHover: {
            facebook: "hover:bg-blue-500/30 hover:text-blue-500",
            twitter: "hover:bg-sky-400/30 hover:text-sky-400",
            linkedin: "hover:bg-blue-600/30 hover:text-blue-600",
            instagram: "hover:bg-pink-500/30 hover:text-pink-500",
          },
          buttonGradient: "from-purple-600 to-blue-600",
          orbs: {
            first: "bg-purple-600/15",
            second: "bg-blue-600/15",
          },
          dotIndicator: "bg-purple-500",
          developedBy: "from-purple-400 to-blue-400",
          contactIcons: "text-purple-400",
          contactHover: "hover:text-purple-400",
          bottomBorder: "border-purple-500/50",
          images: {
            floatingTop: "/images/hash-main.png",
            floatingBottom: "/images/Hash-box-new.png",
            mainLogo: "/images/new-full-wh.png",
          },
        };
    }
  };

  const theme = getThemeColors();

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

  const offices = [
    {
      location: "Sudan Office",
      address: "Al-Riyadh, Khartoum, Sudan",
      phones: ["+249-90-11 22 666", "+249-99-999 02 41"],
      icon: FaMapMarkerAlt,
    },
    {
      location: "Egypt Office",
      address: "Mokattam Hills, Cairo",
      phones: ["+20-15-58077117"],
      icon: FaMapMarkerAlt,
    },
  ];

  return (
    <footer
      className={`relative pt-16 pb-10 bg-gradient-to-b ${theme.gradient} border-t ${theme.border} overflow-hidden`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
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
            src={theme.images.floatingTop}
            alt="Floating Logo"
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
          className="absolute bottom-20 right-20"
        >
          <Image
            src={theme.images.floatingBottom}
            alt="Floating Logo"
            width={80}
            height={80}
          />
        </motion.div>

        <div
          className={`absolute top-0 left-50 w-96 h-96 ${theme.orbs.first} rounded-full blur-3xl`}
        />
        <div
          className={`absolute bottom-0 right-50 w-80 h-80 ${theme.orbs.second} rounded-full blur-3xl`}
        />
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
              <div className="mb-6 flex flex-col items-center lg:items-start">
                <Image
                  src={theme.images.mainLogo}
                  alt="Solutions Logo"
                  width={200}
                  height={80}
                  className="mb-4 w-full max-w-[180px] sm:max-w-[200px] object-contain"
                />
                <div className="space-y-3 text-center lg:text-left">
                  <div className="flex flex-col sm:flex-row sm:items-start space-y-2 sm:space-y-0 sm:space-x-3">
                    <span
                      className={`font-semibold ${theme.primary} text-sm sm:text-base`}
                    >
                      Mission:
                    </span>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                      Inspire businesses to work smarter and grow stronger.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start space-y-2 sm:space-y-0 sm:space-x-3">
                    <span
                      className={`font-semibold ${theme.primary} text-sm sm:text-base`}
                    >
                      Vision:
                    </span>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed pl-0 sm:pl-[11px]">
                      High-ethics, high-quality service for vibrant private and
                      public institutions.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start space-y-2 sm:space-y-0 sm:space-x-3">
                    <span
                      className={`font-semibold ${theme.primary} text-sm sm:text-base`}
                    >
                      Values:
                    </span>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed pl-0 sm:pl-2">
                      <span className="inline-flex flex-wrap gap-2">
                        <span>Integrity</span>
                        <span className="text-gray-500">•</span>
                        <span>Practicality</span>
                        <span className="text-gray-500">•</span>
                        <span>Results</span>
                        <span className="text-gray-500">•</span>
                        <span>Respect</span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div
                  className={`text-center p-4 rounded-lg ${theme.statsBg} border ${theme.statsBorder}`}
                >
                  <FaUsers
                    className={`${theme.statsIcon} text-xl sm:text-2xl mx-auto mb-2`}
                  />
                  <div className="text-lg sm:text-xl font-bold text-white">
                    100+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">
                    Projects
                  </div>
                </div>
                <div
                  className={`text-center p-4 rounded-lg ${theme.statsBg} border ${theme.statsBorder}`}
                >
                  <FaGlobe
                    className={`${theme.statsIcon} text-xl sm:text-2xl mx-auto mb-2`}
                  />
                  <div className="text-lg sm:text-xl font-bold text-white">
                    2+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">
                    Countries
                  </div>
                </div>
                <div
                  className={`text-center p-4 rounded-lg ${theme.statsBg} border ${theme.statsBorder}`}
                >
                  <FaRocket
                    className={`${theme.statsIcon} text-xl sm:text-2xl mx-auto mb-2`}
                  />
                  <div className="text-lg sm:text-xl font-bold text-white">
                    14+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">Years</div>
                </div>
              </div>
            </motion.div>

            {/* Quick Links - Our Presence */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold text-white mb-6 relative">
                Our Presence
                <div
                  className={`absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r ${theme.highlight}`}
                ></div>
              </h3>
              <div className="space-y-4">
                {offices.map((office, index) => (
                  <motion.div
                    key={index}
                    className="group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <office.icon
                        className={`${theme.contactIcons} group-hover:scale-110 transition-transform duration-300`}
                      />
                      <h4 className={`font-medium ${theme.primary}`}>
                        {office.location}
                      </h4>
                    </div>
                    <div className="ml-7">
                      <p className="text-gray-400 text-sm mb-2">
                        {office.address}
                      </p>
                      <div className="space-y-1">
                        {office.phones.map((phone, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-2"
                          >
                            <FaPhone
                              className={`${theme.contactIcons} text-xs`}
                            />
                            <a
                              href={`tel:${phone.replace(/[- ]/g, "")}`}
                              className={`text-sm text-gray-400 ${theme.contactHover} transition-colors duration-300`}
                            >
                              {phone}
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold text-white mb-6 relative">
                Contact Info
                <div
                  className={`absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r ${theme.highlight}`}
                ></div>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <FaMapMarkerAlt
                    className={`${theme.contactIcons} mt-1 group-hover:scale-110 transition-transform duration-300`}
                  />
                  <div>
                    <p className="text-gray-400 leading-relaxed">
                      Tong Ping, Airport Rd. Plot# 269
                      <br /> Juba, South Sudan
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 group">
                  <FaPhone
                    className={`${theme.contactIcons} group-hover:scale-110 transition-transform duration-300`}
                  />
                  <a
                    href="tel:+211981222666"
                    className={`cursor-target text-gray-400 ${theme.contactHover} transition-colors duration-300`}
                  >
                    +211 981 222 666
                  </a>
                </div>

                <div className="flex items-center space-x-3 group">
                  <FaEnvelope
                    className={`${theme.contactIcons} group-hover:scale-110 transition-transform duration-300`}
                  />
                  <a
                    href="mailto:info@hsmea.net"
                    className={`cursor-target ${theme.contactHover} text-gray-400 transition-colors duration-300`}
                  >
                    info@hsmea.net
                  </a>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-white font-semibold mb-3">Follow Us</h4>
                <div className="flex space-x-3">
                  {[
                    {
                      icon: FaFacebookF,
                      hoverClass: theme.socialHover.facebook,
                      link: "https://m.facebook.com/Hash.solutions.sd/",
                    },
                    {
                      icon: FaLinkedinIn,
                      hoverClass: theme.socialHover.linkedin,
                      link: "#",
                    },
                    {
                      icon: FaInstagram,
                      hoverClass: theme.socialHover.instagram,
                      link: "https://www.instagram.com/hash_solutions?igsh=c3FhNzRndDQ1N25r&utm_source=qr",
                    },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`cursor-target w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 transition-all duration-300 ${social.hoverClass}`}
                    >
                      <social.icon className="text-sm" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className={`border-t ${theme.bottomBorder} pt-9 flex flex-col md:flex-row mx-auto justify-center items-center`}
          >
            <div className="text-gray-400 text-center text-sm mb-4 md:mb-0 w-full md:w-auto">
              <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
                <span>© 2024 HASH Solutions. All rights reserved.</span>
                <span className="hidden md:inline">|</span>
                <span
                  className={`bg-gradient-to-r ${theme.developedBy} bg-clip-text text-transparent font-medium`}
                >
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
              className={`cursor-target w-12 h-12 rounded-full bg-gradient-to-r ${theme.buttonGradient} flex items-center justify-center text-white shadow-lg hover:shadow-current/25 transition-all duration-300 md:absolute md:right-5`}
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
