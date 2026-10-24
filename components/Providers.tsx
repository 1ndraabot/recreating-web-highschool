"use client";

import { AuthProvider } from "@/components/AuthProvider";
import { AdminDataProvider } from "@/components/AdminDataProvider";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <AdminDataProvider>{children}</AdminDataProvider>
    </AuthProvider>
  );
}
