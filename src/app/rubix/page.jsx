"use client";
import MagicBento from "@/ui/MagicBento";
import FloatingImages from "./components/FloatingImages";
import RubixLogo from "./components/RubixLogo";
import PageHeader from "./components/PageHeader";
import WhyRubix from "./components/WhyRubix";
import BackgroundEffects from "./components/BackgroundEffects";

const RubixPage = () => {
  return (
    <div id="RUBiX" className="pt-40 sm:pt-30 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-5">
        <FloatingImages />
        <RubixLogo />
        <PageHeader />
        {/* Magic Bento */}
        <div className="flex items-center justify-center relative z-10">
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={600}
            particleCount={15}
            glowColor="0, 300, 0"
          />
        </div>
        <WhyRubix />
        <BackgroundEffects />
      </div>
    </div>
  );
};

export default RubixPage;
