import ShinyText from "@/ui/ShinyText/ShinyText";
import TrueFocus from "@/ui/TrueFocus";
import StarBorder from "@/ui/StarBorderBtn/StarBorderBtn";
import Link from "next/link";
import Particles from "@/ui/Particles";
import Beams from "@/ui/Beams";
import TextType from "@/ui/TextTyp";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen h-screen overflow-hidden">
      <Beams
        beamWidth={3}
        beamHeight={30}
        beamNumber={30}
        lightColor="#ed8bf4"
        speed={3}
        noiseIntensity={1.75}
        scale={0.2}
        rotation={30}
      />
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
        <div className="absolute inset-0 text-white z-40">
          <TrueFocus
            sentence="EMPOWERING BUSINESS GROWTH IN AFRICA AND BYOND."
            manualMode={false}
            blurAmount={5}
            borderColor="blueviolet"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
          <ShinyText
            text="We guide organizations and businesses develop, enhance marketing, strengthen brands, and accelerate growth with strategic marketing, business development, and media production solutions."
            disabled={false}
            speed={3}
            className="custom-class"
          />
          <TextType
            className="relative text-gray-300 text-center w-[350px] md:w-[600px] mx-auto top-57 text-2xl"
            text={[
              "We Are Not Your Agency,",
              "We Are Your Marketing & Business Solutions Partner ! ",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />

          <div className="absolute inset-0 top-[65%] lg:top-100 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={""}>
              <StarBorder
                as="button"
                className="custom-class cursor-target"
                color="magenta"
                speed="5s"
              >
                Let’s HASH it Up!
              </StarBorder>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
