"use client";

import { FaWhatsapp, FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";

const FixedButtons = () => {
  const pathname = usePathname();

  const getButtonStyles = (type) => {
    // 🏢 Business Page Theme (Gray/Black)
    if (pathname === "/business") {
      switch (type) {
        case "whatsapp":
          return "bg-gray-400 hover:bg-gray-400";
        case "facebook":
          return "bg-gray-700 hover:bg-gray-500";
        case "phone":
          return "bg-gray-900 hover:bg-gray-600";
        default:
          return "bg-gra-600 hover:bg-gra-500";
      }
    }

    // 🟩 Rubix Page Theme (Green Gradients)
    if (pathname === "/rubix") {
      switch (type) {
        case "whatsapp":
          return "bg-[#8aee0a] hover:bg-[#8aee0a]";
        case "facebook":
          return "bg-[#74cf00] hover:bg-[#74cf00]";
        case "phone":
          return "bg-[#63ab07] hover:bg-[#63ab07]";
        default:
          return "bg-[#63ab07] hover:bg-[#63ab07]";
      }
    }

    // 🎨 Default Theme (Original Colors)
    switch (type) {
      case "whatsapp":
        return "bg-fuchsia-700 hover:bg-fuchsia-500";
      case "facebook":
        return "bg-pink-700 hover:bg-pink-500";
      case "phone":
        return "bg-purple-700 hover:bg-purple-500";
      default:
        return "bg-purple-700 hover:bg-purple-500";
    }
  };

  return (
    <div className="fixed bottom-5 left-5 flex flex-col gap-2 z-30 md:z-50">
      {/* زر واتساب */}
      <a
        href="https://api.whatsapp.com/send?phone=211981222666"
        target="_blank"
        rel="noopener noreferrer"
        className={`cursor-target text-white p-3 rounded-full shadow-lg transition ${getButtonStyles(
          "whatsapp"
        )}`}
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={25} />
      </a>
      {/* زر فيسبوك */}
      <a
        href="https://m.facebook.com/Hash.solutions.sd/"
        target="_blank"
        rel="noopener noreferrer"
        className={`cursor-target text-white p-3 rounded-full shadow-lg transition ${getButtonStyles(
          "facebook"
        )}`}
        aria-label="Facebook"
      >
        <FaFacebookF size={25} />
      </a>

      {/* زر الاتصال */}
      <a
        href="tel:+211981222666"
        className={`cursor-target text-white p-3 rounded-full shadow-lg transition ${getButtonStyles(
          "phone"
        )}`}
        aria-label="Call"
      >
        <FaPhoneAlt size={25} />
      </a>
    </div>
  );
};

export default FixedButtons;
