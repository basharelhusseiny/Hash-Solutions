import Header from "@/components/header/Header";
import HeroSection from "@/components/home/hero/HeroSection";
import MagicBento from "@/components/home/hero/MagicBento";

const Home = () => {
  return (
    <main>
      <Header />
      <HeroSection />
      {/* <MagicBento
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
      /> */}
    </main>
  );
};

export default Home;
