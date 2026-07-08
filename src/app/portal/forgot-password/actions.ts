"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function requestPasswordReset(formData: FormData) {
  const supabase = await createClient();
  const origin = (await headers()).get("origin");
  const email = formData.get("email") as string;

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/confirm?next=/portal/reset-password`,
  });

  // Logged server-side only — the user always sees the same success
  // state so we don't reveal whether an account exists for this email.
  if (error) {
    console.error("resetPasswordForEmail failed:", error.status, error.message);
  }

  redirect("/portal/forgot-password?success=1");
}
