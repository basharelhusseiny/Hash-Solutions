"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth, profiles } from "@/lib/api";

export default function DashboardRedirect() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const { user } = await auth.getCurrentUser();

      if (!user) {
        router.push("/login");
        return;
      }

      const { profile } = await profiles.getProfile(user.id);

      if (profile?.role !== "admin") {
        router.push("/");
      } else {
        router.replace("/dashboard/hash-sessions");
      }
    };

    checkUser();
  }, [router]);

  return <div>Loading...</div>;
}
