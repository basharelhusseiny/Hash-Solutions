import { useEffect, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const HashModal = ({ isModalOpen, setIsModalOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    businessDescription: "",
    facebook: "",
    instagram: "",
    tiktok: "",
    linkedin: "",
    twitter: "",
  });

  useEffect(() => {
    isModalOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    setIsModalOpen(false);
  };

  return (
    <div
      onClick={() => setIsModalOpen(false)}
      className={`${
        isModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      } fixed top-0 left-0 w-full h-screen backdrop-blur-sm z-50 duration-500`}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isModalOpen ? 1 : 0,
          opacity: isModalOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        className="absolute w-[90%] max-h-[70vh] md:w-[600px] bg-gradient-to-br from-gray-900 to-black top-1/2 left-1/2 
            -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-purple-500/50 overflow-y-auto"
      >
        <motion.button
          onClick={() => setIsModalOpen(false)}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          className="cursor-target absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-purple-500/10 border border-purple-500/20 text-gray-400 hover:text-white transition-colors group"
        >
          <IoClose className="text-2xl group-hover:text-purple-400" />
          <div className="absolute inset-0 bg-purple-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.button>

        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Get Free Consulting Support from Hash Solution
            </h2>
            <p className="text-gray-300 mb-2">
              We're offering complimentary insights to help your brand grow
              smarter and faster.
            </p>
            <p className="text-sm text-gray-400">
              Fill in your details below, and our team will reach out with
              tailored advice, strategy tips, and personalized recommendations
              for your business.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Name <span className="text-purple-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="cursor-target w-full px-4 py-2.5 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Company Name <span className="text-purple-500">*</span>
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  className="cursor-target w-full px-4 py-2.5 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="businessDescription"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Describe your business{" "}
                  <span className="text-purple-500">*</span>
                </label>
                <textarea
                  id="businessDescription"
                  name="businessDescription"
                  required
                  value={formData.businessDescription}
                  onChange={handleChange}
                  rows="3"
                  className="cursor-target w-full px-4 py-2.5 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-300 mb-3">
                Your Social Media fields (optional)
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    name: "facebook",
                    icon: FaFacebook,
                    placeholder: "Facebook URL",
                  },
                  {
                    name: "instagram",
                    icon: FaInstagram,
                    placeholder: "Instagram URL",
                  },
                  {
                    name: "tiktok",
                    icon: FaTiktok,
                    placeholder: "TikTok URL",
                  },
                  {
                    name: "linkedin",
                    icon: FaLinkedin,
                    placeholder: "LinkedIn URL",
                  },
                  {
                    name: "twitter",
                    icon: FaTwitter,
                    placeholder: "X (Twitter) URL",
                  },
                ].map((social) => {
                  return (
                    <div key={social.name} className="relative">
                      <social.icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="url"
                        name={social.name}
                        value={formData[social.name]}
                        onChange={handleChange}
                        placeholder={social.placeholder}
                        className="cursor-target w-full pl-10 pr-4 py-2 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="cursor-target px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                Submit
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default HashModal;
