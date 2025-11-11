"use client";
import Sidebar from "@/components/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen ">
      <Sidebar />
      <div className="flex-1 ml-16 md:ml-[256px]">{children}</div>
    </div>
  );
};

export default DashboardLayout;
