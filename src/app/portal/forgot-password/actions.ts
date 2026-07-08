"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function requestPasswordReset(formData: FormData) {
  const supabase = await createClient();
  const origin = (await headers()).get("origin");
  const email = formData.get("email") as string;

  await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/confirm?next=/portal/reset-password`,
  });

  // Redirect to the same success state regardless of outcome — do not
  // reveal whether an account exists for the submitted email.
  redirect("/portal/forgot-password?success=1");
}
