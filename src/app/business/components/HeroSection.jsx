import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaChartLine,
  FaProjectDiagram,
  FaHandshake,
  FaRocket,
  FaBuilding,
  FaUsers,
} from "react-icons/fa";

const HeroSection = ({
  itemVariants,
  isVisible,
  displayImage,
  setDisplayImage,
}) => {
  const businessOffersData = [
    {
      title: "Business Process Management consultation",
      description:
        "Streamline organizations operations by analyzing, improving, and automating workflows. BPM service ensures your business runs more efficiently, reduces costs, and delivers better results through well-structured processes.",
      icon: FaProjectDiagram,
      img: "/images/latest-bus-mar/6.png",
    },
    {
      title: "Go-to-Market Planning",
      description:
        "Prioritize segments, define value propositions, and map acquisition channels.",
      icon: FaChartLine,
      img: "/images/latest-bus-mar/7.png",
    },
    {
      title: "Pipeline & Partnerships",
      description:
        "Prospecting frameworks, outreach, and partnership structuring.",
      icon: FaHandshake,
      img: "/images/latest-bus-mar/8.png",
    },
    {
      title: "Sales Enablement",
      description: "Offers, proposals, pitch materials.",
      icon: FaRocket,
      img: "/images/latest-bus-mar/11.png",
    },
    {
      title: "Pricing & Packaging",
      description: "Design service tiers.",
      icon: FaBuilding,
      img: "/images/latest-bus-mar/9.png",
    },
    {
      title: "Sales & Customer Service",
      description: "Training and development programs.",
      icon: FaUsers,
      img: "/images/latest-bus-mar/10.png",
    },
  ];

  return (
    <>
      <motion.div variants={itemVariants} className="mb-20">
        <span className="inline-block px-6 py-2 bg-gray-800 text-gray-300 rounded-full font-medium border border-gray-700 mb-6">
          Business Development Solutions
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-gray-100">Strategically Expanding </span>
          <span className="text-gray-200">Businesses </span>
          <div className="mt-2">
            <span className="text-gray-300">and </span>
            <span className="text-gray-400"> Driving</span>
            <span className="text-gray-500"> Growth</span>
          </div>
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="relative"
        >
          <p className="text-[20px] text-gray-200 max-w-5xl mx-auto leading-relaxed font-semibold">
            We help you identify opportunities, build partnerships, and
            streamline your commercial engine to grow revenue.
          </p>
          {/* Underline Animation */}
          <motion.div
            initial={{ width: 0 }}
            animate={isVisible ? { width: "70%" } : { width: 0 }}
            transition={{ delay: 1.5, duration: 1.2 }}
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-gray-500 to-transparent"
          />
        </motion.div>
      </motion.div>

      {/* Hero Image and Content */}
      <motion.div
        variants={itemVariants}
        className="flex lg:gap-12 items-stretch justify-around mx-auto"
      >
        {/* Image Side */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative group order-2 lg:order-1"
        >
          <div className="w-1/2 absolute inset-0 bg-gradient-to-r from-gray-800/20 to-gray-700/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
          <div className="hidden relative h-full lg:flex items-center justify-center bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 shadow-2xl">
            <motion.div
              key={displayImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={displayImage}
                alt="Business Development"
                width={470}
                height={500}
                className="rounded-2xl shadow-xl"
                priority
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Content Side */}
        <div className="w-full lg:w-1/2 text-left order-1 lg:order-2">
          <motion.div variants={itemVariants} className="text-center mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="relative"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6">
                Our The Service
              </h2>
              {/* Underline Animation */}
              <motion.div
                initial={{ width: 0 }}
                animate={isVisible ? { width: "30%" } : { width: 0 }}
                transition={{ delay: 1.5, duration: 1.2 }}
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-gray-500 to-transparent"
              />
            </motion.div>
          </motion.div>

          <div className="space-y-6">
            {businessOffersData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                onClick={() => setDisplayImage(item.img)}
                className="cursor-target group flex items-start gap-4 p-4 rounded-xl bg-gray-800/20 border border-gray-700/50 hover:border-gray-600 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-xl text-gray-300 group-hover:text-gray-200 transition-colors" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-100 mb-1 group-hover:text-white transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default HeroSection;
