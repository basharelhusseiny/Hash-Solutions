import Header from "@/components/header/Header";
import CompanyOverview from "@/components/home/CompanyOverview";
import HeroSection from "@/components/home/hero/HeroSection";
import MagicBento from "@/ui/MagicBento";
import OurPhilosophy from "@/components/home/OurPhilosophy";
import RubixSection from "@/components/home/RubixSection";

const Home = () => {
  return (
    <main>
      <Header />
      <HeroSection />
      <CompanyOverview />
      <OurPhilosophy />
      <RubixSection />
    </main>
  );
};

export default Home;
