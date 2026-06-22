// components/ThemeProvider.tsx
"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  // Sayfa yüklenene kadar boş dönerek tarayıcı/sunucu renk uyumsuzluğunu (hydration mismatch) engeller
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <NextThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      {children}
    </NextThemeProvider>
  );
}