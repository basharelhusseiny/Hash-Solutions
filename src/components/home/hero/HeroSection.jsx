import ShinyText from "@/ui/ShinyText/ShinyText";
import Header from "../../header/Header";
import DarkVeil from "./DarkVeil";
import TrueFocus from "@/ui/TrueFocus";

const HeroSection = () => {
  return (
    <section>
      <div className="relative w-full h-screen">
        <DarkVeil />
        <Header />
        <div className="absolute inset-0 text-white">
          <TrueFocus
            sentence="Empowering Growth Across Africa"
            manualMode={false}
            blurAmount={5}
            borderColor="blueviolet"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
          <ShinyText
            text="At HASH Solutions, we craft innovative marketing and business development strategies from Sudan to South Sudan — and soon Nairobi. Since 2011, our creative team has delivered results-driven solutions in marketing, consulting, design, media, and events."
            disabled={false}
            speed={3}
            className="custom-class"
          />
      <div className="relative top-60">
          <button className="cursor-target w-fit border-4 border-red-600 m-5 p-5 rounded-full">Click me!</button>
        <div className="cursor-target w-fit border-4 border-red-600 m-5 p-5 rounded-full">Hover target</div>
      </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
