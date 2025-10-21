import { FaWhatsapp, FaFacebookF, FaPhoneAlt } from "react-icons/fa";

const FixedButtons = () => {
  return (
    <div className="fixed bottom-5 left-5 flex flex-col gap-2 z-30 md:z-50">
      {/* زر واتساب */}
      <a
        href="https://api.whatsapp.com/send?phone=249901122666"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-target bg-fuchsia-700 text-white p-3 rounded-full shadow-lg hover:bg-fuchsia-500 transition"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={25} />
      </a>

      {/* زر فيسبوك */}
      <a
        href="https://m.facebook.com/Hash.solutions.sd/"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-target bg-pink-700 text-white p-3 rounded-full shadow-lg hover:bg-pink-500 transition"
        aria-label="Facebook"
      >
        <FaFacebookF size={25} />
      </a>

      {/* زر الاتصال */}
      <a
        href="tel:+249901122666"
        className="cursor-target bg-purple-700 text-white p-3 rounded-full shadow-lg hover:bg-purple-500 transition"
        aria-label="Call"
      >
        <FaPhoneAlt size={25} />
      </a>
    </div>
  );
};

export default FixedButtons;
