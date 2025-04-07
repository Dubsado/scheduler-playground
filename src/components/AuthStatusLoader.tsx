"use client";

import { useAuthStatus } from "@/lib/hooks/useAuthStatus";

export function AuthStatusLoader() {
  useAuthStatus();
  return null; // This component doesn't render anything
}
