"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeContextProvider } from "@/app/utils/ThemeContext";
import React from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      enableSystem={false}
      defaultTheme="dark"
    >
      {children}
    </NextThemesProvider>
  );
}
