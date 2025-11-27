"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";
import { auth, profiles } from "@/lib/api";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const { email, password } = formData;

    // 1️⃣ Sign in with auth API
    const { user, error } = await auth.signIn(email, password);

    if (error) {
      console.error("Login error:", error.message);
      alert(error.message);
      setIsLoading(false);
      return;
    }

    if (!user) {
      setIsLoading(false);
      return;
    }

    // 2️⃣ Get user profile
    const { profile, error: profileError } = await profiles.getProfile(user.id);

    if (profileError) {
      console.error("Error fetching profile:", profileError.message);
    } else {
      console.log("✅ Profile:", profile);

      // 3️⃣ Redirect based on role
      if (profile.role === "admin") {
        router.push("/dashboard");
      } else {
        router.push("/");
      }
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-purple-950/20 to-black flex items-center justify-center px-4">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30">
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

      {/* Login Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-md"
      >
        <div className="bg-black/40 backdrop-blur-xl p-8 sm:p-10 rounded-2xl border border-purple-500/20 shadow-2xl">
          {/* Logo with enhanced shadow */}
          <div className="flex justify-center mb-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              <Image
                src="/images/hash-main.png"
                alt="Hash Solutions"
                width={200}
                height={70}
                priority
                className="drop-shadow-2xl relative z-10 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Email Input with improved styling */}
            <div className="relative group">
              <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 text-lg transition-colors duration-300 group-focus-within:text-purple-300" />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="cursor-target cursor-pointer w-full pl-12 pr-4 py-4 bg-black/40 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 
        focus:outline-none focus:border-purple-400/70 focus:ring-2 focus:ring-purple-500/20 
        transition-all duration-300 hover:border-purple-400/50"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
            </div>

            {/* Password Input with improved styling */}
            <div className="relative group">
              <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 text-lg transition-colors duration-300 group-focus-within:text-purple-300" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="cursor-target cursor-pointer w-full pl-12 pr-12 py-4 bg-black/40 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 
        focus:outline-none focus:border-purple-400/70 focus:ring-2 focus:ring-purple-500/20 
        transition-all duration-300 hover:border-purple-400/50"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-purple-400 hover:text-purple-300 transition-colors p-1"
              >
                {showPassword ? (
                  <FaEyeSlash className="text-lg" />
                ) : (
                  <FaEye className="text-lg" />
                )}
              </button>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
            </div>

            {/* Enhanced Submit Button */}
            {/* Enhanced Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className="cursor-target cursor-pointer w-full py-4 mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl 
  shadow-lg hover:shadow-purple-500/25 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 text-lg">
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                  />
                ) : (
                  "Login"
                )}
              </span>
              <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-500"
              />
            </motion.button>

            {/* 🆕 Sign Up Redirect */}
            <div className="text-center mt-6">
              <p className="text-gray-400 text-lg">
                Don’t have an account?{" "}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => router.push("/signup")}
                  className="cursor-target text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 hover:opacity-90 transition-all sm:ml-2"
                >
                  Sign up
                </motion.button>
              </p>
            </div>
          </form>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full opacity-50 blur-sm" />
        <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-pink-500 rounded-full opacity-50 blur-sm" />
      </motion.div>
    </div>
  );
};

export default LoginPage;
