"use client";

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
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

const HashModal = ({ isModalOpen, setIsModalOpen }) => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    businessDescription: "",
    facebook: "",
    instagram: "",
    tiktok: "",
    linkedin: "",
    twitter: "",
    consultation_type: [], // 🆕 لتخزين أنواع الاستشارات المختارة
  });

  const [isLoading, setIsLoading] = useState(false);

  // 🔒 منع السكرول عند فتح المودال
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isModalOpen]);

  // ✅ تغيير القيم في الفورم
  const handleChange = (e) => {
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  // ✅ التعامل مع الاختيارات (Business / Marketing)
  const handleCheckboxChange = (type) => {
    setFormData((prev) => {
      const alreadySelected = prev.consultation_type.includes(type);
      return {
        ...prev,
        consultation_type: alreadySelected
          ? prev.consultation_type.filter((t) => t !== type)
          : [...prev.consultation_type, type],
      };
    });
  };

  // ✅ إرسال البيانات إلى Supabase
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // 1️⃣ التحقق من إذا كان المستخدم عامل login
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      alert("Please log in first to submit your request.");
      router.push("/login");
      setIsLoading(false);
      return;
    }

    const userEmail = session.user.email;
    const userId = session.user.id;

    // 2️⃣ إدخال البيانات إلى Supabase
    const { error } = await supabase.from("sessions_requests").insert([
      {
        user_id: userId,
        user_email: userEmail,
        name: formData.name,
        company_name: formData.companyName,
        business_description: formData.businessDescription,
        facebook: formData.facebook,
        instagram: formData.instagram,
        tiktok: formData.tiktok,
        linkedin: formData.linkedin,
        twitter: formData.twitter,
        consultation_type: formData.consultation_type,
      },
    ]);

    if (error) {
      console.error("Error submitting request:", error.message);
      alert("Something went wrong. Please try again.");
    } else {
      alert("✅ Your request has been submitted successfully!");
      setFormData({
        name: "",
        companyName: "",
        businessDescription: "",
        facebook: "",
        instagram: "",
        tiktok: "",
        linkedin: "",
        twitter: "",
        consultation_type: [],
      });
      setIsModalOpen(false);
    }

    setIsLoading(false);
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
        className="absolute w-[90%] max-h-[80vh] md:w-[600px] bg-gradient-to-br from-gray-900 to-black top-1/2 left-1/2 
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

        {/* محتوى المودال */}
        <div className="p-8">
          <div className="text-center mb-6">
            <h2 className="text-xl md:text-2xl  text-white mb-3">
              Grab Your Free{" "}
              <span className="font-bold">HASH Business Boost Sessions:</span>
              <span className="text-lg block">
                2 Expert Audits (Marketing & Business Development)
              </span>
            </h2>
            <p className="font-bold text-xl text-purple-200">
              What to Unlock with our Free Audits?
              <span className="block font-normal text-base">
                A deep insight into your Marketing Or Business Development, with
                a clear guide & strategy outcome.
              </span>
            </p>
            <p className="mt-4">
              Book a Free Marketing or Business Development Audit & get expert
              feedback tailored to your business needs. Just fill in your
              details below—our team will review your information & email you to
              schedule a one-on-one online call. Get ready for actionable
              insights & personalized recommendations, completely free!{" "}
              <span className="text-2xl font-bold block text-purple-700 mt-5">
                Let’s HASH it Up!
              </span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 🧑‍💼 البيانات الأساسية */}
            <div className="space-y-4">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name *"
                required
                className="cursor-target w-full px-4 py-2.5 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
              />
              <input
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Company Name *"
                required
                className="cursor-target w-full px-4 py-2.5 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
              />
              <textarea
                name="businessDescription"
                value={formData.businessDescription}
                onChange={handleChange}
                placeholder="Describe your business *"
                required
                rows="3"
                className="cursor-target w-full px-4 py-2.5 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
              />
            </div>

            {/* 🧠 نوع الاستشارة */}
            <div className="text-gray-300">
              <p className="mb-2 font-medium">Select your consultation type:</p>
              <div className="flex gap-4">
                <label className="cursor-target flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.consultation_type.includes("Marketing")}
                    onChange={() => handleCheckboxChange("Marketing")}
                    className="cursor-target accent-purple-600 w-5 h-5"
                  />
                  <span>Marketing</span>
                </label>
                <label className="cursor-target flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.consultation_type.includes("Business")}
                    onChange={() => handleCheckboxChange("Business")}
                    className="cursor-target accent-purple-600 w-5 h-5"
                  />
                  <span>Business Development</span>
                </label>
              </div>
            </div>

            {/* 🌐 السوشيال ميديا */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "facebook", icon: FaFacebook, placeholder: "Facebook" },
                {
                  name: "instagram",
                  icon: FaInstagram,
                  placeholder: "Instagram",
                },
                { name: "tiktok", icon: FaTiktok, placeholder: "TikTok" },
                { name: "linkedin", icon: FaLinkedin, placeholder: "LinkedIn" },
                {
                  name: "twitter",
                  icon: FaTwitter,
                  placeholder: "Twitter / X",
                },
              ].map((s) => (
                <div key={s.name} className="relative">
                  <s.icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="url"
                    name={s.name}
                    value={formData[s.name]}
                    onChange={handleChange}
                    placeholder={s.placeholder}
                    className="cursor-target w-full pl-10 pr-4 py-2 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                  />
                </div>
              ))}
            </div>

            {/* زر الإرسال */}
            <div className="flex justify-end pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isLoading}
                type="submit"
                className="cursor-target px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                {isLoading ? "Submitting..." : "Free Session!"}
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default HashModal;
