"use client";

import { supabase } from "@/lib/supabase";

export async function createProfile(userId, profileData) {
  try {
    const { data, error } = await supabase.from("profiles").insert({
      id: userId,
      first_name: profileData.first_name,
      last_name: profileData.last_name,
      phone: profileData.phone || null,
      email: profileData.email,
      role: profileData.role || "user",
    });

    return { profile: data, error };
  } catch (err) {
    console.error("CreateProfile error:", err);
    return { profile: null, error: err };
  }
}

export async function getProfile(userId) {
  try {
    const { data, error } = await supabase
      .from("profiles")
      .select("role, first_name, last_name, email, phone")
      .eq("id", userId)
      .single();

    return { profile: data, error };
  } catch (err) {
    console.error("GetProfile error:", err);
    return { profile: null, error: err };
  }
}

export async function getAllProfiles() {
  try {
    const { data, error } = await supabase
      .from("profiles")
      .select("id, first_name, last_name, phone, role, email");

    return { profiles: data || [], error };
  } catch (err) {
    console.error("GetAllProfiles error:", err);
    return { profiles: null, error: err };
  }
}
export async function updateProfile(userId, updates) {
  try {
    const { data, error } = await supabase
      .from("profiles")
      .update(updates)
      .eq("id", userId)
      .select()
      .single();

    return { profile: data, error };
  } catch (err) {
    console.error("UpdateProfile error:", err);
    return { profile: null, error: err };
  }
}
