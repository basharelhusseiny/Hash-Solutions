import CompanyOverview from "@/components/home/CompanyOverview";
import HeroSection from "@/components/home/HeroSection";
import OurPhilosophy from "@/components/home/OurPhilosophy";
import TargetCursor from "@/ui/TargetCursor";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <CompanyOverview />
      <OurPhilosophy />
      <div className="hidden md:block">
        <TargetCursor spinDuration={2} hideDefaultCursor={true} />
      </div>
    </main>
  );
};

export default Home;
