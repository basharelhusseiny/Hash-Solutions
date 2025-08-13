import ShinyText from "@/ui/ShinyText/ShinyText";
import TrueFocus from "@/ui/TrueFocus";
import StarBorder from "@/ui/StarBorderBtn/StarBorderBtn";
import Link from "next/link";
import Particles from "@/ui/Particles";
import DraggableHeroImage from "@/ui/DraggableHeroImage";
import RubikCube from "@/ui/RubikCube";
import StickerPeel from "@/ui/StickerPeel";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen h-screen overflow-hidden">
      <div className="relative z-49">
        <RubikCube />
      </div>
      <div className="relative z-45">
        <StickerPeel
          imageSrc="/images/hash-main.png"
          width={150}
          rotate={30}
          peelBackHoverPct={20}
          peelBackActivePct={40}
          shadowIntensity={0.6}
          lightingIntensity={0.1}
          initialPosition={{ x: -100, y: 100 }}
        />
      </div>
      <Particles
        particleColors={["#b10abd", "#8a0594"]}
        particleCount={500}
        particleSpread={10}
        speed={0.2}
        particleBaseSize={150}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />

      <div className="container mx-auto px-5">
        {/* <DraggableHeroImage imageUrl="/images/hash-main.png" size={100} /> */}
        <div className="absolute inset-0 text-white z-40">
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
