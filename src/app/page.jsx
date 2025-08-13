import CompanyOverview from "@/components/home/CompanyOverview";
import HeroSection from "@/components/home/HeroSection";
import OurPhilosophy from "@/components/home/OurPhilosophy";
import BackgroundImage from "@/ui/BackgroundImage";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <CompanyOverview />
      <OurPhilosophy />
      <BackgroundImage imageSrc="/images/hash-main-3d.png" />
    </main>
  );
};

export default Home;
