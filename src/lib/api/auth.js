"use client";

import { supabase } from "@/lib/supabase";

export async function signUp(email, password, metadata = {}) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: metadata,
      },
    });

    return { user: data.user, error };
  } catch (err) {
    console.error("SignUp error:", err);
    return { user: null, error: err };
  }
}
export async function signIn(email, password) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    return { user: data.user, error };
  } catch (err) {
    console.error("SignIn error:", err);
    return { user: null, error: err };
  }
}

export async function signOut() {
  try {
    const { error } = await supabase.auth.signOut();
    return { error };
  } catch (err) {
    console.error("SignOut error:", err);
    return { error: err };
  }
}

export async function getCurrentUser() {
  try {
    const { data, error } = await supabase.auth.getUser();
    return { user: data?.user || null, error };
  } catch (err) {
    console.error("GetCurrentUser error:", err);
    return { user: null, error: err };
  }
}

export async function getSession() {
  try {
    const { data, error } = await supabase.auth.getSession();
    return { session: data?.session || null, error };
  } catch (err) {
    console.error("GetSession error:", err);
    return { session: null, error: err };
  }
}

export function onAuthStateChange(callback) {
  const { data: listener } = supabase.auth.onAuthStateChange(callback);
  return listener;
}
