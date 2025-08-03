import Header from "@/components/header/Header";
import CompanyOverview from "@/components/home/CompanyOverview";
import HeroSection from "@/components/home/hero/HeroSection";
import MagicBento from "@/components/home/hero/MagicBento";
import OurPhilosophy from "@/components/home/OurPhilosophy";

const Home = () => {
  return (
    <main>
      <Header />
      <HeroSection />
      <CompanyOverview />
      <OurPhilosophy />
      {/* <div className="flex items-center justify-center">
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
          glowColor="0, 1000, 0"
        />
      </div> */}
    </main>
  );
};

export default Home;
