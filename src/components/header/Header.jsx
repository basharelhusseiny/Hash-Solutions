"use client";
import React, { useEffect, useState } from "react";
import PillNav from "../../ui/PillNav";
import { usePathname, useRouter } from "next/navigation";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import { supabase } from "@/lib/supabase";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (data?.user) {
        const { data: profile } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", data.user.id)
          .single();

        setUser({ ...data.user, role: profile?.role });
      } else {
        setUser(null);
      }
      setIsLoading(false);
    };

    getUser();

    const { data: listener } = supabase.auth.onAuthStateChange(() => {
      getUser();
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const handleAuthClick = async () => {
    if (user) {
      await supabase.auth.signOut();
      setUser(null);
      router.push("/login");
    } else {
      router.push("/login");
    }
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about" },
    { label: "Marketing", href: "/marketing" },
    { label: "Business Development", href: "/business" },
    { label: "Rubix Productions", href: "/rubix" },
    { label: "Contact us", href: "/contact" },
  ];

  if (user?.role === "admin") {
    navItems.push({ label: "Dashboard", href: "/dashboard" });
  }

  return (
    <div className="w-full mx-auto">
      {!isLoading && (
        <PillNav
          logo={"/images/hash-main.png"}
          logoAlt="Company Logo"
          items={navItems}
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
          hoveredPillTextColor="#ffffff"
          pillTextColor="#ffffff"
          loginVisible={true}
          loginIcon={user ? <FaSignOutAlt /> : <FaUser />}
          onLoginClick={handleAuthClick}
          loginAriaLabel={user ? "Logout" : "Login"}
          loginClassName={`p-2 rounded-full ${
            user
              ? "hover:bg-red-600/10 text-red-400"
              : "hover:bg-purple-600/10 text-white"
          }`}
        />
      )}
    </div>
  );
};

export default Header;
