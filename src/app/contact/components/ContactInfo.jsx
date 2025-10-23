"use client";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";

const ContactInfo = ({ itemVariants }) => {
  const contactInfo = [
    {
      icon: FaFacebook,
      label: "Facebook",
      value: "Hash Solutions SD",
      link: "https://m.facebook.com/Hash.solutions.sd/",
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      value: "@hash_solutions",
      link: "https://www.instagram.com/hash_solutions?igsh=c3FhNzRndDQ1N25r&utm_source=qr",
    },
    {
      icon: FaEnvelope,
      label: "Email",
      value: "info@hsmea.net",
      link: "mailto:info@hsmea.net",
    },
  ];

  return (
    <motion.div variants={itemVariants}>
      <h3 className="text-3xl font-bold text-white mb-8 text-center">
        <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Get Connected
        </span>
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
  );
};

export default ContactInfo;
