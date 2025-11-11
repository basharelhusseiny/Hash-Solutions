"use client";
import { MessageSquareText, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  const dashLinks = [
    {
      id: 1,
      title: "Sessions",
      href: "/dashboard/hash-sessions",
      icon: <MessageSquareText className="w-5 h-5" />,
    },
    {
      id: 2,
      title: "Users List",
      href: "/dashboard/users-list",
      icon: <User className="w-5 h-5" />,
    },
  ];

  return (
    <aside className="fixed inset-y-0 left-0 z-50 w-16 md:w-64 bg-gradient-to-b from-purple-950 to-[#4b004f] text-white transition-all duration-300">
      <div className="flex flex-col h-full">
        {/* Logo / Title */}
        <div className="p-4 md:p-6">
          <h2 className="hidden md:block text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-white">
            Admin Panel
          </h2>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3">
          <ul className="space-y-2">
            {dashLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className={`flex items-center gap-4 p-3 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-purple-700/80 shadow-lg translate-x-1"
                        : "hover:bg-purple-800/60 hover:translate-x-1"
                    }`}
                  >
                    <span className="text-purple-200">{link.icon}</span>
                    <span className="hidden md:block font-medium">
                      {link.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Optional Footer (you can add logout or version here later) */}
        <div className="p-4 border-t border-purple-800/50">
          <p className="hidden md:block text-xs text-purple-300 text-center">
            © 2025 HASH Admin
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
