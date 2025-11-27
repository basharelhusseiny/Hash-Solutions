"use client";
import { useEffect, useState } from "react";
import { sessions } from "@/lib/api";
import { ExternalLink, MessageSquareText, RefreshCw } from "lucide-react";
import BackgroundEffects from "@/app/contact/components/BackgroundEffects";

const HashSessions = () => {
  const [sessionsList, setSessionsList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSessions = async () => {
    setLoading(true);
    const { requests, error } = await sessions.getAllSessionRequests();

    if (error) {
      console.error("Error fetching sessions:", error);
    } else {
      setSessionsList(requests || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  // Real-time updates
  useEffect(() => {
    const channel = sessions.subscribeToSessionChanges(() => fetchSessions());

    return () => {
      sessions.unsubscribeFromSessionChanges(channel);
    };
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-white text-xl">
        <MessageSquareText className="animate-pulse mr-3" />
        Loading sessions...
      </div>
    );
  }

  if (sessionsList.length === 0) {
    return (
      <div className="text-center mt-20 text-gray-400">
        <MessageSquareText size={64} className="mx-auto mb-4 opacity-50" />
        <p>No sessions found yet</p>
      </div>
    );
  }

  const socialFields = [
    { key: "facebook", label: "Facebook" },
    { key: "instagram", label: "Instagram" },
    { key: "tiktok", label: "TikTok" },
    { key: "linkedin", label: "LinkedIn" },
    { key: "twitter", label: "Twitter" },
    { key: "website", label: "Website" },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "approved":
        return "text-green-400 bg-green-400/10";
      case "pending":
        return "text-yellow-400 bg-yellow-400/10";
      case "rejected":
        return "text-red-400 bg-red-400/10";
      default:
        return "text-gray-400 bg-gray-400/10";
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <>
      <div className="px-6 pb-6 pt-28 grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 w-full">
        <BackgroundEffects />
        {sessionsList.map((session) => (
          <div
            key={session.id}
            className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl shadow-lg p-5 flex flex-col justify-between hover:border-purple-500 transition-all duration-300 w-full max-w-full overflow-hidden"
          >
            {/* Header */}
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white line-clamp-2">
                {session.name || "Unnamed"}
              </h3>
              <p className="text-purple-300 mt-1">{session.user_email}</p>
              {session.company_name && (
                <p className="text-gray-400">{session.company_name}</p>
              )}
            </div>

            {/* Business Description - يلف الكلام تلقائي وما يطلعش برا الكارد أبدًا */}
            {session.business_description && (
              <div className="text-lg text-gray-300 mb-4 whitespace-pre-wrap break-words overflow-hidden">
                {session.business_description}
              </div>
            )}

            {/* Consultation Types */}
            {session.consultation_type && (
              <span
                className="bg-purple-900/50 text-purple-200 text-xs px-3 py-1 rounded-full w-fit mb-5"
              >
                {session.consultation_type}
              </span>
            )}

            {/* Social Links */}
            <div className="flex flex-wrap gap-3 mb-4">
              {socialFields.map(
                ({ key, label }) =>
                  session[key] && (
                    <a
                      key={key}
                      href={session[key]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 underline transition-colors"
                      title={session[key]}
                    >
                      <ExternalLink size={14} />
                      {label}
                    </a>
                  )
              )}
            </div>

            {/* Footer */}
            <div className="flex justify-center items-center text-sm pt-3 border-t border-gray-700">
              <span className="text-gray-400 text-sm">
                {formatDate(session.created_at)}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Refresh Button */}
      <button
        onClick={fetchSessions}
        className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full shadow-2xl z-50 transition-all duration-300 hover:scale-110"
        title="Refresh Sessions"
      >
        <RefreshCw className="w-6 h-6" />
      </button>
    </>
  );
};

export default HashSessions;
