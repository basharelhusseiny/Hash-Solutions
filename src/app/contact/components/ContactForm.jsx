"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaPaperPlane,
  FaUser,
  FaBuilding,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactForm = ({ isVisible, itemVariants }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log({
      service: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      template: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      key: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    });

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, // Service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, // Template ID
        {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY // Public Key
      );
      // Auto reply
      // await emailjs.send(
      //   process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      //   process.env.NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID,
      //   formData,
      //   process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      // );
      alert(
        "Your message has been sent successfully! We will get in touch with you shortly."
      );

      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("FAILED...", error);
      alert("An error occurred while sending the message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div variants={itemVariants}>
      <h2 className="text-4xl font-bold text-white mb-8 text-center">
        <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Send us a Message
        </span>
      </h2>

      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div variants={itemVariants}>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Full Name *
            </label>
            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-400 text-xl z-10" />
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
              <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-400 text-xl z-10" />
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
              Organization *
            </label>
            <div className="relative">
              <FaBuilding className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-400 text-xl z-10" />
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                required
                className="cursor-target w-full pl-12 pr-4 py-4 bg-black/40 backdrop-blur-xl border border-pink-500/30 rounded-xl text-white placeholder-gray-400 focus:border-pink-400 focus:outline-none transition-all duration-300"
                placeholder="Your Organization name"
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Phone Number *
            </label>
            <div className="relative">
              <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-400 text-xl z-10" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
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
  );
};

export default ContactForm;
