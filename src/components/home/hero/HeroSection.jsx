import ShinyText from "@/ui/ShinyText/ShinyText";
import DarkVeil from "./DarkVeil";
import TrueFocus from "@/ui/TrueFocus";
import StarBorder from "@/ui/StarBorderBtn/StarBorderBtn";
import Link from "next/link";
import Silk from "./Silk";
import DotGrid from "./DotGrid";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen h-screen overflow-hidden">
      <DotGrid
        dotSize={8}
        gap={8}
        baseColor="#39064b"
        activeColor="#bc94c7"
        proximity={130}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      />
      {/* <Silk
        speed={10}
        scale={1}
        color="#4c044e"
        noiseIntensity={1}
        rotation={0}
      /> */}
      <div className="container mx-auto px-5">
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
            text="At HASH Solutions, we craft innovative marketing and business development strategies from Sudan to South Sudan — and soon Nairobi. Since 2011, our creative team has delivered results-driven solutions in marketing."
            disabled={false}
            speed={3}
            className="custom-class"
          />
          <div className="absolute inset-0 top-[40%] lg:top-70  flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={""}>
              <StarBorder
                as="button"
                className="custom-class cursor-target"
                color="magenta"
                speed="5s"
              >
                Marketing Solutions
              </StarBorder>
            </Link>
            <Link href={""}>
              <StarBorder
                as="button"
                className="custom-class cursor-target"
                color="magenta"
                speed="5s"
              >
                Business Growth
              </StarBorder>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
