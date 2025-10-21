"use client";
import React from "react";
import PillNav from "../PillNav";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="w-full mx-auto">
      <PillNav
        logo={"/images/hash-main.png"}
        logoAlt="Company Logo"
        items={[
          { label: "Home", href: "/" },
          { label: "About us", href: "/about" },
          { label: "Marketing", href: "/marketing" },
          { label: "Business Development", href: "/business" },
          { label: "Rubix Productions", href: "/rubix" },
          { label: "Contact us", href: "/contact" },
        ]}
        activeHref={pathname}
        className="custom-nav mx-auto"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor={
          pathname === "/rubix"
            ? "#74cf00"
            : pathname === "/business"
            ? "#3f4755"
            : "#4b004f"
        }
        hoveredPillTextColor={
          pathname === "/rubix"
            ? "#74cf00"
            : pathname === "/business"
            ? "#ffffff"
            : "#ffffff"
        }
        pillTextColor="#ffffff"
      />
    </div>
  );
};

export default Header;
