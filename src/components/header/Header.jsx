"use client";

import Link from "next/link";
import GooeyNav from "./GooeyNav";

const Header = () => {
  const navLinks = ["marketing", "business", "RUBiX", "contact us"];
  const items = [
    { label: "marketing", href: "#" },
    { label: "business", href: "#" },
    { label: "contact us", href: "#" },
  ];
  return (
    <header>
      <div className="container mx-auto px-5">
        <div className="flex h-15 items-center fixed left-0 right-0 top-0 z-50 mx-auto px-5 border-2 border-white/25 backdrop-blur-lg rounded-full mt-5 w-fit">
          <div className="px-3 hidden md:block">
            <Link href="#">
              <img
                src="/images/HASH-SOLUTIONS-LOGO-white-removebg-preview.png"
                alt="logo Hash Solution"
                className="cursor-target w-50"
              />
            </Link>
          </div>
          <ul className="lg:px-3 text-white flex justify-center items-center gap-3 md:gap-7 uppercase">
            {navLinks.map((link, index) => {
              return (
                <li
                  key={index}
                  className="cursor-target text-sm md:text-base opacity-70 hover:opacity-100 duration-200"
                >
                  <a href={`#${link}`} className="block py-2">
                    {link}
                  </a>
                </li>
              );
            })}
          </ul>
          {/* <GooeyNav
            items={items}
            particleCount={20}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={500}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
