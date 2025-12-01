"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ReactCountryFlag from "react-country-flag";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { auth, profiles } from "@/lib/api";
import { useRouter } from "next/navigation";
import BackgroundEffects from "@/app/about/components/BackgroundEffects";
import countriesData from "@/data/data";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    countryCode: "211",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const dropdownRef = useRef(null);

  // Get selected country
  const selectedCountry =
    countriesData.find((c) => c.key === formData.countryCode) ||
    countriesData.find((c) => c.code === "SS");

  // Filter countries based on search
  const filteredCountries = countriesData.filter((country) =>
    country.en_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setSearchTerm("");
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      setIsLoading(false);
      return;
    }

    const payload = {
      first_name: formData.first_name.trim(),
      last_name: formData.last_name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim()
        ? `+${formData.countryCode}${formData.phone.trim()}`
        : null,
      password: formData.password,
    };

    try {
      // ✅ 1. Create account using auth API
      const { user, error } = await auth.signUp(
        payload.email,
        payload.password,
        {
          first_name: payload.first_name,
          last_name: payload.last_name,
          phone: payload.phone,
        }
      );

      if (error) {
        console.error("❌ SignUp Error:", error.message);

        // Better error messages
        if (error.message.includes("security purposes")) {
          alert(
            "⏰ Please wait a moment before trying again. For security reasons, there's a short delay between signup attempts."
          );
        } else if (error.message.includes("already registered")) {
          alert(
            "📧 This email is already registered. Please try logging in instead."
          );
        } else {
          alert(error.message);
        }
        return;
      }

      console.log("✅ Registered:", user);

      // ✅ 2. Create profile using profiles API (optional - may be handled by database trigger)
      if (user) {
        try {
          const { error: profileError } = await profiles.createProfile(
            user.id,
            {
              first_name: payload.first_name,
              last_name: payload.last_name,
              phone: payload.phone,
              email: payload.email,
              role: "user",
            }
          );

          if (profileError) {
            console.warn("⚠️ Profile creation warning:", profileError.message);
            // Don't block registration if profile creation fails
            // It might be created by a database trigger
          } else {
            console.log("✅ Profile created successfully");
          }
        } catch (profileErr) {
          console.warn("⚠️ Profile creation error:", profileErr);
          // Continue anyway - profile might be created by trigger
        }
      }

      // ✅ 3. Notify user and redirect
      alert(
        "🎉 Registration successful! Please check your email to verify your account."
      );

      router.push("/login");
    } catch (err) {
      console.error("❌ Unexpected error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-purple-950/20 to-black flex items-center justify-center px-4">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-20" />
      </div>
      <BackgroundEffects />
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="relative w-full max-w-lg"
      >
        <div className="bg-black/40 backdrop-blur-xl p-8 sm:p-10 rounded-2xl border border-purple-500/20 shadow-2xl">
          <div className="flex justify-center mb-4">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              <Image
                src="/images/hash-main.png"
                alt="Hash Solutions"
                width={200}
                height={70}
                priority
                className="drop-shadow-2xl relative z-10"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative group">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 text-lg" />
                <input
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  placeholder="First name"
                  className="cursor-target cursor-pointer w-full pl-10 pr-4 py-3 bg-black/40 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-400 border-purple-500/30"
                />
              </div>

              <div className="relative group">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 text-lg" />
                <input
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  placeholder="Last name"
                  className="cursor-target cursor-pointer w-full pl-10 pr-4 py-3 bg-black/40 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-400 border-purple-500/30"
                />
              </div>
            </div>

            <div className="relative group">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 text-lg" />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="cursor-target cursor-pointer w-full pl-10 pr-4 py-3 bg-black/40 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-400 border-purple-500/30"
              />
            </div>

            <div className="relative group">
              <FaPhone className="hidden sm:block absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 text-lg z-10" />
              <div className="flex flex-col sm:flex-row gap-2">
                {/* Custom Country Selector with Flags */}
                <div className="relative w-full sm:w-36" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="cursor-target cursor-pointer w-full pl-4 sm:pl-10 pr-8 py-3 bg-black border border-purple-500/30 rounded-xl text-white text-base font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-400 flex items-center gap-2 justify-center sm:justify-start"
                  >
                    <FaPhone className="sm:hidden text-purple-400 text-lg" />
                    <ReactCountryFlag
                      countryCode={selectedCountry?.code}
                      svg
                      style={{
                        width: "1.5em",
                        height: "1.5em",
                      }}
                    />
                    <span>+{selectedCountry?.key}</span>
                    <svg
                      className={`absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 transition-transform ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute z-50 w-full sm:w-80 mt-2 bg-black/95 backdrop-blur-xl border border-purple-500/30 rounded-xl shadow-2xl max-h-96 overflow-hidden left-0 sm:left-auto">
                      {/* Search Input */}
                      <div className="p-3 border-b border-purple-500/20">
                        <input
                          type="text"
                          placeholder="Search country..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full px-3 py-2 bg-black/40 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                        />
                      </div>

                      {/* Countries List */}
                      <div className="overflow-y-auto max-h-80 scrollbar-thin scrollbar-thumb-purple-500/50 scrollbar-track-transparent">
                        {filteredCountries.map((country) => (
                          <button
                            key={country.id}
                            type="button"
                            onClick={() => {
                              setFormData((s) => ({
                                ...s,
                                countryCode: country.key,
                              }));
                              setIsDropdownOpen(false);
                              setSearchTerm("");
                            }}
                            className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-purple-500/10 transition-colors text-left ${
                              formData.countryCode === country.key
                                ? "bg-purple-500/20"
                                : ""
                            }`}
                          >
                            <ReactCountryFlag
                              countryCode={country.code}
                              svg
                              style={{
                                width: "1.5em",
                                height: "1.5em",
                              }}
                            />
                            <span className="text-white flex-1 text-sm sm:text-base">
                              {country.en_name}
                            </span>
                            <span className="text-purple-400 text-xs sm:text-sm">
                              +{country.key}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number (optional)"
                  className="cursor-target cursor-pointer flex-1 w-full px-4 py-3 bg-black/40 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-400"
                />
              </div>
            </div>

            <div className="grid gap-4">
              <div className="relative group">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 text-lg" />
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                  className="cursor-target cursor-pointer w-full pl-10 pr-10 py-3 bg-black/40 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-400 border-purple-500/30"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400 hover:text-purple-300 transition-colors cursor-pointer"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <div className="relative group">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 text-lg" />
                <input
                  name="confirmPassword"
                  type={showConfirm ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm password"
                  required
                  className="cursor-target cursor-pointer w-full pl-10 pr-10 py-3 bg-black/40 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-400 border-purple-500/30"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm((s) => !s)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400 hover:text-purple-300 transition-colors cursor-pointer"
                >
                  {showConfirm ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className="cursor-target cursor-pointer w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                  />
                ) : (
                  "Create account"
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </form>
        </div>

        <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full opacity-50 blur-sm" />
        <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-pink-500 rounded-full opacity-50 blur-sm" />
      </motion.div>
    </div>
  );
};

export default SignUpPage;
