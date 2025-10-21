import CompanyOverview from "@/components/home/CompanyOverview";
import HeroSection from "@/components/home/HeroSection";
import OurPhilosophy from "@/components/home/OurPhilosophy";
import LogoLoop from "@/components/LogoLoop";

const Home = () => {
  const imageLogos = [
    {
      src: "/images/partners/1.png",
      alt: "Company 1",
      href: "https://company1.com",
    },
    {
      src: "/images/partners/2.png",
      alt: "Company 2",
      href: "https://company2.com",
    },
    {
      src: "/images/partners/3.png",
      alt: "Company 3",
      href: "https://company3.com",
    },
    {
      src: "/images/partners/4.png",
      alt: "Company 4",
      href: "https://company3.com",
    },
    {
      src: "/images/partners/5.png",
      alt: "Company 5",
      href: "https://company3.com",
    },
    {
      src: "/images/partners/6.png",
      alt: "Company 6",
      href: "https://company3.com",
    },
    {
      src: "/images/partners/7.png",
      alt: "Company 7",
      href: "https://company3.com",
    },
    {
      src: "/images/partners/8.png",
      alt: "Company 8",
      href: "https://company3.com",
    },
    {
      src: "/images/partners/9.png",
      alt: "Company 9",
      href: "https://company3.com",
    },
    {
      src: "/images/partners/10.png",
      alt: "Company 10",
      href: "https://company3.com",
    },
    {
      src: "/images/partners/11.png",
      alt: "Company 11",
      href: "https://company3.com",
    },
    {
      src: "/images/partners/12.png",
      alt: "Company 12",
      href: "https://company3.com",
    },
    {
      src: "/images/partners/13.png",
      alt: "Company 13",
      href: "https://company3.com",
    },
    {
      src: "/images/partners/14.png",
      alt: "Company 14",
      href: "https://company3.com",
    },
    {
      src: "/images/partners/15.png",
      alt: "Company 15",
      href: "https://company3.com",
    },
    {
      src: "/images/partners/16.png",
      alt: "Company 16",
      href: "https://company3.com",
    },
    {
      src: "/images/partners/17.png",
      alt: "Company 17",
      href: "https://company3.com",
    },
    {
      src: "/images/partners/18.png",
      alt: "Company 18",
      href: "https://company3.com",
    },
    {
      src: "/images/partners/19.png",
      alt: "Company 19",
      href: "https://company3.com",
    },
    {
      src: "/images/partners/20.png",
      alt: "Company 20",
      href: "https://company3.com",
    },
    {
      src: "/images/partners/21.png",
      alt: "Company 21",
      href: "https://company3.com",
    },
  ];
  return (
    <main>
      <HeroSection />
      <div
        style={{ height: "180px", position: "relative", overflow: "hidden" }}
      >
        <LogoLoop
          logos={imageLogos}
          speed={120}
          direction="left"
          logoHeight={180}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#000"
          ariaLabel="Technology partners"
        />
      </div>
      <CompanyOverview />
      <OurPhilosophy />
    </main>
  );
};

export default Home;
