"use server";

import { supabase } from "@/lib/supabase";

export interface ContactFormState {
  success: boolean;
  error: string | null;
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name") as string | null;
  const email = formData.get("email") as string | null;
  const message = formData.get("message") as string | null;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return { success: false, error: "All fields are required." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  const { error } = await supabase
    .from("contact_submissions")
    .insert({ name: name.trim(), email: email.trim(), message: message.trim() });

  if (error) {
    return { success: false, error: "Something went wrong. Please try again." };
  }

  return { success: true, error: null };
}
