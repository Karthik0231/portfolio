import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/motion/lenis";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { SystemIndicator } from "@/components/layout/SystemIndicator";
import { CustomCursor } from "@/components/layout/CustomCursor";

export const metadata: Metadata = {
  title: "H S Karthik — Full Stack Developer",
  description: "Full Stack Developer specializing in React, Next.js, Node.js, React Native and production web and mobile applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LenisProvider>
            <CustomCursor />
            <SystemIndicator />
            {children}
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
