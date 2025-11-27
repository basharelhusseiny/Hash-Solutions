"use client";
import { useEffect, useState } from "react";
import { profiles } from "@/lib/api";
import { User, RefreshCw, Mail, Phone } from "lucide-react";
import BackgroundEffects from "@/app/about/components/BackgroundEffects";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    setLoading(true);
    const { profiles: userProfiles, error } = await profiles.getAllProfiles();

    if (error) {
      console.error("Error fetching users:", error);
    } else {
      setUsers(userProfiles || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-white text-xl">
        <User className="animate-pulse mr-3" />
        Loading users...
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="text-center mt-20 text-gray-400">
        <User size={64} className="mx-auto mb-4 opacity-50" />
        <p>No users found</p>
      </div>
    );
  }

  const getRoleColor = (role) => {
    switch (role) {
      case "admin":
        return "text-purple-400 bg-purple-400/10";
      case "user":
        return "text-blue-400 bg-blue-400/10";
      default:
        return "text-gray-400 bg-gray-400/10";
    }
  };

  return (
    <>
      <div className="px-6 pb-6 pt-28 grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 w-full">
           <BackgroundEffects />
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl shadow-lg p-5 flex flex-col hover:border-purple-500 transition-all duration-300 w-full max-w-full overflow-hidden"
          >
            {/* Header */}
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <User size={20} />
                {user.first_name || "No"} {user.last_name || "Name"}
              </h3>
              <div className="flex items-center gap-2 mt-2 text-purple-300">
                <Mail size={14} />
                <span className="truncate">{user.email || "No email"}</span>
              </div>
              {user.phone && (
                <div className="flex items-center gap-2 mt-1 text-gray-400">
                  <Phone size={14} />
                  <span>{user.phone}</span>
                </div>
              )}
            </div>

            {/* Role Badge */}
            <div className="mb-4">
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getRoleColor(
                  user.role
                )}`}
              >
                {user.role ? user.role.toUpperCase() : "NO ROLE"}
              </span>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center text-xs text-gray-500 pt-3 border-t border-gray-700">
              <span>User ID: {user.id.slice(0, 8)}...</span>
            </div>
          </div>
        ))}
      </div>

      {/* Refresh Button */}
      <button
        onClick={fetchUsers}
        className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full shadow-2xl z-50 transition-all duration-300 hover:scale-110"
        title="Refresh Users"
      >
        <RefreshCw className="w-6 h-6" />
      </button>
    </>
  );
};

export default UsersList;
