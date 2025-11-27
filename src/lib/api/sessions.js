"use client";

import { supabase } from "@/lib/supabase";

export async function createSessionRequest(requestData) {
  try {
    const { data, error } = await supabase
      .from("sessions_requests")
      .insert([requestData]);

    return { request: data, error };
  } catch (err) {
    console.error("CreateSessionRequest error:", err);
    return { request: null, error: err };
  }
}

export async function getAllSessionRequests() {
  try {
    const { data, error } = await supabase
      .from("sessions_requests")
      .select("*")
      .order("created_at", { ascending: false });

    return { requests: data || [], error };
  } catch (err) {
    console.error("GetAllSessionRequests error:", err);
    return { requests: null, error: err };
  }
}

export function subscribeToSessionChanges(callback) {
  const channel = supabase
    .channel("sessions-changes")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "sessions_requests" },
      callback
    )
    .subscribe();

  return channel;
}

export function unsubscribeFromSessionChanges(channel) {
  if (channel) {
    supabase.removeChannel(channel);
  }
}
