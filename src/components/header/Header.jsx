// "use client";
// import Link from "next/link";

// const Header = () => {
//   const navLinks = [
//     { id: 1, title: "marketing", href: "/marketing" },
//     { id: 2, title: "business Development", href: "/business" },
//     { id: 3, title: "rubix productions", href: "/rubix" },
//     { id: 4, title: "contact us", href: "/contact" },
//   ];

//   return (
//     <header>
//       <div className="container mx-auto px-5 max-lg:hidden">
//         <div className="flex flex-col sm:flex-row h-26 sm:h-16 items-center fixed left-0 right-0 top-0 z-50 mx-auto px-6 max-sm:pt-2 border-2 border-white/25 backdrop-blur-lg rounded-full mt-5 w-fit">
//           <div className="px-3">
//             <Link href="/">
//               <img
//                 src="/images/HASH-SOLUTIONS-LOGO2.png"
//                 alt="logo Hash Solution"
//                 className="cursor-target w-42"
//               />
//             </Link>
//           </div>
//           <ul className="lg:px-3 text-white flex justify-center items-center gap-3 md:gap-10 uppercase">
//             {navLinks.map((link, index) => {
//               return (
//                 <li
//                   key={index}
//                   className="cursor-target text-sm md:text-xl opacity-70 hover:opacity-100 duration-200"
//                 >
//                   <Link href={link.href} className="block py-2">
//                     {link.title}
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
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
          { label: "Marketing", href: "/marketing" },
          { label: "Business Development", href: "/business" },
          { label: "Rubix Productions", href: "/rubix" },
          { label: "About us", href: "/about" },
          { label: "Contact us", href: "/contact" },
        ]}
        activeHref=""
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
