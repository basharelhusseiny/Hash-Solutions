"use client";
import { useEffect, useRef, useState } from "react";
import {
  FaBullhorn,
  FaChartLine,
  FaPalette,
  FaCogs,
  FaGlobe,
  FaRegComments,
  FaHandshake,
  FaChartBar,
  FaSearchDollar,
  FaUserFriends,
} from "react-icons/fa";
import PageHeader from "./components/PageHeader";
import MarketingSolutionsSection from "./components/MarketingSolutionsSection";
import DesignSolutionsSection from "./components/DesignSolutionsSection";
import AnimatedBackground from "./components/AnimatedBackground";

const MarketingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeDesignImage, setActiveDesignImage] = useState(
    "/images/hash-main.png"
  );
  const [clickedItem, setClickedItem] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const marketingSolutions = [
    {
      icon: FaChartLine,
      title: "Marketing Strategy",
      description:
        "Market Research, Positioning, Audience Segmentation, Messaging, and Channel Planning.",
      deliverables: ["Strategy Document", "Content Plan", "KPI Framework"],
      color: "from-purple-600 to-purple-800",
    },
    {
      icon: FaCogs,
      title: "Campaign Management",
      description:
        "End-to-end Campaign Execution Across Digital and Offline Channels.",
      deliverables: [
        "Creative Concepts",
        "Assets",
        "Media Plan",
        "Weekly Performance Reports",
      ],
      color: "from-violet-500 to-purple-700",
    },
    {
      icon: FaPalette,
      title: "Brand & Design",
      description: "Identity Systems, Guidelines, and Visual Mockups.",
      deliverables: ["Logo", "Brand Kit", "Templates", "Stationery", "Signage"],
      color: "from-indigo-500 to-purple-600",
    },
    {
      icon: FaRegComments,
      title: "Social Media Management",
      description: "Media Strategy, Content, Design, and Community Management.",
      deliverables: [
        "Monthly Action Plan Calendar",
        "Campaigning",
        "Monthly Performance Dashboard Report",
      ],
      color: "from-purple-500 to-indigo-600",
    },
    {
      icon: FaGlobe,
      title: "Web & Landing Pages",
      description:
        "Conversion-focused Websites That Communicates Clearly and Generates Business Leads",
      deliverables: [
        "Content Copywriters",
        "UX Copy",
        "Design",
        "Build",
        "Analytics Setup",
      ],
      color: "from-purple-500 to-indigo-600",
    },
  ];

  const designSolutions = [
    {
      icon: FaBullhorn,
      title: "Clear Market Positioning",
      color: "from-violet-600 to-purple-600",
      image: "/images/latest-bus-mar/3.png",
    },
    {
      icon: FaHandshake,
      title: "Consistent Brand Presence",
      color: "from-purple-600 to-violet-700",
      image: "/images/latest-bus-mar/2.png",
    },
    {
      icon: FaSearchDollar,
      title: "Qualified Leads Generation",
      color: "from-indigo-600 to-purple-600",
      image: "/images/latest-bus-mar/4.png",
    },
    {
      icon: FaChartBar,
      title: "Lower Cost per Acquisition",
      color: "from-purple-500 to-violet-600",
      image: "/images/latest-bus-mar/5.png",
    },
    {
      icon: FaUserFriends,
      title: "Stronger Customer Engagement Process",
      color: "from-purple-500 to-violet-600",
      image: "/images/latest-bus-mar/1.png",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="pt-38 sm:pt-34 pb-30 relative overflow-hidden bg-gradient-to-br from-black via-purple-950/20 to-black min-h-screen"
    >
      <AnimatedBackground />

      <div className="container mx-auto px-6 relative z-10">
        <PageHeader isVisible={isVisible} />

        <MarketingSolutionsSection
          isVisible={isVisible}
          marketingSolutions={marketingSolutions}
          hoveredItem={hoveredItem}
          clickedItem={clickedItem}
          setHoveredItem={setHoveredItem}
          setClickedItem={setClickedItem}
        />

        <DesignSolutionsSection
          isVisible={isVisible}
          designSolutions={designSolutions}
          hoveredItem={hoveredItem}
          clickedItem={clickedItem}
          setHoveredItem={setHoveredItem}
          setClickedItem={setClickedItem}
          activeDesignImage={activeDesignImage}
          setActiveDesignImage={setActiveDesignImage}
        />
      </div>
    </div>
  );
};

export default MarketingPage;
